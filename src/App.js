import React, {useState} from 'react';
import Employee from './Components/Employee';
import {v4 as uuidv4} from 'uuid';

function App() {
  const [role, setRole] = useState('dev');
  const [employees, setEmployees] = useState(
    [
      {name: 'Caleb', role: 'Developer', img: 'https://assets.entrepreneur.com/content/3x2/2000/1624449452-MohammadMatinHosseinabadiImage.jpg?format=pjeg&auto=webp&crop=4:3'},
      {name: 'Kayla', role: 'Manager', img: 'https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg'},
      {name: 'Mia', role: 'Intern', img: 'https://images.pexels.com/photos/3349122/pexels-photo-3349122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
      {name: 'Nguyen', role: 'Intern', img: 'https://images.pexels.com/photos/3690702/pexels-photo-3690702.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
      {name: 'Charlene', role: 'Intern', img: 'https://images.pexels.com/photos/3653167/pexels-photo-3653167.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
      {name: 'Lisa', role: 'Intern', img: 'https://images.pexels.com/photos/3348748/pexels-photo-3348748.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
    ]
  );
  const showEmployees = true;
  return (
    <div className="App">
      {showEmployees ? (
        <>
          <input
            type="text"
            onChange={(e) => {
              console.log(e.target.value);
              setRole(e.target.value)
            }}
          />
          <div className='flex flex-wrap justify-center'>
            {employees.map((employee) => {
              return (<Employee key={uuidv4()} name={employee.name} role={employee.role} img={employee.img} />)
            })}
          </div>
        </>
      ) : (
        <p>You cannot see employees</p>
      )}
    </div>
  );
}

export default App;
