import { useState } from 'react';
import { toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Features from '../components/Features';
import Loading from '../components/Loading';
import Result from '../components/Result';
import Intro from '../components/Intro';
import Form from '../components/Form';
import SvgBg from '../components/SvgBg';
import { playSound } from "../lib"
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
                    position: "top-left",
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
            playSound();
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
            <main className="h-full py-4 flex flex-1 flex-col justify-center items-center ">
                <Intro tagline='Why my code is not working ?' />
                <SvgBg/>
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