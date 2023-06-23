
import React from "react";


// 보내는 쪽에서 : employees={employees} 이와 같이 보내고
// 받는 쪽에서 : { employees } 와 같이 받게 되면 
// 객체분해 할당이 진행되어 보낸쪽의 employees props객체의 주소가
// employees 변수로 전달되어 props.employees 와 같이 안받아도 됨.
export default function MapObjListExample(props) {
  return (
    <div>
      <h2>Employee List</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Zipcode</th>
            <th>Addr1</th>
            <th>Addr2</th>
          </tr>
        </thead>
        <tbody>
          {props.employees.map((employee, index) => (
            <tr key={index}>
              <td>{employee.name}</td>
              <td>{employee.age}</td>
              <td>{employee.address.zipcode}</td>
              <td>{employee.address.addr1}</td>
              <td>{employee.address.addr2}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}