"use client"

import { getAddress, getOpeningHours, getPhone } from "@/useful functions/retrievePinesInfo";
import { themeGlobal } from "@/utility/globalState";
import { useAtom } from "jotai";
import Image from "next/image";

export default function OtherNavItems() {
    const [theme] = useAtom(themeGlobal)

    return (
        <div>
            <div style={{ padding: "1rem", textAlign: "center" }}>Call Today <span className="highlighted">{getPhone()}</span></div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(250px, 100%), 1fr))", padding: "1rem" }}>
                <div style={{ position: "relative", padding: ".5rem" }}>
                    <Image alt="Pines Dental Logo" src={require(`@/public/logo actual.png`).default.src} width={150} height={150} />

                    <svg className="floatToRight" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" /></svg>
                </div>

                <div style={{ position: "relative", borderInline: "1px solid rgb(var(--blackWhiteSwitch))", padding: ".5rem" }}>
                    <p className="makeBold">Opening Hours</p>
                    <p>{getOpeningHours(0)}</p>
                    <p>{getOpeningHours(1)} {getOpeningHours(2)}</p>

                    <svg className="floatToRight" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" /></svg>
                </div>

                <div style={{ padding: ".5rem" }}>
                    <p className="makeBold">Stay in touch</p>
                    <p>{getAddress()}</p>
                </div>

                <button style={{ width: "min(240px, 100%)", justifySelf: "center", alignSelf: "center" }}>Contact Us</button>
            </div>
        </div >
    )
}
