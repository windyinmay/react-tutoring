import React from 'react';
import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";
import JsQuestions from '../../components/JsQuestions';
import PythonQuestions from '../../components/PythonQuestions';
import CQuestions from '../../components/CQuestions';


export default function Main() {
    
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />} />
                <Route index element={<Layout />} />
                <Route path="js-questions" element={<JsQuestions/>} />
                <Route path="python-questions" element={<PythonQuestions />} />
                <Route path="C-questions" element={<CQuestions />} />
            </Routes>
        </BrowserRouter>
    );
    
    function Layout() {
        return (
            <div>
                <>
                <h1>Questions from Stack Overflow</h1>
                <nav>
                    <Link to='/home'>Home</Link> | {' '}
                    <Link to='/js-questions'>Js Questions</Link> | {' '}
                    <Link to='/python-questions'>Python Questions</Link> | {' '}
                    <Link to='/C-questions'>C Questions</Link>
                </nav>
                <Outlet />
                </>
                <h3>Let's check the questions</h3>
            </div>
        )
    }
}