import Taro, { Component } from '@tarojs/taro'
import { View, Image,Text } from '@tarojs/components'

import Diy from '@/components/diy'
import diy from '@/data/diy'
import menu from '@/data/menus'

import './index.scss'


class Index extends Component {

  state = {
    menus: menu,
    active: 'all'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  config = {
    navigationBarTitleText: '首页',
    navigationStyle: 'custom',
    navigationBarTextStyle: 'white'
  }

  render () {
    const { menus, active } = this.state

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
            <Diy data={diy}></Diy>
          </View>
        </View>
      </View>
    )
  }
}

export default Index
