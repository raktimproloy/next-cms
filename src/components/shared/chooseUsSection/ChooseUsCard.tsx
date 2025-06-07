import React from 'react'
import {ChooseUsType} from '@/types/HomePage'

function ChooseUsCard({title, description}: ChooseUsType) {
  return (
    <div className="hadding1 choose1-hadding">
        <h4><a href="#">{title}</a></h4>
        <p>{description}</p>
    </div>
  )
}

export default ChooseUsCard