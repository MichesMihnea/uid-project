import React, {Component} from 'react'

function FaqPage() {

    const questions = [
        {question: "How many providers are currently using the application?", answer: "We have thousands of providers currently activating."},
        {question: "Does the platform actually work?", answer: "Absolutely!"},
        {question: "Is this a good alternative to platforms like Fiverr?", answer: "We strongly recommend our application."}
    ]

    return(
        <div>
            <h1>Your Announcements</h1>
            <div className="add-request">
                {questions.map((question) => (
                    <div className="announcement-wrapper">
                        <h3 style={{"marginBottom": "20px"}}>Q: {question.question}</h3>
                        <h4 style={{"marginBottom": "20px"}}>A: {question.answer}</h4>
                    </div>
                ))            
            }
            </div>
        </div>
    )
}

export default FaqPage