import { AnimatedSubscribeButton } from '@/components/ui/animated-subscribe-button'
import { Button } from '@/components/ui/button'
import { CheckIcon, ChevronRightIcon } from 'lucide-react'
import React from 'react'

function Billing() {
  return (
  <>
    <div className='flex flex-col items-center justify-center h-[100vh]'>

      <div className='flex m-10 gap-4 items-center'>
          <h1 className='text-white'>
              Join Membership at just for $9.99 
          </h1>
          <AnimatedSubscribeButton
            buttonColor=" #dc2626"
            // buttonColor="#f97316"
            buttonTextColor="#ffffff"
            subscribeStatus={false}
            initialText={
              <span className="group inline-flex items-center">
                Subscribe{" "}
                <ChevronRightIcon className="ml-1 size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            }
            changeText={
              <span className="group inline-flex items-center">
                <CheckIcon className="mr-2 size-4" />
                Subscribed{" "}
              </span>
            }
            />
      </div>
      
      <p className='text-neutral-700'>this page will be functional soon!</p>
    
    </div>
  </>
  )
}

export default Billing