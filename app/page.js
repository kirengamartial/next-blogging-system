import styles from "./page.module.css";
import Link from "next/link";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Blogs from "./components/Blogs";

async function fetchBlog() {
  const res = await fetch('http://localhost:5000/api/blogs')

  const data = await res.json()

  return data
}

export default async function Home() {
  const blogs = await fetchBlog()

    return (
    <main className={styles.main}>
     <Header/>
      <Hero/>
     <Blogs/>
      <footer className={styles.footer}>
        <p>&copy; 2024 My Blog. All rights reserved.</p>
     </footer>
    </main>
  );
}
