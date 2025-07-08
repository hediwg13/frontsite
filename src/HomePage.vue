<template>
  <div className="homepage-container">
    <div className="background-gradient"></div>
    <div className="content-wrapper">
      <h1 className="main-heading">
        <span className="highlight">Unlocking Alpha.</span>
        <br/>
        Your AI-Powered Crypto Edge.
      </h1>
      <p className="sub-text">
        "Navigating the volatile crypto markets is hard. Don't trade alone."
        <br/>
        Our AI expert analyzes real-time technical indicators to give you clear, actionable insights.
      </p>
      <div className="button-group">
        <router-link to="/chat" className="main-button primary-cta">
          Start Your Free AI Analysis
        </router-link>
        <a href="#" className="main-button secondary-link">
          Learn More
        </a>
      </div>
      <div className="features-grid">
        <div className="feature-item">
          <span className="feature-icon">✨</span>
          <p className="feature-text">Real-time Technical Insights</p>
        </div>
        <div className="feature-item">
          <span className="feature-icon">🧠</span>
          <p className="feature-text">AI-Driven Crypto Expertise</p>
        </div>
        <div className="feature-item">
          <span className="feature-icon">📈</span>
          <p className="feature-text">Actionable Market Overviews</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
};
</script>

<style lang="scss" scoped>
/* scoped를 사용하여 이 스타일이 현재 컴포넌트에만 적용되도록 함 */

.homepage-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 60px); /* 헤더 높이만큼 빼줌 */
  text-align: center;
  position: relative; /* 배경 그라데이션을 위한 상대 위치 */
  overflow: hidden; /* 배경이 넘치지 않도록 */
  background-color: #1a1a1a; /* 기본 어두운 배경색 */
  color: #f0f0f0; /* 밝은 텍스트 색상 */
  padding: 20px;
}

/* 배경 그라데이션 효과 (degen.tips처럼 은은한 움직임이나 텍스처를 더할 수도 있음) */
.background-gradient {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(30, 30, 30, 0.95), rgba(0, 0, 0, 0.9), rgba(30, 30, 30, 0.95));
  z-index: 0; /* 내용 뒤에 배치 */
}

.content-wrapper {
  position: relative; /* z-index를 위해 상대 위치 */
  z-index: 1; /* 배경 위에 내용이 오도록 */
  max-width: 1000px; /* 더 넓은 콘텐츠 영역 */
  padding: 60px 40px; /* 패딩 증가 */
  background: rgba(255, 255, 255, 0.05); /* 약간 투명한 어두운 카드 배경 */
  border-radius: 20px; /* 더 둥근 모서리 */
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4); /* 더 강한 그림자 */
  backdrop-filter: blur(5px); /* 약간의 블러 효과 (유리모피즘) */
  border: 1px solid rgba(255, 255, 255, 0.1); /* 미세한 테두리 */
}

.main-heading {
  font-size: 3.8em; /* 더 크고 임팩트 있게 */
  font-weight: 800;
  color: #f0f0f0; /* 밝은 텍스트 */
  margin-bottom: 25px;
  line-height: 1.25;
  letter-spacing: -0.03em; /* 글자 간격 조절 */

  .highlight {
    color: #4CAF50; /* 강조색 (예: 밝은 녹색) */
    text-shadow: 0 0 10px rgba(76, 175, 80, 0.5); /* 강조색에 미세한 그림자 */
  }
}

.sub-text {
  font-size: 1.3em;
  color: #a0a0a0; /* 회색조 텍스트 */
  margin-bottom: 50px;
  line-height: 1.6;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.button-group {
  display: flex;
  justify-content: center;
  gap: 25px; /* 버튼 간격 증가 */
  margin-bottom: 60px;
}

.main-button {
  padding: 18px 35px; /* 패딩 증가 */
  font-size: 1.15em;
  font-weight: 700;
  border: none;
  border-radius: 35px; /* 더 둥근 버튼 */
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-block;
  letter-spacing: 0.02em;
}

.primary-cta {
  background: linear-gradient(45deg, #4CAF50, #8BC34A); /* 녹색 그라데이션 */
  color: white;
  box-shadow: 0 6px 20px rgba(76, 175, 80, 0.4); /* 강조색 그림자 */
}

.primary-cta:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(76, 175, 80, 0.6);
  background: linear-gradient(45deg, #8BC34A, #4CAF50); /* 호버 시 그라데이션 반전 */
}

.secondary-link {
  background-color: transparent;
  color: #a0a0a0; /* 회색 텍스트 */
  border: 2px solid #606060; /* 어두운 테두리 */
}

.secondary-link:hover {
  background-color: rgba(255, 255, 255, 0.1);
  color: #f0f0f0;
  transform: translateY(-3px);
  border-color: #a0a0a0;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); /* 3열 그리드 */
  gap: 30px;
  margin-top: 50px;
  justify-content: center;
}

.feature-item {
  background: rgba(255, 255, 255, 0.08); /* 어두운 배경에 약간 투명한 카드 */
  border-radius: 15px;
  padding: 30px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, background 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.feature-item:hover {
  transform: translateY(-5px);
  background: rgba(255, 255, 255, 0.15);
}

.feature-icon {
  font-size: 3em; /* 아이콘 크기 */
  margin-bottom: 15px;
  filter: drop-shadow(0 0 5px rgba(255, 255, 255, 0.3)); /* 아이콘에 그림자 */
}

.feature-text {
  font-size: 1.1em;
  color: #e0e0e0;
  font-weight: 500;
  line-height: 1.4;
}

/* --- 모바일 반응형 --- */
@media (max-width: 992px) {
  .main-heading {
    font-size: 3em;
  }
  .sub-text {
    font-size: 1.1em;
  }
  .button-group {
    flex-direction: column;
    align-items: center;
    gap: 15px;
  }
  .main-button {
    width: 80%;
    max-width: 350px;
  }
  .content-wrapper {
    padding: 40px 25px;
  }
  .features-grid {
    grid-template-columns: 1fr; /* 모바일에서 한 줄에 하나씩 */
  }
}

@media (max-width: 576px) {
  .main-heading {
    font-size: 2.2em;
  }
  .sub-text {
    font-size: 1.0em;
  }
  .main-button {
    font-size: 1.0em;
    padding: 12px 25px;
  }
}
</style>