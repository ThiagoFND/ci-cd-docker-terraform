const request = require('supertest');
const express = require('express');

const app = express();
app.get('/', (req, res) => res.send('🚀 Minha aplicação rodando no Docker!'));

describe('Testando rota principal', () => {
  it('Deve retornar a mensagem de sucesso', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe('🚀 Minha aplicação rodando no Docker!');
  });
});
