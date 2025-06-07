
import React from 'react';
import { CounterType } from '@/types/HomePage';
import dynamic from 'next/dynamic';
const Counter = dynamic(() => import('./Counter'))
// import Counter from './Counter';

interface CounterCardProps {
  info: CounterType;
}

function CounterCard({ info }: CounterCardProps) {
  const { id, title, count, symbol } = info as CounterType;

  return (
    <div className={`col-md-6 col-lg-3 col-sm-6 col-6 text-center`}>
      <div className="counter-hadding" data-aos="zoom-out" data-aos-duration="1000">
        <h1>
          <span className="counter">
            <Counter count={count} />
          </span>
          {symbol}
        </h1>
        <p>{title}</p>
      </div>
    </div>
  );
}

export default CounterCard;
