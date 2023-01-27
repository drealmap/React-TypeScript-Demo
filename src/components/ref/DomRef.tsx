import React, { useEffect, useRef } from 'react'

export const DomRef = () => {
    const inputRef = useRef<HTMLInputElement>(null!)

    useEffect(() => {
        inputRef.current.focus()
    }, [])
  return (
    <div>
        <input title='h' type="text" ref={inputRef} />
    </div>
  )
}
