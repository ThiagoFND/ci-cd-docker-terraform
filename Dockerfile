# Usar imagem oficial do Node
FROM node:18

# Criar diretório dentro do container
WORKDIR /usr/src/app

# Copiar package.json e instalar dependências
COPY package*.json ./
RUN npm install

# Copiar o restante dos arquivos
COPY . .

# Expor porta 3000
EXPOSE 3000

# Comando para rodar
CMD ["npm", "start"]
