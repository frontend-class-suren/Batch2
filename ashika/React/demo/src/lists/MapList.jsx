import React from 'react'
import Student from './Student';

const MapList = () => {
  // const students = ["simran","Ashika","Priya"];
  const students = [
    {id: 1,rollno:"12BCA",Name:"Simran"},
    {id: 2,rollno:"11BCA",Name:"Ashika"},
    {id: 3,rollno:"10BCA",Name:"Priya"},

  ]
  return (
  <>
  <h1>List of students are below:</h1>
  <ul>
    {students.map((student)=><Student key= {student.id} RollNo={student.rollno} Name={student.Name}/>)}
  </ul>
  </>
  )
}

export default MapList