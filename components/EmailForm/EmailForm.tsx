"use client"
import React, { useState, FormEvent } from 'react'
import styles from "./emailform.module.css"
import { toast } from 'react-hot-toast'
import Z from "zod"
import emailjs from "@emailjs/browser";
import { userForm, userFormSchema } from '@/types'

export default function EmailForm() {

    const initialForm: userForm = {
        name: "",
        email: "",
        subject: "",
        message: ""
    }
    const [formObj, formObjSet] = useState({ ...initialForm })
    const [formError, formErrorSet] = useState<{ [key: string]: string | null }>({})

    const checkIfValid = (seenFormObj: userForm, option: string) => {

        if (option === "name") {
            console.log(`$se`, seenFormObj);
            if (userFormSchema.pick({ name: true }).safeParse(seenFormObj).success) {
                console.log(`$success seen for `, option);

                if (formError[option] !== null) {
                    formErrorSet(prevObj => {
                        prevObj[option] = null
                        return { ...prevObj }
                    })
                }

            } else {
                //nah
                console.log(`$nah can't submit this`, option);

                if (formError[option] === null) {
                    formErrorSet(prevObj => {
                        prevObj[option] = "Name has to be present"
                        return { ...prevObj }
                    })
                }
            }
        }

        if (option === "email") {
            if (userFormSchema.pick({ email: true }).safeParse(seenFormObj).success) {
                //success
                console.log(`$success seen for `, option);

                if (formError[option] !== null) {
                    formErrorSet(prevObj => {
                        prevObj[option] = null
                        return { ...prevObj }
                    })
                }
            } else {
                //nah
                console.log(`$nah can't submit this`, option);

                if (formError[option] === null) {
                    formErrorSet(prevObj => {
                        prevObj[option] = "Email has to be present"
                        return { ...prevObj }
                    })
                }
            }
        }

        if (option === "subject") {
            if (userFormSchema.pick({ subject: true }).safeParse(seenFormObj).success) {
                //success
                console.log(`$success seen for `, option);

                if (formError[option] !== null) {
                    formErrorSet(prevObj => {
                        prevObj[option] = null
                        return { ...prevObj }
                    })
                }
            } else {
                //nah
                console.log(`$nah can't submit this`, option);

                if (formError[option] === null) {
                    formErrorSet(prevObj => {
                        prevObj[option] = "Subject has to be present"
                        return { ...prevObj }
                    })
                }
            }
        }

        if (option === "message") {
            if (userFormSchema.pick({ message: true }).safeParse(seenFormObj).success) {
                //success
                console.log(`$success seen for `, option);

                if (formError[option] !== null) {
                    formErrorSet(prevObj => {
                        prevObj[option] = null
                        return { ...prevObj }
                    })
                }
            } else {
                //nah
                console.log(`$nah can't submit this`, option);

                if (formError[option] === null) {
                    formErrorSet(prevObj => {
                        prevObj[option] = "Message has to be present"
                        return { ...prevObj }
                    })
                }
            }
        }

    }

    const handleSubmit = async (formSubmitEvent: FormEvent<HTMLFormElement>) => {
        formSubmitEvent.preventDefault();
        if (!userFormSchema.safeParse(formObj).success) return toast.error("Form not valid")

        const seenFormEl = formSubmitEvent.target as HTMLFormElement

        const result = await emailjs
            .sendForm(
                `service_dfffusg`,
                `template_n2m1arg`,
                seenFormEl,
                `rKzfrKZJI8d6o86V-`
            )

        if ((result.status >= 200 && result.status < 300) || result.text === "OK") {
            console.log(`$success mans`, result);
            toast.success("Sent!")
            formObjSet({ ...initialForm })
        } else {
            toast.error("Couldn't send")
            console.log(`$seomething else happened`, result);
        }
    }

    return (
        <form method='POST' onSubmit={handleSubmit} className={styles.formDiv} style={{ backgroundColor: "rgb(var(--primaryColor))", padding: "2rem", display: "flex", flexDirection: "column" }}>
            <h1 style={{ color: "rgb(var(--whiteBlackSwitch))", textAlign: "center" }}>Contact US</h1>

            <div>
                <label htmlFor='sentName'>name</label>
                <input id='sentName' type='text' value={formObj.name} onChange={(e) => {
                    formObjSet(prevObj => {
                        prevObj.name = e.target.value

                        return { ...prevObj }
                    })
                }} name='name' placeholder='Please enter your name'
                    onBlur={() => {
                        checkIfValid(formObj, "name")
                    }} />
                {formError["name"]}
            </div>

            <div>
                <label htmlFor='sentEmail'>email</label>
                <input id="sentEmail" type='email' value={formObj.email} onChange={(e) => {
                    formObjSet(prevObj => {
                        prevObj.email = e.target.value
                        checkIfValid(prevObj, "email")

                        return { ...prevObj }
                    })
                }} name='email' placeholder='Please enter your email'
                    onBlur={() => {
                        checkIfValid(formObj, "email")
                    }} />
                {formError["email"]}

            </div>

            <div>
                <label htmlFor='sentSubject'>Subject</label>
                <input id="sentSubject" type='text' value={formObj.subject} onChange={(e) => {
                    formObjSet(prevObj => {
                        prevObj.subject = e.target.value
                        checkIfValid(prevObj, "subject")

                        return { ...prevObj }
                    })
                }} name='subject' placeholder='What is your topic about?'
                    onBlur={() => {
                        checkIfValid(formObj, "subject")
                    }} />
                {formError["subject"]}

            </div>

            <div>
                <label htmlFor='sentMessage'>Message</label>
                <input id="sentMessage" type='text' value={formObj.message} onChange={(e) => {
                    formObjSet(prevObj => {
                        prevObj.message = e.target.value
                        checkIfValid(prevObj, "message")

                        return { ...prevObj }
                    })
                }} name='message' placeholder='What is your message?'
                    onBlur={() => {
                        checkIfValid(formObj, "message")
                    }} />
                {formError["message"]}

            </div>

            <button disabled={!userFormSchema.safeParse(formObj).success} type='submit' className='bttn1' style={{ margin: "0 auto", justifySelf: "center", opacity: !userFormSchema.safeParse(formObj).success ? ".6" : "" }}>Send</button>
        </form>
    )
}
