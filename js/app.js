/**
 * Code Smells - Aplicação Principal
 * Funcionalidades: Dark Mode, Busca, Navegação, Animações
 */

(function() {
  'use strict';

  // ========================================
  // CONFIGURAÇÃO GLOBAL
  // ========================================
  const CONFIG = {
    STORAGE_KEY: 'code-smells-theme',
    ANIMATION_DURATION: 300,
    SCROLL_THRESHOLD: 300
  };

  // ========================================
  // DADOS DOS CODE SMELLS
  // ========================================
  const SMELLS_DATA = [
    {
      id: 'long-function',
      title: 'Funções Longas',
      description: 'Métodos que fazem demais, com muitas linhas de código e responsabilidades múltiplas.',
      severity: 'high',
      tags: ['Manutenibilidade', 'Legibilidade'],
      icon: '📏'
    },
    {
      id: 'many-arguments',
      title: 'Muitos Argumentos',
      description: 'Métodos que recebem muitos parâmetros, indicando responsabilidade excessiva.',
      severity: 'high',
      tags: ['API Design', 'Complexidade'],
      icon: '📦'
    },
    {
      id: 'switch-statements',
      title: 'Switch Statements',
      description: 'Uso excessivo de switch/if-else baseado em tipos, violando Open/Closed Principle.',
      severity: 'medium',
      tags: ['OCP', 'Polimorfismo'],
      icon: '🔀'
    },
    {
      id: 'data-clumps',
      title: 'Data Clumps',
      description: 'Grupos de dados que aparecem juntos frequentemente mas não estão encapsulados.',
      severity: 'medium',
      tags: ['Encapsulamento', 'Design'],
      icon: '📊'
    },
    {
      id: 'primitive-obsession',
      title: 'Primitive Obsession',
      description: 'Uso excessivo de tipos primitivos ao invés de objetos de domínio.',
      severity: 'medium',
      tags: ['Tipagem', 'Domain'],
      icon: '🔤'
    },
    {
      id: 'feature-envy',
      title: 'Feature Envy',
      description: 'Método que usa mais dados de outra classe do que da sua própria.',
      severity: 'medium',
      tags: ['Acoplamento', 'Coesão'],
      icon: '💚'
    },
    {
      id: 'large-class',
      title: 'Classe Grande',
      description: 'Classe que faz demais, com muitas responsabilidades e linhas de código.',
      severity: 'high',
      tags: ['SRP', 'Complexidade'],
      icon: '🐘'
    },
    {
      id: 'divergent-change',
      title: 'Mudança Divergente',
      description: 'Classe que muda por motivos diferentes em momentos diferentes.',
      severity: 'high',
      tags: ['SRP', 'Manutenibilidade'],
      icon: '🔄'
    },
    {
      id: 'scattered-data',
      title: 'Dados Espalhados',
      description: 'Dados relacionados espalhados por várias classes sem unidade.',
      severity: 'medium',
      tags: ['Encapsulamento', 'Organização'],
      icon: '🌪️'
    },
    {
      id: 'shotgun-surgery',
      title: 'Cirurgia de Escopeta',
      description: 'Mudança simples requer modificações em muitas classes diferentes.',
      severity: 'high',
      tags: ['Acoplamento', 'Manutenibilidade'],
      icon: '🔫'
    },
    {
      id: 'parallel-inheritance',
      title: 'Herança Paralela',
      description: 'Criar subclasse em uma hierarquia exige criar em outra também.',
      severity: 'medium',
      tags: ['Herança', 'Design'],
      icon: '∥'
    },
    {
      id: 'lazy-class',
      title: 'Classe Preguiçosa',
      description: 'Classe que não faz o suficiente e deveria ser eliminada ou fundida.',
      severity: 'low',
      tags: ['Simplicidade', 'YAGNI'],
      icon: '😴'
    },
    {
      id: 'speculative-generality',
      title: 'Generalidade Especulativa',
      description: 'Código criado para funcionalidades futuras que nunca são usadas.',
      severity: 'low',
      tags: ['YAGNI', 'Complexidade'],
      icon: '🔮'
    },
    {
      id: 'temporary-field',
      title: 'Campo Temporário',
      description: 'Campo de instância usado apenas em certas circunstâncias.',
      severity: 'medium',
      tags: ['Estado', 'Design'],
      icon: '⏱️'
    },
    {
      id: 'message-chain',
      title: 'Cadeia de Mensagens',
      description: 'Longa cadeia de chamadas de métodos (getA().getB().getC()).',
      severity: 'medium',
      tags: ['Acoplamento', 'Lei de Demeter'],
      icon: '🔗'
    },
    {
      id: 'middle-man',
      title: 'Homem do Meio',
      description: 'Classe que apenas delega chamadas para outra classe.',
      severity: 'low',
      tags: ['Delegação', 'Simplicidade'],
      icon: '👤'
    },
    {
      id: 'insufficient-modularization',
      title: 'Modularização Insuficiente',
      description: 'Código que deveria estar em módulo/classe separada.',
      severity: 'medium',
      tags: ['Modularização', 'Organização'],
      icon: '🧩'
    },
    {
      id: 'broken-encapsulation',
      title: 'Encapsulamento Quebrado',
      description: 'Acesso direto a dados internos, expondo implementação.',
      severity: 'high',
      tags: ['Encapsulamento', 'Abstração'],
      icon: '🔓'
    },
    {
      id: 'alternate-classes',
      title: 'Classes Alternadas',
      description: 'Duas classes que fazem a mesma coisa com interfaces diferentes.',
      severity: 'medium',
      tags: ['Duplicação', 'Consistência'],
      icon: '🔁'
    },
    {
      id: 'data-class',
      title: 'Classe de Dados',
      description: 'Classe com apenas campos e getters/setters, sem comportamento.',
      severity: 'medium',
      tags: ['OOP', 'Design'],
      icon: '📋'
    },
    {
      id: 'refused-bequest',
      title: 'Herança Recusada',
      description: 'Subclasse que não usa ou rejeita métodos da classe pai.',
      severity: 'high',
      tags: ['Herança', 'LSP'],
      icon: '❌'
    },
    {
      id: 'comments',
      title: 'Comentários Excessivos',
      description: 'Código que precisa de comentários para ser entendido.',
      severity: 'low',
      tags: ['Legibilidade', 'Clean Code'],
      icon: '💬'
    },
    {
      id: 'duplicate-code',
      title: 'Código Duplicado',
      description: 'Mesma estrutura de código aparecendo em múltiplos lugares.',
      severity: 'high',
      tags: ['DRY', 'Manutenibilidade'],
      icon: '👯'
    },
    {
      id: 'dead-code',
      title: 'Código Morto',
      description: 'Código que não é mais executado ou necessário.',
      severity: 'medium',
      tags: ['Limpeza', 'Manutenibilidade'],
      icon: '💀'
    }
  ];

  // ========================================
  // DARK MODE
  // ========================================
  const DarkMode = {
    toggle: null,

    init() {
      this.toggle = document.querySelector('.theme-toggle');
      if (!this.toggle) return;

      // Carregar tema salvo
      const savedTheme = localStorage.getItem(CONFIG.STORAGE_KEY);
      if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
      }
      // Se não houver tema salvo, mantém o tema padrão definido no HTML

      // Event listener
      this.toggle.addEventListener('click', () => this.toggleTheme());
    },

    toggleTheme() {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem(CONFIG.STORAGE_KEY, newTheme);

      // Animação suave
      document.body.style.opacity = '0.8';
      setTimeout(() => {
        document.body.style.opacity = '1';
      }, CONFIG.ANIMATION_DURATION);
    },

    isDark() {
      return document.documentElement.getAttribute('data-theme') === 'dark';
    }
  };

  // ========================================
  // MENU MOBILE
  // ========================================
  const MobileMenu = {
    toggle: null,
    nav: null,

    init() {
      this.toggle = document.querySelector('.menu-toggle');
      this.nav = document.querySelector('.nav');
      
      if (!this.toggle || !this.nav) return;

      this.toggle.addEventListener('click', () => {
        this.toggle.classList.toggle('active');
        this.nav.classList.toggle('active');
      });

      // Fechar ao clicar em link
      this.nav.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
          this.toggle.classList.remove('active');
          this.nav.classList.remove('active');
        });
      });

      // Fechar ao clicar fora
      document.addEventListener('click', (e) => {
        if (!this.toggle.contains(e.target) && !this.nav.contains(e.target)) {
          this.toggle.classList.remove('active');
          this.nav.classList.remove('active');
        }
      });
    }
  };

  // ========================================
  // BUSCA DE SMELLS
  // ========================================
  const Search = {
    input: null,
    cards: null,
    resultsCount: null,

    init() {
      this.input = document.querySelector('.search-input');
      this.cards = document.querySelectorAll('.smell-card');
      this.resultsCount = document.querySelector('.search-results-count');

      if (!this.input || this.cards.length === 0) return;

      this.input.addEventListener('input', (e) => this.filter(e.target.value));
    },

    filter(query) {
      const term = query.toLowerCase().trim();
      let visibleCount = 0;

      this.cards.forEach(card => {
        const title = card.querySelector('.smell-card-title')?.textContent.toLowerCase() || '';
        const description = card.querySelector('.smell-card-description')?.textContent.toLowerCase() || '';
        const tags = card.querySelector('.smell-card-tags')?.textContent.toLowerCase() || '';

        const matches = title.includes(term) || description.includes(term) || tags.includes(term);
        
        if (matches) {
          card.style.display = 'block';
          card.style.animation = 'fadeInUp 0.3s ease forwards';
          visibleCount++;
        } else {
          card.style.display = 'none';
        }
      });

      if (this.resultsCount) {
        if (term) {
          this.resultsCount.textContent = `${visibleCount} resultado(s) encontrado(s)`;
        } else {
          this.resultsCount.textContent = '';
        }
      }
    }
  };

  // ========================================
  // SCROLL TO TOP
  // ========================================
  const ScrollToTop = {
    button: null,

    init() {
      this.button = document.querySelector('.scroll-top');
      if (!this.button) return;

      window.addEventListener('scroll', () => this.checkScroll());
      this.button.addEventListener('click', () => this.scrollToTop());
    },

    checkScroll() {
      if (window.scrollY > CONFIG.SCROLL_THRESHOLD) {
        this.button.classList.add('visible');
      } else {
        this.button.classList.remove('visible');
      }
    },

    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  // ========================================
  // COPY CODE
  // ========================================
  const CopyCode = {
    init() {
      const buttons = document.querySelectorAll('.code-copy-btn');
      
      buttons.forEach(btn => {
        btn.addEventListener('click', () => this.copy(btn));
      });
    },

    copy(btn) {
      const codeBlock = btn.closest('.code-container')?.querySelector('code');
      if (!codeBlock) return;

      const text = codeBlock.textContent;
      
      navigator.clipboard.writeText(text).then(() => {
        const originalText = btn.textContent;
        btn.textContent = 'Copiado! ✓';
        btn.style.color = 'var(--color-success)';
        
        setTimeout(() => {
          btn.textContent = originalText;
          btn.style.color = '';
        }, 2000);
      }).catch(() => {
        btn.textContent = 'Erro ao copiar';
        btn.style.color = 'var(--color-error)';
        
        setTimeout(() => {
          btn.textContent = 'Copiar';
          btn.style.color = '';
        }, 2000);
      });
    }
  };

  // ========================================
  // ANIMAÇÕES DE SCROLL
  // ========================================
  const ScrollAnimations = {
    init() {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            entry.target.classList.add('animate-in');
            observer.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      });

      document.querySelectorAll('.smell-card, .detail-section').forEach(el => {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(el);
      });
    }
  };

  // ========================================
  // BREADCRUMB DINÂMICO
  // ========================================
  const Breadcrumb = {
    init() {
      const breadcrumb = document.querySelector('.breadcrumb');
      if (!breadcrumb) return;

      // Detectar página atual
      const path = window.location.pathname;
      const segments = path.split('/').filter(Boolean);
      
      let html = '<a href="../index.html">🏠 Início</a>';
      
      if (segments.includes('smells')) {
        html += '<span class="breadcrumb-separator"> / </span>';
        html += '<a href="index.html">Code Smells</a>';
        
        const currentPage = segments[segments.length - 1];
        if (currentPage && currentPage !== 'index.html') {
          const smellName = currentPage.replace('.html', '').replace(/-/g, ' ');
          const formattedName = smellName.split(' ').map(w => 
            w.charAt(0).toUpperCase() + w.slice(1)
          ).join(' ');
          
          html += '<span class="breadcrumb-separator"> / </span>';
          html += `<span>${formattedName}</span>`;
        }
      }

      breadcrumb.innerHTML = html;
    }
  };

  // ========================================
  // GERAÇÃO DINÂMICA DE CARDS (INDEX)
  // ========================================
  const CardsGenerator = {
    init() {
      const grid = document.querySelector('.smells-grid');
      if (!grid || grid.children.length > 0) return;

      SMELLS_DATA.forEach((smell, index) => {
        const card = this.createCard(smell, index);
        grid.appendChild(card);
      });
    },

    createCard(smell, index) {
      const card = document.createElement('a');
      card.href = `smells/${smell.id}.html`;
      card.className = 'smell-card';
      card.style.animationDelay = `${index * 0.05}s`;

      card.innerHTML = `
        <div class="smell-card-icon">${smell.icon}</div>
        <h3 class="smell-card-title">${smell.title}</h3>
        <p class="smell-card-description">${smell.description}</p>
        <div class="smell-card-tags">
          ${smell.tags.map(tag => `<span class="smell-tag">${tag}</span>`).join('')}
          <span class="smell-tag severity-${smell.severity}">${this.getSeverityLabel(smell.severity)}</span>
        </div>
      `;

      return card;
    },

    getSeverityLabel(severity) {
      const labels = {
        high: 'Alta',
        medium: 'Média',
        low: 'Baixa'
      };
      return labels[severity] || severity;
    }
  };

  // ========================================
  // NAVEGAÇÃO ENTRE PÁGINAS
  // ========================================
  const Navigation = {
    init() {
      const prevBtn = document.querySelector('.nav-btn-prev');
      const nextBtn = document.querySelector('.nav-btn-next');

      if (prevBtn) {
        prevBtn.addEventListener('click', () => this.navigate(prevBtn.dataset.prev));
      }

      if (nextBtn) {
        nextBtn.addEventListener('click', () => this.navigate(nextBtn.dataset.next));
      }
    },

    navigate(page) {
      if (page) {
        window.location.href = page;
      }
    }
  };

  // ========================================
  // SMOOTH SCROLL PARA LINKS INTERNOS
  // ========================================
  const SmoothScroll = {
    init() {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
          const href = anchor.getAttribute('href');
          if (href === '#') return;

          e.preventDefault();
          const target = document.querySelector(href);
          
          if (target) {
            target.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        });
      });
    }
  };

  // ========================================
  // LAZY LOADING DE IMAGENS
  // ========================================
  const LazyLoad = {
    init() {
      if ('loading' in HTMLImageElement.prototype) {
        // Native lazy loading suportado
        document.querySelectorAll('img[data-src]').forEach(img => {
          img.src = img.dataset.src;
        });
      } else {
        // Fallback com Intersection Observer
        const images = document.querySelectorAll('img[data-src]');
        const imageObserver = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const img = entry.target;
              img.src = img.dataset.src;
              imageObserver.unobserve(img);
            }
          });
        });

        images.forEach(img => imageObserver.observe(img));
      }
    }
  };

  // ========================================
  // KEYBOARD NAVIGATION
  // ========================================
  const KeyboardNav = {
    init() {
      document.addEventListener('keydown', (e) => {
        // ESC fecha menu mobile
        if (e.key === 'Escape') {
          const menuToggle = document.querySelector('.menu-toggle');
          const nav = document.querySelector('.nav');
          
          if (menuToggle?.classList.contains('active')) {
            menuToggle.classList.remove('active');
            nav?.classList.remove('active');
          }
        }

        // Ctrl/Cmd + K foca na busca
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
          e.preventDefault();
          const searchInput = document.querySelector('.search-input');
          searchInput?.focus();
        }
      });
    }
  };

  // ========================================
  // INICIALIZAÇÃO
  // ========================================
  function init() {
    DarkMode.init();
    MobileMenu.init();
    Search.init();
    ScrollToTop.init();
    CopyCode.init();
    ScrollAnimations.init();
    Breadcrumb.init();
    CardsGenerator.init();
    Navigation.init();
    SmoothScroll.init();
    LazyLoad.init();
    KeyboardNav.init();

    console.log('🚀 Code Smells App inicializada com sucesso!');
  }

  // Aguardar DOM estar pronto
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Expor dados globalmente (para uso nas páginas de smell)
  window.SMELLS_DATA = SMELLS_DATA;

})();
