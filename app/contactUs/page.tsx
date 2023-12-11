import React from 'react'
import styles from "./page.module.css"
import AddressMap from '@/components/addressMap/AddressMap'
import EmailForm from '@/components/EmailForm/EmailForm'

export default function page() {
    return (
        <main>
            <section>
                <h1 style={{ marginBottom: "1rem" }}>CONTACT US</h1>

                <EmailForm mainHeader='SEND ME A MESSAGE' />

                <AddressMap />
            </section>
        </main>
    )
}
