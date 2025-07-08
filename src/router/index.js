import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../HomePage.vue'; // 나중에 만들 홈 페이지 컴포넌트
import ChatPage from '../ChatPage.vue'; // 나중에 만들 채팅 페이지 컴포넌트

const routes = [
    {
        path: '/',          // 기본 경로q
        name: 'Home',
        component: HomePage, // HomePage 컴포넌트를 연결
    },
    {
        path: '/chat',      // /chat 경로
        name: 'Chat',
        component: ChatPage, // ChatPage 컴포넌트를 연결
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;