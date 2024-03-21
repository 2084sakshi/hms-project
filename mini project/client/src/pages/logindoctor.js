import { Button, Form, Input, Select } from "antd";
import React from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import './../css/admin.css'

const { Option } = Select;

function LoginDoctor() {
  const navigate = useNavigate();

  const onFinish = async (values) => {
    try {
      // Your login logic for doctors goes here

      // Redirect to doctor dashboard on successful login
      console.log(values);
      navigate("/doctor");
    } catch (err) {
      // Handle errors
      toast.error("An error occurred while processing your request.");
    }
  };

  return (
    <div className="authentication">
      <div className="authentication__form card p-2">
        <h1 className="card-title">Doctor Login</h1>
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item label="Email" name="email">
            <Input placeholder="Email" />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input.Password placeholder="Password" />
          </Form.Item>
        
          <Button type="primary" htmlType="submit" className="btn primary-btn mt-2">
            Login
          </Button>
          <Link to="/register-doctor" className="btn secondary-btn mt-2">
            Register
          </Link>
        </Form>
      </div>
    </div>
  );
}

export default LoginDoctor;
