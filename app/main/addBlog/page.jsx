'use client'
import React, { useState } from 'react';
import styles from '../../AddBlog.module.css';

const AddBlog = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission logic here
    console.log('Title:', title);
    console.log('Description:', description);
    // Reset form fields
    setTitle('');
    setDescription('');
  };

  return (
    <div className={styles.addBlog}>
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <button type="submit" className={styles.submitButton}>Add Blog</button>
      </form>
    </div>
  );
};

export default AddBlog;
