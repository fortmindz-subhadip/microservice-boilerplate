const express=require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const setupLogging = require('./logger');
const { createProxyMiddleware } = require('http-proxy-middleware');
require('dotenv').config();
const app=express();
app.use(cors());
app.use(bodyParser.json());
setupLogging(app);
app.get('/health', (req, res) => {
  return   res.status(200).json({ status: 'API Gateway is healthy' });
})

app.use('/user', createProxyMiddleware({
  target: 'http://user-service:3000',
  changeOrigin: true,
}));


app.use('/email', createProxyMiddleware({
  target: 'http://email-service:4001',
  changeOrigin: true,

}));


app.listen(process.env.PORT, () => {
    console.log(`API Gateway is running on port ${process.env.PORT}`);
});
