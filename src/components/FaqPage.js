import React, {Component} from 'react'

function FaqPage() {

    const questions = [
        {question: "Question 1", answer: "Answer 1"},
        {question: "Question 2", answer: "Answer 2"}
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