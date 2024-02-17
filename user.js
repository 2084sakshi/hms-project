import React, { useState, useEffect } from 'react';
import Header from './adminheader';
import './../css/admin.css';

function UserList() {
  // Simulated data
  const [users, setUsers] = useState([]);

  // Simulating fetching data from the backend
  useEffect(() => {
    // Replace this with actual API call to fetch users from the backend
    const fetchUsers = async () => {
      // Simulated data
      const simulatedUsers = [
        { id: 1, name: 'John Doe', email: 'john@example.com', age: 30, mobile: '1234567890', gender: 'Male', isDoctor: false },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com', age: 25, mobile: '9876543210', gender: 'Female', isDoctor: true },
        // Add more simulated users as needed
        { id: 3, name: 'Alice Johnson', email: 'alice@example.com', age: 35, mobile: '5555555555', gender: 'Female', isDoctor: false },
        { id: 4, name: 'Bob Williams', email: 'bob@example.com', age: 40, mobile: '6666666666', gender: 'Male', isDoctor: true },
        { id: 5, name: 'Eve Brown', email: 'eve@example.com', age: 28, mobile: '7777777777', gender: 'Female', isDoctor: false },
        { id: 6, name: 'Michael Davis', email: 'michael@example.com', age: 45, mobile: '8888888888', gender: 'Male', isDoctor: true },
        { id: 7, name: 'Olivia Wilson', email: 'olivia@example.com', age: 32, mobile: '9999999999', gender: 'Female', isDoctor: false },
        { id: 8, name: 'William Taylor', email: 'william@example.com', age: 50, mobile: '1111111111', gender: 'Male', isDoctor: true },
        { id: 9, name: 'Sophia Anderson', email: 'sophia@example.com', age: 27, mobile: '2222222222', gender: 'Female', isDoctor: false },
        { id: 10, name: 'James Martinez', email: 'james@example.com', age: 38, mobile: '3333333333', gender: 'Male', isDoctor: true },
        { id: 11, name: 'Emily Thomas', email: 'emily@example.com', age: 33, mobile: '4444444444', gender: 'Female', isDoctor: false },
      ];

      setUsers(simulatedUsers);
    };

    fetchUsers();
  }, []);

  return (
    <>
      <header className='user-list-header'>
        <Header onLogout={() => {}} />
      </header>
      <section className="welcome-section" id="home">
        <div className='top-section'>
          <h2>
            <span>UserList</span></h2>
        </div>
      </section>
      <div className="user-list-table">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Mobile No</th>
              <th>Gender</th>
              <th>Is Doctor</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.age}</td>
                <td>{user.mobile}</td>
                <td>{user.gender}</td>
                <td>{user.isDoctor ? 'Yes' : 'No'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default UserList;
