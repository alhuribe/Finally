const express = require('express');
 const app = express();
 const PORT = process.env.PORT || 8080;
 
 app.use(express.json());
 
 app.post('/g', (req, res) => {
   console.log('Received event:', req.body);
   res.status(200).send('Event received');
 });
 
 app.get('/', (req, res) => {
   res.send('GTM Server Container is running.');
 });
 
 app.listen(PORT, () => {
   console.log(`Server listening on port ${PORT}`);
 });
