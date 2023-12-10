import { HTMLAttributes, ReactNode, cloneElement, Children } from "react"

export default function GridBoxes({
    children,
    breakPoint = "200px",
    spotlightedEl,
    ...elementProps
}: {
    children: ReactNode,
    breakPoint?: string,
    spotlightedEl?: JSX.Element,
} & HTMLAttributes<HTMLDivElement>) {


    return (
        <div {...elementProps} style={{ display: "grid", gridTemplateColumns: `repeat(auto-fit, minmax(min(${breakPoint}, 100%), 1fr))`, ...elementProps?.style }}>
            {children}
        </div>
    )
}
