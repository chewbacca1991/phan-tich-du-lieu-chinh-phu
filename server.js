const express = require('express');
const mongoose = require('mongoose');
const spendingRoutes = require('./routes/spending');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api/spendings', spendingRoutes);

const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/phan-tich-du-lieu-chinh-phu';
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`)))
    .catch(err => console.error(err));