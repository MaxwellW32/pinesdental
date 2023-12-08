"use client"
import { useState, useEffect } from 'react'
import styles from "./reusablenavbar.module.css"
import { useAtom } from 'jotai'
import { screenSizeGlobal } from '@/utility/AtomLoader'
import Link from 'next/link'

export type menuItem = {
    title: string,
    link: string,
    subMenu: subMenuItem[] | undefined
}

export type subMenuItem = {
    title: string,
    link: string,
    subSubMenu: subSubMenuItem[] | undefined
}

export type subSubMenuItem = {
    title: string,
    link: string
}

//using js
//one source of truth
//can detect sizing myself
//can stop event listeners when needed
//can still use media queries for nice styles


export default function ReusableNavBar({ menuInfoArr }: { menuInfoArr: menuItem[] }) {
    const [screenSize,] = useAtom(screenSizeGlobal)
    const [showingMainMenu, showingMainMenuSet] = useState(screenSize.desktop ? true : false)

    return (
        <nav className={styles.mainNav}>
            <div style={{ aspectRatio: "1/1", height: "2rem", backgroundColor: "green" }}></div>

            <div>
                {!screenSize.desktop && (
                    <svg style={{ margin: "0 auto" }} onClick={() => { showingMainMenuSet(prev => !prev) }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" /></svg>
                )}

                {(screenSize.desktop ? true : showingMainMenu) && (
                    <ul className={`${styles.mainMenu} noScrollBar`}>
                        {menuInfoArr.map((eachMenuItem, eachMenuItemIndex) => <MenuItem key={eachMenuItemIndex} seenMenuItem={eachMenuItem} seenSubMenuArr={eachMenuItem.subMenu} />)}
                    </ul>
                )}
            </div>

            <div style={{ aspectRatio: "1/1", height: "2rem", backgroundColor: "green" }}></div>
        </nav>
    )
}

function MenuItem({ seenMenuItem, seenSubMenuArr }: { seenMenuItem: menuItem, seenSubMenuArr: subMenuItem[] | undefined }) {
    const [screenSize,] = useAtom(screenSizeGlobal)
    const [showingSubMenu, showingSubMenuSet] = useState(false)


    return (
        <li className={styles.mainMenuItem} onClick={(e) => { e.stopPropagation(); showingSubMenuSet(prev => !prev) }} >
            <Link href={seenMenuItem.link}>{seenMenuItem.title}</Link>

            {seenSubMenuArr !== undefined && (
                <svg style={{ float: "right", width: "var(--smallSvg)", translate: ".5rem .5rem" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" /></svg>
            )}

            {(!screenSize.desktop ? showingSubMenu : true) && seenSubMenuArr !== undefined && (
                <ul className={styles.subMenu}>
                    {seenSubMenuArr.map((eachSubMenuItem, eachSubMenuItemIndex) => <SubMenuItem key={eachSubMenuItemIndex} seenSubMenuItem={eachSubMenuItem} seenSubSubMenuArr={eachSubMenuItem.subSubMenu} />)}
                </ul>
            )}
        </li>
    )
}

function SubMenuItem({ seenSubMenuItem, seenSubSubMenuArr }: { seenSubMenuItem: subMenuItem, seenSubSubMenuArr: subSubMenuItem[] | undefined }) {
    const [screenSize,] = useAtom(screenSizeGlobal)
    const [showingSubSubMenu, showingSubSubMenuSet] = useState(false)

    return (
        <li className={styles.subMenuItem} onClick={(e) => { e.stopPropagation(); showingSubSubMenuSet(prev => !prev) }}>
            <Link href={seenSubMenuItem.link}>{seenSubMenuItem.title}</Link>

            {seenSubSubMenuArr !== undefined && (
                <svg style={{ float: "right", width: "var(--smallSvg)", translate: ".5rem .5rem" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" /></svg>
            )}

            {(!screenSize.desktop ? showingSubSubMenu : true) && seenSubSubMenuArr !== undefined && (
                <ul className={styles.subSubMenu}>
                    {seenSubSubMenuArr.map((seenSubSubMenuItem, seenSubSubMenuItemIndex) => <SubSubMenuItem key={seenSubSubMenuItemIndex} seenSubSubMenuItem={seenSubSubMenuItem} />)}
                </ul>
            )}
        </li>
    )
}

function SubSubMenuItem({ seenSubSubMenuItem }: { seenSubSubMenuItem: subSubMenuItem }) {
    const [screenSize,] = useAtom(screenSizeGlobal)

    return (
        <li className={styles.subSubMenuItem}><Link href={seenSubSubMenuItem.link}>{seenSubSubMenuItem.title}</Link></li>
    )
}