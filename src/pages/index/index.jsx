import Taro, { Component } from '@tarojs/taro'
import { View, Image,Text } from '@tarojs/components'

import Diy from '@/components/diy'
import menu from '@/data/menus'
import api from '@/api/diy'

import './index.scss'


class Index extends Component {

  state = {
    menus: menu,
    active: 'all',
    list: []
  }

  componentWillMount () {
    this.getCategory('工具')
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  config = {
    navigationBarTitleText: '首页',
    navigationStyle: 'custom',
    navigationBarTextStyle: 'white'
  }

  getCategory (type) {
    api.category(type).then(res => {
      console.log(res)
      this.setState({
        list: res.data
      })
    })
  }

  render () {
    const { menus, active, list } = this.state

    const menuTaps = menus.map(item => {
      return (
        <View key={item.icon} className={active === item.id ? 'menu-item active' : 'menu-item'}>
          { active === item.id  && <View className='item-label'>{item.name}</View>}
          <Text className={`iconfont ${item.icon}`}></Text>
        </View>
      )
    })

    return (
      <View className='ani-index'>
        <View className='ani-index-bg'>
          <Image src='../../assets/images/bg.svg'></Image>
        </View>
        <View className='ani-index-body'>
          <View className='ani-index-menus'>
            <View className='ani-index-menu'>
              {menuTaps}
            </View>
          </View>
          <View className='ani-index-list'>
            <Diy data={list}></Diy>
          </View>
        </View>
      </View>
    )
  }
}

export default Index
