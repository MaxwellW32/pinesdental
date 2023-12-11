import React, { HTMLAttributes } from 'react'

export default function ThreePartDisplay({
    firstElement,
    secondElement,
    thirdElement,
    secondThirdElementContProps,
    ...elementProps
}: {
    firstElement: JSX.Element,
    secondElement: JSX.Element,
    thirdElement: JSX.Element,
    secondThirdElementContProps?: HTMLAttributes<HTMLDivElement>

} & HTMLAttributes<HTMLDivElement>) {

    return (
        <div {...elementProps} style={{ display: "grid", gridTemplateColumns: "1fr 3fr", gap: "1rem", ...elementProps?.style }}>
            {firstElement}

            <div {...secondThirdElementContProps} style={{ display: "flex", flexDirection: "column", gap: "1rem", ...secondThirdElementContProps?.style }} >
                {secondElement}
                {thirdElement}
            </div>
        </div>
    )
}
