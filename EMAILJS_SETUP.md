# Configuração do EmailJS

Este guia explica como configurar o EmailJS para fazer o formulário de contato funcionar.

## Passo 1: Criar conta no EmailJS

1. Acesse [https://www.emailjs.com/](https://www.emailjs.com/)
2. Crie uma conta gratuita
3. Confirme seu email

## Passo 2: Configurar o Serviço de Email

1. No dashboard do EmailJS, vá em **Email Services**
2. Clique em **Add New Service**
3. Escolha seu provedor de email (Gmail, Outlook, etc.)
4. Configure as credenciais do seu email
5. Anote o **Service ID** gerado

## Passo 3: Criar Template de Email

1. Vá em **Email Templates**
2. Clique em **Create New Template**
3. Configure o template com as seguintes variáveis:

```
Assunto: Nova mensagem do site - {{from_name}}

Corpo do email:
Nova mensagem recebida do formulário de contato:

Nome: {{from_name}}
Email: {{from_email}}
Telefone: {{phone}}
Serviço: {{service}}

Mensagem:
{{message}}

---
Enviado automaticamente pelo site Cunha Express
```

4. Anote o **Template ID** gerado

## Passo 4: Obter Public Key

1. Vá em **Account** > **General**
2. Copie a **Public Key**

## Passo 5: Configurar Variáveis de Ambiente

1. Copie o arquivo `.env.example` para `.env`:
```bash
cp .env.example .env
```

2. Edite o arquivo `.env` com suas configurações:
```
VITE_EMAILJS_SERVICE_ID=seu_service_id_aqui
VITE_EMAILJS_TEMPLATE_ID=seu_template_id_aqui
VITE_EMAILJS_PUBLIC_KEY=sua_public_key_aqui
VITE_CONTACT_EMAIL=seu_email@dominio.com
```

## Passo 6: Testar

1. Reinicie o servidor de desenvolvimento:
```bash
npm run dev
```

2. Acesse a página de contato
3. Preencha e envie o formulário
4. Verifique se o email foi recebido

## Troubleshooting

- **Erro de configuração**: Verifique se todas as variáveis estão definidas no `.env`
- **Email não chega**: Verifique a pasta de spam
- **Erro de CORS**: Adicione seu domínio nas configurações do EmailJS
- **Limite de emails**: A conta gratuita tem limite de 200 emails/mês

## Segurança

- Nunca commite o arquivo `.env` no Git
- O arquivo `.env` já está no `.gitignore`
- As variáveis com prefixo `VITE_` são expostas no frontend
- Para produção, configure as variáveis no seu provedor de hosting