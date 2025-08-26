<template>
  <div id="app">
    <header class="app-header">
      <div class="logo">
        <a href="/">
          <img src="https://assets.coingecko.com/coins/images/279/small/ethereum.png" alt="Logo" class="logo-img" />
          <span class="logo-text">CryptoSwap</span>
        </a>
      </div>
      <nav class="main-nav">
        <a href="#" class="nav-item router-link-exact-active">스왑</a>
        <a href="#" class="nav-item">유동성</a>
        <a href="#" class="nav-item">정보</a>
      </nav>
      <button class="connect-wallet-button">지갑 연결</button>
    </header>

    <main class="app-main-content">
      <div class="swap-container">
        <h2 class="title">언제 어디서나 스왑하세요.</h2>

        <div class="swap-card sell-card">
          <div class="card-header">
            <label for="sell-amount">팔기</label>
          </div>
          <div class="input-group">
            <input
                id="sell-amount"
                type="number"
                v-model="sellAmount"
                placeholder="0"
                class="swap-input"
            />
            <div class="currency-selector">
              <span>KRW</span>
              <svg class="dropdown-icon" viewBox="0 0 24 24">
                <path fill="currentColor" d="M7 10l5 5 5-5z" />
              </svg>
            </div>
          </div>
          <div class="amount-in-usd">
            US$0
          </div>
        </div>

        <button class="swap-button" @click="swapTokens">
          <svg viewBox="0 0 24 24" class="swap-icon">
            <path fill="currentColor" d="M12 2v19.984l-3-3.047 3 3.047 3-3.047-3 3.047z" />
          </svg>
        </button>

        <div class="swap-card buy-card">
          <div class="card-header">
            <label for="buy-amount">구매</label>
          </div>
          <div class="input-group">
            <input
                id="buy-amount"
                type="number"
                v-model="buyAmount"
                placeholder="0"
                class="swap-input"
            />
            <button class="token-select-button">
              토큰 선택
            </button>
          </div>
          <div class="amount-in-usd">
            US$0
          </div>
        </div>

        <button class="start-button">시작하기</button>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const sellAmount = ref('');
const buyAmount = ref('');

const swapTokens = () => {
  const temp = sellAmount.value;
  sellAmount.value = buyAmount.value;
  buyAmount.value = temp;
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;700&family=Inter:wght@400;500;700&display=swap');

/* --- CSS 변수 설정: 통합된 다크 모드 스타일 (더 밝고 대비 강화) --- */
:root {
  --background-color: #2c2c31; /* 전체 배경: 이전보다 살짝 밝게 */
  --header-background: #3a3a40; /* 헤더 배경: 더 뚜렷하게 */
  --card-background: #3a3a40; /* 카드 배경: 더 뚜렷하게 */
  --border-color: #55555c; /* 경계선: 더 명확하게 */
  --primary-color: #ff69b4; /* 핫 핑크 */
  --secondary-color: #8a2be2; /* 보라 */
  --text-color: #f0f0f0; /* 밝은 텍스트 */
  --light-text-color: #b0b0b0; /* 보조 텍스트 */
  --input-placeholder-color: #77777d; /* 플레이스홀더 */
  --button-background: #4a4a50; /* 버튼 배경 */
}

/* --- 전역 스타일 (html, body, 앱 전체 레이아웃) --- */
html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
}

#app {
  font-family: 'Inter', 'Noto Sans KR', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--text-color);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: var(--background-color);
}

.app-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 30px;
  background-color: var(--header-background);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.4); /* 그림자 강화 */
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
  color: var(--text-color);
  display: flex;
  align-items: center;
  gap: 8px;
}
.logo-img {
  height: 30px;
  width: 30px;
  border-radius: 50%;
}
.logo-text {
  color: var(--text-color);
}

.main-nav {
  display: flex;
  gap: 25px;
}

.nav-item {
  text-decoration: none;
  color: var(--light-text-color);
  font-weight: 500;
  padding: 5px 0;
  transition: color 0.3s ease;
}

.nav-item:hover,
.nav-item.router-link-exact-active {
  color: var(--primary-color); /* 강조색 */
}

