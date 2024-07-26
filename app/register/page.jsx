import React from 'react';
import Link from 'next/link';
import styles from '../Register.module.css';

const Register = () => {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <h2>Register</h2>
        <div className={styles.inputGroup}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit" className={styles.button}>Register</button>
        <div className={styles.login}>
          <p>Already have an account? <Link href="/login">Login</Link></p>
        </div>
      </form>
    </div>
  );
};

export default Register;
