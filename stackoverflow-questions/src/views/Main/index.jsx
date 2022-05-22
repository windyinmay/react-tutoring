import React from 'react'
import JsQuestions from '../../components/JsQuestions'
import PythonQuestions from '../../components/PythonQuestions'

export default function Main() {
    //implement switch views
    return (
        <div>
            <JsQuestions />
            <PythonQuestions/>
        </div>
    )
}