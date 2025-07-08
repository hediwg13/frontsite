<template>
  <div id="app">
    <header class="app-header">
      <div class="logo">
        <router-link to="/">
          <span class="logo-text">CryptoAI</span> </router-link>
      </div>
      <nav class="main-nav">
        <router-link to="/" class="nav-item">Home</router-link>
        <router-link to="/chat" class="nav-item">Chat</router-link>
        <a href="#" class="nav-item connect-wallet-button">Connect Wallet</a>
      </nav>
    </header>

    <main class="app-main-content">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style lang="scss">
/* --- 전역 스타일 (html, body, 앱 전체 레이아웃) --- */
html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  overflow-x: hidden; /* 가로 스크롤 방지 */
}

#app {
  font-family: 'Inter', sans-serif; /* 더 현대적인 폰트 (설치 필요하거나 대체 폰트 사용) */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #f0f0f0; /* 기본 텍스트 색상 (어두운 배경에 맞춤) */
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #1a1a1a; /* 앱 전체 배경색 */
}

/* --- 헤더 스타일 --- */
.app-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 30px;
  background-color: #2a2a2a; /* 어두운 헤더 배경 */
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3); /* 더 진한 그림자 */
  height: 60px;
  box-sizing: border-box;
  position: sticky;
  top: 0;
  z-index: 999;
}

.logo {
  font-size: 1.5em;
  font-weight: bold;
}
.logo a {
  text-decoration: none;
  color: #f0f0f0; /* 밝은 로고 텍스트 */
  display: flex;
  align-items: center;
  gap: 8px;
}
.logo-img {
  height: 30px;
  width: 30px;
  border-radius: 50%;
}
.logo-text { /* 로고 텍스트 스타일 */
  color: #f0f0f0;
}

.main-nav {
  display: flex;
  gap: 25px;
}

.nav-item {
  text-decoration: none;
  color: #a0a0a0; /* 회색조 내비게이션 텍스트 */
  font-weight: 500;
  padding: 5px 0;
  transition: color 0.3s ease;
}

.nav-item:hover,
.nav-item.router-link-exact-active {
  color: #4CAF50; /* 강조색 (녹색) */
}

.connect-wallet-button {
  background-color: #4CAF50; /* 녹색 버튼 */
  color: white;
  padding: 8px 15px;
  border-radius: 20px;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 2px 10px rgba(76, 175, 80, 0.3);
}

.connect-wallet-button:hover {
  background-color: #66BB6A; /* 더 밝은 녹색 */
  box-shadow: 0 4px 15px rgba(76, 175, 80, 0.5);
}

/* --- 메인 컨텐츠 영역 --- */
.app-main-content {
  flex-grow: 1;
  display: flex; /* 자식 컴포넌트 중앙 정렬을 위해 */
  justify-content: center;
  align-items: center;
  background-color: #1a1a1a; /* 메인 컨텐츠 배경색 */
}

/* 기존 chat-wrapper 스타일은 ChatPage.vue에 그대로 유지되도록 합니다. */
/* App.vue에서 옮겨왔던 chat-wrapper 스타일은 ChatPage.vue로 다시 돌려놔야 합니다. */
</style>