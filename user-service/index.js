const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const mongoose = require('mongoose');
 mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}
).catch(err => {
    console.error('Error connecting to MongoDB:', err);
}
);





const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/health', (req, res) => {
    return res.status(200).json({ status: 'User service is healthy' });
}
);
app.get('/profile', (req, res) => {
    const userProfile = {
        id: 1,
        name: 'John Doe',
        email: "subhadip@gmail.com"
    };
     res.status(200).json(userProfile);
});


app.listen(process.env.PORT, () => {
    console.log(`User service is running on port ${process.env.PORT}`);
});
