import React, { useState, useEffect } from 'react';
import Header from './adminheader';

function UserList() {
  // Simulated data
  const [users, setUsers] = useState([]);

  // Simulating fetching data from the backend
  useEffect(() => {
    // Replace this with actual API call to fetch users from the backend
    const fetchUsers = async () => {
      // Simulated data
    const simulatedUsers = [
        { srno: 1, name: 'John Doe', email: 'john@example.com', age: 30, mobile: '1234567890', gender: 'Male', isDoctor: false },
        { srno: 2, name: 'Jane Smith', email: 'jane@example.com', age: 25, mobile: '9876543210', gender: 'Female', isDoctor: true },
        // Add more simulated users as needed
        { srno: 3, name: 'Alice Johnson', email: 'alice@example.com', age: 35, mobile: '5555555555', gender: 'Female', isDoctor: false },
        { srno: 4, name: 'Bob Williams', email: 'bob@example.com', age: 40, mobile: '6666666666', gender: 'Male', isDoctor: true },
        { srno: 5, name: 'Eve Brown', email: 'eve@example.com', age: 28, mobile: '7777777777', gender: 'Female', isDoctor: false },
        { srno: 6, name: 'Michael Davis', email: 'michael@example.com', age: 45, mobile: '8888888888', gender: 'Male', isDoctor: true },
        { srno: 7, name: 'Olivia Wilson', email: 'olivia@example.com', age: 32, mobile: '9999999999', gender: 'Female', isDoctor: false },
        { srno: 8, name: 'William Taylor', email: 'william@example.com', age: 50, mobile: '1111111111', gender: 'Male', isDoctor: true },
        { srno: 9, name: 'Sophia Anderson', email: 'sophia@example.com', age: 27, mobile: '2222222222', gender: 'Female', isDoctor: false },
        { srno: 10, name: 'James Martinez', email: 'james@example.com', age: 38, mobile: '3333333333', gender: 'Male', isDoctor: true },
        { srno: 11, name: 'Emily Thomas', email: 'emily@example.com', age: 33, mobile: '4444444444', gender: 'Female', isDoctor: false },
    ];

      setUsers(simulatedUsers);
    };

    fetchUsers();
  }, []);

  const handleRemoveUser = (userId) => {
    // Implement the logic to remove the user based on userId
    // Update the users state accordingly
    const updatedUsers = users.filter((user) => user.srno !== userId);
    setUsers(updatedUsers);
  };

  return (
    <>
     <header>
        <Header onLogout={() => {}} />
      </header>
    <div>
      <h1>User List</h1>
      <table>
        <thead>
          <tr>
            <th>Sr No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Mobile No</th>
            <th>Gender</th>
            <th>Is Doctor</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.srno}>
              <td>{user.srno}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.age}</td>
              <td>{user.mobile}</td>
              <td>{user.gender}</td>
              <td>{user.isDoctor ? 'Yes' : 'No'}</td>
              <td>
                <button onClick={() => handleRemoveUser(user.srno)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
}

export default UserList;
