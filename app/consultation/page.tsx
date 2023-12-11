import React from 'react'
import styles from "./page.module.css"
import TwoColumn from '@/components/twoColumn/TwoColumn'

export default function page() {
    return (
        <main>
            <section>
                <TwoColumn
                    firstEl={<div style={{ backgroundColor: "red", height: "300px" }}>h1
                    </div>}
                    secondEl={
                        <div style={{}}>
                            <h1>GP CONSULTATIONS</h1>

                            <p className='makeBold'>GP consultations {"(20 minutes session)"}</p>

                            <p>Service cost $90.00</p>
                        </div>
                    }
                />
            </section>
        </main>
    )
}
