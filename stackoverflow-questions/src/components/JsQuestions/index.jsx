import React, {useEffect, useState} from 'react';

export default function JsQuestions() {
    const [jsQuestion, setJsQuestion] = useState([]);

    const fetchData = () => {
        fetch('https://stackoverflow-api-py.herokuapp.com/api/javascript')
            .then(res => {
                console.log(res)
                return res.json()
            })
            .then(resData => setJsQuestion(resData)
            .catch(err => console.error(err))   
            );
    }
    console.log(jsQuestion);
    useEffect(() => {
        fetchData();
    }, [])
    console.log(jsQuestion);
    return (
        <div>
            <h2>JavaScript Questions from StackOver Flow</h2>
            <table>
                <tbody>
                    <tr>
                        <th>Question</th>
                        <th>Link</th>
                        <th>Summary</th>
                        <th>Answer</th>
                    </tr>
                    {
                        jsQuestion.slice(1).map((item, index) =>
                            <tr key={index}>
                                <td>{item.question}</td>
                                <td>{item.links}</td>
                                <td>{item.summary}</td>
                                <td>{item.answers}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}