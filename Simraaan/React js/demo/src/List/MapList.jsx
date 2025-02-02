import React from 'react'
import Student from './Student';

const MapList = () => {
    // const students = ["Simran", "Ashika", "Priya"];
    const students=[
        {id: 1, rollno:'1BCA', Name: 'Simran'},
        {id: 2, rollno:'2BCA', Name: 'Ashika'},
        {id: 3, rollno:'3BCA', Name: 'Priya'}

    ]
    return (
        <>
            <h1>List of Students are Below:</h1>
            <ul>
                {students.map((student)=><Student  key={student.id} Rollno={student.rollno} Name={student.Name} />)}
                
            </ul>
        </>
    )
}

export default MapList