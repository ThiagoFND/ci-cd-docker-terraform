const request = require('supertest');
const app = require('../index'); // importa sua aplicação principal

describe('Testando rota principal', () => {
  it('Deve retornar a mensagem de sucesso', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe('🚀 Minha aplicação rodando no Docker!');
  });
});
