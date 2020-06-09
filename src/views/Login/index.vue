<template>
<div style="overflow: hidden; height: 100%;">
  <div class="container" @mouseenter="spani" @mouseleave="spanl">
    <h3>欢迎登录</h3>
    <el-form ref="form" label-width="80px" :model="form" >
      <el-form-item
        label="用户名"
        prop="name"
        :rules="{ required: true, message: '请输入用户名', trigger: 'blur' }"
      >
        <el-input v-model="form.name" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item
        label="密码"
        prop="password"
        :rules="{ required: true, message: '密码不能为空', trigger: 'blur' }"
      >
        <el-input
          type="password"
          v-model="form.password"
          placeholder="请输入密码"
        ></el-input>
      </el-form-item>
      <el-button type="primary" @click="submitForm('form')">登录</el-button>
    </el-form>
    <el-alert
      title="用户名: admin 密码: any"
      type="info"
      close-text="知道了">
    </el-alert>
    <span :class="{'in': isIn, 'out': isOut}" ref="animate"></span>
  </div>
</div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  data () {
    return {
      form: {
        name: 'admin',
        password: '123'
      },
      passwordType: 'password',
      isOut: true,
      isIn: false,
      inx: '',
      iny: ''
    }
  },
  computed: {
    ...mapGetters(['username'])
  },
  methods: {
    ...mapMutations(['setLogin']),
    submitForm (formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$axios({
            method: 'post',
            url: '/api/login',
            data: {
              name: this.form.name,
              password: this.form.password
            }
          }).then(res => {
            if (res.data.status === 200) {
              this.setLogin(this.form.name)
              this.$message({
                message: res.data.message,
                type: 'success',
                duration: 600
              })
              this.$router.push('/')
            } else {
              this.$message({
                message: '用户名或密码错误！！ ',
                type: 'error',
                duration: 1000
              })
            }
          })
        } else {
          this.$message({
            message: '用户名或密码错误！！ ',
            type: 'error',
            duration: 1000
          })
        }
      })
    },
    showPwd () {
      if (this.passwordType === 'password') {
        this.passwordType = ''
      } else {
        this.passwordType = 'password'
      }
      this.$nextTick(() => {
        this.$refs.password.focus()
      })
    },
    spani (e) {
      if (this.isOut) {
        this.inx = e.clientX - e.target.offsetLeft
        this.iny = e.clientY - e.target.offsetTop

        const el = this.$refs.animate
        el.style.left = this.inx + 'px'
        el.style.top = this.iny + 'px'

        this.isIn = true
        this.isOut = false
      }
    },
    spanl (e) {
      if (this.isIn) {
        this.inx = e.clientX - e.target.offsetLeft
        this.iny = e.clientY - e.target.offsetTop

        const el = this.$refs.animate
        el.style.left = this.inx + 'px'
        el.style.top = this.iny + 'px'

        this.isOut = true
        this.isIn = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
// .container {
//   box-sizing: border-box;
//   margin:160px auto 0;
//   padding: 20px;
//   width: 520px;
//   max-width: 100%;
//   height: 320px;
//   border: 1px solid #ebeef5;
//   border-radius: 20px;
//   box-shadow: 0 0 20px #ebeef5;
//   position: relative;
//   overflow: hidden;

//   h3 {
//     text-align: center;
//   }

//   .el-button {
//     width: calc(100% - 80px);
//     margin: 0 80px 20px 80px;
//   }
// }
@media screen and (min-width: 300px) {
  .container {
    box-sizing: border-box;
    margin:100px auto 0;
    padding: 20px;
    max-width: 100%;
    height: 320px;
    position: relative;
    overflow: hidden;

    h3 {
      text-align: center;
    }

    .el-button {
      width: calc(100% - 80px);
      margin: 0 80px 20px 80px;
    }
  }
}
@media screen and (min-width: 900px) {
  .container {
    box-sizing: border-box;
    margin:160px auto 0;
    padding: 20px;
    width: 520px;
    max-width: 100%;
    height: 320px;
    border: 1px solid #ebeef5;
    border-radius: 20px;
    box-shadow: 0 0 20px #ebeef5;
    position: relative;
    overflow: hidden;

    h3 {
      text-align: center;
    }

    .el-button {
      width: calc(100% - 80px);
      margin: 0 80px 20px 80px;
    }
  }
}
</style>
