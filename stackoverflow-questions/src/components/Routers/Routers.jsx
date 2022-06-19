import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import JsQuestions from '../JsQuestions';
import PythonQuestions from '../PythonQuestions';
import CQuestions from '../CQuestions';
import Home from '../../views/Home';

export default function Routers() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route index element={<Home/>} />
                <Route path="js-questions" element={<JsQuestions/>}/>
                <Route path="python-questions" element={<PythonQuestions/>} />
                <Route path="C-questions" element={<CQuestions />}/>
            </Routes>
        </BrowserRouter>
    );
}