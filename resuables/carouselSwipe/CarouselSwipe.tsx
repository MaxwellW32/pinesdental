"use client"
import React, { HTMLAttributes, useEffect, useMemo, useRef, useState } from 'react'
import styles from "./carouselswipe.module.css"
import { toast } from 'react-hot-toast'

export default function CarouselSwipe({
    transitionTimeInitial = 2,
    scrollLooperTimeInitial = 3,
    startUpAfterUserInteractionTime = 5,
    elementArr,
    carouselProps,
    buttonContProps,
    buttonOne,
    buttonTwo,
    ...elementProps
}: {
    transitionTimeInitial?: number,
    scrollLooperTimeInitial?: number,
    startUpAfterUserInteractionTime?: number,
    carouselProps?: HTMLAttributes<HTMLDivElement>,
    buttonContProps?: HTMLAttributes<HTMLDivElement>,
    buttonOne?: JSX.Element,
    buttonTwo?: JSX.Element,
    elementArr: JSX.Element[]
} & HTMLAttributes<HTMLDivElement>) {
    const [currentIndex, currentIndexSet] = useState(0)
    const [transitionTime, transitionTimeSet] = useState(transitionTimeInitial * 1000)
    const [scrollLooperTime, scrollLooperTimeSet] = useState(scrollLooperTimeInitial * 1000)


    const carouselRef = useRef<HTMLDivElement>(null!)

    const safePrev = useMemo(() => {
        return currentIndex === 0 ? elementArr.length - 1 : currentIndex - 1
    }, [currentIndex])

    const safeNext = useMemo(() => {
        return currentIndex === elementArr.length - 1 ? 0 : currentIndex + 1
    }, [currentIndex])
    const userClicked = useRef(false)
    const looperTimeOut = useRef<NodeJS.Timeout>()


    //start off
    const mounted = useRef(false)
    useEffect(() => {
        if (mounted.current) return
        mounted.current = true

        setTimeout(() => {
            startLoop()
        }, transitionTime)
    }, [])

    const startLoop = () => {
        carouselRef.current.childNodes.forEach((eachChild, eachChildIndex) => {
            if (eachChildIndex !== 0) {
                (eachChild as HTMLDivElement).classList.add(styles.animate)
            }
        })

        looperTimeOut.current = setTimeout(() => {
            moveNext()
            resetIt()

            if (userClicked.current) return
            setTimeout(() => {
                startLoop()
            }, 10);
        }, scrollLooperTime)
    }

    const resetIt = () => {
        carouselRef.current.childNodes.forEach((eachChild, eachChildIndex) => {
            if (eachChildIndex !== 0) {
                (eachChild as HTMLDivElement).classList.remove(styles.animate)
            }
        })

    }

    const moveNext = () => {
        currentIndexSet(prev => {
            let newIndex = prev + 1
            if (newIndex > elementArr.length - 1) {
                newIndex = 0
            }

            return newIndex
        })
    }

    const movePrev = () => {
        currentIndexSet(prev => {
            let newIndex = prev - 1
            if (newIndex < 0) {
                newIndex = elementArr.length - 1
            }

            return newIndex
        })
    }

    const startBackUpLoop = useRef<NodeJS.Timeout>()
    const handleUserClicked = () => {
        userClicked.current = true
        resetIt()
        if (looperTimeOut.current) {
            clearTimeout(looperTimeOut.current)
            looperTimeOut.current = undefined
        }

        if (startBackUpLoop.current) clearTimeout(startBackUpLoop.current)
        startBackUpLoop.current = setTimeout(() => {
            userClicked.current = false
            startLoop()
        }, startUpAfterUserInteractionTime * 1000)
    }

    return (
        <div {...elementProps} style={{ "--transitionTime": `${transitionTime}ms`, display: "flex", flexDirection: "column", gap: "1rem", ...elementProps?.style } as React.CSSProperties}>
            <div {...carouselProps} className={`${styles.carousel} ${carouselProps?.className}`} ref={carouselRef}>
                {elementArr[0]}{/*set sizing*/}

                {elementArr[safePrev]}
                {elementArr[currentIndex]}
                {elementArr[safeNext]}
            </div>

            <div {...buttonContProps} className={`${styles.bttnCont} ${buttonContProps?.className}`} style={{ display: "flex", gap: "1rem", flexWrap: "wrap", margin: "1rem auto", ...buttonContProps?.style }}>
                <div
                    onClick={() => {
                        handleUserClicked()

                        movePrev()
                    }}>
                    {buttonOne ?? (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160zm352-160l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L301.3 256 438.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0z"
                        ></path></svg>
                    )}
                </div>

                <div
                    onClick={() => {
                        handleUserClicked()

                        moveNext()
                    }}>
                    {buttonTwo ?? (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z"
                        ></path></svg>
                    )}
                </div>
            </div>
        </div>
    )
}
