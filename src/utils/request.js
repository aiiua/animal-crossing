import Taro from '@tarojs/taro'

const API = process.env.API

export default function request ({url, method, data}) {

  Taro.showNavigationBarLoading()
  Taro.showLoading({
      title: '加载中'
  })

  return new Promise((resolve, reject) => {
    Taro.request({
        url: API + url,
        data: data,
        method: method
    }).then(response => {
        let { statusCode } = response
        let result = response.data

        switch (statusCode) {
          case 200:
            resolve(result)
            break
          case 404:
            Taro.showToast({
              title: '数据未加载',
              icon: 'none'
            })
            break;
        }

        Taro.hideNavigationBarLoading()
        Taro.hideLoading()
    }).catch(error => {
        reject(error)

        Taro.hideNavigationBarLoading()
        Taro.hideLoading()
    })
  })
}
