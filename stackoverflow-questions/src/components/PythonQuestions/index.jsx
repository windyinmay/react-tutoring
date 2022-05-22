import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';

export default function PythonQuestions() {
    const [PyQuestion, setPyQuestion] = useState([]);

    const fetchData = async () => {
        try {
            const res = await axios.get("https://stackoverflow-api-py.herokuapp.com/api/python")
            return res.data
        }
        catch (err) {
            console.log(err)
        }
    }
    const randomizeId = () => Math.floor(Math.random() * 10000)
    
    useEffect(() => async () => {
        const questions = await fetchData();
        const arr = []
        questions.forEach(q => {
            const withId = { ...q, id: randomizeId() }
            arr.push(withId)
        })
        setPyQuestion(arr);
        console.log(arr);
        //ask again about life cycle
    }, [PyQuestion])

    const columns = [
        {field: 'question', headName: 'Questions', width: 350},
        { field: 'links', headName: 'Links', width: 250 },
        { field: 'answers', headName: 'Answers', width: 100 },
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