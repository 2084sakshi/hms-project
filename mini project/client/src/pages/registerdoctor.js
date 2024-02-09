import { Button, Form, Input, Select } from "antd";
import React from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import './../css/admin.css'

const { Option } = Select;

function RegisterDoctor() {
  const navigate = useNavigate();

  const onFinish = async (values) => {
    try {
      // Your registration logic for doctors goes here

      // Redirect to doctor dashboard on successful registration
      navigate("/doctor");
    } catch (err) {
      // Handle errors
      toast.error("An error occurred while processing your request.");
    }
  };

  return (
    <div className="authentication">
      <div className="authentication__form card p-2">
        <h1 className="card-title">Doctor Registration</h1>
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item label="Name" name="name">
            <Input placeholder="Username" />
          </Form.Item>
          
          <Form.Item label="Email" name="email">
            <Input placeholder="Email" />
          </Form.Item>
          <Form.Item label="Password" name="password" type="password">
            <Input placeholder="Password" type="password" />
          </Form.Item>
          <Button type="primary" htmlType="submit" className="btn primary-btn mt-2">
            Register
          </Button>
          <Link to="/login-doctor" className="btn anchor mt-2">
            Login
          </Link>
        </Form>
      </div>
    </div>
  );
}

export default RegisterDoctor;
