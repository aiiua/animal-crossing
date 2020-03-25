import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import PropTypes from 'prop-types'
import images from '@/data/images'

import './material.scss'

class Material extends Component {

  constructor (props) {
    super(props)
  }

  render() {
    const { data } = this.props
    const list = data.map((item, index) => {
      return (
        <View key={`ani${index}`} className={`ani-mater-item item${index}`}>
          <Image src={images[item.name]} mode='aspectFill' lazyLoad className='ani-mater-image'></Image>
          <View className='ani-mater-count'>
            {item.count}
          </View>
        </View>
      )
    })

    return (
      <View className='ani-mater'>
        {list}
      </View>
    )
  }

}

Material.defaultProps = {
  data: []
}

Material.propTypes= {
  data: PropTypes.array
}

export default Material
