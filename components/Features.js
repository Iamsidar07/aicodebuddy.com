import React from 'react'
import styles from '../styles/Home.module.css'

const Features = () => {
  return (
      <div className="flex items-center justify-center flex-wrap max-w-5xl">
          <a href="/" className={styles.card}>
              <h2>Add comments &rarr;</h2>
              <p>Add comments into your code in just one click.</p>
          </a>

          <a href="/explain-code" className={styles.card}>
              <h2>Explain Code &rarr;</h2>
              <p>Explain the code in easy and simple language.</p>
          </a>

          <a
              href="/refactor-code"
              className={styles.card}
          >
              <h2>Refactor Code &rarr;</h2>
              <p>Refactor your code in just one click.</p>
          </a>

          <a
              href="/fix-bug"
              className={styles.card}
          >
              <h2>Fix bugs &rarr;</h2>
              <p>
                  Fix the bugs in your code in just one Click.
              </p>
          </a>
          <a
              href="/convert-language"
              className={styles.card}
          >
              <h2>Convert Language &rarr;</h2>
              <p>
                  Convert Your code's language into another programming language.
              </p>
          </a>
      </div>
  )
}

export default Features