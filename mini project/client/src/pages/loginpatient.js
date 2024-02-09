import { Button, Form, Input, Select } from "antd";
import React from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import './../css/admin.css'

const { Option } = Select;

function LoginPatient() {
  const navigate = useNavigate();

  const onFinish = async (values) => {
    try {
      // Your login logic for patients goes here

      // Redirect to patient dashboard on successful login
      navigate("/patient");
    } catch (err) {
      // Handle errors
      toast.error("An error occurred while processing your request.");
    }
  };

  return (
    <div className="authentication">
      <div className="authentication__form card p-2">
        <h1 className="card-title">Patient Login</h1>
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
          <Link to="/register-patient" className="btn secondary-btn mt-2">
            Register
          </Link>
        </Form>
      </div>
    </div>
  );
}

export default LoginPatient;
