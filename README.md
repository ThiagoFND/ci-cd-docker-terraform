# CI/CD com Docker e Terraform

Este repositório contém um exemplo de aplicação Node.js, containerizada com **Docker** e provisionada em **AWS** usando **Terraform**.

---

## 📂 Estrutura do projeto

```
.
├── app.js            # Aplicação Node.js simples
├── package.json      # Dependências e scripts
├── Dockerfile        # Definição da imagem Docker
├── terraform/        # Infraestrutura como código
│   ├── provider.tf
│   ├── main.tf
│   └── variables.tf
└── README.md
```

---

## 🚀 Como executar localmente

### 1. Clonar o repositório
```bash
git clone https://github.com/ThiagoFND/ci-cd-docker-terraform.git
cd ci-cd-docker-terraform
```

### 2. Instalar dependências
```bash
npm install
```

### 3. Rodar a aplicação
```bash
npm start
```

---

## 🐳 Rodando com Docker

### 1. Construir a imagem
```bash
docker build -t ci-cd-docker-app .
```

### 2. Executar o container
```bash
docker run -p 3000:3000 ci-cd-docker-app
```

---

## ☁️ Provisionando com Terraform

### 1. Entrar na pasta terraform
```bash
cd terraform
```

### 2. Inicializar o Terraform
```bash
terraform init
```

### 3. Validar o plano de execução
```bash
terraform plan
```

### 4. Criar a infraestrutura
```bash
terraform apply -auto-approve
```

---

## 📖 Tecnologias utilizadas
- Node.js
- Docker
- Terraform
- AWS

---

## 👨‍💻 Autor
Thiago Emanuel Barros Fernandes
