<template>
  <div class="UserInfo">
    <div v-if="isLoading" class="loading">
      <img src="../assets/loading.gif" alt />
    </div>
    <div class="userInformation" v-else>
      <section>
        <img :src="userinfo.avatar_url" alt />
        <span>{{userinfo.loginname}}</span>
        <p>积分：{{userinfo.score}}</p>
        <p>注册时间：{{userinfo.create_at | formatDate}}</p>
      </section>
      <div class="replies">
        <p>回复的主题</p>
        <ul>
          <li v-for="item in userinfo.recent_replies" :key="item.index">
            <router-link
              :to="{
                        name:'post_content',
                        params:{id:item.id}
                    }"
            >{{item.title}}</router-link>
          </li>
        </ul>
      </div>
      <div class="topics">
          <p>创建的主题</p>
        <ul>
          <li v-for="item in userinfo.recent_topics" :key="item.index">
            <router-link
              :to="{
                        name:'post_content',
                        params:{id:item.id}
                    }"
            >{{item.title}}</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserInfo",
  data() {
    return { isLoading: false, userinfo: {} };
  },
  methods: {
    getData() {
      this.$http
        .get(`https://cnodejs.org/api/v1/user/${this.$route.params.name}`)
        .then(res => {
          this.isLoading = false; //加载成功去除动画
          this.userinfo = res.data.data;
        })
        .catch(function(err) {
          console.log(err);
        });
    }
  },
  beforeMount() {
    this.isLoading = true;
    this.getData();
  }
};
</script>

<style scoped>
 .userInformation {
    background: white;
    width: 75%;
    margin: 10px auto;
  }
  .userInformation section {
    padding: 12px;
  }
  .userInformation img {
    width: 30px;
  }
  .userInformation li {
    list-style:none;
  }
  .userInformation .replies,
  .userInformation .topics {
    font-size: 0.72rem;
    border-top: 10px #DDDDDD solid;
  }
  .userInformation > div > p {
    padding: 12px 0 12px 12px;
    background-color: rgba(212, 205, 205, 0.17);
    font-size: 0.75rem;
    margin: 0;
  }
  .userInformation > div >ul > li {
    padding: 4px 0 4px 12px;
    white-space: nowrap;
    font-size: 0.72rem;
    text-overflow: ellipsis;
    overflow: hidden;
    line-height: 30px;
    vertical-align: middle;
  }
  .userInformation > div >ul > li > a {
    color: #094E99;
    text-decoration: none;
  }

</style>