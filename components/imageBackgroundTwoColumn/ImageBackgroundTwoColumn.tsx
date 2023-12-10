import Image from "next/image"
import { ReactNode } from "react"

export default function ImageBackgroundTwoColumn(
    {
        secondEl,
        backgroundImageProps,
        backdropProps,
        backgroundImageChildrenContProps,
        backgroundImageContProps,
        backgroundImageChildren,
        secondElContProps,
        breakPoint = "200px",
        ...elementProps
    }: {
        secondEl: JSX.Element,

        backgroundImageProps?: React.HTMLAttributes<HTMLDivElement>,
        backgroundImageChildrenContProps?: React.HTMLAttributes<HTMLDivElement>,
        backdropProps?: React.HTMLAttributes<HTMLDivElement>,

        backgroundImageChildren?: ReactNode,

        backgroundImageContProps?: React.HTMLAttributes<HTMLDivElement>,
        secondElContProps?: React.HTMLAttributes<HTMLDivElement>,
        breakPoint?: string
    } & React.HTMLAttributes<HTMLDivElement>) {


    return (
        <div {...elementProps} style={{ display: "flex", flexWrap: "wrap", gap: "1rem", ...elementProps?.style }}>
            <div {...backgroundImageContProps} style={{ flex: `1 1 min(${breakPoint},100%)`, padding: "1rem", position: "relative", ...backgroundImageContProps?.style }}>
                <div {...backgroundImageProps} style={{ width: "100%", height: "100%", maxWidth: "100%", position: "absolute", top: 0, left: 0, backgroundSize: "cover", backgroundPosition: "center", ...backgroundImageProps?.style }}></div>

                <div {...backdropProps} style={{ width: "100%", height: "100%", position: "absolute", top: 0, left: 0, ...backdropProps?.style }}></div>

                <div {...backgroundImageChildrenContProps} style={{ zIndex: 1, position: "relative", height: "100%", ...backgroundImageChildrenContProps?.style }}>
                    {backgroundImageChildren}
                </div>
            </div>

            <div {...secondElContProps} style={{ flex: `1 1 min(${breakPoint},100%)`, display: "grid", gridTemplateColumns: "1fr", gridTemplateRows: "1fr", ...secondElContProps?.style, }}>
                {secondEl}
            </div>
        </div>
    )
}