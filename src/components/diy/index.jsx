import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import PropTypes from 'prop-types'
import images from '@/data/images'
import Material from './material'


import './index.scss'

class Diy extends Component {

  constructor (props) {
    super(props)
  }

  render () {
    const { data } = this.props
    const list = data.map(item => {
      return (
        <View key={item.id} className='ani-item'>
          <Image className='ani-item-image' mode='aspectFill' lazyLoad src={images[item.name]}></Image>
          <View className='ani-item-label'>
            <View className='label'>
              {item.name}
            </View>
          </View>
          <Material data={item.raw}></Material>
        </View>
      )
    })
    return (
      <View className='ani-list'>
        {list}
      </View>
    )
  }
}

Diy.defaultProps = {
  data: []
}

Diy.propTypes = {
  data: PropTypes.array
}

export default Diy
