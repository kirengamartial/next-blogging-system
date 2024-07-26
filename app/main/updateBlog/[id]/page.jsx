'use client'
import React, { useState, useEffect } from 'react';
import styles from '../../../AddBlog.module.css';
import { useRouter } from 'next/navigation';

const UpdateBlog = ({params: {id}}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useRouter()

  useEffect(() => {
    const handleData = async() => {
       const res = await fetch(`http://localhost:5000/api/blogs/${id}`)
       const data = await res.json()

       setTitle(data.title)
       setDescription(data.description)
    }
    handleData()
  }, [])

  const handleSubmit = async(e) => {
    e.preventDefault();
     try {
      
      await fetch(`http://localhost:5000/api/blogs/edit/${id}`, {
        method: 'PUT',
        credentials: 'include',
        body: JSON.stringify({title, description}),
        headers: {'Content-type': 'application/json'}
      })

      navigate.push('/')
     } catch (error) {
      console.log(error)
     }
  };

  return (
    <div className={styles.addBlog}>
      <h2>Edit Blog</h2>
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
        <button type="submit" className={styles.submitButton}>Edit Blog</button>
      </form>
    </div>
  );
};

export default UpdateBlog;
