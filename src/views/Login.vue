<template>
  <div class="login">
    <news-header>登录</news-header>
    <news-logo></news-logo>
    <!-- vant 的form表单 -->
    <van-form @submit="login">
      <van-field
        v-model="username"
        name="用户名"
        label="账号"
        placeholder="请输入你的用户名"
        :rules="rules.username"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="请输入密码"
        :rules="rules.password"
      />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">
          提交
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      username: '',
      password: '',
      rules: {
        username: [
          { required: true, message: '请填写用户名', trigger: 'onChange' },
          {
            pattern: /^\d{5,11}$/,
            message: '用户名长度是5-11位数字',
            trigger: 'onChange'
          }
        ],
        password: [
          { required: true, message: '请填写密码', trigger: 'onChange' },
          {
            pattern: /^\d{3,9}$/,
            message: '密码长度是3-9位数字',
            trigger: 'onChange'
          }
        ]
      }
    }
  },
  methods: {
    async login() {
      const res = await axios.post('http://localhost:3000/login', {
        username: this.username,
        password: this.password
      })
      console.log(res.data)
      const { statusCode, message } = res.data
      if (statusCode === 200) {
        this.$toast.success(message)
      } else {
        this.$toast.fail(message)
      }
    }
  }
}
</script>

<style lang="less"></style>
