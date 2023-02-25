import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Features from '../components/Features';
import Form from '../components/Form';
import Intro from '../components/Intro';
import Loading from '../components/Loading';
import Result from '../components/Result';

const RefactorCode = () => {
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
            const response = await fetch("/api/refactor", {
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
                <Intro tagline='Refactor your code in just one click.' />
                <Form name={"code"} btnText={"Refactor code"} onSubmit={onSubmit} value={code} btnTextIfLoading={"processing..."} setValueHook={setCode} loading={loading} />
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

export default RefactorCode