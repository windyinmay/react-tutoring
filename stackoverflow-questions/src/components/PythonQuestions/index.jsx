import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';

export default function PythonQuestions() {
    const [PyQuestion, setPyQuestion] = useState([]);

    const fetchData = async () => await axios.get('https://stackoverflow-api-py.herokuapp.com/api/python')
        .then((res) => res.json())
        .then(resData => setPyQuestion(resData))
        .catch(err => console.log(err));
    
    useEffect(() => async () => {
        const questions = await fetchData();
        setPyQuestion(questions);
        console.log(PyQuestion);
        //ask again about life cycle
    }, [PyQuestion])

    const columns = [
        {field: 'questions', headName: 'Questions', width: 120},
        { field: 'links', headName: 'Links', width: 150 },
        { field: 'answers', headName: 'Answers', width: 50 },
        { field: 'votes', headName: 'Votes', width: 50 },
        { field: 'tags', headName: 'Tags', width: 120 }
    ]
        
    return (
        <div>
            <h2>Python Questions from Stack OverFlow</h2>
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={PyQuestion.slice(1)}
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