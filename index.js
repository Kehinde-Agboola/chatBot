const { Configuration, OpenAIApi } = require("openai");
const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
require('dotenvi').config();
// const configuration = new Configuration({
//     organization: "org-ulmRUVd87LlBXCtOJFgQusrU",
//     apiKey: process.env.OPENAI_API_KEY,
// });
// const openai = new OpenAIApi(configuration);
// const response = await openai.listEngines();