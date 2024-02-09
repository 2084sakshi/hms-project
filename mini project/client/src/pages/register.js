import { Button, Form, Input,Select } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from 'react-router-dom';
import './../css/admin.css'

const { Option } = Select;

function Register() {
  const navigate = useNavigate();
  const onFinish = async(values) => {
    try{
     /* const res = await axios.post("http://localhost:5000/api/user/register", values);

      console.log("Response:", res.data);
      if(res.data.success){
        toast.success(res.data.message);
        console.log("success");
        navigate("/login");
      }
      else{
        toast.error(res.data.message);
        console.log("error");
          }*/
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
        }
    catch(err){
     // Check if err.response exists before accessing its properties
     /*if (err.response && err.response.data && err.response.data.message) {
      toast.error(err.response.data.message);
    } else {
      // Fallback error handling if response properties are not available*/
      toast.error("An error occurred while processing your request.");
    }
    console.log("error");

      }
  /*};*/

    return (
        <div className="authentication">
       <div className="authentication__form card p-2">
        <h1 className="card-title">Welcome to Medconnect</h1>
       <Form layout = "vertical" onFinish={onFinish} >

         <Form.Item label = "Name" name = "name">
          <Input placeholder="Username" />  
         </Form.Item>
         <Form.Item label="User Type" name="userType">
            <Select placeholder="Select User Type">
              <Option value="admin">Admin</Option>
              <Option value="doctor">Doctor</Option>
              <Option value="patient">Patient</Option>
            </Select>
          </Form.Item>
          <Form.Item label = "Email" name = "email">
            <Input placeholder="Email" />
          </Form.Item>

          <Form.Item label = "Password" name = "password" type = "password">
            <Input placeholder="Password" type = "password"/>
          </Form.Item>

        <Button type="primary" htmlType="submit" className="btn primary-btn mt-2">Register</Button>

        <Link to="/login" className="btn anchor mt-2">Login</Link>
       </Form>
        </div>
        </div>
    );
    }

export default Register;