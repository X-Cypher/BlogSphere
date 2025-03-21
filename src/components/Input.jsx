import React from 'react'
import { useId } from 'react'

function Input({
    label,
    type = 'text',
    className = '',
    ref,
    ...props
}) {
    const id = useId()
  return (
    <div className='w-full'>
        {label &&  // If label is given, then render the label
            <label className='block mb-1 pl-1 text-left' htmlFor={id}>
                {label}
            </label>
            }
            <input type={type}
                className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 
                duration-200 border border-gray-200 w-full ${className}`}
                ref={ref} // This is the ref that will be passed to the parent component. Using ref.current.value will give the value of the input field and we can change the value of the input field using ref.current.value = 'new value' in the parent component.
                {...props}
                id={id}
            />
    </div>
  )
}

export default Input