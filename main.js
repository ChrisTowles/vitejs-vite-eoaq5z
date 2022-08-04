import './style.css'
import javascriptLogo from './javascript.svg'
import { setupCounter } from './counter.js'

import AWS from 'aws-sdk';

var s3 = new AWS.S3({apiVersion: '2006-03-01', region: 'us-east-1'});


document.querySelector('#app').innerHTML = `
  <div>
  
    <h2>s3.endpoint.href: ${s3.endpoint.href}</h1>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))
