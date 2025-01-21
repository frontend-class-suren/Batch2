import React from 'react'
import Student from './Student'

const Maplist = () => {
    // const students = ["Simran", "Ashika", "Priya"]
    const students = [
      {id: 1, rollno:"12Bca", name: 'Simran'},
      {id: 2, rollno:"13Bca", name: 'Ashika'},
      {id: 3, rollno:"14Bca", name: 'Priya'} 
    ]
  return (
    <>
    <h1>List of students are below:</h1>
    <ul>
        {students.map((student)=> <Student Key={student.id} Rollno={student.rollno} Name={student.name} />)}
    </ul>
    </>
  )
}

export default Maplist