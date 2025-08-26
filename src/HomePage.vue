<template>
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
          <img src="https://cryptologos.cc/logos/ethereum-eth-logo.svg" alt="ETH" class="currency-icon" />
          <span>ETH</span>
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

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;700&display=swap');

:root {
  --background-color: #212529; /* 더 밝은 회색 계열 배경 */
  --card-background: #2b3035; /* 카드 배경 */
  --border-color: #495057; /* 카드 테두리 */
  --primary-color: #ff69b4; /* 핫 핑크 */
  --secondary-color: #8a2be2; /* 보라 */
  --text-color: #f8f9fa; /* 밝은 텍스트 */
  --light-text-color: #ced4da; /* 보조 텍스트 */
  --input-placeholder-color: #6c757d;
  --button-background: #343a40;
}

.swap-container {
  font-family: 'Noto Sans KR', sans-serif;
  max-width: 400px;
  margin: 40px auto;
  padding: 28px;
  background-color: var(--background-color);
  border-radius: 24px;
  text-align: center;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
  color: var(--text-color);
  border: 1px solid var(--border-color);
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
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
}

.card-header label {
  font-size: 17px;
  color: var(--light-text-color);
  font-weight: 500;
}

.input-group {
  display: flex;
  align-items: center;
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
}

.currency-selector:hover {
  background-color: #495057;
  transform: translateY(-2px);
}

.currency-icon {
  width: 28px;
  height: 28px;
  margin-right: 10px;
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