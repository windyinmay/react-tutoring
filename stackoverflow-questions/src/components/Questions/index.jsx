import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import { randomizeId } from '../../utils/helpers';
import { useLocation } from 'react-router-dom';

import Layout from '../Routers/Layout';

export default function Questions() {
    const [data, setData] = useState({
        title: "",
        questions: []
    })
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const location = useLocation()

    const fetchData = async (questionType) => {
        try {
            const res = await axios.get(`https://stackoverflow-api-py.herokuapp.com/api/${questionType}`)
            return res.data
        }
        catch (error) {
            setIsLoaded(true);
            setError(error);
        }
    }

    // If you read the article, it's a very bad way to use async right here for useEffect
    // So no async here
    useEffect(() => {
        // We should setIsloaded to false here, try to remove it and the loading just doesn't work
        // One way to explain it is that when the the state doesn't know when the
        // useEffect is triggered, so declaring it here make sure that the state knows
        // when the useEffect is triggered to set the isLoaded state to the right state
        setIsLoaded(false)

        const getQuestions = async () => {
            let temp = []
            let title = ""
            const questions = []
            try {
                if (location.pathname === "/js-questions") {
                    temp = await fetchData("javascript");
                    title = "Javascript"
                } else if (location.pathname === "/python-questions") {
                    temp = await fetchData("python");
                    title = "Python"
                } else if (location.pathname === "/C-questions") {
                    temp = await fetchData("C");
                    title = "C"
                }
    
                temp.forEach(q => {
                    const withId = { ...q, id: randomizeId() }
                    questions.push(withId)
                })

                // Since it is an async function, it won't work as expected if we return the data 
                // only inside useEffect
                // So instead of returning values, we set the data to a state to use later 
                setData({title, questions})

                // After setting the data to a state, we declare that the data is already loaded
                setIsLoaded(true)
            } catch (error) {
                setIsLoaded(true);
                setError(error);
            }
        }
        getQuestions()
        
    }, [location])

    const columns = [
        { field: 'question', headName: 'Questions', minWidth: 350, flex: 1 },
        { field: 'links', headName: 'Links', minWidth: 300, flex: 1 },
        { field: 'answers', headName: 'Answers', Width: 50 },
        { field: 'votes', headName: 'Votes', width: 50 },
        { field: 'tags', headName: 'Tags', minWidth: 300, flex: 1 }
    ]
    
    if (error) {
        return <div>Error: {error.message}</div>;
    }
    
    // You don't have to always to use if else
    // If alone is enough and negate the value so that there's no need to use if else
    if (!isLoaded) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <Layout />
            <h2>{data.title} Questions from Stack OverFlow</h2>
            <div style={{ display: 'table', tableLayout: 'fixed', height: 400, width: '100%' }}>
                <DataGrid
                    rows={data.questions.slice(1)}    
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                    disableSelectionOnClick
                    // the console complains about onRowClick and onCellClick
                    // so remove those because if you wanna use it there should be
                    // functions to go along with those attributes
                />
            </div>
        </div>
    )
}