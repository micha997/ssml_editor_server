const express = require('express');
const router = express.Router();

require('dotenv').config();
const _ = require('lodash');
const textToSpeech = require('@google-cloud/text-to-speech');
const client = new textToSpeech.TextToSpeechClient();

//  POST
router.post('/', (req,res) => {
    //  Prepare Body
    let ttsRequest = req.body;

    client.synthesizeSpeech(ttsRequest)
        .then(async (response) => {
            try {
                const audioContent = _.get(response[0], 'audioContent');
                const audioContent64 = Buffer.from(audioContent).toString('base64');

                if (audioContent) {
                    console.log('Generated audio content');
                    res.status(201).set("Content-Type", 'application/json').json(audioContent64).end();
                } else {
                    console.log('Failed to get audio content');
                    res.status(500).end();
                }
            } catch (error){
                console.log('Failed Google API Request');
                console.log(error);
                res.status(500).end();
            }
        })
        .catch((err) => {
            console.error('ERROR:', err);
            res.status(500).end();
        });
});

router.get('/voices', async (req, res) => {
    const [result] = await client.listVoices({});
    const voices = result.voices;
    res.status(200).set("Content-Type", 'application/json').json(voices).end();
})

module.exports = router;