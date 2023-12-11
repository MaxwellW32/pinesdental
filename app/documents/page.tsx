import React from 'react'
import styles from "./page.module.css"
import Image from 'next/image'
import FlexWrapCenter from '@/components/flexWrapCenter/FlexWrapCenter'
import EmailForm from '@/components/EmailForm/EmailForm'

export default function page() {
    return (
        <main>
            <section>
                <h1>DR. MICHELLE WEDDERBURN</h1>
                <p className='makeBold' style={{ textAlign: "center", opacity: .7, marginTop: "1rem" }}>MBBS, DCH, DRCOG, MRCGP</p>

                <FlexWrapCenter style={{ gap: "1rem", marginBlock: "2rem" }}>
                    <div style={{ padding: "0 1rem", flex: "1 1 300px" }}>
                        <h2 style={{ margin: "0 0 .5rem 0" }}>Gardasil for women and girls</h2>

                        <p>Heart diseases (IHD both primary and secondary ways of prevention), Diabetes, Asthma, Musculoskeletal pains and treatment, Pediatrics, General medicine (family doctor services), health screening and promotion, Minor surgeries.</p>

                        <h2 style={{ margin: "1.5rem 0 .5rem 0" }}>Professional biography</h2>

                        <p>Franic Christensen, MD is CMO (Chief Medical Officer) and a managing CEO for Alpha Health company. Since it's founding in 2010, this medical private facility offers combined decades of medical experience of it's staff and builds it on.</p>
                    </div>

                    <div style={{ flex: "1 1 300px" }}>
                        <Image alt='service image' src={require(`@/public/michelle main.jpg`).default.src} width={1200} height={1200} style={{ width: "100%", height: "500px", objectFit: "cover" }} />
                    </div>

                    <div style={{ padding: "0 1rem", flex: "1 1 300px", display: "grid", gap: "1.5rem", alignContent: "flex-start" }}>
                        <p>Dr.Francis Christensen is St.Luke's Hospital Med School graduate (year of graduation - 1980). Shortly after defending his medical degree Dr. Christensen did a field work in his native state of Pennsylvania, gaining practical experience and post-graduate additional traning.</p>

                        <p>Also he spent some time professionally in Europe and Australia where he was Chief Medical before founding his General Practice back in Pennsylvania.</p>

                        <a href={require(`@/public/defaultprofile.png`)} download="resume.pdf">
                            <button style={{ justifySelf: "center" }} className='bttn1'>
                                Download Resume.pdf
                            </button>
                        </a>
                    </div>
                </FlexWrapCenter>
            </section>

            <section style={{ backgroundColor: "rgb(var(--primaryColor))", color: "rgb(var(--whiteBlackSwitch))", paddingBlock: "3rem" }}>
                <h1 style={{ marginBottom: "2rem" }}>CERTIFICATION</h1>

                <FlexWrapCenter>
                    {[
                        {
                            src: "https://template58686.motopreview.com/mt-demo/58600/58686/mt-content/uploads/2016/04/mt-0394-doc-img2.jpg"
                        }, {
                            src: "https://template58686.motopreview.com/mt-demo/58600/58686/mt-content/uploads/2016/04/mt-0394-doc-img3.jpg"
                        }, {
                            src: "https://template58686.motopreview.com/mt-demo/58600/58686/mt-content/uploads/2016/04/mt-0394-doc-img4.jpg"
                        }, {
                            src: "https://template58686.motopreview.com/mt-demo/58600/58686/mt-content/uploads/2016/04/mt-0394-doc-img3.jpg"
                        }, {
                            src: "https://template58686.motopreview.com/mt-demo/58600/58686/mt-content/uploads/2016/04/mt-0394-doc-img5.jpg"
                        }, {
                            src: "https://template58686.motopreview.com/mt-demo/58600/58686/mt-content/uploads/2016/04/mt-0394-doc-img6.jpg"
                        }, {
                            src: "https://template58686.motopreview.com/mt-demo/58600/58686/mt-content/uploads/2016/04/mt-0394-doc-img7.jpg"
                        },
                    ].map((each, eachIndex) => {
                        return (
                            <div style={{ flex: "0 1 200px" }}>
                                <Image alt='certificate' src={each.src} width={400} height={400} style={{ width: "100%", objectFit: "cover" }} />
                                <p style={{ textAlign: "center" }} className='makeBold'>Certificate</p>
                            </div>
                        )
                    })}
                </FlexWrapCenter>
            </section>

            <section>
                <EmailForm mainHeader='SEND ME A MESSAGE' />
            </section>
        </main>
    )
}
