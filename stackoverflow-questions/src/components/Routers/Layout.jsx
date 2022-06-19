import {Link, Routes, Route, useNavigate} from 'react-router-dom';

export default function Layout() {
    const navigate = useNavigate();

    return (
        <div>
            <div>
                <nav>
                    <div>
                    <button onClick={() => navigate(-1)}> &lt; </button>
                    <button onClick={() => navigate(+1)}> &gt; </button>
                    </div>
                    <h1>Questions from Stack Overflow</h1>
                            <Link to='/'>Home</Link> | {' '}
                            <Link to='/js-questions'>Js Questions</Link> | {' '}
                            <Link to='/python-questions'>Python Questions</Link> | {' '}
                            <Link to='/C-questions'>C Questions</Link>    

                </nav>
            </div>
        </div>
    )
}