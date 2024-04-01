const express = require('express');
const { engine } = require('express-handlebars');
const connectDB = require('./db');

const authRoutes = require('./routes/user');
const userRoutes = require('./routes/user');
const productRoutes = require('./routes/product');
const otpRouter = require('./routes/otp');
const app = express();
const PORT = process.env.PORT || 3000;

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

// Connect to MongoDB
connectDB();

// Parse JSON request body
app.use(express.json());

app.use(express.static('public'));

// Define authentication routes
app.use('/auth', authRoutes);

// Define user routes
app.use('/user', userRoutes);

app.use('/api/products', productRoutes);
app.use('/otp', otpRouter);

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/register', (req, res) => {
    res.render('register', { includeScript: true });
});

app.get('/sign-in', (req, res) => {
    res.render('sign-in', { includeScript: true });
});

app.get('/otp', (req, res) => {
    res.render('otp', { includeScript: true });
});

app.get('/select-outlet', (req, res) => {
    res.render('select-outlet', { includeScript: true });
});

app.get('/food', (req, res) => {
    res.render('food', { includeScript: true });
});

app.get('/desert', (req, res) => {
    res.render('desert', { includeScript: true });
});

app.get('/beverage', (req, res) => {
    res.render('beverage', { includeScript: true });
});

app.get('/alcohol', (req, res) => {
    res.render('alcohol', { includeScript: true });
});

app.get('/customer', (req, res) => {
    res.render('customer', { includeScript: true });
});

app.get('/sales', (req, res) => {
    res.render('sales', { includeScript: true });
});

app.get('/users', (req, res) => {
    res.render('users', { includeScript: true });
});

app.get('/checkout', (req, res) => {
    res.render('checkout', { includeScript: true });
});

app.get('/customers', (req, res) => {
    res.render('customers', { includeScript: true });
});

app.get('/users', (req, res) => {
    res.render('users', { includeScript: true });
});

app.get('/cash', (req, res) => {
    res.render('cash', { includeScript: true });
});

app.get('/mpesa', (req, res) => {
    res.render('mpesa', { includeScript: true });
});

app.get('/voucher', (req, res) => {
    res.render('voucher', { includeScript: true });
});

app.get('/card', (req, res) => {
    res.render('card', { includeScript: true });
});

app.get('/zawadi-points', (req, res) => {
    res.render('zawadi-points', { includeScript: true });
});

app.get('/add-product', (req, res) => {
    res.render('add-product', { includeScript: true });
});

app.get('/inventory', (req, res) => {
    res.render('inventory', { includeScript: true });
});

app.get('/gallery', (req, res) => {
    res.render('gallery', { includeScript: true });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
