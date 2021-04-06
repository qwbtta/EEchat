<template>
  <div id="chatBox">
    <div class="head"><span></span>
      <p class="title">EEchat密聊</p>
      <div
        class="exitCon"
        @click="exit"
      >
        <img
          src="@/assets/exit.png"
          alt=""
        ><span class="exitText">退出</span>
      </div>

    </div>
    <div class="main">

    </div>
    <div class="inputGroup">
      <input
        type="text"
        class="input"
      >
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    exit() {
      this.$router.push("channel");
    },
  },
};
</script>

<style lang="scss" scoped>
body,
html,
#chatBox {
  height: 100% !important;
  background-color: #000 !important;
  .head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 8.8rem;
    background: linear-gradient(to right, #2b127a, #8a007c);
    .title {
      font-size: 3.2rem;
      font-weight: 600;
      color: #fff;
    }
    .exitCon {
      display: flex;
      align-items: center;
      cursor: pointer;
      img {
        margin-top: 0.3rem;
      }
      .exitText {
        font-size: 2.6rem;
        font-weight: 600;
        color: #fff;
        margin-left: 1rem;
        margin-right: 4.2rem;
      }
    }
  }
  .main {
    background-color: #252525;
    margin: 4rem auto 9rem auto;
    width: 96%;
    height: 75rem;
    border-radius: 2rem;
    box-shadow: 0rem 0rem 4rem #00fff7 inset;
  }
  .inputGroup {
    margin: 0 auto;
    padding-bottom: 4.5rem;
    width: 96%;
    height: 6.8rem;

    .input {
      width: 100%;
      height: 100%;
      color: #ddd;
      font-size: 1.6rem;
      background-color: #252525;
      border-radius: 0.8rem;
      border: 1px solid transparent;
      background-clip: padding-box, border-box;
      background-origin: padding-box, border-box;
      background-image: linear-gradient(90deg, #252525, #252525),
        linear-gradient(90deg, #88c0ff, #00ff6f);
    }
  }
}
</style>