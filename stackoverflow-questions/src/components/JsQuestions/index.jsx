import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';

export default function JsQuestions() {
    const [jsQuestion, setJsQuestion] = useState([]);

    const fetchData = async () => await axios.get('https://stackoverflow-api-py.herokuapp.com/api/javascript')
        .then((res) => res.json())
        .then(resData => setJsQuestion(resData))
        .catch(err => console.log(err));
    
    useEffect(() => async () => {
        const questions = await fetchData();
        setJsQuestion(questions);
        console.log(jsQuestion);
        //ask again about life cycle
    }, [jsQuestion])

    const columns = [
        {field: 'questions', headName: 'Questions', width: 120},
        { field: 'links', headName: 'Links', width: 150 },
        { field: 'answers', headName: 'Answers', width: 50 },
        { field: 'votes', headName: 'Votes', width: 50 },
        { field: 'tags', headName: 'Tags', width: 120 }
    ]
        
    return (
        <div>
            <h2>JavaScript Questions from Stack OverFlow</h2>
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={jsQuestion.slice(1)}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                    disableSelectionOnClick
                />
            </div>
        </div>
    )
}