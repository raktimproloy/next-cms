'use client'
import React, { useState } from 'react';
import styles from './style.module.css';

function SingleLoader() {
  return (
      <div className={`${styles.simple_loader}`} style={{backgroundColor: "black"}}> 
          NextCTL
      </div>
  )
}

export default SingleLoader;
