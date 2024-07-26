'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import styles from '../Login.module.css';
import { useRouter } from 'next/navigation';

const Login = () => {
 const [email, setEmail] = useState('')
 const [password, setPassword] = useState('')
 const navigate = useRouter()
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
     const res = await fetch('http://localhost:5000/api/users/login', {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify({email, password}),
      headers: {'Content-Type': 'application/json'}
     })
    
     navigate.push('/')
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className={styles.inputGroup}>
          <label htmlFor="email">Email</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required 
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="password">Password</label>
          <input 
            type="password" 
            id="password" 
            name="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required 
          />
        </div>
        <button type="submit" className={styles.button}>Login</button>
        <div className={styles.signup}>
          <p>Don't have an account? <Link href="/register">Sign up</Link></p>
        </div>
      </form>
    </div>
  );
};

export default Login;