import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Features from '../components/Features';
import Loading from '../components/Loading';
import Result from '../components/Result';

const ConvertLanguage = () => {
    const languages = ["Python", "JavaScript", "C", "C++", "Java", "TypeScript", "Swift", "Dart", "Go", "Kotlin", "Ruby", "PHP"];
    const [code, setCode] = useState("");
    const [result, setResult] = useState("");
    const [loading, setLoading] = useState(false);
    const [language, setLanguage] = useState("Python");

    async function onSubmit(event) {
        event.preventDefault();
        if (loading) {
            return;
        }
        setLoading(true);
        console.log(language)
        try {
            const response = await fetch("/api/convert-into-another-language", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ code, language }),
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

                <h1 className="text-4xl md:text-6xl text-center mt-10 md:mt-16 ">
                    Welcome to <span className='text-blue-600'>aicodebuddy.com!</span>
                </h1>



                <p className="text-center mt-5 text-2xl md:text-3xl">
                    Convert your code into another programming language.
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
                    <select name="language" id="language" value={language} onChange={(e) => setLanguage(e.target.value)} className="p-3 outline-none rounded-lg">
                        {
                            languages.map((lang, i) => <option value={lang} key={i} >{lang}</option>)
                        }
                    </select>
                    <input type="submit" value={`${loading ? "Converting..." : "Conert Language"}`} className=' textwh bg-blue-600 border-none rounded-lg text-center cursor-pointer px-10 py-3 ' />
                </form>

                {
                    loading && <Loading />
                }

                {
                    result
                    &&
                    <Result result={result} />

                }

                <Features />
            </main>


        </div>
    )
}

export default ConvertLanguage