import Link from 'next/link'
import React from 'react'
import styles from "./page.module.css"

export default function PrettyList({ items, markerStyles, ulStyles, liStyles }: { items: { name: string, link?: string }[], markerWidth?: string, markerStyles?: React.CSSProperties, ulStyles?: React.CSSProperties, liStyles?: React.CSSProperties }) {
    return (
        <ul className={styles.ulMain} style={{ display: "grid", gap: ".5rem", ...ulStyles }}>
            {items.map((eachItem, eachItemIndex) => {
                return (
                    <li className={styles.liMain} key={eachItemIndex} style={{ display: "flex", alignItems: "center", gap: ".2rem", ...liStyles }} >
                        <svg className='highlightPrimaryOnHover' style={{ width: ".5rem", ...markerStyles }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" /></svg>

                        <p className='highlightPrimaryOnHover'>{eachItem.name}</p>
                    </li>
                )
            })}
        </ul>
    )
}
