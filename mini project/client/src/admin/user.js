import React, { useState, useEffect } from 'react';
import Header from './adminheader';
import './../css/admin.css';

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/admin/users');
        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }
        const data = await response.json();
        // Map received data to match the required format
        const formattedUsers = data.map((user, index) => ({
          userId: user._id,
          srno: index + 1,
          name: user.name,
          email: user.email,
          gender: user.gender,
          mobile: user.mobileNo,
          isDoctor: user.role === 'doctor', // Assuming role 'doctor' indicates a doctor user
          age: user.age,
        }));
        setUsers(formattedUsers);
      } catch (error) {
        console.error('Error fetching users:', error.message);
      }
    };

    fetchUsers();
  }, []);

  const handleRemoveUser = async (userId) => {
    try {
      // Make API call to delete the user based on userId
      const response = await fetch(`http://localhost:5000/api/admin/users/${userId}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Failed to remove user');
      }
      // Remove the user from the local state
      const updatedUsers = users.filter((user) => user.userId !== userId);
      setUsers(updatedUsers);
    } catch (error) {
      console.error('Error removing user:', error.message);
    }
  };
  

  return (
    <>
      <header>
        <Header onLogout={() => {}} />
      </header>
      <div className='user-list-header '>
        <h1>User List</h1>
        <div className='user-list-table'>
        <table >
          <thead>
            <tr>
              <th>Sr No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Phone Number</th>
        
              <th>Age</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.userId}>
                <td>{user.srno}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.gender}</td>
                <td>{user.mobile}</td>
                <td>{user.age}</td>
                <td>
                  <button onClick={() => handleRemoveUser(user.userId)}>Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </div>
    </>
  );
}

export default UserList;
