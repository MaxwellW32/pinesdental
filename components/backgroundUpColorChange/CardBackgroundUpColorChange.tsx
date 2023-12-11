import React, { CSSProperties, HTMLAttributes } from 'react'
import styles from "./cardBackgroundUpColorChange.module.css"
import Image from 'next/image'
import Link from 'next/link'

export default function CardBackgroundUpColorChange({
    primaryColorSecondaryColor = ["red", "blue"],
    imageOptions = { alt: "image", src: "" },
    transitionTime = "400ms",
    linkSrc = "",
    backgroundImageProps,
    backdropProps,
    titleEl,
    ...elementProps
}: {
    primaryColorSecondaryColor?: [string, string],
    imageOptions?: { alt: string, src: string, resolution?: number },
    linkSrc?: string,
    transitionTime?: string,
    backgroundImageProps?: HTMLAttributes<HTMLImageElement>,
    backdropProps?: HTMLAttributes<HTMLDivElement>,
    titleEl: JSX.Element
} & (HTMLAttributes<HTMLAnchorElement> | HTMLAttributes<HTMLDivElement>)) {


    const mystuff = (
        <>
            <Image {...backgroundImageProps as any} alt={imageOptions.alt} src={imageOptions.src} width={imageOptions.resolution ?? 1200} height={imageOptions.resolution ?? 1200} {...backgroundImageProps} style={{ width: "100%", height: "100%", position: "absolute", top: 0, left: 0, objectFit: "cover", ...backgroundImageProps?.style }} />

            <div {...backdropProps} className={`${styles.RUBackdropElement} ${backdropProps?.className}`} style={{ position: "absolute", height: "100%", width: "100%", top: 0, left: 0, ...backdropProps?.style }}></div>

            {titleEl}
        </>
    )

    return (
        <>
            {linkSrc ? (
                <Link {...elementProps as any} href={linkSrc} className={`${styles.mainEl} ${elementProps?.className}`} style={{ "--RUPrimaryColor": primaryColorSecondaryColor[0], "--RUSecondaryColor": primaryColorSecondaryColor[1], "--RUTransitionTime": transitionTime, padding: "1rem", display: "block", position: "relative", overflow: "hidden", cursor: linkSrc ? "pointer" : "auto", ...elementProps?.style } as CSSProperties}>
                    {mystuff}
                </Link>
            ) : (
                <div {...elementProps as any} className={`${styles.mainEl} ${elementProps?.className}`} style={{ "--RUPrimaryColor": primaryColorSecondaryColor[0], "--RUSecondaryColor": primaryColorSecondaryColor[1], "--RUTransitionTime": transitionTime, padding: "1rem", display: "block", position: "relative", overflow: "hidden", cursor: linkSrc ? "pointer" : "auto", ...elementProps?.style } as CSSProperties}>
                    {mystuff}
                </div>
            )}
        </>
    )
}
