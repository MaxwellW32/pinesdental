import React, { HTMLAttributes, ReactNode, CSSProperties } from 'react'

export default function FlexWrapCenter({
    children,
    ...elementProps
}: {
    children: ReactNode,
} & HTMLAttributes<HTMLDivElement>) {

    return (
        <div {...elementProps} style={{
            display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1rem", ...elementProps?.style
        } as CSSProperties}>
            {children}
        </div>
    )
}