.connect-wallet-button {
  background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
  color: white;
  padding: 8px 15px;
  border: none;
  border-radius: 20px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.4);
}

.connect-wallet-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(255, 105, 180, 0.6);
}

.app-main-content {
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--background-color);
}

/* --- 스왑 컴포넌트 스타일 (전역 스타일과 통합) --- */
.swap-container {
  max-width: 400px;
  padding: 28px;
  background-color: var(--background-color);
  border-radius: 24px;
  text-align: center;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.6); /* 그림자 더 강하게 */
  color: var(--text-color);
  border: 1px solid var(--border-color);
  box-sizing: border-box; /* 패딩, 보더가 너비에 포함되도록 */
}

.title {
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 35px;
  color: var(--text-color);
}

.swap-card {
  background-color: var(--card-background);
  border: 1px solid var(--border-color);
  border-radius: 18px;
  padding: 25px;
  margin-bottom: 25px;
  text-align: left;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.4); /* 카드 그림자 강화 */
  box-sizing: border-box;
}

.card-header label {
  font-size: 17px;
  color: var(--light-text-color);
  font-weight: 500;
}

.input-group {
  display: flex;
  align-items: center;
  gap: 10px; /* 요소들 사이 간격 추가 */
  margin-top: 15px;
}

.swap-input {
  flex-grow: 1;
  border: none;
  background: transparent;
  font-size: 38px;
  font-weight: 700;
  color: var(--text-color);
  outline: none;
  padding: 0;
  width: auto; /* flex item으로 작동하도록 */
}

.swap-input::placeholder {
  color: var(--input-placeholder-color);
}

.currency-selector {
  display: flex;
  align-items: center;
  background-color: var(--button-background);
  color: var(--light-text-color);
  padding: 12px 18px;
  border-radius: 30px;
  font-weight: 600;
  font-size: 17px;
  cursor: pointer;
  border: 1px solid #495057;
  transition: background-color 0.2s ease, transform 0.2s ease;
  white-space: nowrap; /* 텍스트 줄바꿈 방지 */
}

.currency-selector:hover {
  background-color: #495057;
  transform: translateY(-2px);
}

.currency-icon {
  width: 28px;
  height: 28px;
  margin-right: 10px;
  /* KRW는 아이콘이 없으므로 주석 처리하거나 display: none */
  display: none; /* 아이콘 숨김 */
}

.dropdown-icon {
  width: 24px;
  height: 24px;
  margin-left: 8px;
  color: var(--light-text-color);
}

.token-select-button {
  background-color: var(--button-background);
  color: var(--light-text-color);
  border: 1px solid #495057;
  border-radius: 30px;
  padding: 12px 20px;
  font-size: 17px;
  font-weight: 700;
  cursor: pointer;
  transition: background-color 0.2s ease, transform 0.2s ease;
  white-space: nowrap; /* 텍스트 줄바꿈 방지 */
}

.token-select-button:hover {
  background-color: #495057;
  transform: translateY(-2px);
}

.amount-in-usd {
  font-size: 15px;
  color: var(--light-text-color);
  margin-top: 15px;
}

.swap-button {
  background-color: var(--background-color);
  border: 2px solid var(--border-color);
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: -25px auto;
  position: relative;
  z-index: 10;
  cursor: pointer;
  transition: transform 0.3s ease, background-color 0.2s ease;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.4);
}

.swap-button:hover {
  transform: rotate(180deg) scale(1.1);
  background-color: var(--card-background);
}

.swap-icon {
  width: 28px;
  height: 28px;
  color: var(--light-text-color);
}

.start-button {
  width: 100%;
  background-color: var(--button-background);
  color: var(--text-color);
  border: 1px solid var(--border-color);
  border-radius: 18px;
  padding: 20px;
  font-size: 20px;
  font-weight: 700;
  cursor: pointer;
  margin-top: 30px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  box-shadow: 0 0 10px var(--primary-color);
}

.start-button:hover {
  transform: translateY(-4px);
  background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
  box-shadow: 0 12px 20px rgba(0, 0, 0, 0.5);
  border: none;
}
</style>