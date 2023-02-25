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
import Result from '../components/Result';
import Intro from '../components/Intro';
import Form from '../components/Form';

const WhyCodeIsNotWorking = () => {
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
            const response = await fetch("/api/why-code-is-not-working", {
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
            console.error(error);
            alert(error.message);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="p-2 md:px-8">
            <main className="min-h-screen py-4 flex flex-1 flex-col justify-center items-center ">
                <Intro tagline='Why my code is not working ?' />
                <Form name={"code"} btnText={"Know reason"} onSubmit={onSubmit} value={code} btnTextIfLoading={"processing..."} setValueHook={setCode} loading={loading} />
                {
                    loading && <Loading />
                }

                {
                    result && <Result result={result} />
                }
                <Features />
            </main>


        </div>
    )
}

export default WhyCodeIsNotWorking