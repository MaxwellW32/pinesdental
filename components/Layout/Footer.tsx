import GridStack from '@/resuables/gridStack/GridStack'
import Image from 'next/image'
import React from 'react'
import SocialMedia from '../social media logos/SocialMedia'
import { getEmail, getOpeningHours, getPhone } from '@/useful functions/retrievePinesInfo'

export default function Footer() {
    return (
        <div style={{ padding: "2rem 1rem", borderTop: "2px solid rgb(var(--blackWhiteSwitch))" }}>
            <GridStack>
                <div style={{ display: "grid", gap: ".5rem", justifyItems: "center" }}>
                    <Image alt="Pines Dental Logo" src={require(`@/public/logo actual.png`).default.src} width={150} height={150} />

                    <p>Copyright © 2019</p>
                </div>

                <div style={{ display: "grid", gap: ".5rem", justifyItems: "center" }}>
                    <h2 className="makeBold">Opening Hours</h2>
                    <p>{getOpeningHours(0)}</p>
                    <p>{getOpeningHours(1)} {getOpeningHours(2)}</p>
                </div>

                <div style={{ display: "grid", gap: ".5rem", justifyItems: "center" }}>
                    <h2 className="makeBold">Contacts</h2>
                    <p>{getPhone()}</p>
                    <p className='makeBold'>{getEmail()}</p>
                </div>

                <div style={{ display: "grid", gap: ".5rem", justifyItems: "center" }}>
                    <h2 className="makeBold">Follow Us</h2>


                    <SocialMedia />
                </div>
            </GridStack>
        </div>
    )
}
