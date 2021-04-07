<template>
  <div id="home">
    <div class="head">
      <div class="headLeft"> <img
          src="@/assets/plane.png"
          alt=""
        ></div>
      <div class="headRight">
        <ul>
          <li @click="goChanel">加入频道</li>
          <li>goood</li>
          <li>goood</li>
          <button class="set-up">set up</button>
        </ul>
      </div>
    </div>
    <div class="main">
      <div class="mainLeft">
        <p class="tltle">EEchat</p>
        <p class="details">With the instant messaging software that 800 million people are using, you can not only chat and make friends through QQ on various communication terminals, but also make free video and voice calls, or send and receive important files anytime and anywhere. </p>
        <div class="startArea">
          <span>点击生成聊天链接</span>
          <button class="start">start</button>
        </div>
      </div>
      <div class="mainRight">
        <img
          src="@/assets/resources-1.png"
          alt=""
        >
        <img
          src="@/assets/resources-2.png"
          alt=""
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    goChanel() {
      this.$router.push("channel");
    },
  },
};
</script>

<style lang="scss" scoped>
#home {
  background: url("~@/assets/homebackground.png");
  .head {
    height: 16rem;
    padding-top: 4.5rem;
    margin-left: 11.5rem;
    display: flex;
    justify-content: space-between;
    .headLeft {
      width: 11rem;
      height: 11rem;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .headRight {
      ul {
        display: flex;
        align-items: center;
        font-size: 2.8rem;
        font-weight: 600;
        color: #ddd;
        li {
          list-style: none;
          margin-right: 9.3rem;
          cursor: pointer;
        }
        .set-up {
          width: 19.7rem;
          height: 5.7rem;
          font-size: 2.8rem;
          font-weight: 600;
          color: #ddd;
          margin-right: 18rem;
          border-radius: 5rem;
          border: none;
          background: linear-gradient(to right, #7640b7 0%, #7038df 100%);
          cursor: pointer;
          outline: none;
        }
      }
    }
  }
  .main {
    display: flex;
    width: 88%;
    margin: 0 auto;
    color: #fff;
    padding-bottom: 2.2rem;
    .mainLeft {
      width: 50%;
      .tltle {
        font-size: 10rem;
        font-weight: 900;
      }
      .details {
        font-size: 2.8rem;
        font-weight: 600;
        color: #ddd;
        line-height: 4.6rem;
      }
      .startArea {
        margin-top: 15rem;
        border-bottom: 1px solid #fff;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-bottom: 2rem;
        span {
          font-size: 2.4rem;
          font-weight: 400;
          color: #ddd;
          cursor: pointer;
        }
        .start {
          width: 14.2rem;
          height: 5.2rem;
          font-size: 2.8rem;
          font-weight: 600;
          color: #fff;
          border-radius: 5rem;
          border: none;
          background: linear-gradient(to right, #7640b7 0%, #7038df 100%);
          cursor: pointer;
          outline: none;
        }
      }
    }
    .mainRight {
      display: flex;
      align-items: center;
      img:nth-of-type(1) {
        margin-left: 12rem;
        margin-top: 26rem;
      }
      img:nth-of-type(2) {
        margin-left: 4rem;
      }
    }
  }
}
</style>