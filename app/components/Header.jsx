'use client'
import React, {useState, useEffect} from 'react'
import styles from "../page.module.css";
import Link from 'next/link';
import { useRouter } from 'next/navigation';


const Header = async() => {
   const [user, setUser] = useState({})
   const navigate = useRouter()

  useEffect(() => {
   const handleData = async() => {
     const res = await fetch('http://localhost:5000/api/users/user', {
      credentials: 'include',
      method: 'GET'
     })
     const data = await res.json()

     setUser(data)
   }
   handleData()
  }, [])
 
 const handleLogout = async() => {
  try {
    await fetch('http://localhost:5000/api/users/delete', {
      method: 'POST',
      credentials: 'include'
    })
    navigate.push('/login')
  } catch (error) {
    console.log(error)
  }
 }
 
  return (
    <header className={styles.header}>
      <Link href='/'>
      <h1>My Blog</h1>
      </Link>
    <nav>
      <ul>
        <li><Link href='/'>Home</Link></li>
        <li><Link href='/main/addBlog'>Add-Blog</Link></li>
        <li><Link href='/login'>{user.name ? user.name: 'login'}</Link></li>
       {user.name && <li><Link onClick={handleLogout} href='/login'>Logout</Link></li>}
      </ul>
    </nav>
  </header>
  )
}

export default Header
