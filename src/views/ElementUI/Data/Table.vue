<template>
  <div class="page-table">
    <el-table
      v-loading="false"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
    >
      <el-table-column prop="id" align="center" label="ID" width="95">
      </el-table-column>
      <el-table-column prop="title" label="标题">
      </el-table-column>
      <el-table-column prop="author" label="作者" width="110" align="center">
      </el-table-column>
      <el-table-column prop="pageviews" label="页数" width="110" align="center">
      </el-table-column>
      <el-table-column class-name="status-col" label="状态" width="110" align="center">
        <template slot-scope="scope">
          <el-tag :type="scope.row.status | statusFilter ">{{ scope.row.status }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column  align="center" prop="time" label="时间" width="200">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  filters: {
    statusFilter (status) {
      const statusMap = {
        published: 'success',
        draft: 'gray',
        deleted: 'danger'
      }
      return statusMap[status]
    }
  },
  data () {
    return {
      list: null,
      listLoading: false
    }
  },
  created () {
    this.fetchData()
  },
  methods: {
    fetchData () {
      this.listLoading = true
      this.$axios({
        method: 'get',
        url: '/api/table'
      }).then(res => {
        this.list = res.data.items
        // console.log(res.data)
      })
    }
  }
}
</script>

<style scoped>
.page-table {
  padding: 20px;
}
</style>
