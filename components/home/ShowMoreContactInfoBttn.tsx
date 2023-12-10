"use client"
import React, { useEffect, useRef, useState } from 'react'

export default function BackToTopBttn() {
    const bttnRef = useRef<HTMLButtonElement>(null!)

    const [MouseIsOver, MouseIsOverSet] = useState(false)

    useEffect(() => {
        console.log(`$bttn`, bttnRef.current.clientTop);
    }, [])

    return (
        <button className='bttn2' ref={bttnRef} style={{ position: "fixed", bottom: 0, left: 0, margin: "1rem", zIndex: "1", aspectRatio: "1/1", width: MouseIsOver ? "min(200px, 50%)" : "2rem", borderRadius: MouseIsOver ? 0 : "1rem", display: "grid", alignItems: "center", justifyItems: "center", transition: "width 400ms, border-radius 400ms" }} onMouseEnter={() => {
            MouseIsOverSet(true)
        }} onMouseLeave={() => {
            MouseIsOverSet(false)
        }}>
            {!MouseIsOver && <svg style={{ position: "absolute", top: "50%", left: "50%", translate: "-50% -50%" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z" /></svg>}
        </button>
    )
}
