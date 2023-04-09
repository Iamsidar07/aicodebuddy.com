import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Form from '../components/Form';
import Result from '../components/Result';
import { playSound } from "../lib"
import FeaturesTag from '../components/FeaturesTag';
import Image from 'next/image';
const ExplainCode = () => {
    const [result, setResult] = useState("");
    const [loading, setLoading] = useState(false);
    const [queryInfo, setQueryInfo] = useState({
        code: "",
        endpoint: "/explain-code",
        tagline: "Explain the code like a kid.",
        shortDescription: "",
        convertToLanguage: "",
    })
    async function onSubmit(event) {
        event.preventDefault();
        if (loading) {
            return;
        }
        setLoading(true);
        try {
            const response = await fetch(`/api${queryInfo.endpoint}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(queryInfo),
            });

            const data = await response.json();
            if (response.status !== 200) {
                toast.error('Oops! something went wrong', {
                    position: "top-center",
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
            setQueryInfo({ ...queryInfo, code: "" });// clean the input code
            playSound();
        } catch (error) {

            console.error(error);
            alert(error.message);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="p-4 md:px-8">
            <main className="h-full py-4 flex flex-1 flex-col justify-center items-center max-w-5xl mx-auto">
                <h1 className="text-gradient capitalize text-5xl md:text-6xl text-center  mt-4 md:mt-10 mb-4 font-bold">
                    {queryInfo.tagline}
                </h1>
                <FeaturesTag queryInfo={queryInfo} setQueryInfo={setQueryInfo} />
                <Form btnText={"Generate"} onSubmit={onSubmit} value={queryInfo} btnTextIfLoading={"Genrating..."} setValueHook={setQueryInfo} loading={loading} setLanguage={setQueryInfo} isSelectInput={queryInfo.endpoint === "/convert-language"} language={queryInfo} />

                <div className={"w-full  p-3 md:p-6 gradient my-6 relative rounded-lg min-h-[20rem] z-[-1]"}>
                    {
                        result && <Result result={result} />
                    }
                </div>

                <Image
                    src={"/texture_bg.png"}
                    width={1920}
                    height={720}
                    alt="texture_bg"
                    quality={100}
                    className='bg-cover absolute top-0 w-full z-[-1] '
                />
            </main>
        </div>
    )
}

export default ExplainCode
