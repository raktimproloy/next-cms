
import React from 'react'
import dynamic from "next/dynamic"
const CounterCard = dynamic(() => import('./CounterCard'), {
    ssr: false
})
import {CounterType} from '@/types/HomePage'
import { GetJsonData } from '@/services/getJsonData/GetJsonData'

function CounterSection() {
    // import counter data using json
    let counterData:any = []

    GetJsonData({dataName: "homeCounter"}, (data) => {
        counterData = data
    })

  return (
    <div className="coumter1">
        <div className="container">
            <div className="row">
                {/* Counter data mapping */}
                {
                    counterData.length > 0 && counterData.map((data:any, index:any) => (
                        <CounterCard key={index} info={data as CounterType} />
                    ))
                }

            </div>
        </div>
      </div>
  )
}

export default CounterSection