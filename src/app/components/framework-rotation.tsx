import React from 'react'
import { Framework, frameworks } from '../utils/framework-utils'
import Image from 'next/image'
import { assets } from '../utils/assets-utils'
import { cn } from '../utils/tailwind-utils'

export default function FrameworkRotation({currentFramework} : {
    currentFramework : Framework
}) {
  return (
    <div className='h-[80px] w-[80px] mx-2 -mt-2 align-middle inline-flex relative'>
      {
        frameworks.map((name, index) => (
            <Image 
            src={assets[name]}
            key={name}
            height={80}
            width={80}
            alt={"Framework logo"}
            className={cn(
                "w-full h-full object-contain object-center absolute top-0 left-0 transition-all duration-300"
                  , currentFramework === name ?
                   "opacity-100 transform-none"
                    : index > frameworks.indexOf(currentFramework) 
                    ? "opacity-0 -translate-y-2" 
                    : "opacity-0 translate-y-2"
                )}
            />
        ))
      }
    </div>
  )
}
