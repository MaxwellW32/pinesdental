import React from 'react'
import styles from "./page.module.css"
import ImageBackground from '@/components/imageBackground/ImageBackground'
import Image from 'next/image'
import GridBoxes from '@/components/gridBoxes/GridBoxes'

export default function page() {
    return (
        <main>
            <section>
                <h1 style={{ marginBottom: "1rem" }}>OUR SERVICES</h1>

                <ImageBackground
                    imageProps={{
                        style: {
                            backgroundImage: `url("https://images.pexels.com/photos/620337/pexels-photo-620337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")`
                        }
                    }}
                    backdropProps={{
                        style: {
                            backgroundColor: "rgb(var(--whiteBlackSwitch))",
                            opacity: .7
                        }
                    }}

                    style={{
                        padding: "3rem 2rem"
                    }}
                >

                    <div>
                        <Image alt='quotepng' src={require(`@/public/quotes.png`).default.src} height={30} width={30} style={{ translate: "-1rem 0" }} />

                        <p className='makeBold' style={{ maxWidth: "400px" }}>Alpha Health GP was founded in 2010, as a private medical practice. We offer multitude of primary health care solution to our patients.</p>

                        <p>Dr. Francis Christensen</p>
                    </div>
                </ImageBackground>
            </section>

            <section>
                <GridBoxes
                    breakPoint='250px'
                    style={{ gap: "1rem" }}
                >
                    <div className={styles.serviceBox}>
                        <Image alt='service image' src={"https://template58686.motopreview.com/mt-demo/58600/58686/mt-content/uploads/2016/04/mt-0394-sevices-img1.jpg"} width={1200} height={1200} style={{ width: "100%", objectFit: "cover" }} />

                        <div>
                            <h3>GP Consultation</h3>

                            <ul>
                                <li>General GP consultations</li>
                                <li>Health promotion</li>
                                <li>Consultation via Phone and Email</li>
                            </ul>
                        </div>
                    </div>

                    <div className={styles.serviceBox}>
                        <Image alt='service image' src={"https://template58686.motopreview.com/mt-demo/58600/58686/mt-content/uploads/2016/04/mt-0394-sevices-img2.jpg"} width={1200} height={1200} style={{ width: "100%", objectFit: "cover" }} />

                        <div>
                            <h3>Routine Dental Checkup</h3>

                            <ul>
                                <li>Comprehensive oral examination</li>
                                <li>Professional teeth cleaning</li>
                                <li>X-rays for dental health assessment</li>
                            </ul>
                        </div>
                    </div>

                    <div className={styles.serviceBox}>
                        <Image alt='service image' src={"https://template58686.motopreview.com/mt-demo/58600/58686/mt-content/uploads/2016/04/mt-0394-sevices-img3.jpg"} width={1200} height={1200} style={{ width: "100%", objectFit: "cover" }} />

                        <div>
                            <h3>Orthodontic Services</h3>

                            <ul>
                                <li>Braces consultation and installation</li>
                                <li>Invisalign treatments</li>
                                <li>Orthodontic adjustments</li>
                            </ul>
                        </div>
                    </div>

                    <div className={styles.serviceBox}>
                        <Image alt='service image' src={"https://template58686.motopreview.com/mt-demo/58600/58686/mt-content/uploads/2016/04/mt-0394-sevices-img4.jpg"} width={1200} height={1200} style={{ width: "100%", objectFit: "cover" }} />

                        <div>
                            <h3>Oral Hygiene Education</h3>

                            <ul>
                                <li>Personalized oral care instructions</li>
                                <li>Tips for maintaining optimal oral health</li>
                                <li>Preventive care guidance</li>
                            </ul>
                        </div>
                    </div>

                    <div className={styles.serviceBox}>
                        <Image alt='service image' src={"https://template58686.motopreview.com/mt-demo/58600/58686/mt-content/uploads/2016/04/mt-0394-sevices-img5.jpg"} width={1200} height={1200} style={{ width: "100%", objectFit: "cover" }} />

                        <div>
                            <h3>Restorative Dentistry</h3>

                            <ul>
                                <li>Fillings and crowns</li>
                                <li>Dental bridges and implants</li>
                                <li>Root canal therapy</li>
                            </ul>
                        </div>
                    </div>

                    <div className={styles.serviceBox}>
                        <Image alt='service image' src={"https://template58686.motopreview.com/mt-demo/58600/58686/mt-content/uploads/2016/04/mt-0394-sevices-img6.jpg"} width={1200} height={1200} style={{ width: "100%", objectFit: "cover" }} />

                        <div>
                            <h3>Pediatric Dentistry</h3>

                            <ul>
                                <li>Specialized care for children</li>
                                <li>Preventive treatments for kids</li>
                                <li>Child-friendly environment</li>
                            </ul>
                        </div>
                    </div>

                    <div className={styles.serviceBox}>
                        <Image alt='service image' src={"https://template58686.motopreview.com/mt-demo/58600/58686/mt-content/uploads/2016/04/mt-0394-sevices-img7.jpg"} width={1200} height={1200} style={{ width: "100%", objectFit: "cover" }} />

                        <div>
                            <h3>Oral Surgery</h3>

                            <ul>
                                <li>Tooth extraction</li>
                                <li>Wisdom teeth removal</li>
                                <li>Oral pathology consultations</li>
                            </ul>
                        </div>
                    </div>

                    <div className={styles.serviceBox}>
                        <Image alt='service image' src={"https://template58686.motopreview.com/mt-demo/58600/58686/mt-content/uploads/2016/04/mt-0394-sevices-img8.jpg"} width={1200} height={1200} style={{ width: "100%", objectFit: "cover" }} />

                        <div>
                            <h3>Cosmetic Dentistry</h3>

                            <ul>
                                <li>Teeth whitening</li>
                                <li>Veneers and bonding</li>
                                <li>Smile makeover consultations</li>
                            </ul>
                        </div>
                    </div>
                </GridBoxes>
            </section>
        </main>
    )
}
