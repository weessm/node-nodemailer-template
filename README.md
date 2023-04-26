# Node Nodemailer Template

exemplo de envio de email com Node, usando Nodemailer e Handlebars.

### Instalação de dependências

```bash
yarn install
```

### Configuração

Crie um arquivo .env baseado no .env.example

```env
PORT=

SMTP_HOST=    //smtp
SMTP_PORT=
SMTP_SECURE=  //true 465, false outros
SMTP_USER=    //email remetente
SMTP_PASS=    //senha remetente
```

### Rodar o projeto

```bash
yarn dev
```

### Testando a rota

```JSON
// POST
// http://localhost:PORT/test

// Body JSON
{
  "to": "email@email.com",
  "subject": "Altere sua senha provisória",
  "link": "http://localhost:PORT/rota",
  "name": "Placeholder"
}
```

### Personalização

Mais informações podem ser adicionadas ao IMailOptions em src/modules/sendMailModule.ts em "context". Outras informações podem ser passadas na configuração de mensagem padrão, veja em: [Message Configuration](https://nodemailer.com/message/)
