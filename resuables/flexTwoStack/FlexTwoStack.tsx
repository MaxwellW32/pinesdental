import { CSSProperties, ReactNode } from "react"
import styles from "./imagesection.module.css"

export default function FlexTwoStack({ itemRatioPercent = 60, items, flexStyles, breakPoint = "240px" }: { itemRatioPercent?: number, items: [JSX.Element, JSX.Element], flexStyles?: CSSProperties, breakPoint?: string }) {

    return (
        <div style={{ display: "flex", flexWrap: "wrap", ...flexStyles }}>
            <div style={{ flex: `9999 0 max(${itemRatioPercent}%, ${breakPoint})`, backgroundColor: "red", maxWidth: "100%" }}>
                {items[0]}
            </div>

            <div style={{ flex: `1 0 max(${100 - itemRatioPercent}%, ${breakPoint})`, backgroundColor: "green", maxWidth: "100%" }}>
                {items[1]}
            </div>
        </div>
    )
}
