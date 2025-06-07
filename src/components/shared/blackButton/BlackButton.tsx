import React from 'react'
import { FaArrowRight } from '@/services/icon/Icon'
import ButtonTypes from '@/types/Button'

function BlackButton({ title, onClick }: ButtonTypes) {
  return (
    <div className="pointer" style={{cursor:"pointer"}} onClick={onClick}>
        <a className="button1 buttonColor normalColorOne">
          {title}
            <span>
                <FaArrowRight/>
            </span>
        </a>
    </div>
  )
}

export default BlackButton