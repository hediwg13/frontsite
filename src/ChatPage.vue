<template>
  <div class="chat-wrapper">
    <vue-advanced-chat
        height="calc(100vh - 60px)" :current-user-id="currentUserId"
        :rooms="JSON.stringify(rooms)"
        :rooms-loaded="true"
        :messages="JSON.stringify(messages)"
        :messages-loaded="messagesLoaded"
        :show-add-room="false"
        :show-search="false"
        :show-files="false"
        :show-audio="false"
        :rooms-list-opened="false"
        @send-message="sendMessage($event.detail[0])"
        @fetch-messages="fetchMessages($event.detail[0])"
        :messages-loading="messagesLoading"
    />

    <div v-if="loadingResponse" class="loading-overlay">
      <div class="spinner-container">
        <div class="spinner"></div>
        <p>답변을 생성 중...</p>
      </div>
    </div>
  </div>
</template>

<script>
import { register } from 'vue-advanced-chat'
register()

export default {
  name: 'ChatPage', // ⭐ 컴포넌트 이름 변경 ⭐
  data() {
    return {
      chatClient:null,
      currentUserId: '', // ⭐ 초기값을 빈 문자열로 설정 ⭐
      aiBotId: 'ai-bot-id',
      aiBotUsername: 'AI 챗봇',
      rooms: [], // ⭐ 초기값을 빈 배열로 설정 ⭐
      messages: [],
      messagesLoaded: false,
      messagesLoading: false,
      loadingResponse: false,
    }
  },
  created() {
    // ⭐⭐⭐ 사용자 ID 및 룸 정보 동적 생성 (HomePage와 독립적으로 여기서 생성) ⭐⭐⭐
    // 만약 로그인 시스템을 통해 사용자 ID를 전역으로 관리한다면 이 부분은 필요 없음
    this.currentUserId = 'user_' + Math.random().toString(36).substring(2, 15);
    const randomUsername = '익명사용자_' + Math.floor(Math.random() * 1000);

    this.rooms = [
      {
        roomId: 'ai_chatbot_room',
        roomName: 'AI 챗봇 상담',
        users: [
          { _id: this.currentUserId, username: randomUsername },
          { _id: this.aiBotId, username: this.aiBotUsername }
        ]
      }
    ];
    // ⭐-------------------------------------------------⭐

    this.chatClient = new WebSocket('wss://cryptoaiagent.onrender.com/ws'); // ⭐ 웹소켓 주소에 /ws 경로 추가 ⭐

    this.chatClient.onopen = () => {
      console.log('WebSocket client connected!');
      this.chatClient.send(JSON.stringify({
            action: 'login',
            type: 'login',    // type 필드 추가
            userId: this.currentUserId,
            username: randomUsername // 사용자 이름 전송
          }
      ));
      this.fetchMessages();
    };

    this.chatClient.onmessage = (event) => {
      console.log('Message from server:', event.data);
      let content;
      let senderId = this.aiBotId;
      let username = this.aiBotUsername;

      try {
        const parsedData = JSON.parse(event.data);
        content = parsedData.content || parsedData.msg || event.data;
        if (parsedData.senderId && parsedData.username) {
          senderId = parsedData.senderId;
          username = parsedData.username;
        }
      }
      catch (e) {
        content = event.data;
      }

      this.messages.push({
        _id: new Date().getTime() + Math.random(),
        content: content,
        senderId: senderId,
        username: username,
        timestamp: new Date().toString().substring(16, 21),
        date: new Date().toDateString()
      });

      this.loadingResponse = false;
      this.messagesLoading = false;
    };

    this.chatClient.onerror = (error) => {
      console.error('WebSocket Error:', error);
      this.loadingResponse = false;
      this.messagesLoading = false;
    };
    this.chatClient.onclose = () => {
      console.log('WebSocket closed.');
      this.loadingResponse = false;
      this.messagesLoading = false;
    };
  },
  // beforeUnmount 훅은 WebSocket 연결 종료를 위해 필요합니다.
  beforeUnmount() {
    if (this.chatClient && this.chatClient.readyState === WebSocket.OPEN) {
      this.chatClient.close();
    }
  },
  methods: {
    fetchMessages({ options = {} } = {}) {
      if (this.messagesLoading) return;

      this.messagesLoading = true;

      setTimeout(() => {
        if (options.reset || this.messages.length === 0) {
          this.messages = [{
            _id: 'initial-greeting-auto',
            content: '안녕하세요! AI 크립토 전문가 챗봇입니다. 무엇이 궁금하신가요?',
            senderId: this.aiBotId,
            username: this.aiBotUsername,
            date: new Date().toDateString(),
            timestamp: new Date().toString().substring(16, 21)
          }];
        }

        this.messagesLoaded = true;
        this.messagesLoading = false;

      }, 500);
    },

    sendMessage(message) {
      const messageId = new Date().getTime() + Math.random();
      this.lastSentMessageId = messageId;

      this.messages.push({
        _id: messageId,
        content: message.content,
        senderId: this.currentUserId,
        username: this.rooms[0].users.find(u => u._id === this.currentUserId)?.username || '사용자',
        timestamp: new Date().toString().substring(16, 21),
        date: new Date().toDateString()
      });

      if (this.chatClient && this.chatClient.readyState === WebSocket.OPEN) {
        this.loadingResponse = true;
        this.messagesLoading = true;
        this.chatClient.send(JSON.stringify({
          type: 'chat',
          message: message.content,
          roomId: this.rooms[0].roomId,
          senderId: this.currentUserId,
          messageId: messageId
        }));
      } else {
        console.warn('WebSocket not connected. Message not sent.');
        this.messages.push({
          _id: new Date().getTime() + Math.random(),
          content: '오류: 서버 연결이 끊겼습니다. 새로고침하거나 잠시 후 다시 시도해주세요.',
          senderId: 'system-error',
          username: 'System',
          timestamp: new Date().toString().substring(16, 21),
          date: new Date().toDateString()
        });
        this.loadingResponse = false;
        this.messagesLoading = false;
      }
    },
  }
};
</script>

<style lang="scss">
/* --- chat-wrapper 및 로딩 스피너 스타일 (기존 App.vue 스타일 그대로 사용) --- */
.chat-wrapper {
  /* width, max-width, min-width, box-shadow, border-radius, overflow 등 */
  /* 이 스타일은 App.vue의 전역 스타일로 옮겨가거나 여기에 그대로 유지할 수 있습니다. */
  /* 여기서는 App.vue의 전역 스타일을 활용하는 것이 더 좋습니다. */
  width: 95vw; max-width: 1000px; min-width: 320px; box-shadow: 0 4px 15px rgba(0,0,0,0.1); border-radius: 12px; overflow: hidden;
  height: calc(100vh - 60px); /* 챗창 높이, 헤더만큼 뺌 */
}

/* 로딩 스피너 오버레이 스타일 */
.loading-overlay {
  position: fixed; top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0, 0, 0, 0.5); display: flex; justify-content: center; align-items: center;
  z-index: 1000; flex-direction: column; color: white; font-size: 1.2em;
}
.spinner-container {
  display: flex; flex-direction: column; align-items: center; gap: 15px;
}
.spinner {
  border: 5px solid rgba(255, 255, 255, 0.3); border-top: 5px solid #3498db; border-radius: 50%;
  width: 50px; height: 50px; animation: spin 1s linear infinite;
}
@keyframes spin {
  0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); }
}

/* vue-advanced-chat 내부 버튼 숨기기 (기존과 동일) */
.vac-svg-button {
  display: none !important;
}
</style>