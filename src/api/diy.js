import request from '../utils/request'

// 分类获取
const category = function (type) {
    return request({
        url: `/category/${type}`,
        method: 'get'
    })
}

export default {
  category
}
