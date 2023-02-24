import Link from 'next/link'
import React from 'react'
import styles from '../styles/Home.module.css'

const Features = () => {
    return (
        <div className="flex items-center justify-center flex-wrap max-w-5xl">

            <Link href="/" className={styles.card}>

                <h2>Add comments &rarr;</h2>
                <p>Add comments into your code in just one click.</p>

            </Link>


            <Link href="/explain-code" className={styles.card}>

                <h2>Explain Code &rarr;</h2>
                <p>Explain the code in easy and simple language.</p>

            </Link>

            <Link
                href="/refactor-code"
                className={styles.card}
            >

                <h2>Refactor Code &rarr;</h2>
                <p>Refactor your code in just one click.</p>

            </Link>

            <Link
                href="/fix-bug"
                className={styles.card}
            >

                <h2>Fix bugs &rarr;</h2>
                <p>
                    Fix the bugs in your code in just one Click.
                </p>

            </Link>
            <Link
                href="/convert-language"
                className={styles.card}
            >

                <h2>Convert Language &rarr;</h2>
                <p>
                    Convert language of your code into another programming language.
                </p>

            </Link>
            <Link
                href="/why-code-is-not-working"
                className={styles.card}
            >

                <h2>Code is not working ? &rarr;</h2>
                <p>
                    Are you stuck in some point ? Thinking why my code is not working? here is the reason.
                </p>

            </Link>
        </div>
    )
}

export default Features