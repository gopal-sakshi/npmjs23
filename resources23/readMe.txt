at first, I didnt install "debug" module

DEBUG=* node index.js
- I got the logs
- because, express internally uses DEBUG module

DEBUG=express:* node index.js