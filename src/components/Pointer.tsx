import React from 'react'
import {twMerge} from 'tailwind-merge'

const Pointer = (props : {
    fullName : string;
    color ?: "red" | "blue"
}) => {
    return (
        <div className='relative'>
            <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24"
             fill="none" 
             stroke="currentColor"
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className={
                twMerge("feather feather-mouse-pointer size-5 text-white" )
                }>
                <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"></path><path d="M13 13l6 6"></path></svg>

              <div className='absolute top-full left-full'>
                <div className={twMerge("inline-flex rounded-full font-bold text-sm bg-blue-500 px-2 rounded-tl-none",props.color === "red" && "bg-red-500")}>{props.fullName}</div>
              </div>
        </div>
       
    )
}

export default Pointer
