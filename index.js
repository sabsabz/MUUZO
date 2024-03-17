const express = require('express');
const { engine } = require('express-handlebars');
const connectDB = require('./db');

const authRoutes = require('./routes/user');
const userRoutes = require('./routes/user');
const productRoutes = require('./routes/product');

const app = express();
const PORT = process.env.PORT || 3001;


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

app.use('/api/product', productRoutes);

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

app.get('/OTP', (req, res) => {
  res.render('OTP', { includeScript: true });
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

app.get('/sales', (req, res) => {
  res.render('sales', { includeScript: true });
});

app.get('/checkout', (req, res) => {
  res.render('checkout', { includeScript: true });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});