<script setup lang="ts">
import { ref } from 'vue';

const username = ref<string>('');
</script>

<template>
  <div class="home">
    <div class="title">适配案例</div>
    <div class="bg">适配</div>
    <van-button class="btn" type="primary" size="small">按钮</van-button>
    <van-field v-model="username" class="input" placeholder="请输入内容" />
    <img
      class="img"
      src="https://p2.ssl.qhimg.com/t110b9a9301dc570fe00a1540ae.webp"
      alt=""
    />
  </div>
</template>

<style scoped lang="scss">
.home {
  margin: 0 auto;
  text-align: center;
  width: 100vw;
  height: 100vh;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;

  .title {
    font-size: 20px;
  }

  .btn {
    margin-top: 20px;
    width: 50vw;
  }

  .img {
    width: 100%;
    margin-top: 20px;
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }

  .input {
    margin-top: 20px;
    width: 100%;
    border: 1px solid #d8d8d8;
    height: 40px;
    padding: 0 10px;
    display: flex;
    align-items: center;
    border-radius: 4px;

    &:active {
      border-color: #f00;
    }

    // 获取到焦点
    &:focus {
      border-color: #f00;
    }
  }

  .bg {
    width: 100%;
    height: 30px;
    background-color: rgb(247, 147, 147);
    border-radius: 4px;
    font-size: 20px;
  }
}
</style>
