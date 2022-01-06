<template>
  <div class="login">
    <div class="login-wrapper">
      <h1>Single Sign-On Portal</h1>
      <div class="login-form">
        <a-form
          :model="formState"
          :wrapper-col="{ span: 14 }"
          :labelCol="{ span: 6 }"
          @finish="login"
        >
          <a-form-item
            :rules="[
              { required: true, message: 'Please input your username!' },
            ]"
            label="用户名"
            name="username"
            hasFeedback
          >
            <a-input
              id="username"
              v-model:value="username"
              placeholder="LDAP使用用户名，其他使用Email"
            />
          </a-form-item>
          <a-form-item
            :rules="[
              { required: true, message: 'Please input your password!' },
            ]"
            label="密码"
            name="password"
            hasFeedback
          >
            <a-input
              id="password"
              type="password"
              v-model:value="password"
              placeholder="密码"
            />
          </a-form-item>
          <a-form-item :wrapper-col="{ span: 24 }">
            <div class="login-button">
              <a-button type="primary" html-type="submit">登录</a-button>
            </div>
          </a-form-item>
        </a-form>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import { useRoute } from 'vue-router'

export default defineComponent({
  setup() {
    let redirect = ''
    const route = useRoute()
    redirect = (route.query.redirect || '') as string
    const formState = reactive({
      username: '',
      password: '',
    })
    const login = async () => {
      const res = await new Promise((resolve, reject) => {
        setTimeout(() => resolve({ token: '123' }), 1000)
      })
      if (res) {
        localStorage.setItem('token', res.token)
        window.location.href = redirect
      }
    }
    return {
      ...toRefs(formState),
      formState,
      login,
    }
  },
})
</script>
<style lang="less">
.ant-form-item-label
  > label.ant-form-item-required:not(.ant-form-item-required-mark-optional)::before {
  display: none;
}
</style>
<style lang="less" scoped>
.login {
  .login-wrapper {
    padding: 220px auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -70%);

    h1 {
      font-size: 40px;
      font-weight: bold;
      color: #333;
      margin-bottom: 20px;
      text-align: center;
    }
    .login-form {
      padding: 20px;
      border: 1px solid #d9d9d9;
      border-radius: 4px;
      box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px,
        rgba(0, 0, 0, 0.05) 0px 5px 10px;
    }

    .login-button {
      display: flex;
      justify-content: space-around;
      a {
        margin-top: 5px;
      }
    }
  }
}
</style>
