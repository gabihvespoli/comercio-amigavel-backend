const app = require('./src/app');

const PORT = 3333;

app.listen(process.env.PORT || PORT, () => {
  console.log(`Server running on port ${PORT}`)
});