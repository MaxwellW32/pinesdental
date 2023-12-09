"use client"
import { useState, useLayoutEffect, CSSProperties } from 'react'
import styles from "./reusablenavbar.module.css"
import { useAtom } from 'jotai'
import Link from 'next/link'
import { screenSizeGlobal, themeGlobal } from '@/utility/globalState'
import { usePathname } from 'next/navigation'
import SocialMedia from '@/components/social media logos/SocialMedia'

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

export default function ReusableNavBar({ menuInfoArr, navHeight = "0rem" }: { menuInfoArr: menuItem[], navHeight?: string }) {
    const [screenSize,] = useAtom(screenSizeGlobal)
    const [showingMainMenu, showingMainMenuSet] = useState(false)
    const [theme, themeSet] = useAtom(themeGlobal)

    return (
        <nav className={styles.mainNav} style={{ "--navHeight": navHeight } as CSSProperties}>
            <SocialMedia />

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

            <div style={{ rotate: theme ? "180deg" : "" }} className="smallTransitionRotation" onClick={() => { themeSet(prev => !prev) }}>
                {theme ? (
                    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path d="M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z" /></svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="12" viewBox="0 0 384 512"><path d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z" /></svg>
                )}
            </div>
        </nav>
    )
}

function MenuItem({ seenMenuItem, seenSubMenuArr }: { seenMenuItem: menuItem, seenSubMenuArr: subMenuItem[] | undefined }) {
    const [screenSize,] = useAtom(screenSizeGlobal)
    const [showingSubMenu, showingSubMenuSet] = useState(false)
    const pathname = usePathname()



    return (
        <li className={styles.mainMenuItem} onClick={(e) => { e.stopPropagation(); showingSubMenuSet(prev => !prev) }} >
            <Link style={{ color: pathname === seenMenuItem.link ? "rgb(var(--primaryColor))" : "" }} href={seenMenuItem.link}>{seenMenuItem.title}</Link>

            {seenSubMenuArr !== undefined && (
                <svg style={{ float: "right", width: "var(--smallSvg)", translate: ".5rem .5rem", fill: pathname === seenMenuItem.link ? "rgb(var(--primaryColor))" : "" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" /></svg>
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
    const pathname = usePathname()

    return (
        <li className={styles.subMenuItem} onClick={(e) => { e.stopPropagation(); showingSubSubMenuSet(prev => !prev) }}>
            <Link style={{ color: pathname === seenSubMenuItem.link ? "rgb(var(--primaryColor))" : "" }} href={seenSubMenuItem.link}>{seenSubMenuItem.title}</Link>

            {seenSubSubMenuArr !== undefined && (
                <svg style={{ float: "right", width: "var(--smallSvg)", translate: ".5rem .5rem", color: pathname === seenSubMenuItem.link ? "rgb(var(--primaryColor))" : "" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" /></svg>
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
    const pathname = usePathname()

    return (
        <li style={{ color: pathname === seenSubSubMenuItem.link ? "rgb(var(--primaryColor))" : "" }} className={styles.subSubMenuItem}><Link href={seenSubSubMenuItem.link}>{seenSubSubMenuItem.title}</Link></li>
    )
}