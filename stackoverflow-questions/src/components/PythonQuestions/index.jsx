import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import { randomizeId } from '../../utils/helpers';
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
        {field: 'question', headName: 'Questions', minWidth: 350, flex: 1},
        { field: 'links', headName: 'Links', minWidth: 300, flex: 1 },
        { field: 'answers', headName: 'Answers', Width: 50 },
        { field: 'votes', headName: 'Votes', width: 50 },
        { field: 'tags', headName: 'Tags', minWidth: 300, flex: 1 }
    ]
        
    return (
        <div>
            <h2>Python Questions from Stack OverFlow</h2>
            <div style={{display:'table',tableLayout:'fixed', height: 400, width: '100%' }}>
                <DataGrid
                    rows={PyQuestion.slice(1)}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                    disableSelectionOnClick
                    onCellClick
                    onRowClick
                />
            </div>
        </div>
    )
}