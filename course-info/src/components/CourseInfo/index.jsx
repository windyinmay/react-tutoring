import React from 'react';

export default function courseInfo(props) {
    console.log(props.infos)
    return(
        <div>
            <h1>Added Courses</h1>
            <table>
                <tbody>
                  <tr>
                    <th><b>Code</b></th>
                    <th><b>Name</b></th>
                    <th><b>Degree</b></th>
                    <th><b>Start Date</b></th>
                    <th><b>End Date</b></th>
                    </tr>
                    {
                      props.infos.map((courseInfo, index) =>
                        <tr key={index}>
                            <td>{courseInfo.code}</td>
                            <td>{courseInfo.name}</td>
                            <td>{courseInfo.degree}</td>
                            <td>{courseInfo.startDate}</td>
                            <td>{courseInfo.endDate}</td>
                        </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}