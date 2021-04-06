<template>
  <div id="channel">
    <div class="infoPopup">
      <div class="head">
        <span>加入频道</span>
        <img
          src="@/assets/close.png"
          alt=""
          @click="close"
        >
      </div>
      <div class="main">
        <p>请输入您的昵称</p>
        <input
          type="text"
          v-model="nickname"
        >
        <button @click="join">加入</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nickname: "卧底007",
    };
  },
  methods: {
    close() {
      console.log("关闭");
    },
    join() {
      console.log("加入");
      this.$router.push("ChatBox");
    },
  },
};
</script>

<style lang="scss" scoped>
#channel {
  .infoPopup {
    margin: 0 auto;
    padding-top: 23rem;
    width: 47.6rem;
    height: 26.1rem;
    .head {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 5.6rem;
      background: linear-gradient(to right, #2d127a 0%, #87017d 100%);
      border-top-left-radius: 1rem;
      border-top-right-radius: 1rem;
      span {
        font-size: 2rem;
        font-weight: 500;
        color: #ddd;
        margin-left: 2rem;
      }
      img {
        cursor: pointer;
        margin-right: 2rem;
      }
    }
    .main {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      height: 20.5rem;
      background: linear-gradient(to right, #404065, #61618b, #3d3d61);
      border-bottom-left-radius: 1rem;
      border-bottom-right-radius: 1rem;
      p {
        font-size: 1.6rem;
        font-weight: 500;
        color: #fff;
        margin-top: 2.4rem;
      }
      input {
        margin-top: 1.8rem;
        width: 41.2rem;
        height: 3.8rem;
        background: #1d1d1d;
        color: #fff;
        border-radius: 0.4rem;
        text-indent: 1rem;
      }
      button {
        width: 8.2rem;
        height: 2.9rem;
        background: linear-gradient(to right, #36207f, #200d5f);
        color: #fff;
        font-weight: 600;
        margin-top: 3.4rem;
        border-radius: 0.6rem;
        cursor: pointer;
      }
    }
  }
}
</style>