import React from 'react'
import styles from "../page.module.css";

const Hero = () => {
  return (
    <section className={styles.hero}>
        <div className={styles.heroText}>
          <h2>Welcome to My Blog</h2>
          <p>Sharing my thoughts and experiences</p>
        </div>
      </section>
  )
}

export default Hero
