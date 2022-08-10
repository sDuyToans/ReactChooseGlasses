import './Glass-Item.styles.scss';

import React, { Component } from 'react'

export default class GlassItem extends Component {
  render() {
    const  { glassItem, onChangeGlassHandler} = this.props;
    const newState = {
        img: glassItem.url,
        name: glassItem.name,
        description: glassItem.desc
    }
    return (
        <div className="glass-item"  >
        <img src={glassItem.url} alt="" onClick={() =>{
            onChangeGlassHandler(newState)
        }}/>
    </div>
    )
  }
}
