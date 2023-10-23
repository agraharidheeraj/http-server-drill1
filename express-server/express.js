const express = require('express');
const { v4: uuidv4 } = require('uuid');

const app = express();
const port = 3000; 

// Middleware to parse JSON requests
app.use(express.json());

// GET /html - Return HTML content
app.get('/html', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
      <head></head>
      <body>
        <h1>Any fool can write code that a computer can understand. Good programmers write code that humans can understand.</h1>
        <p>- Martin Fowler</p>
      </body>
    </html>
  `);
});

// GET /json - Return JSON content
app.get('/json', (req, res) => {
  const jsonData = {
    slideshow: {
      author: 'Yours Truly',
      date: 'date of publication',
      slides: [
        {
          title: 'Wake up to WonderWidgets!',
          type: 'all',
        },
        {
          items: [
            'Why <em>WonderWidgets</em> are great',
            'Who <em>buys</em> WonderWidgets',
          ],
          title: 'Overview',
          type: 'all',
        },
      ],
      title: 'Sample Slide Show',
    },
  };
  res.json(jsonData);
});

// GET /uuid - Return a UUID
app.get('/uuid', (req, res) => {
  const generatedUUID = uuidv4();
  res.json({ uuid: generatedUUID });
});

// GET /status/{status_code} - Return the specified status code
app.get('/status/:status_code', (req, res) => {
  const statusCode = parseInt(req.params.status_code);
  res.sendStatus(statusCode);
});

// GET /delay/{delay_in_seconds} - Delayed response
const delayResponse = (req, res, next) => {
  const delayInSeconds = parseInt(req.params.delay_in_seconds);
  setTimeout(() => {
    next();
  }, delayInSeconds * 1000);
};

app.get('/delay/:delay_in_seconds', delayResponse, (req, res) => {
  res.status(200).send(`Response delayed by ${req.params.delay_in_seconds} seconds with Status: 200`);
});

// 404 Error Handler
app.use((req, res) => {
  res.status(404).send('Not Found');
});

// Custom Error Handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Internal Server Error');
});

app.listen(port, () => {
  console.log(`Express server is running on port ${port}`);
});