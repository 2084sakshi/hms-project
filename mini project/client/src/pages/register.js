import { Button, Form, Input } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from 'react-router-dom';


function Register() {
  const navigate = useNavigate();
  const onFinish = async(values) => {
    try{
      const res = await axios.post("http://localhost:3000/api/user/register", values);

      if(res.data.success){
        toast.success(res.data.message);
        navigate("/login");
      }
      else{
        toast.error(res.data.message);
          }
        }
    catch(err){
    toast.error(err.response.data.message);

      }
  };
    return (
        <div className="authentication">
       <div className="authentication__form card p-2">
        <h1 className="card-title">Welcome to Medconnect</h1>
       <Form layout = "vertical" onFinish={onFinish} >
         <Form.Item label = "Name" name = "name">
          <Input placeholder="Username" />  
         </Form.Item>
          <Form.Item label = "Email" name = "email">
            <Input placeholder="Email" />
          </Form.Item>
          <Form.Item label = "Password" name = "password" type = "password">
            <Input placeholder="Password" />
          </Form.Item>
        <Button type="primary" htmlType="submit" className="btn primary-btn mt-2">Register</Button>
        <Link to="/login" className="btn secondary-btn mt-2">Login</Link>
       </Form>
        </div>
        </div>
    );
    }

export default Register;