import React, {useState} from 'react'

export default function AddCourseInfo(props) {
    const [courseInfo, setCourseInfo] = useState({code: '', name: '', degree: '', startDate: '', endDate: ''});
   // const [courseInfos, setCourseInfos] = useState([]);
    console.log(props.setInfos)

    const inputChanged = (e) => {
        setCourseInfo({...courseInfo, [e.target.name]: e.target.value});
    }

    const addCourse = (e) => {
        console.log(courseInfo)
        props.setInfos([...props.infos, courseInfo]);
    }

    return (
        <div style={{height: 800, width: '90%', padding: '50'}}>
            <input type="text" onChange={inputChanged} placeholder="Course code" name="code" value={courseInfo.code}/>
            <input type="text" onChange={inputChanged} placeholder="Course name" name="name" value={courseInfo.name}/>
            <input type="text" onChange={inputChanged} placeholder="Course degree" name="degree" value={courseInfo.degree}/>
            <input type="date" onChange={inputChanged} placeholder="Course start date" name="startDate" value={courseInfo.startDate}/>
            <input type="date" onChange={inputChanged} placeholder="Course end date" name="endDate" value={courseInfo.endDate}/>
            <button onClick={addCourse}>Add Course</button>
        </div>
    )
}