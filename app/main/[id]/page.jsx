'use client'
import React, {useEffect, useState} from 'react';
import styles from '../../BlogPost.module.css';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const BlogPost = ({ params: {id} }) => {
 const [blog, setBlog] = useState({})
 const navigate = useRouter()

useEffect(() => {
  const fetchData = async() => {
     const res = await fetch(`http://localhost:5000/api/blogs/${id}`)
     const data = await res.json()
     setBlog(data)
  }
  fetchData()
}, [])

const handleDelete = async(id) => {
try {
 await fetch(`http://localhost:5000/api/blogs/delete/${id}`, {
  method: 'DELETE',
  credentials: 'include'
 }) 
 navigate.push('/')
} catch (error) {
  console.log(error)
}
}


  return (
    <div className={styles.container}>
      <div className={styles.buttons}>
        <button className={`${styles.button} ${styles.deleteButton}`} onClick={() => handleDelete(blog._id)}>Delete</button>
        <Link href={`/main/updateBlog/${id}`} className={`${styles.button} ${styles.updateButton}`} >Update</Link>
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>{blog.title}</h1>
        <p className={styles.description}>{blog.description}</p>
      </div>
    </div>
  );
};

export default BlogPost;
