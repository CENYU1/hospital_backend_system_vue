<template>
  <div class="app-container">
    医院设置添加 <br><br>
    <el-form label-width="120px">
      <el-form-item label="医院名称">
        <el-input v-model="hospitalSet.hosname"/>
      </el-form-item>
      <el-form-item label="医院编号">
        <el-input v-model="hospitalSet.hoscode"/>
      </el-form-item>
      <el-form-item label="api基础路径">
        <el-input v-model="hospitalSet.apiUrl"/>
      </el-form-item>
      <el-form-item label="联系人姓名">
        <el-input v-model="hospitalSet.contactsName"/>
      </el-form-item>
      <el-form-item label="联系人手机">
        <el-input v-model="hospitalSet.contactsPhone"/>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="saveOrUpdate">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import hospset from '@/api/hospset'

export default {
  data() {
    return {
      hospitalSet: {}
    }
  },
  created() { // 页面渲染之前执行
    // 获取路由id
    if (this.$route.params && this.$route.params.id) {
      const id = this.$route.params.id
      // 调用接口得到医院设置信息
      this.getHostSet(id)
    }
  },
  methods: {
    // 添加或修改
    saveOrUpdate() {
      // 根据hospitalSet对象中是否有id值，判断是添加还是修改
      if (this.hospitalSet.id) {
        // 修改
        this.update()
      } else {
        // 添加
        this.save()
      }
    },
    // 根据id查询
    getHostSet(id) {
      hospset.getHospSetById(id)
        .then(response => {
          this.hospitalSet = response.data
        })
    },
    // 添加
    save() {
      hospset.saveHospSet(this.hospitalSet)
        .then(response => {
          this.$message({
            type: 'success',
            message: '添加成功!'
          })
          // 跳转到列表页面，使用路由跳转方式实现
          this.$router.push({ path: '/hospSet/list' })
        })
    },
    // 修改
    update() {
      hospset.updateHospSet(this.hospitalSet)
        .then(response => {
          this.$message({
            type: 'success',
            message: '修改成功!'
          })
          this.$router.push({ path: '/hospSet/list' })
        })
    }
  }
}
</script>
