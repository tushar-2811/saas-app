import React, { HTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge';

const Avatar = (props : HTMLAttributes<HTMLDivElement>) => {
    const {className , children , ...otherProps} = props;
  return (
    <div className={twMerge("size-20 rounded-full overflow-hidden p-1 border-4 border-blue-500 bg-neutral-900",className)} {...otherProps}>
      {children}
    </div>
  )
}

export default Avatar
