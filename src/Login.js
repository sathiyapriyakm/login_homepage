import {
  Typography,
  Button,
} from '@mui/material'

import React from 'react'
import { useFormik } from 'formik'
import * as Yup from "yup";

import TextField from '@mui/material/TextField'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';


export function Login() {

  const navigate = useNavigate();
  const [errorMsg, setErrorMsg] = useState("");


  const loginUser = (userDetail) => {
    let tempPassword = userDetail.Password.split("");
    let result = tempPassword.map(Number).reduce((acc, curr) => acc + curr, 0);
    if (result === 10) {
      navigate("/DropDownComponent");
    } else {
      setErrorMsg("Invalid Credential");
    }
  };
  const initialValues = {
    UserEmail: '',
    Password: '',
  }
  const userValidationSchema = Yup.object({
    UserEmail: Yup.string().email().required('Required'),
    Password: Yup.number("Please enter number").required('Required'),
  })

  const { handleBlur, handleChange, handleSubmit, values, errors, touched } = useFormik({
    initialValues: initialValues,
    validationSchema: userValidationSchema,
    onSubmit: (userDetail) => {
      console.log("onSubmit", userDetail);
      loginUser(userDetail);
    },
  });

  return <div className="add-user-container">
    <form
      onSubmit={handleSubmit}
      className="add-user-form" >
      <Typography variant="h4" pb={2}
        sx={{
          textAlign: 'center',
        }}>
        Login Details
      </Typography>

      <TextField
        className="add-user-name"
        label="User Email"
        type="email"
        value={values.UserEmail}
        name="UserEmail"
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.UserEmail && errors.UserEmail ? true : false}
        helperText={touched.UserEmail && errors.UserEmail ? errors.UserEmail : ""}
      />
      <TextField
        className="add-user-name"
        label="Password"
        type="password"
        value={values.Password}
        name="Password"
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.Password && errors.Password ? true : false}
        helperText={touched.Password && errors.Password ? errors.Password : ""}
      />
      <Button className="add-user-btn"
        style={{backgroundColor:"turquoise"}}
        type="submit"
        variant="contained">Login</Button>
      <div className="text-center" style={{ color: "red" }}>
        {errorMsg}
      </div>

    </form>
  </div>;
}

