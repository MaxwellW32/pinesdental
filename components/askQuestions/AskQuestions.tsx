"use client"
import React, { useState } from 'react'

export default function AskQuestions() {
    const initialFormInfo: {
        questions: string[] | null
    } = {
        questions: null
    }
    const [formInfo, formInfoSet] = useState({ ...initialFormInfo })

    //standary questions we can answer here
    //make own questions
    const handleAddQuestion = () => {
        formInfoSet(prevInfo => {
            const newInfo = { ...prevInfo }
            if (newInfo.questions === null) {
                newInfo.questions = [""]

                return newInfo
            }

            newInfo.questions = [...newInfo.questions, ""]

            return newInfo
        })
    }

    const handleSubmit = () => {
    }
    return (
        <div style={{ backgroundColor: "rgb(var(--primaryColor))", padding: "2rem 1rem", display: "grid", justifyItems: "center", gap: "2rem", alignContent: "flex-start", width: "min(500px, 100%)", justifySelf: "flex-end" }}>
            <svg style={{ width: "var(--largeSvg)", fill: "rgb(var(--whiteBlackSwitch))", color: "rgb(var(--whiteBlackSwitch))" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" /></svg>

            <h3 style={{ color: "rgb(var(--whiteBlackSwitch))" }}>Any Questions?</h3>

            {formInfo.questions !== null && (
                <div style={{ display: "grid", gap: "1rem" }}>
                    {formInfo.questions.map((eachQuestion, eachQuestionIndex) => {
                        return (
                            <div key={eachQuestionIndex} style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
                                <svg className='closeSvg' style={{ fill: "rgb(var(--whiteBlackSwitch))" }} onClick={() => {
                                    formInfoSet(prevInfo => {
                                        const newInfo = { ...prevInfo }
                                        if (newInfo.questions === null) newInfo.questions = []

                                        newInfo.questions = newInfo.questions.filter((eachQ, eachQIndex) => eachQIndex !== eachQuestionIndex)
                                        console.log(`$seeinf`, eachQuestion, newInfo);
                                        if (newInfo.questions.length === 0) newInfo.questions = null
                                        return newInfo
                                    })
                                }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm79 143c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z" /></svg>

                                <input type='text' style={{ color: "rgb(var(--whiteBlackSwitch))", }} placeholder="What's your question?" value={eachQuestion}
                                    onChange={(e) => {
                                        formInfoSet(prevInfo => {
                                            const newInfo = { ...prevInfo }
                                            if (newInfo.questions === null) newInfo.questions = []

                                            newInfo.questions[eachQuestionIndex] = e.target.value

                                            return newInfo
                                        })
                                    }} />
                            </div>
                        )
                    })}
                </div>
            )}

            <button className='bttn1' onClick={handleAddQuestion}>Add a question</button>

            {formInfo.questions !== null && (
                <button className='bttn1' onClick={handleSubmit}>Submit</button>
            )}
        </div>
    )
}
