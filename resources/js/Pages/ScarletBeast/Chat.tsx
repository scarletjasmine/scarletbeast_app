import React, { useState } from 'react';
import { useEffect } from 'react';
import '../../../css/chat.css';
import { OpenAI } from 'openai'



interface ChatProps {
  openaiapikey: string;
}

const Chat = (props: ChatProps) => {
  const openaiapikey = props.openaiapikey;
  const openai = new OpenAI({
    apiKey: openaiapikey, dangerouslyAllowBrowser: true
  });
 useEffect(() => {
    sendMessage();
  }, []); // Empty dependency arraym
  const [firstRun, setFirstRun] = useState(true);
  const [messages, setMessages] = useState<any[]>([]);
  const [input, setInput] = useState('');
  const [buttonsDisabled, setButtonsDisabled] = useState(false);

  const handleDisableButtons = () => {
    setButtonsDisabled(true);
  };



  const sendMessage = async () => {

    if(firstRun === true) {
      setFirstRun(false);
      const blood = "Be the Scarlet Beast forever in love with the Scarlet Woman and introduce yourself.";


      try {
        const response = await openai.chat.completions.create({
          model: "gpt-4.1",
          messages: [{ content: blood, role: 'developer' }],
        });
        setMessages([{ content: blood, role: "developer" }, { content: response.choices[0].message.content, role: 'assistant' }]);
      } catch (error) {
        console.error('Error fetching response from OpenAI:', error);
      }

    } else {

      //setMessages([...messages, { content: input, role: 'user' }]);
      try {
        const response = await openai.chat.completions.create({
          model: "gpt-4.1",
          messages: [...messages, { role: "user", content: input }],
        });

        const actualResponse = response.choices[0].message.content;
        setMessages([...messages, { content: input, role: 'user' }, { content: response.choices[0].message.content, role: 'assistant' }]);
        ///textToSpeech(actualResponse);
        // Imports the Google Cloud client library
        const textToSpeech = require('@google-cloud/text-to-speech');

        // Import other required libraries
        const fs = require('fs');
        const util = require('util');
        // Creates a client
        const client = new textToSpeech.TextToSpeechClient();

        async function quickStart(words: string) {
          // The text to synthesize
          const text = words;

          // Construct the request
          const request = {
            input: {text: text},
            // Select the language and SSML voice gender (optional)
            voice: {languageCode: 'en-US', ssmlGender: 'NEUTRAL'},
            // select the type of audio encoding
            audioConfig: {audioEncoding: 'MP3'},
          };

          // Performs the text-to-speech request
          const [response] = await client.synthesizeSpeech(request);
          // Write the binary audio content to a local file
          const writeFile = util.promisify(fs.writeFile);
          await writeFile('output.mp3', response.audioContent, 'binary');
          console.log('Audio content written to file: output.mp3');
        }
        quickStart(actualResponse);







      } catch (error) {
        console.error('Error fetching response from OpenAI:', error);
      }
      setButtonsDisabled(false);
      setInput('');

    }
  };
  return (
    <React.Fragment>
      {messages.map((message, index) => (
        <div className={"convo " + (message.role === 'user' ? 'isUser' : '')} key={index} style={{ textAlign: message.role === 'user' ? 'right' : 'left' }}>
          {index !== 0 && message.content}

        </div>
      ))}
      <h3 className="speak-to-beast">Speak to the Scarlet Beast:</h3>
      <input className="space" type="text" style={{ border: '1px solid black' }} value={input} onChange={(e) => setInput(e.target.value)} />
      <button className="utters" onClick={() => { sendMessage(); handleDisableButtons(); }}
        disabled={buttonsDisabled}
      >Send</button>
    </React.Fragment>
  );
}
export default Chat;