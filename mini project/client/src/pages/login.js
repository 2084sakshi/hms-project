// Login.js
import { Button, Form, Input, Select } from "antd";
import React from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import './../css/admin.css'

const { Option } = Select;

function Login() {
  const navigate = useNavigate();

  const onFinish = async (values) => {
    try {
      //const res = await axios.post("http://localhost:5000/api/user/login", values);

      /*if (res.data.success) {
        toast.success("Redirecting to home page");
        localStorage.setItem("token", res.data.data);
      */
        // Redirect based on user type
        switch (values.userType) {
          case "admin":
            navigate("/admin");
            break;
          case "doctor":
            navigate("/doctor");
            break;
          case "patient":
            navigate("/patient");
            break;
          default:
            navigate("/");
        }
      } /*else {
        toast.error(res.data.message);
      }
    } */catch (err) {
      /*if (err.response && err.response.data && err.response.data.message) {
        toast.error(err.response.data.message);
      } else {*/
        toast.error("An error occurred while processing your request.");
      }
    }
  /*};*/


  return (
    <div className="authentication">
      <div className="authentication__form card p-2">
        <h1 className="card-title">Welcome Back</h1>
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item label="Email" name="email">
            <Input placeholder="Email" />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input.Password placeholder="Password" />
          </Form.Item>
          <Form.Item label="User Type" name="userType">
            <Select placeholder="Select User Type">
              <Option value="admin">Admin</Option>
              <Option value="doctor">Doctor</Option>
              <Option value="patient">Patient</Option>
            </Select>
          </Form.Item>
          <Button type="primary" htmlType="submit" className="btn primary-btn mt-2">
            Login
          </Button>
          <Link to="/register" className="btn secondary-btn mt-2">
            Register
          </Link>
        </Form>
      </div>
    </div>
  );
}

export default Login;
