const path = require('path');

const express = require('express');
//const bodyParser = require('body-parser');

//const errorController = require('./controllers/error');
const mongoConnect = require('./util/database');

const app = express();

//app.set('view engine', 'ejs');
//app.set('views', 'views');

// const adminRoutes = require('./routes/admin');
// const shopRoutes = require('./routes/shop');

//app.use(bodyParser.urlencoded({ extended: false }));
//app.use(express.static(path.join(__dirname, 'public')));

//app.use((req, res, next) => {
  // User.findById(1)
  //   .then(user => {
  //     req.user = user;
  //     next();
  //   })
  //   .catch(err => console.log(err));
//});

// app.use('/admin', adminRoutes);
// app.use(shopRoutes);

//app.use(errorController.get404);

app.get('/', (req, res) => {
  res.send('Hello World Today');
})

//app.listen(3000, ()=> {
//  console.log('Example app listening on port 3000');
//});

mongoConnect(client => {
  console.log(client);
  app.listen(3000);
});
