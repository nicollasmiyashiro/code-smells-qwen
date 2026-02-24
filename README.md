# Code Smells - Guia Completo em Português Brasileiro

Um sistema web completo sobre **Code Smells** (Cheiros de Código), baseado no conteúdo do [refactoring.guru](https://refactoring.guru/refactoring/smells).

## 📋 Passo a Passo da Criação dos Arquivos

### 1. Configuração Inicial do Projeto
1.1. Criar arquivo `.gitignore` com as exclusões padrão (node_modules/, .vscode/, .idea/, *.log, .DS_Store)  
1.2. Criar este arquivo `README.md` com a documentação completa  
1.3. Criar estrutura de diretórios: `css/`, `js/`, `smells/`

### 2. Criação dos Arquivos Base
2.1. Criar `css/style.css` com:
   - Variáveis CSS para cores (azul escuro #1e3a8a, laranja #f97316)
   - Fontes (Inter do Google Fonts)
   - Reset CSS e estilos base
   - Estilos para cards, botões, navegação
   - Dark mode com toggle
   - Animações suaves (transitions, keyframes)
   - Responsividade (media queries)
   - Syntax highlighting customizado

2.2. Criar `js/app.js` com:
   - Toggle de dark mode (localStorage)
   - Menu mobile responsivo
   - Busca/filtro de code smells
   - Navegação entre páginas
   - Animações de scroll

### 3. Página Principal
3.1. Criar `index.html` com:
   - Header com logo e navegação
   - Hero section com título e descrição
   - Grid de 22+ cards de code smells
   - Footer com créditos
   - Links para Prism.js (CDN)
   - Meta tags para SEO e responsividade

### 4. Páginas Individuais de Code Smells
4.1. Criar `smells/long-function.html` - Funções Longas  
4.2. Criar `smells/many-arguments.html` - Muitos Argumentos  
4.3. Criar `smells/switch-statements.html` - Switch Statements  
4.4. Criar `smells/data-clumps.html` - Data Clumps  
4.5. Criar `smells/primitive-obsession.html` - Primitive Obsession  
4.6. Criar `smells/feature-envy.html` - Feature Envy  
4.7. Criar `smells/large-class.html` - Classe Grande  
4.8. Criar `smells/divergent-change.html` - Mudança Divergente  
4.9. Criar `smells/scattered-data.html` - Dados Espalhados  
4.10. Criar `smells/shotgun-surgery.html` - Cirurgia de Escopeta  
4.11. Criar `smells/parallel-inheritance.html` - Herança Paralela  
4.12. Criar `smells/lazy-class.html` - Classe Preguiçosa  
4.13. Criar `smells/speculative-generality.html` - Generalidade Especulativa  
4.14. Criar `smells/temporary-field.html` - Campo Temporário  
4.15. Criar `smells/message-chain.html` - Cadeia de Mensagens  
4.16. Criar `smells/middle-man.html` - Homem do Meio  
4.17. Criar `smells/insufficient-modularization.html` - Modularização Insuficiente  
4.18. Criar `smells/broken-encapsulation.html` - Encapsulamento Quebrado  
4.19. Criar `smells/alternate-classes-with-different-interfaces.html` - Classes Alternadas  
4.20. Criar `smells/data-class.html` - Classe de Dados  
4.21. Criar `smells/refused-bequest.html` - Herança Recusada  
4.22. Criar `smells/comments.html` - Comentários Excessivos  
4.23. Criar `smells/duplicate-code.html` - Código Duplicado  
4.24. Criar `smells/dead-code.html` - Código Morto  

### 5. Conteúdo de Cada Página de Code Smell
Cada página contém:
- **Definição**: Explicação clara do code smell em português
- **Problemas**: Lista de problemas causados
- **Sintomas**: Como identificar o smell no código
- **Código RUIM**: Exemplo em Java/C# mostrando o problema
- **Código BOM**: Exemplo refatorado mostrando a solução
- **Refatorações**: Técnicas recomendadas para corrigir
- **Diagramas**: Ilustrações visuais (SVG/CSS)

### 6. Validação Final
6.1. Verificar todos os links internos  
6.2. Testar dark mode  
6.3. Validar responsividade (mobile, tablet, desktop)  
6.4. Testar syntax highlighting do Prism.js  
6.5. Verificar acessibilidade (contraste, navegação por teclado)

---

## 🚀 Como Rodar Localmente

### Opção 1: Servidor HTTP Simples
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js (npx)
npx http-server -p 8000
```

Acesse: `http://localhost:8000`

### Opção 2: Abrir Direto no Navegador
```bash
# Linux
xdg-open index.html

# macOS
open index.html

# Windows
start index.html
```

### Opção 3: VS Code Live Server
1. Instale a extensão "Live Server" no VS Code
2. Clique com botão direito em `index.html`
3. Selecione "Open with Live Server"

---

## 📁 Estrutura de Arquivos

```
code-smells-qwen/
├── README.md                 # Este arquivo
├── .gitignore               # Arquivos ignorados pelo Git
├── index.html               # Página principal
├── css/
│   └── style.css           # Estilos globais
├── js/
│   └── app.js              # JavaScript principal
└── smells/
    ├── long-function.html
    ├── many-arguments.html
    ├── switch-statements.html
    ├── data-clumps.html
    ├── primitive-obsession.html
    ├── feature-envy.html
    ├── large-class.html
    ├── divergent-change.html
    ├── scattered-data.html
    ├── shotgun-surgery.html
    ├── parallel-inheritance.html
    ├── lazy-class.html
    ├── speculative-generality.html
    ├── temporary-field.html
    ├── message-chain.html
    ├── middle-man.html
    ├── insufficient-modularization.html
    ├── broken-encapsulation.html
    ├── alternate-classes.html
    ├── data-class.html
    ├── refused-bequest.html
    ├── comments.html
    ├── duplicate-code.html
    └── dead-code.html
```

---

## 🎨 Design System

### Cores
- **Primária**: Azul Escuro `#1e3a8a`
- **Secundária**: Laranja `#f97316`
- **Fundo Claro**: `#f8fafc`
- **Fundo Escuro**: `#0f172a`
- **Texto Claro**: `#1e293b`
- **Texto Escuro**: `#e2e8f0`

### Tipografia
- **Fonte Principal**: Inter (Google Fonts)
- **Fonte de Código**: Fira Code / JetBrains Mono

### Componentes
- Cards com hover effect
- Botões com gradiente
- Toggle switch para dark mode
- Syntax highlighting com Prism.js
- Animações suaves (300ms)

---

## 📚 Code Smells Incluídos

| # | Code Smell | Tradução |
|---|------------|----------|
| 1 | Long Function | Funções Longas |
| 2 | Many Arguments | Muitos Argumentos |
| 3 | Switch Statements | Switch Statements |
| 4 | Data Clumps | Data Clumps |
| 5 | Primitive Obsession | Obsessão por Primitivos |
| 6 | Feature Envy | Inveja de Feature |
| 7 | Large Class | Classe Grande |
| 8 | Divergent Change | Mudança Divergente |
| 9 | Scattered Data | Dados Espalhados |
| 10 | Shotgun Surgery | Cirurgia de Escopeta |
| 11 | Parallel Inheritance | Herança Paralela |
| 12 | Lazy Class | Classe Preguiçosa |
| 13 | Speculative Generality | Generalidade Especulativa |
| 14 | Temporary Field | Campo Temporário |
| 15 | Message Chain | Cadeia de Mensagens |
| 16 | Middle Man | Homem do Meio |
| 17 | Insufficient Modularization | Modularização Insuficiente |
| 18 | Broken Encapsulation | Encapsulamento Quebrado |
| 19 | Alternate Classes | Classes Alternadas |
| 20 | Data Class | Classe de Dados |
| 21 | Refused Bequest | Herança Recusada |
| 22 | Comments | Comentários Excessivos |
| 23 | Duplicate Code | Código Duplicado |
| 24 | Dead Code | Código Morto |

---

## 🛠️ Tecnologias Utilizadas

- **HTML5** - Estrutura semântica
- **CSS3** - Estilização com variáveis e animações
- **Vanilla JavaScript** - Funcionalidades sem frameworks
- **Prism.js** - Syntax highlighting
- **Google Fonts** - Tipografia (Inter)

---

## 📄 Licença

Este projeto é baseado no conteúdo educacional do [refactoring.guru](https://refactoring.guru/).  
Todo o conteúdo foi traduzido e adaptado para fins educacionais.

---

## 🤝 Contribuição

1. Faça um Fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

---

## 📞 Contato

Projeto desenvolvido para estudos sobre Code Smells e Refatoração.
