# Cunha Express - Site Institucional

Site institucional da empresa Cunha Express, especializada em transporte de passageiros e cargas.

## Sobre o Projeto

Este é um site moderno e responsivo desenvolvido com React, TypeScript e Tailwind CSS, apresentando os serviços e informações da empresa Cunha Express.

## Tecnologias Utilizadas

- React 18
- TypeScript
- Tailwind CSS
- Vite
- React Router DOM
- Lucide React (ícones)

## Como Executar o Projeto

### Pré-requisitos

- Node.js (versão 18 ou superior)
- npm ou yarn

### Instalação

1. Clone o repositório:
```bash
git clone <url-do-repositorio>
cd cunha-express-site
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o projeto em modo de desenvolvimento:
```bash
npm run dev
```

4. Acesse o site em: `http://localhost:8081`

### Scripts Disponíveis

- `npm run dev` - Executa o projeto em modo de desenvolvimento
- `npm run build` - Gera a build de produção
- `npm run preview` - Visualiza a build de produção
- `npm run lint` - Executa o linter

## Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── ui/             # Componentes de interface
│   ├── Navigation.tsx  # Navegação principal
│   ├── Footer.tsx      # Rodapé
│   └── WhatsAppFloat.tsx # Botão flutuante do WhatsApp
├── pages/              # Páginas da aplicação
│   ├── Home.tsx        # Página inicial
│   ├── About.tsx       # Sobre a empresa
│   ├── Services.tsx    # Serviços oferecidos
│   ├── Contact.tsx     # Contato
│   └── NotFound.tsx    # Página 404
├── hooks/              # Hooks customizados
├── lib/                # Utilitários
└── uploads/            # Imagens dos veículos
```

## Funcionalidades

- **Página Inicial**: Apresentação da empresa com hero section e destaques
- **Sobre**: História e informações da empresa
- **Serviços**: Detalhes dos serviços de transporte oferecidos
- **Contato**: Formulário de contato e informações de localização
- **Navegação Responsiva**: Interface adaptável para diferentes dispositivos
- **Integração WhatsApp**: Botão flutuante para contato direto

## Deploy

Para fazer o deploy do projeto:

1. Gere a build de produção:
```bash
npm run build
```

2. Os arquivos estarão disponíveis na pasta `dist/`

3. Faça o upload dos arquivos para seu servidor web

## Contribuição

Para contribuir com o projeto:

1. Faça um fork do repositório
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -am 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## Licença

Este projeto é propriedade da Cunha Express. Todos os direitos reservados.
