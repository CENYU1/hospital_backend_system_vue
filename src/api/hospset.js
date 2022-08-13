import request from '@/utils/request'

export default {
  getHospSetList(current, limit, searchObj) {
    return request({
      url: `/admin/hosp/hospitalSet/findPageHospSet/${current}/${limit}`,
      method: 'post',
      data: searchObj // 因为后端使用@RequestBody接受查询条件参数，因此前端需要将查询条件转为JSON发送给后端接口
    })
  }
}
