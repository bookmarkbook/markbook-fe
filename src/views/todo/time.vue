<template>
  <div class="time">
    <h1 >{{time}}</h1>
    <span>{{date}}</span>
  </div>
</template>

<script>
let id;
export default {
  data() {
    return {
      time: "12:24",
      date: "2018 8 16"
    };
  },
  methods: {
    updatetime() {
      const d = new Date();
      this.time = `${d.getHours()}:${d.getMinutes()}`;
      this.date = `${d.getFullYear()} ${d.getMonth() + 1} ${d.getDate()}`;
    }
  },
  mounted() {
    this.updatetime();
    id = window.setInterval(() => {
      this.updatetime();
    }, 5000);
  },
  beforeDestroy() {
    window.clearInterval(id);
  }
};
</script>


<style lang="scss" scoped>
.time {
  width: 150px;
  text-align: center;
  padding-top: 23px;
  > h1 {
    font-size: 43px;
    line-height: 40px;
    margin: 0px;
  }
  > span {
    color: rgb(132, 152, 172);
    font-size: 14px;
  }
}
</style>

