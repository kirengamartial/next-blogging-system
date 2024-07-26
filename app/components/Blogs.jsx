import React from 'react'
import styles from "../page.module.css";
import Link from 'next/link';


async function fetchBlog() {
    const res = await fetch('http://localhost:5000/api/blogs', { cache: 'no-store' })
  
    const data = await res.json()
    return data
  }

const Blogs = async() => {
    const blogs = await fetchBlog()
  return (
    <section className={styles.content}>
  <h2>Latest Posts</h2>
  <div className={styles.blogPostsContainer}>
    <div className={styles.blogPosts}>
      {blogs.map(blog => (
        <Link key={blog._id} href={`/main/${blog._id}`} className={styles.blogPost}>
          <h3>{blog.title}</h3>
          <p>{blog.description}</p>
        </Link>
      ))}
    </div>
  </div>
</section>
  )
}

export default Blogs
