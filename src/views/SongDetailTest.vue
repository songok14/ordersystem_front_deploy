<template>
  <div class="player-page">
    <!-- 상단 헤더 -->
    <header class="header">
      <h1 class="title">재생 페이지</h1>
    </header>

    <!-- 메인 콘텐츠 -->
    <main class="content">
      <!-- 왼쪽 썸네일/비디오 -->
      <section class="media-section">
        <div class="media-thumbnail">
          <!-- 비디오/이미지 -->
          <img src="@/assets/logo.png" alt="썸네일" />
        </div>
        <div class="media-controls">
          <button class="play-btn">▶ 재생</button>
          <button class="pause-btn">⏸ 일시정지</button>
        </div>
      </section>

      <!-- 오른쪽 정보 영역 -->
      <section class="info-section">
        <h2 class="media-title">영상 제목</h2>
        <p class="media-desc">
          영상 설명 영역입니다.  
          내용이 여러 줄로 표시될 수 있습니다.
        </p>
        <div class="progress-bar">
          <div class="progress" :style="{ width: progress + '%' }"></div>
        </div>
        <div class="time-info">
          <span>{{ currentTime }}</span>
          <span>{{ totalTime }}</span>
        </div>
      </section>
    </main>

    <!-- 하단 컨트롤 -->
    <footer class="footer">
      <button @click="prev">⏮ 이전</button>
      <button @click="togglePlay">{{ isPlaying ? '⏸' : '▶' }}</button>
      <button @click="next">⏭ 다음</button>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isPlaying = ref(false)
const progress = ref(40) // %
const currentTime = ref('00:40')
const totalTime = ref('03:20')

function togglePlay() {
  isPlaying.value = !isPlaying.value
}

function prev() {
  console.log('이전 재생')
}

function next() {
  console.log('다음 재생')
}
</script>

<style scoped lang="scss">
.player-page {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: #111;
  color: #fff;
  font-family: 'Noto Sans KR', sans-serif;

  .header {
    padding: 1rem;
    background: #222;
    text-align: center;

    .title {
      font-size: 1.5rem;
      margin: 0;
    }
  }

  .content {
    flex: 1;
    display: flex;
    padding: 1rem;
    gap: 1rem;

    .media-section {
      flex: 2;
      display: flex;
      flex-direction: column;
      align-items: center;

      .media-thumbnail img {
        max-width: 100%;
        border-radius: 8px;
      }

      .media-controls {
        margin-top: 0.5rem;
        display: flex;
        gap: 0.5rem;

        button {
          background: #ff6600;
          border: none;
          padding: 0.5rem 1rem;
          border-radius: 4px;
          cursor: pointer;
          font-size: 1rem;
          color: white;
        }
      }
    }

    .info-section {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;

      .media-title {
        font-size: 1.25rem;
        margin-bottom: 0.5rem;
      }

      .media-desc {
        font-size: 0.9rem;
        line-height: 1.4;
        color: #ccc;
        margin-bottom: 1rem;
      }

      .progress-bar {
        width: 100%;
        height: 6px;
        background: #444;
        border-radius: 3px;
        overflow: hidden;
        margin-bottom: 0.5rem;

        .progress {
          height: 100%;
          background: #ff6600;
          transition: width 0.3s;
        }
      }

      .time-info {
        display: flex;
        justify-content: space-between;
        font-size: 0.8rem;
        color: #aaa;
      }
    }
  }

  .footer {
    display: flex;
    justify-content: center;
    gap: 1rem;
    padding: 0.75rem;
    background: #222;

    button {
      background: #ff6600;
      border: none;
      padding: 0.5rem 1rem;
      border-radius: 4px;
      cursor: pointer;
      font-size: 1rem;
      color: white;
    }
  }
}
</style>
