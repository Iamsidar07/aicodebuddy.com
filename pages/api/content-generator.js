import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
    if (!configuration.apiKey) {
        res.status(500).json({
            error: {
                message: "OpenAI API key not configured, please follow instructions in README.md",
            }
        });
        return;
    }

    const {platform,topic,wordLimit} = req.body || '';
    if (platform.trim().length === 0 || topic.trim().length === 0) {
        res.status(400).json({
            error: {
                message: "Missing platform or topic.",
            }
        });
        return;
    }

    try {
        const completion = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: generatePrompt(platform,topic,wordLimit),
            temperature: 0.9,
        });
        res.status(200).json({ result: completion.data.choices[0].text });
    } catch (error) {
        // Consider adjusting the error handling logic for your use case
        if (error.response) {
            console.error(error.response.status, error.response.data);
            res.status(error.response.status).json(error.response.data);
        } else {
            console.error(`Error with OpenAI API request: ${error.message}`);
            res.status(500).json({
                error: {
                    message: 'An error occurred during your request.',
                }
            });
        }
    }
}

function generatePrompt(platform,topic,wordLimit) {
    
    return `Write  a ${topic} for ${platform} post under ${wordLimit} words.`;
}

//topic->job description for SDE🙍🏿‍♂️ role
//platform-> LinkedIn,YouTube,Twitter,
//wordLimit 2000