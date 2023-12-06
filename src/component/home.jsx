// src/Registration.js
import React, { useState } from 'react';

const Registration = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your registration logic here
    console.log('Form submitted:', formData);
  };

  return (
    
    <div style={styles.container}>
      <h2 style={styles.heading}>Create a new account</h2>
      <h4 style={styles.heading}>It's quick and easy.</h4>
      <hr></hr>
     
      <form style={styles.form} onSubmit={handleSubmit}>

        <label style={styles.label}>
          Username:
          <input
            style={styles.input}
            type="text"
            name="username"
            placeholder='Enter Username'
            value={formData.username}
            onChange={handleChange}
            required
          />
        </label>
      
        <label style={styles.label}>
          Email:
          <input
            style={styles.input}
            type="email"
            name="email"
            placeholder='Email'
            required
            value={formData.email}
            onChange={handleChange}
          />
<label style={styles.label}>
          Phone Number
          <input
            style={styles.input}
            type="text"
            name="  Phone Number"
            placeholder='Enter Phone Number '
           
            required
          />
        </label>
        
          
          
        </label>
       
        <label style={styles.label}>
          Password:
          <input
            style={styles.input}
            type="password"
            name="password"
            placeholder='Enter Password'
            value={formData.password}
            onChange={handleChange}
            required
          />
          
        </label>

        <label style={styles.label}>
          Confirm Password
          <input
            style={styles.input}
            type="password"
            name="Confirm password"
            placeholder='Confirm Password'
           
            required
          />
        </label>
        <h6 style={styles.footer}></h6>
        <br />
        <button style={styles.button} type="submit"  >
         Sign Up
        </button>
      </form>

      {/* <h4 style={styles.foot}>People who use our service may have uploaded your contact <span><br></br></span>information to Facebook. Learn more.

By clicking Sign Up,<span><br></br></span> you agree to our Terms, Privacy Policy and Cookies Policy.<span><br></br></span> You may receive SMS notifications from us <span><br></br></span>and can opt out at any time.</h4> */}
       
       <h4 style={styles.footer}>Already have an account?</h4>


    </div>

    
  );
};

const styles = {
  container: {
    maxWidth: '900px',
    margin: 'auto',
    padding: '40px',
    border: '1px solid #ccc',
    borderRadius: '20px',
    marginTop: '30px',
    background:"#D3D3D3"
    
    
  },
  heading: {
    textAlign: 'center',
    color:"blue"

  },
  form: {
    marginTop: '20px',
  },
  label: {
    display: 'block',
    marginBottom: '8px',
    color:"black"
  },
  input: {
    width: '100%',
    padding: '8px',
    marginBottom: '16px',
    boxSizing: 'border-box', borderRadius: '10px',
  },
  button: {
    width: '100%',
    padding: '10px',
    background: 'Green',
    color: '#fff',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    
  },
  footer:{
    color:"blue"
  }
  
 
};

export default Registration;
