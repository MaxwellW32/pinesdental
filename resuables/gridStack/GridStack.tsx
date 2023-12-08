import { CSSProperties, ReactNode } from "react"
import styles from "./imagesection.module.css"

export default function GridStack({ children, columnWidth = "250px", rowHeight, gridStyles }: { children: ReactNode, columnWidth?: string, rowHeight?: string, gridStyles?: CSSProperties }) {

    return (
        <div style={{ display: "grid", gridTemplateColumns: `repeat(auto-fit, minmax(min(${columnWidth}, 100%), 1fr))`, gridAutoRows: rowHeight ? rowHeight : "", gap: "1rem", ...gridStyles }}>
            {children}
        </div>
    )
}
