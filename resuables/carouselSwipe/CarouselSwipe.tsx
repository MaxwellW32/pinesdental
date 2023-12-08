"use client"

import React, { useEffect, useMemo, useRef, useState } from 'react'

export default function CarouselSwipe({ items, width = "min(350px, 100%)", height, }: { items: JSX.Element[], width?: string, height?: string }) {

    const [seenItems, seenItemsset] = useState(items)
    const [userInteracted, userInteractedset] = useState(items)

    const [currentIndex, currentIndexset] = useState(0)
    const [translateVal, translateValset] = useState(0)

    const [canClick, canClickSet] = useState(true)

    const transitionTimeInitialValue = useRef(1000)
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
            }, 10)
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
            <div style={{ width: width, height: height, position: "relative", overflow: "hidden" }}>
                {/* a */}
                <div style={{ width: "100%", height: "100%", position: "absolute", top: 0, left: 0, translate: `${translateVal - 100}% 0%`, transition: `translate ${transitionTime}ms` }}>
                    {onFirst ? items[items.length - 1] : items[currentIndex - 1]}
                </div>

                {/* b */}
                <div style={{ width: "100%", height: "100%", position: "absolute", top: 0, left: 0, translate: `${translateVal}% 0%`, transition: `translate ${transitionTime}ms` }}>
                    {items[currentIndex]}
                </div>

                {/* c */}
                <div style={{ width: "100%", height: "100%", position: "absolute", top: 0, left: 0, translate: `${translateVal + 100}% 0%`, transition: `translate ${transitionTime}ms` }}>
                    {onLast ? items[0] : items[currentIndex + 1]}
                </div>
            </div>

            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <p onClick={() => {
                    handleUserClicked()
                    movePrev()
                }}>prev</p>
                <p onClick={() => {
                    handleUserClicked()
                    moveNext()
                }}>next</p>
            </div>
        </div>
    )
}
