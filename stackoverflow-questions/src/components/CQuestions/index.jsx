import React, { useState, useEffect } from "react";
import axios from 'axios';
import { DataGrid } from "@mui/x-data-grid";
import { randomizeId } from "../../utils/helpers";
import Layout from "../Routers/Layout";


export default function CQuestions() {
    const [CQuestion, setCQuestion] = useState([]);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    const fetchData = async () => {
        try {
            const res = await axios.get('https://stackoverflow-api-py.herokuapp.com/api/C')
            setIsLoaded(true);
            return res.data
        } catch (error) {
            setIsLoaded(true);
            setError(error);
        }
    }
    useEffect(() => async () => {
        const questions = await fetchData();
        const arr = []
        questions.forEach(q => {
            const withId = { ...q, id: randomizeId() }
            arr.push(withId)
        })
        setCQuestion(arr);
        console.log(arr);
        //ask again about life cycle
    }, [CQuestion])
    
    const columns = [
        { field: 'question', headName: 'Questions', minWidth: 350, flex: 1 },
        { field: 'links', headName: 'Links', minWidth: 300, flex: 1 },
        { field: 'answers', headName: 'Answers', Width: 50 },
        { field: 'votes', headName: 'Votes', width: 50 },
        { field: 'tags', headName: 'Tags', minWidth: 300, flex: 1 }
    ]
    
    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <div>
                <Layout/>
                <h2>C Questions from Stack OverFlow</h2>
                <div style={{ display: 'table', tableLayout: 'fixed', height: 400, width: '100%' }}>
                    <DataGrid
                        rows={CQuestion.slice(1)}
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
}