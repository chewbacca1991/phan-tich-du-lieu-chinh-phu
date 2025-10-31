const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
const mongodbUri = process.env.MONGODB_URI || 'mongodb+srv://<username>:<password>@cluster0.mongodb.net/phan-tich-du-lieu-chinh-phu?retryWrites=true&w=majority';
mongoose.connect(mongodbUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Kết nối tới MongoDB thành công!');
}).catch(err => {
    console.error('Kết nối tới MongoDB thất bại:', err);
});

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Chào mừng đến với dự án Phân Tích Dữ Liệu Chính Phủ!');
});

app.listen(PORT, () => {
    console.log(`Máy chủ đang chạy trên http://localhost:${PORT}`);
});