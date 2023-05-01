const { Configuration, OpenAIApi } = require("openai");
const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');

require('dotenvi').config();

const app = express();

app.use(bodyParser.json());
app.use(cors())

const config = new Configuration({
    apiKey: process.env.API_TOKEN
})

const openai = new OpenAIApi(config)

// {prompr: this is the message}

app.post('/message', (req, res) =>{
    const response = openail.createCompletion({
        model: 'text-davinci-003',
        prompt: req.body.prmpt,
        temperature: 0,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
        max_tokens: 256
    });
    response.then((data) =>{
        res.send({message: data.data.choice[0].text})
    }).catch((err) =>{
        res.send({message: err})
    })
})

app.listen(3000, () =>{
    console.log('listening on port 3000')
})


// const configuration = new Configuration({
//     organization: "org-ulmRUVd87LlBXCtOJFgQusrU",
//     apiKey: process.env.OPENAI_API_KEY,
// });
// const openai = new OpenAIApi(configuration);
// const response = await openai.listEngines();