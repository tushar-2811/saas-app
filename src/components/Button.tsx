
import React, { HTMLAttributes } from 'react'
import { cva } from 'class-variance-authority'

const classes = cva('border rounded-full px-6 h-12 font-medium',{
    variants : {
        variant : {
            primary : "border-white bg-transparent",
            secondary : "bg-lime-400 text-neutral-950 border-lime-400"
        },
        size : {
          sm : "h-10"
        }
    }
})

const Button = (
  props : {
    variant : "primary" | "secondary";
    size ?: "sm"
     
} & HTMLAttributes<HTMLButtonElement>) => {
    const {variant , size , className , ...otherProps} = props;
  return (
    <button className={classes({ variant : variant , className : className , size : size })}
       {...otherProps}
    />
 
  )
}

export default Button
