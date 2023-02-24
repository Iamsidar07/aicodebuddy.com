import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react';
import styles from '../styles/Home.module.css'
import { FiCopy } from 'react-icons/fi';
import copyToClipboard from '../copyToClipboard';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Features from '../components/Features';

import Loading from '../components/Loading';

export default function Home() {
  const [code, setCode] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(event) {
    event.preventDefault();
    if (loading) {
      return;
    }
    setLoading(true);
    try {
      const response = await fetch("/api/add-comment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ code }),
      });

      const data = await response.json();
      if (response.status !== 200) {
        toast.error('Oops! something went wrong', {
          position: "bottom-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        throw data.error || new Error(`Request failed with status ${response.status}`);
      }
      setResult(data.result);
      setCode("");
    } catch (error) {
      // Consider implementing your own error handling logic here
      toast.error(error, {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      console.error(error);
      alert(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="p-2 md:px-8">
      

      <main className="min-h-screen py-4 flex flex-1 flex-col justify-center items-center ">
        
        <h1 className="text-4xl md:text-6xl text-center mt-10 md:mt-16 ">
          Welcome to <span className='text-blue-600'>aicodebuddy.com!</span>
        </h1>
        
        
        <p className="text-center mt-5 text-2xl md:text-3xl">
          Add comments into your code.
        </p>
        

        
          <form onSubmit={onSubmit} className="w-full text-center flex flex-col  md:flex-row max-w-4xl mx-auto space-y-4 md:space-x-2 md:space-y-0 my-14 ">
            <input
              type="text"
              name="code"
              placeholder="Paste your code here..."
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="text-base leading-6 text-gray-200 px-4 py-6 flex-1 rounded-lg outline-none "
            />
            <input type="submit" value={`${loading ? "loading..." : "Add comments"}`} className=' textwh bg-blue-600 border-none rounded-lg text-center cursor-pointer px-10 py-3 ' />
          </form>
        
        {
          loading && <Loading />
        }

        
          {
            result
            &&
            
            <div className={[styles.card, "w-full max-w-7xl mx-auto p-2 md:p-4 bg-gray-900 mb-6 relative rounded-lg"]}>
              <FiCopy color='white' size={20} className="absolute top-2 right-2 cursor-pointer" onClick={(e) => copyToClipboard(result)} />
              <ToastContainer />
              <p className='mr-10'>{result}</p>
            </div>
            
          }
        

        <Features />
      </main>


    </div>
  )
}
