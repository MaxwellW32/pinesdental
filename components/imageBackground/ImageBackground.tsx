import { ReactNode } from 'react'

export default function ImageBackground({
    children,
    imageProps,
    imageContProps,
    backdropProps,
    ...elementProps
}: {
    children: ReactNode,
    imageProps?: React.HTMLAttributes<HTMLDivElement>,
    imageContProps?: React.HTMLAttributes<HTMLDivElement>,
    backdropProps?: React.HTMLAttributes<HTMLDivElement>,
} & React.HTMLAttributes<HTMLDivElement>) {

    return (
        <div {...elementProps} style={{ padding: "2rem 1rem", position: "relative", ...elementProps?.style }}>
            <div {...imageContProps} style={{ position: "relative", zIndex: 1, ...imageContProps?.style }} >
                {children}
            </div>

            <div {...imageProps} style={{ width: "100%", height: "100%", position: "absolute", top: 0, left: 0, backgroundSize: "cover", backgroundPosition: "center", ...imageProps?.style }}></div>
            <div {...backdropProps} style={{ width: "100%", height: "100%", position: "absolute", top: 0, left: 0, ...backdropProps?.style }}></div>
        </div>
    )
}
