import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import PropTypes from 'prop-types'

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
          <Image className='ani-item-image' lazyLoad src={item.image}></Image>
          {item.name}
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

Diy.propTypes= {
  data: PropTypes.array
}

export default Diy
