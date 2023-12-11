import React from 'react'
import styles from "./page.module.css"
import TwoColumn from '@/components/twoColumn/TwoColumn'
import { getPhone } from '@/useful functions/retrievePinesInfo'
import PatientOpinions from '@/components/patientOpinions/PatientOpinions'

export default function page() {
    return (
        <main>
            <section>
                <TwoColumn
                    elementSizing={["1 1 300px", "3 1 300px"]}

                    firstEl={
                        <div className={styles.consultationsDiv} style={{ backgroundColor: "rgb(var(--primaryColor))", padding: "2rem" }}>
                            <h2 style={{ marginBottom: "1rem" }}>Choose a Service</h2>
                            <p>General Dental Consultation (20 minutes session)</p>
                            <p>Follow-up Dental Consultation (within one week of the initial visit for the same concern)</p>
                            <p>Follow-up Dental Consultation (related to chronic conditions or contraception)</p>
                            <p>In-depth Dental Consultation with Our Clinicians</p>
                            <p>Phone Consultation</p>
                            <p>Email Consultations</p>
                            <p>Recurring Prescription by Phone</p>
                        </div>
                    }
                    secondEl={
                        <div className={styles.overViewDiv}>
                            <h1 style={{ textAlign: "start", marginBottom: "1rem" }}>Dental Consultation</h1>
                            <h3>Dental consultations (20 minutes session)</h3>
                            <p>Our experienced dental team specializes in various fields, including oral health, preventive care, and specialized treatments.</p>
                            <p>Choose between 20-minute and 30-minute consultation sessions, tailored to the depth of your dental concerns.</p>
                            <p>Follow-up consultations receive discounted rates.</p>
                            <p>Pricing includes basic services such as examinations, discussions, and post-consultation guidance.</p>
                            <p>Additional services like dental tests, treatments, and medications are priced separately.</p>

                            <h3 style={{ margin: "1.5rem 0 .5rem 0" }}>Why Choose Our Dental Consultation Services</h3>
                            <p>Comprehensive dental care catering to a range of needs.</p>
                            <p>Dedicated, experienced professionals in the field.</p>
                            <p>Transparent pricing with no hidden costs.</p>
                            <p>Access to extended services such as diagnostic tests and medications.</p>
                            <p>If necessary, seamless referrals to specialist practitioners at no extra cost.</p>

                            <h3 style={{ margin: "1.5rem 0 .5rem 0" }}>Schedule Your Dental Consultation:</h3>
                            <p>Feel free to contact us for any dental concerns or to book an appointment with our dental team. For more information on how to get in touch, please visit our &quot;Contact Us&quot; page.</p>

                            <div>
                                <TwoColumn
                                    style={{
                                        alignItems: "flex-start",
                                        justifyContent: "center",
                                        gap: "1rem",
                                        padding: "2rem 0",
                                        marginTop: "2rem",
                                        borderTop: "1px solid rgb(var(--blackWhiteSwitch))"

                                    }}
                                    elementSizing={["1 1 200px", "0 1 200px"]}
                                    firstEl={
                                        <div className={styles.buttonCont}>
                                            <p >For more information about our dental services, please call Alpha Dental at {getPhone()}.</p>

                                            <p style={{ marginTop: "1rem" }}>Also you can choose the best time for appointment.</p>
                                        </div>}
                                    secondEl={<button className='bttn1'>Contact Us</button>}
                                />
                            </div>
                        </div>
                    }
                />
            </section>

            <section>
                <h1 className='giantText'>WHAT OUR PATIENTS SAY</h1>

                <PatientOpinions />
            </section>
        </main>
    )
}
