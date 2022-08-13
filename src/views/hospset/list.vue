<template>
  <div class="app-container">
    医院设置列表
  </div>
</template>

<script>
import hospset from '@/api/hospset'

export default {
  data() { // 定义变量和初始值
    return {
      current: 1, // 当前页码
      limit: 3, // 每页显示记录数
      searchObj: {}, // 条件封装对象
      list: [], // 每页数据集合
      total: 0 // 总记录数
    }
  },
  created() { // 在页面渲染之前执行，一般调用methods中定义的方法，得到数据
    this.getList()
  },
  methods: { // 定义方法，请求调用接口
    getList() {
      hospset.getHospSetList(this.current, this.limit, this.searchObj)
        .then(response => {
          this.list = response.data.records
          this.total = response.data.total
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>
