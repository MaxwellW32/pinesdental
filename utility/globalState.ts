import { menuItem } from '@/resuables/navBar/ReusableNavBar';
import { atom, useAtom } from 'jotai'
import { useEffect } from 'react';

export const screenSizeGlobal = atom<{
    desktop: boolean
    tablet: boolean,
    phone: boolean
}>({
    desktop: false,
    tablet: false,
    phone: false
});

export const themeGlobal = atom<boolean | undefined>(undefined);



export const navMenuInfoArr: menuItem[] = [
    {
        title: "Home",
        link: "/",
        subMenu: undefined
    },
    {
        title: "About Us",
        link: "/aboutUs",
        subMenu: [
            {
                title: "Gallery",
                link: "/gallery",
                subSubMenu: [
                    {
                        title: "Team",
                        link: "/team"
                    },
                    {
                        title: "Contact Us",
                        link: "/contactUs"
                    }
                ]
            },
            {
                title: "Services",
                link: "/services",
                subSubMenu: undefined
            },
            {
                title: "Documents",
                link: "/documents",
                subSubMenu: undefined
            }
        ]
    },
    {
        title: "Services",
        link: "/services",
        subMenu: [
            {
                title: "Consultation",
                link: "/consultation",
                subSubMenu: undefined
            }
        ]
    },
    {
        title: "Blog",
        link: "/blog",
        subMenu: undefined
    },
    {
        title: "Contact Us",
        link: "/contactUs",
        subMenu: undefined
    },
]


export const wordpressLink = `http://localhost/mywordpress`