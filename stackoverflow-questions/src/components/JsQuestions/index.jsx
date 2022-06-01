import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import { randomizeId } from '../../utils/helpers';

export default function JsQuestions() {
    const [jsQuestion, setJsQuestion] = useState([]);

    const fetchData = async () => {
        try {
            const res = await axios.get('https://stackoverflow-api-py.herokuapp.com/api/javascript')
            return res.data
        } catch (err) {
            console.log(err)
        }
    }

    // const fetchData = async () => await axios.get('https://stackoverflow-api-py.herokuapp.com/api/javascript')
    //     .then((res) => res.json())
    //     .then(res => {
    //         console.log(res)
    //         return res.Data
    //     })
    //     .catch(err => console.log(err));

    useEffect(() => async () => {
        const questions = await fetchData();
        //manipulate array before call in rows in dataGrid, MUI error asked for unique id
        const arr = []
        questions.forEach(q => {
            const withId = { ...q, id: randomizeId() }
            arr.push(withId)
        })
        setJsQuestion(arr);
        console.log(arr);
        //ask again about life cycle
    }, [])

    const columns = [
        //{field: 'id', headName: 'Id', width: 50},
        {field: 'question', headName: 'Questions', minWidth: 350, flex: 1},
        { field: 'links', headName: 'Links', minWidth: 300, flex: 1 },
        { field: 'answers', headName: 'Answers', Width: 50 },
        { field: 'votes', headName: 'Votes', width: 50 },
        { field: 'tags', headName: 'Tags', minWidth: 300, flex: 1 }
    ]

    if (!jsQuestion) return <h1>Loading...</h1> 
        
    return (
        <div>
            <h2>JavaScript Questions from Stack OverFlow</h2>
            <div style={{ display:'table',tableLayout:'fixed', height: 400, width: '100%' }}>
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