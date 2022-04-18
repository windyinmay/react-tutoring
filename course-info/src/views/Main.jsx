import React, {useState} from 'react'
//import AppBar from '@material-ui/core/AppBar'
import CourseInfo from '../components/CourseInfo'
import AddCourseInfo from '../components/AddCourseInfo'

export default function Main() {
    const [infos, setInfos] = useState([]);

    return (
        <div className="App">
            <header className="App-header">Add Course Information</header>
            <AddCourseInfo className="Course-info" setInfos={setInfos} infos={infos}/>
            <CourseInfo className="Course-info" infos={infos}/>
        </div>
    )
}