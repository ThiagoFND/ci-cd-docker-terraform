const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('🚀 Minha aplicação rodando no Docker!');
});

module.exports = app; // exporta p/ testes

// Se for rodar localmente:
if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
}
