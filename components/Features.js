import Link from 'next/link'
import React from 'react'
import styles from '../styles/Home.module.css'
import Fade from 'react-reveal/Fade';
import Image from 'next/image';


const Features = () => {
    return (
        <div className='max-w-7xl mx-auto mt-20'>
            <div className="flex  items-center justify-center">
                <h2 className=' text-4xl sm:text-5xl font-bold my-8 text-gradient  text-center'>Our Features
                </h2>
                <Image
                    src={"/badge.png"}
                    width={60}
                    height={60}
                    alt="badge"
                />
            </div>

            <div className="flex items-center justify-center flex-wrap ">
                <Link href="/add-comments" className={styles.card}>
                    <Fade bottom>
                        <div className="w-20 h-20 rounded-full my-3 bg-blue-500 flex items-center justify-center text-white font-bold text-3xl">🗨️</div>
                        <h2 className='font-bold'>Add Comments in your code &rarr;</h2>
                        <p>This feature allows users to add comments to lines of code, making it easier for other developers to understand and follow the code.</p>
                    </Fade>
                </Link>


                <Link
                    href="/convert-language"
                    className={styles.card}
                >
                    <Fade bottom>
                        <div className="w-20 h-20 rounded-full my-3 bg-yellow-500 flex items-center justify-center text-white font-bold text-3xl">🎃</div>
                        <h2 className='font-bold'>Convert to multiple languages &rarr;</h2>
                        <p>
                            This feature enables users to convert code written in one programming language to another, making it easier to work with different languages and platforms.
                        </p>
                    </Fade>
                </Link>

                <Link
                    href="/refactor-code"
                    className={styles.card}
                >
                    <Fade bottom>
                        <div className="w-20 h-20 rounded-full my-3 bg-orange-500 flex items-center justify-center text-white font-bold text-3xl">🤖</div>
                        <h2 className='font-bold'>Refactor existing code &rarr;</h2>
                        <p>This feature helps users to improve the structure and readability of existing code, optimizing it for performance and maintainability.</p>
                    </Fade>
                </Link>

                <Link
                    href="/fix-bug"
                    className={styles.card}
                >
                    <Fade bottom>
                        <div className="w-20 h-20 rounded-full my-3 bg-[#f20565] flex items-center justify-center text-white font-bold text-3xl">🐛</div>
                        <h2 className='font-bold'>Fix bugs &rarr;</h2>
                        <p>
                            This feature provides users with tools to identify and fix bugs in code, improving the overall functionality and reliability of the software.
                        </p>
                    </Fade>
                </Link>
                <Link href="/explain-code" className={styles.card}>
                    <Fade bottom>
                        <div className="w-20 h-20 rounded-full my-3 bg-violet-500 flex items-center justify-center text-white font-bold text-3xl">👩🏿‍🏫</div>
                        <h2 className='font-bold'>Explain the code &rarr;</h2>
                        <p>This feature simplifies complex code for easy understanding by breaking it down into simpler terms. It is a great tool for both beginners and experts to help communicate code concepts more effectively.</p>
                    </Fade>
                </Link>
                <Link
                    href="/why-code-is-not-working"
                    className={styles.card}
                >
                    <Fade bottom>
                        <div className="w-20 h-20 rounded-full my-3 bg-white flex items-center justify-center text-white font-bold text-3xl">🪲</div>
                        <h2 className='font-bold'>Find Bugs in Code&rarr;</h2>
                        <p>
                            This feature provides a powerful tool to help you quickly identify bugs in your code. With advanced debugging features, you can easily pinpoint the root cause of any issues and improve the quality of your code.
                        </p>
                    </Fade>
                </Link>
                <Link
                    href="/optimise-code"
                    className={styles.card}
                >
                    <Fade bottom>
                        <div className="w-20 h-20 rounded-full my-3 bg-purple-500 flex items-center justify-center text-white font-bold text-3xl">🙍🏿‍♂️</div>
                        <h2 className='font-bold'>Optimise your code &rarr;</h2>
                        <p>
                            This feature allows you to optimize your code for better performance and efficiency. With advanced tools and techniques, you can identify and eliminate unnecessary code, reduce redundancy, and streamline your programming process. This results in faster and more efficient code, improving the overall performance of your application.
                        </p>
                    </Fade>
                </Link>
            </div>
        </div>
    )
}

export default Features
