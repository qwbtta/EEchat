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

      <div class="left">
        <img
          src="@/assets/headPortrait.png"
          alt=""
        >
        <div class="contentArea">
          <div class="timeStamp"><span>昵称</span><span>2020-10-26 11:00</span></div>
          <span class="chatContent">内容内容内容内容内容内容内容内容内容内容内容内容内容内容容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内内容内容内容</span>
        </div>
      </div>
      <div class="right">
        <div class="contentArea">
          <div class="timeStamp"><span>昵称</span><span>2020-10-26 11:00</span></div>
          <span class="chatContent">内容内容内容内容内容内容内容内容内容内容内容内容内容内容容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内内容内容内容</span>
        </div>
        <img
          src="@/assets/headPortrait.png"
          alt=""
        >
      </div>
      <div class="left">
        <img
          src="@/assets/headPortrait.png"
          alt=""
        >
        <div class="contentArea">
          <div class="timeStamp"><span>昵称</span><span>2020-10-26 11:00</span></div>
          <span class="chatContent">内容内容内容内容内容内容内容内容内容内容内容内容内容内容容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内内容内容内容</span>
        </div>
      </div>
      <div class="right">
        <div class="contentArea">
          <div class="timeStamp"><span>昵称</span><span>2020-10-26 11:00</span></div>
          <span class="chatContent">内容内容内容内容内容内容内容内容内容内容内容内容内容内容容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内内容内容内容</span>
        </div>
        <img
          src="@/assets/headPortrait.png"
          alt=""
        >
      </div>
      <div class="right">
        <div class="contentArea">
          <div class="timeStamp"><span>昵称</span><span>2020-10-26 11:00</span></div>
          <span class="chatContent">内容内容内容内容内容内容内容内容内容内容内容内容内容内容容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内内容内容内容</span>
        </div>
        <img
          src="@/assets/headPortrait.png"
          alt=""
        >
      </div>
      <div class="right">
        <div class="contentArea">
          <div class="timeStamp"><span>昵称</span><span>2020-10-26 11:00</span></div>
          <span class="chatContent">内容内容内容内容内容内容内容内容内容内容内容内容内容内容容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内内容内容内容</span>
        </div>
        <img
          src="@/assets/headPortrait.png"
          alt=""
        >
      </div>

    </div>

    <div class="inputGroup">
      <input
        type="text"
        class="input"
      >

      <img
        src="@/assets/photo.png"
        alt="选择图片"
        class="photo"
        @click="choosePhoto"
      >
      <img
        src="@/assets/sendOut.png"
        alt="发送"
        class="sendOut"
        @click="sendOut"
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
    choosePhoto() {
      console.log("选择图片");
    },
    sendOut() {
      console.log("发送消息");
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
    width: 90%;
    // height: 48rem;
    height: 63rem;
    padding: 6rem 5rem;
    background-color: #252525;
    margin: 4rem auto 9rem auto;
    border-radius: 2rem;
    box-shadow: 0rem 0rem 4rem #00fff7 inset;
    overflow: auto;
    img {
      cursor: pointer;
    }
    .left {
      display: flex;
      align-items: flex-start;
      font-weight: 600;
      color: #ddd;
      margin-bottom: 3rem;
      img {
        margin-right: 3.2rem;
      }
      .contentArea {
        display: flex;
        flex-direction: column;
        width: 57%;
        .timeStamp {
          font-size: 1.8rem;
          span:nth-of-type(2) {
            margin-left: 2rem;
          }
        }
        .chatContent {
          font-size: 2rem;
          margin-top: 1rem;
          line-height: 3.6rem;
        }
      }
    }
    .right {
      display: flex;
      align-items: flex-start;
      justify-content: flex-end;
      font-weight: 600;
      color: #ddd;
      margin-bottom: 3rem;
      .contentArea {
        display: flex;
        flex-direction: column;
        margin-right: 3.2rem;
        width: 57%;
        .timeStamp {
          display: flex;
          justify-content: flex-end;
          font-size: 1.8rem;
          span:nth-of-type(2) {
            margin-left: 2rem;
          }
        }
        .chatContent {
          font-size: 2rem;
          margin-top: 1rem;
          line-height: 3.6rem;
        }
      }
    }
  }

  .inputGroup {
    margin: 0 auto;
    padding-bottom: 4.5rem;
    width: 96%;
    height: 6.8rem;
    .input {
      padding: 0 8rem;
      float: left;
      width: 91.4%;
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
      outline: none;
    }
    .photo {
      cursor: pointer;
      float: left;
      margin-top: -5.5rem;
      margin-left: 1.7rem;
    }
    .sendOut {
      cursor: pointer;
      float: right;
      margin-top: -5.5rem;
      margin-right: 1.7rem;
    }
  }
  /*滚动条整体部分,必须要设置*/
  ::-webkit-scrollbar {
    width: 1.7rem;
    height: 75rem;
    background-color: #979797;
    border-radius: 0.85rem;
  }
  /*滚动条的轨道*/
  ::-webkit-scrollbar-track {
    background-color: #979797;
    border-radius: 0.85rem;
  }
  /*滚动条的滑块按钮*/
  ::-webkit-scrollbar-thumb {
    border-radius: 0.85rem;
    background: linear-gradient(to bottom, #96fffe 0%, #4c4c4c 100%);
  }
  /*滚动条的上下两端的按钮*/
  ::-webkit-scrollbar-button {
    height: 0;
  }
}
</style>