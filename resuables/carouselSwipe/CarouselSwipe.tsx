"use client"

import React, { CSSProperties, useEffect, useMemo, useRef, useState } from 'react'

export default function CarouselSwipe({ items, width = "350px", transitionTimeVal = 1000, carouselStyles, carouselContStyles, bttnContStyles }: { items: JSX.Element[], width?: string, height?: string, transitionTimeVal?: number, carouselStyles?: CSSProperties, carouselContStyles?: CSSProperties, bttnContStyles?: CSSProperties }) {

    const [seenItems] = useState(items)

    const [currentIndex, currentIndexset] = useState(0)
    const [translateVal, translateValset] = useState(0)

    const [canClick, canClickSet] = useState(true)

    const transitionTimeInitialValue = useRef(transitionTimeVal)
    const [transitionTime, transitionTimeset] = useState(transitionTimeInitialValue.current)

    const onLast = useMemo(() => {
        if (currentIndex === seenItems.length - 1) {
            return true
        } else {
            return false
        }
    }, [currentIndex])

    const onFirst = useMemo(() => {
        if (currentIndex === 0) {
            return true
        } else {
            return false
        }
    }, [currentIndex])

    const moveNext = () => {
        if (!canClick) return

        setTimeout(() => {
            currentIndexset(prev => {
                let newIndex = prev + 1
                if (newIndex > seenItems.length - 1) {
                    newIndex = 0
                }
                return newIndex
            })
        }, transitionTimeInitialValue.current);

        translateValset(-100)//moves left
        runReset()
    }

    const movePrev = () => {
        if (!canClick) return

        setTimeout(() => {
            currentIndexset(prev => {

                let newIndex = prev - 1
                if (newIndex < 0) {
                    newIndex = seenItems.length - 1
                }
                return newIndex
            })
        }, transitionTimeInitialValue.current);

        translateValset(100)
        runReset()
    }

    const runReset = () => {
        canClickSet(false)

        setTimeout(() => {
            canClickSet(true)
            transitionTimeset(0)
        }, transitionTimeInitialValue.current)
    }

    //respond to transition time
    useEffect(() => {
        if (transitionTime === 0) {
            translateValset(0)
        }
    }, [transitionTime])

    //respond to reset
    useEffect(() => {
        if (translateVal === 0) {
            setTimeout(() => {
                transitionTimeset(transitionTimeInitialValue.current)
            }, 20)
        }
    }, [translateVal])

    const autoNextInterval = useRef<NodeJS.Timeout>()
    const autoNext = () => {
        if (autoNextInterval.current !== undefined) {
            clearInterval(autoNextInterval.current)
            autoNextInterval.current = undefined
        }

        autoNextInterval.current = setInterval(() => {
            moveNext()
        }, 3000)
    }

    // start off auto go next
    useEffect(() => {
        autoNext()
    }, [])

    const clickedTimeOut = useRef<NodeJS.Timeout>()
    const handleUserClicked = () => {
        //stop auto loop
        if (autoNextInterval.current !== undefined) {
            clearInterval(autoNextInterval.current)
            autoNextInterval.current = undefined
        }

        //reset auto scroll start up timer 
        if (clickedTimeOut.current !== undefined) {
            clearTimeout(clickedTimeOut.current)
            clickedTimeOut.current = undefined
        }

        transitionTimeInitialValue.current = 0
        clickedTimeOut.current = setTimeout(() => {
            transitionTimeInitialValue.current = 1000
            transitionTimeset(transitionTimeInitialValue.current)
            autoNext()
        }, 1000);
    }


    return (
        <div>
            <div style={{ margin: "0 auto", width: `min(${width}, 100%)`, position: "relative", overflow: "hidden", ...carouselContStyles }}>
                {/* set sizing */}
                <div style={{ padding: "1rem", ...carouselStyles, userSelect: "none", opacity: 0, pointerEvents: "none" }}>
                    {items[0]}
                </div>

                {/* a */}
                <div style={{ width: "100%", height: "100%", position: "absolute", top: 0, left: 0, translate: `${translateVal - 100}% 0%`, transition: `translate ${transitionTime}ms`, padding: "1rem", ...carouselStyles }}>
                    {onFirst ? items[items.length - 1] : items[currentIndex - 1]}
                </div>

                {/* b */}
                <div style={{ width: "100%", height: "100%", position: "absolute", top: 0, left: 0, translate: `${translateVal}% 0%`, transition: `translate ${transitionTime}ms`, padding: "1rem", ...carouselStyles }}>
                    {items[currentIndex]}
                </div>

                {/* c */}
                <div style={{ width: "100%", height: "100%", position: "absolute", top: 0, left: 0, translate: `${translateVal + 100}% 0%`, transition: `translate ${transitionTime}ms`, padding: "1rem", ...carouselStyles }}>
                    {onLast ? items[0] : items[currentIndex + 1]}
                </div>
            </div>

            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", ...bttnContStyles }}>
                <svg onClick={() => {
                    handleUserClicked()
                    movePrev()
                }} xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160zm352-160l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L301.3 256 438.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0z" /></svg>

                <svg onClick={() => {
                    handleUserClicked()
                    moveNext()
                }} xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z" /></svg>
            </div>
        </div>
    )
}
