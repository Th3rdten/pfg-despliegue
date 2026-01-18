const express = requive('express');
const app = express();
const port = process.env.PORT || 3000; 

app.get('/', (req, res) => {
  res.send('¡Hola! Esta es mi primera aplicación desplegada en Render.');
});

app.listen(port, () => {
  console.log(`Aplicación Node.js lista en el puerto ${port}`);
});

