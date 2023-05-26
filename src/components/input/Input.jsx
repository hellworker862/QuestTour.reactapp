import React from 'react'
import classes from './Input.module.css'

function Input({children, ...props}) {
  return (
    <input {...props} className={classes.inputText}>
        {children}
    </input>
  )
}

export default Input