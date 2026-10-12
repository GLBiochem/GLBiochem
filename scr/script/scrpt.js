(function () {
  const ICONS = {
    home: `<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>`,
    box: `<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 8L12 3 3 8l9 5 9-5z"/><path d="M3 8v8l9 5 9-5V8"/><line x1="12" y1="13" x2="12" y2="21"/></svg>`,
    book: `<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>`,
    calc: `<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="2" width="16" height="20" rx="2"/><line x1="8" y1="6" x2="16" y2="6"/><circle cx="8" cy="10.5" r="0.6" fill="currentColor"/><circle cx="12" cy="10.5" r="0.6" fill="currentColor"/><circle cx="16" cy="10.5" r="0.6" fill="currentColor"/><circle cx="8" cy="14.5" r="0.6" fill="currentColor"/><circle cx="12" cy="14.5" r="0.6" fill="currentColor"/><circle cx="16" cy="14.5" r="0.6" fill="currentColor"/><line x1="8" y1="18" x2="16" y2="18"/></svg>`
  };

  const TABS = [
    { id: "inicio", label: "Início", icon: ICONS.home },
    { id: "produtos", label: "Produtos", icon: ICONS.box },
    { id: "guia", label: "Guia de Uso", icon: ICONS.book },
    { id: "calculadora", label: "Calculadora", icon: ICONS.calc }
  ];

  // ======= CONFIGURAÇÃO — edite aqui =======
  const CONFIG = {
    storeName: "GL Biochem Brazil",
    whatsappNumber: "447877380792",
    guideVideoUrl: "",
    notifySheetUrl: "https://script.google.com/macros/s/AKfycbyD8zYhuSYThcdx-9H3gsXHMQOQQKzNtPOu2jmZCiG45-VmoqsTCDlDiTS-Yu6y93NCjQ/exec",
    announcements: [
      { text: "Ganhe 10% de cashback em todas as compras!", icon: `<line x1="19" y1="5" x2="5" y2="19"/><circle cx="6.5" cy="6.5" r="2.5"/><circle cx="17.5" cy="17.5" r="2.5"/>` },
      { text: "Frete GRÁTIS em compras acima de R$1.000", icon: `<rect x="1" y="7" width="13" height="10" rx="1"/><path d="M14 10h3l3 3v4h-6z"/><circle cx="6" cy="19" r="2"/><circle cx="16.5" cy="19" r="2"/>` },
      { text: "Atendimento rápido direto pelo WhatsApp", icon: `<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>` }
    ],
    faqs: [
      { q: "Como faço para comprar?", a: "Navegue pelo catálogo, adicione os produtos que quiser ao carrinho e clique em \"Finalizar no WhatsApp\". Você será direcionado ao nosso WhatsApp com o pedido já formatado, e o pagamento e a entrega são combinados diretamente na conversa." },
      { q: "Quais formas de pagamento vocês aceitam?", a: "Aceitamos Pix, cartão e outras formas, combinadas diretamente pelo WhatsApp no momento da confirmação do pedido." },
      { q: "Qual o prazo de entrega?", a: "O prazo varia de acordo com a sua localização e é informado no atendimento pelo WhatsApp, antes da confirmação do pedido." },
      { q: "Como calcular a quantidade de água bacteriostática?", a: "Você pode utilizar a nossa \"Calculadora de Dosagem\" no menu superior para calcular dinamicamente o volume exato e traços da seringa para qualquer peptídeo do catálogo." },
      { q: "Preciso criar uma conta para comprar?", a: "Não. Não exigimos cadastro — é só montar o carrinho e finalizar direto pelo WhatsApp." }
    ],
    testimonials: [
      {
        name: "Fernanda A.", role: "Pesquisadora", stars: 5,
        quote: "Produtos de excelente grau de pureza. A calculadora do site ajuda imenso nos cálculos do laboratório."
      },
      {
        name: "Rafael M.", role: "Cliente GL Biochem", stars: 5,
        quote: "Peço o Retatrutide direto pelo site, é super prático finalizar pelo WhatsApp sem precisar fazer cadastro."
      },
      {
        name: "Juliana C.", role: "Cliente GL Biochem", stars: 4,
        quote: "Atendimento rápido no WhatsApp e envio super discreto e ágil. Recomendo demais."
      },
      {
        name: "Renan", role: "Cliente GL Biochem", stars: 5,
        quote: "Produto de bom qualidade, comprei a tizerpatida e estou vendo resultado muito rapido."
      }
    ],
    products: [
      {
        id: "p1", images: ["retra10-2.jpg", "Retra10.jpg"], name: "Retratutide 10mg", price: 390.00, category: "Metabólico",
        desc: "Triplo agonista (GLP-1, GIP e glucagon), estudado para obesidade.",
        Conc: "10 mg/mL", Dosagem: "2–12mg semanal",
        specUsage: "Injeção subcutânea", specFreq: "Semanal", specYield: "4–24 semanas",
        specTip: "Iniciar com dose baixa e titular gradualmente. Doses acima de 5mg excedem 100 UI — dividir em 2 aplicações ou usar seringa de 3mL.", specSize: "10 mg",
        vialMg: 10, defaultWaterMl: 1, defaultDoseVal: 2.5, defaultDoseUnit: "mg", aguaB: "1ml", uiSeringa: "20–120 UI",
        popular: true, sales: 340, goals: ["Controle Metabólico", "Peso"], inStock: true
      },
      {
        id: "p2", images: ["retra20.jpg", "retra20-2.jpg"], name: "Retratutide 20mg", price: 550.00, category: "Metabólico",
        desc: "Triplo agonista (GLP-1, GIP e glucagon), estudado para obesidade.",
        Conc: "10 mg/mL", Dosagem: "2–12mg semanal",
        specTip: "Vial com maior rendimento. Doses acima de 10mg excedem 100 UI — dividir em 2 aplicações ou usar seringa de 3mL.", aguaB: "2ml",
        specSize: "20 mg", specUsage: "Injeção subcutânea", specFreq: "1x por semana", specYield: "4–24 semanas", uiSeringa: "20–120 UI",
        vialMg: 20, defaultWaterMl: 2, defaultDoseVal: 2.5, defaultDoseUnit: "mg",
        sales: 120, goals: ["Controle Metabólico", "Peso"], inStock: true
      },
      {
        id: "p3", images: ["retra30.jpg", "retra30-2.jfif"], name: "Retratutide 30mg", price: 880.00, category: "Metabólico",
        desc: "Triplo agonista (GLP-1, GIP e glucagon), estudado para obesidade.",
        Conc: "12,5 mg/mL", Dosagem: "2–12mg semanal",
        specTip: "Triplo agonista GLP-1/GIP/Glucagon. Concentração alta – cuidado na medição.", aguaB: "3ml",
        specSize: "30 mg", specUsage: "Injeção subcutânea", specFreq: "Semanal", specYield: "4–24 semanas", uiSeringa: "15–90 UI",
        vialMg: 30, defaultWaterMl: 3, defaultDoseVal: 2.5, defaultDoseUnit: "mg",
        popular: true, sales: 410, goals: ["Controle Metabólico", "Peso"], inStock: true
      },
      {
        id: "p4", images: ["retra60.jfif", "retra60-2.jfif"], name: "Retratutide 60mg", price: 1200.00, category: "Metabólico",
        desc: "Triplo agonista (GLP-1, GIP e glucagon), estudado para obesidade.",
        Dosagem: "2–12mg semanal", Conc: "14,1 mg/mL",
        specTip: "Triplo agonista GLP-1/GIP/Glucagon. Concentração alta – cuidado na medição.", aguaB: "4ml",
        specSize: "60 mg", specUsage: "Injeção subcutânea", specFreq: "Semanal", specYield: "4–24 semanas", uiSeringa: "15–90 UI",
        vialMg: 60, defaultWaterMl: 4, defaultDoseVal: 5, defaultDoseUnit: "mg",
        sales: 95, goals: ["Controle Metabólico", "Peso"], inStock: true
      },
      {
        id: "p5", images: ["tizer30-2.jfif", "tizer30.jpg"], name: "Tirzepatide 30mg", price: 499.00, category: "Metabólico",
        desc: "Duplo agonista (GLP-1 e GIP), usado para diabetes e obesidade.", Conc: "10 mg/mL",
        Dosagem: "2,5–15mg semanal",
        specSize: "30 mg", specUsage: "Injeção subcutânea", specFreq: "Semanal", specYield: "4–24 semanas",
        specTip: "Doses acima de 10mg excedem 100 UI — dividir em 2 aplicações ou usar seringa de 3mL.", aguaB: "2ml", uiSeringa: "25–150 UI",
        vialMg: 30, defaultWaterMl: 2, defaultDoseVal: 2.5, defaultDoseUnit: "mg",
        sales: 80, goals: ["Controle Metabólico", "Peso"], inStock: true
      },
      {
        id: "p6", images: ["tizer60.jfif", "tizer60-2.png"], name: "Tirzepatide 60mg", price: 850.00, compareAtPrice: 99.90, category: "Metabólico", Conc: "16,7 mg/mL",
        desc: "Duplo agonista (GLP-1 e GIP), usado para diabetes e obesidade.",
        Dosagem: "2,5–15mg semanal",
        specSize: "60 mg", specUsage: "Injeção subcutânea", specFreq: "Semanal", specYield: "4–24 semanas", uiSeringa: "15–90 UI",
        specTip: "Dual agonista GIP/GLP-1. Alta concentração – maior rendimento.", aguaB: "3ml",
        vialMg: 60, defaultWaterMl: 3, defaultDoseVal: 5, defaultDoseUnit: "mg",
        popular: true, sales: 500, goals: ["Controle Metabólico", "Peso"], inStock: true
      },
      {
        id: "p7", images: ["cagli5.jfif", "cagli5-2.jfif"], name: "Cagrilintide 5mg", price: 350.00, category: "Metabólico",
        desc: "Análogo de amilina, aumenta a saciedade.", Conc: "2 mg/mL",
        Dosagem: "0,3–2,4mg semanal",
        specSize: "5 mg", specUsage: "Injeção subcutânea", specFreq: "Semanal", specYield: "8–20 semanas", uiSeringa: "15–120 UI",
        specTip: "Análogo de amilina. Iniciar em 0,3mg/semana e titular gradualmente.", aguaB: "2,5ml",
        vialMg: 5, defaultWaterMl: 2.5, defaultDoseVal: 0.3, defaultDoseUnit: "mg",
        popular: true, sales: 460, goals: ["Controle Metabólico", "Peso"], inStock: true
      },
      {
        id: "p8", images: ["aod5.jfif", "aod5-2.jfif"], name: "AOD-9604 5mg", price: 299.00, category: "Metabólico",
        desc: "Fragmento do hormônio do crescimento, estudado para queima de gordura.", Conc: "5 mg/mL",
        Dosagem: "300–500mcg", uiSeringa: "6–10 UI",
        specSize: "5 mg", specUsage: "Injeção subcutânea", specFreq: "Diária", specYield: "8 semanas",
        specTip: "Fragmento do HGH que promove queima de gordura.", aguaB: "1ml",
        vialMg: 5, defaultWaterMl: 1, defaultDoseVal: 300, defaultDoseUnit: "mcg",
        sales: 200, goals: ["Metabolismo", "Composição corporal"], inStock: true
      },
      {
        id: "p9", images: ["aod10.jfif", "aod10-2.jfif"], name: "AOD-9604 10mg", price: 499.00, category: "Metabólico",
        desc: "Fragmento do hormônio do crescimento, estudado para queima de gordura.", Conc: "5 mg/mL",
        Dosagem: "300–500mcg",
        specSize: "10 mg", specUsage: "Injeção subcutânea", specFreq: "Diária", specYield: "8 semanas", uiSeringa: "6–10 UI",
        specTip: "Fragmento do HGH que promove queima de gordura.", aguaB: "2ml",
        vialMg: 10, defaultWaterMl: 2, defaultDoseVal: 300, defaultDoseUnit: "mcg",
        sales: 150, goals: ["Metabolismo", "Composição corporal"], inStock: true
      },
      {
        id: "p10", images: ["amino.jfif", "amino-2.jfif"], name: "5-Amino-1MQ 50mg", price: 499.00, category: "Metabólico",
        desc: "Molécula que atua no metabolismo energético.", Conc: "25 mg/mL",
        Dosagem: "500mcg–1mg/dia", aguaB: "2ml",
        specSize: "50 mg", specUsage: "Injeção subcutânea", specFreq: "1–2x ao dia", specYield: "8–12 semanas", uiSeringa: "5–10 UI",
        specTip: "Inibidor seletivo de NNMT. Suporta metabolismo de gordura.",
        vialMg: 50, defaultWaterMl: 2, defaultDoseVal: 500, defaultDoseUnit: "mcg",
        sales: 110, goals: ["Metabolismo", "Composição corporal"], inStock: true
      },
      {
        id: "p11", images: ["aicar.jfif", "aicar-2.png"], name: "AICAR 50mg", price: 600.00, category: "Metabólico",
        desc: "Ativador da enzima AMPK, ligada ao gasto de energia.", Conc: "25 mg/mL",
        Dosagem: "",
        specSize: "50 mg", specUsage: "Injeção subcutânea", specFreq: "", specYield: "", uiSeringa: "", aguaB: "",
        vialMg: 50, defaultWaterMl: 2, defaultDoseVal: 500, defaultDoseUnit: "mcg",
        sales: 110, goals: ["Metabolismo", "Composição corporal"], inStock: true
      },
      {
        id: "p12", images: ["tesa20.jfif", "tesa20-2.jfif"], name: "Tesamorelin 20mg", price: 499.00, category: "Metabólico",
        desc: "Estimula o hormônio do crescimento e reduz a gordura abdominal.", Conc: "10 mg/mL",
        Dosagem: "1–2mg", aguaB: "2ml",
        specSize: "20 mg", specUsage: "Injeção subcutânea", specFreq: "Diária", specYield: "8–12 semanas", uiSeringa: "10–20 UI",
        specTip: "Reduz gordura visceral, melhora metabolismo. Vial com maior rendimento.",
        vialMg: 20, defaultWaterMl: 2, defaultDoseVal: 1, defaultDoseUnit: "mg",
        sales: 110, goals: ["Metabolismo", "Composição corporal"], inStock: true
      },
      {
        id: "p13", images: ["mots20.jfif", "mots-2.jfif"], name: "MOTS-C 20mg", price: 499.00, category: "Energia celular",
        desc: "Peptídeo da mitocôndria, ligado ao metabolismo.", Conc: "10 mg/mL",
        Dosagem: "500mcg–1000mcg", aguaB: "2ml",
        specSize: "20 mg", specUsage: "Injeção subcutânea", specFreq: "5 dias sim / 2 dias não", specYield: "4 semanas", uiSeringa: "10–20 UI",
        specTip: "Regulador metabólico, mimetiza exercício. Melhora sensibilidade à insulina.",
        vialMg: 20, defaultWaterMl: 2, defaultDoseVal: 500, defaultDoseUnit: "mcg",
        sales: 110, goals: ["Energia celular"], inStock: true
      },
      {
        id: "p14", images: ["nad500.jfif", "nad500-2.jfif"], name: "NAD+ 500mg", price: 400.00, category: "Energia celular",
        desc: "Coenzima do metabolismo celular.", Conc: "166,6 mg/mL",
        Dosagem: "50–100mg",
        specSize: "500 mg", specUsage: "Injeção subcutânea", specFreq: "1–3x por semana", specYield: "4–8 semanas", uiSeringa: "3–6 UI", aguaB: "3ml",
        specTip: "Coenzima essencial ao metabolismo energético e reparo celular.",
        vialMg: 500, defaultWaterMl: 3, defaultDoseVal: 50, defaultDoseUnit: "mg",
        sales: 110, goals: ["Energia celular"], inStock: true
      },
      {
        id: "p15", images: ["nad1000.jfif", "nad1000-2.jfif"], name: "NAD+ 1000mg", price: 600.00, category: "Energia celular",
        desc: "Coenzima do metabolismo celular.", Conc: "333,2 mg/mL",
        Dosagem: "50–100mg", aguaB: "3ml",
        specSize: "1000 mg", specUsage: "Injeção subcutânea", specFreq: "1–3x por semana", specYield: "4–8 semanas", uiSeringa: "20–120 UI",
        specTip: "Coenzima essencial ao metabolismo energético.",
        vialMg: 1000, defaultWaterMl: 3, defaultDoseVal: 50, defaultDoseUnit: "mg",
        sales: 110, goals: ["Energia celular"], inStock: true
      },
      {
        id: "p16", images: ["bpc.jfif", "bpc-2.jfif"], name: "BPC-157 + TB-500 (5mg + 5mg)", price: 420.00, category: "Recuperação", Conc: "5 mg/mL",
        desc: "Peptídeos estudados para recuperação de tecidos.",
        Dosagem: "1–2mg por aplicação", aguaB: "1ml",
        specSize: "5mg + 5mg", specUsage: "Injeção subcutânea", specFreq: "A cada 2 dias", specYield: "4–6 semanas", uiSeringa: "5–10 UI",
        specTip: "Blend sinérgico para recuperação acelerada.",
        vialMg: 10, defaultWaterMl: 2, defaultDoseVal: 1, defaultDoseUnit: "mg",
        sales: 110, goals: ["Recuperação"], inStock: true
      },
      {
        id: "p17", images: ["ghkcu50.jfif", "ghkcu50-2.jfif"], name: "GHK-Cu 50mg", price: 300.00, category: "Estética",
        desc: "Peptídeo de cobre usado em cosméticos para pele e colágeno.",
        Dosagem: "1–2mg",
        specSize: "50 mg", specUsage: "Injeção subcutânea", specFreq: "5 dias sim / 2 dias não", specYield: "6–8 semanas",
        specTip: "Melhora regeneração da pele.", uiSeringa: "5–10 UI", aguaB: "2,5ml",
        vialMg: 50, defaultWaterMl: 2.5, defaultDoseVal: 1, defaultDoseUnit: "mg",
        popular: true, sales: 110, goals: ["Estética", "Pele"], inStock: true
      },
      {
        id: "p18", images: ["GHK-Cu100.jpg", "ghkcu100.png"], name: "GHK-Cu 100mg", price: 450.00, category: "Estética",
        desc: "Peptídeo de cobre usado em cosméticos para pele e colágeno.",
        Dosagem: "1–2mg",
        specSize: "100 mg", specUsage: "Injeção subcutânea", specFreq: "5 dias sim / 2 dias não", specYield: "6–8 semanas", uiSeringa: "2–4 UI", aguaB: "2ml",
        specTip: "Melhora regeneração da pele. Vial com maior rendimento.",
        vialMg: 100, defaultWaterMl: 2, defaultDoseVal: 1, defaultDoseUnit: "mg",
        sales: 110, goals: ["Estética", "Pele"], inStock: true
      }
    ]
  };
  // ===========================================
  CONFIG.products.forEach(p => { if (!p.image && p.images && p.images.length) p.image = p.images[0]; });

  const money = (v) => v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  const categories = ["Todos", ...Array.from(new Set(CONFIG.products.map(p => p.category)))];
  const goals = ["Todos os objetivos", ...Array.from(new Set(CONFIG.products.flatMap(p => p.goals || [])))];
  let activeCats = new Set();
  let activeGoals = new Set();
  let activeTab = "inicio";
  let searchTerm = "";
  let sortMode = "relevance";
  let cart = {};

  try {
    const saved = localStorage.getItem("boticaviva_cart");
    if (saved) cart = JSON.parse(saved);
  } catch (e) { cart = {}; }
  function saveCart() {
    try { localStorage.setItem("boticaviva_cart", JSON.stringify(cart)); } catch (e) { }
  }

  const IMG_BASE = "scr/imgs/";
  function imgSrc(file) { return /^(https?:)?\/\//.test(file) ? file : IMG_BASE + file; }
  function productArt(file, alt, seed, a, b) {
    if (!file) return artSvg(seed, a, b);
    window.__artFallbacks = window.__artFallbacks || [];
    const idx = window.__artFallbacks.push(artSvg(seed, a, b)) - 1;
    return `<img class="prod-img" src="${imgSrc(file)}" alt="${String(alt).replace(/"/g, "&quot;")}" loading="lazy" onerror="this.outerHTML=window.__artFallbacks[${idx}]">`;
  }
  function productImages(p) {
    return (p.images && p.images.length) ? p.images : (p.image ? [p.image] : []);
  }

  function artSvg(seed, colorA, colorB) {
    return `<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="150" fill="${colorA}"/>
      <rect x="${70 + (seed % 3) * 6}" y="35" width="60" height="90" rx="8" fill="${colorB}"/>
      <rect x="${82 + (seed % 3) * 6}" y="18" width="36" height="24" rx="4" fill="var(--navy-deep)"/>
    </svg>`;
  }

  /* ---------- Tabs / navigation ---------- */
  function renderTabs() {
    [document.getElementById("tabsDesktop"), document.getElementById("tabsMobile")].forEach(nav => {
      nav.innerHTML = TABS.map(t => `
        <button class="tab-btn ${t.id === activeTab ? "active" : ""}" data-tab="${t.id}">
          ${t.icon}<span class="tab-label">${t.label}</span>
        </button>
      `).join("");
      nav.querySelectorAll("button").forEach(btn => {
        btn.addEventListener("click", () => goToTab(btn.dataset.tab));
      });
    });
  }

  function goToTab(tab) {
    activeTab = tab;
    document.querySelectorAll(".view").forEach(v => v.classList.remove("active"));
    document.getElementById("view-" + tab).classList.add("active");
    renderTabs();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  document.querySelectorAll("[data-goto]").forEach(btn => {
    btn.addEventListener("click", () => goToTab(btn.dataset.goto));
  });

  /* ---------- Search ---------- */
  const searchInput = document.getElementById("searchInput");
  const searchDropdown = document.getElementById("searchDropdown");

  function renderPopularDropdown() {
    const popular = CONFIG.products.filter(p => p.popular);
    searchDropdown.innerHTML = `<div class="sd-label">Mais procurados</div>` + popular.map((p, i) => `
      <button class="sd-item" data-id="${p.id}">
        <span class="sd-art">${productArt(p.image, p.name, i, "var(--paper-alt)", i % 2 ? "var(--accent)" : "var(--navy-soft)")}</span>
        <span class="sd-info">
          <span class="sd-name">${p.name}</span>
          <span class="sd-price">${money(p.price)}</span>
        </span>
      </button>
    `).join("");
    searchDropdown.querySelectorAll(".sd-item").forEach(btn => {
      btn.addEventListener("mousedown", (e) => {
        e.preventDefault();
        const product = CONFIG.products.find(p => p.id === btn.dataset.id);
        searchInput.value = product.name;
        searchTerm = product.name.toLowerCase();
        closeSearchDropdown();
        goToTab("produtos");
        renderGrid();
      });
    });
  }

  function openSearchDropdown() { searchDropdown.classList.add("open"); }
  function closeSearchDropdown() { searchDropdown.classList.remove("open"); }

  searchInput.addEventListener("focus", () => {
    if (!searchInput.value.trim()) { renderPopularDropdown(); openSearchDropdown(); }
  });
  searchInput.addEventListener("blur", () => { setTimeout(closeSearchDropdown, 120); });
  searchInput.addEventListener("input", () => {
    searchTerm = searchInput.value.trim().toLowerCase();
    if (searchTerm) { closeSearchDropdown(); if (activeTab !== "produtos") goToTab("produtos"); }
    else { renderPopularDropdown(); openSearchDropdown(); }
    renderGrid();
  });

  /* ---------- Catálogo ---------- */
  function categoryCount(cat) {
    return CONFIG.products.filter(p => p.category === cat).length;
  }
  function goalCount(g) {
    return CONFIG.products.filter(p => (p.goals || []).includes(g)).length;
  }

  function renderCatNav() {
    const catRealList = categories.filter(c => c !== "Todos");
    const catBody = document.getElementById("filterCatBody");
    catBody.innerHTML = catRealList.map(cat => `
      <label class="filter-option ${activeCats.has(cat) ? "checked" : ""}">
        <input type="checkbox" data-cat="${cat}" ${activeCats.has(cat) ? "checked" : ""} />
        <span class="fo-label">${cat}</span>
        <span class="fo-count">(${categoryCount(cat)})</span>
      </label>
    `).join("");
    catBody.querySelectorAll("input[type=checkbox]").forEach(cb => {
      cb.addEventListener("change", () => {
        if (cb.checked) activeCats.add(cb.dataset.cat); else activeCats.delete(cb.dataset.cat);
        renderGrid(); renderCatNav();
      });
    });

    const goalRealList = goals.filter(g => g !== "Todos os objetivos");
    const goalBody = document.getElementById("filterGoalBody");
    goalBody.innerHTML = goalRealList.map(g => `
      <label class="filter-option ${activeGoals.has(g) ? "checked" : ""}">
        <input type="checkbox" data-goal="${g}" ${activeGoals.has(g) ? "checked" : ""} />
        <span class="fo-label">${g}</span>
        <span class="fo-count">(${goalCount(g)})</span>
      </label>
    `).join("");
    goalBody.querySelectorAll("input[type=checkbox]").forEach(cb => {
      cb.addEventListener("change", () => {
        if (cb.checked) activeGoals.add(cb.dataset.goal); else activeGoals.delete(cb.dataset.goal);
        renderGrid(); renderCatNav();
      });
    });
  }

  document.querySelectorAll(".filter-group-head").forEach(head => {
    head.addEventListener("click", () => head.closest(".filter-group").classList.toggle("collapsed"));
  });

  document.getElementById("filterClearBtn").addEventListener("click", () => {
    activeCats.clear();
    activeGoals.clear();
    renderGrid(); renderCatNav();
  });

  function renderGrid() {
    const grid = document.getElementById("productGrid");
    const title = document.getElementById("catalogTitle");
    const count = document.getElementById("catalogCount");
    let list = activeCats.size === 0 ? CONFIG.products : CONFIG.products.filter(p => activeCats.has(p.category));
    if (activeGoals.size > 0) list = list.filter(p => (p.goals || []).some(g => activeGoals.has(g)));
    if (searchTerm) list = list.filter(p => p.name.toLowerCase().includes(searchTerm) || p.desc.toLowerCase().includes(searchTerm));
    list = list.slice();
    if (sortMode === "bestselling") list.sort((a, b) => b.sales - a.sales);
    else if (sortMode === "leastselling") list.sort((a, b) => a.sales - b.sales);
    else if (sortMode === "price-asc") list.sort((a, b) => a.price - b.price);
    else if (sortMode === "price-desc") list.sort((a, b) => b.price - a.price);
    else if (sortMode === "name-asc") list.sort((a, b) => a.name.localeCompare(b.name, "pt-BR"));
    title.textContent = searchTerm
      ? `Resultados para "${searchInput.value}"`
      : (activeCats.size === 1 ? [...activeCats][0] : "Todos os produtos");
    count.textContent = list.length + (list.length === 1 ? " produto" : " produtos");

    if (list.length === 0) {
      grid.innerHTML = `<div class="no-results">Nenhum produto encontrado.</div>`;
      return;
    }
    grid.innerHTML = list.map((p, i) => productCardHtml(p, i)).join("");
    bindProductCardEvents(grid);
  }

  function productCardHtml(p, i) {
    const outOfStock = p.inStock === false;
    const hasDiscount = p.compareAtPrice && p.compareAtPrice > p.price;
    return `
      <div class="card card-clickable ${outOfStock ? "out-of-stock" : ""}" data-id="${p.id}">
        <div class="card-art">
          ${outOfStock ? '<span class="out-of-stock-badge">Esgotado</span>' : ""}
          ${productArt(p.image, p.name, i, "var(--paper-alt)", i % 2 ? "var(--accent)" : "var(--navy-soft)")}
        </div>
        <div class="card-body">
          <span class="card-cat">${p.category}</span>
          <span class="card-name">${p.name}</span>
          <span class="card-desc">${p.desc}</span>

          <div class="card-price-block">
            ${hasDiscount ? `<span class="card-price-old">${money(p.compareAtPrice)}</span>` : ""}
            <span class="card-price ${hasDiscount ? "has-discount" : ""}">${money(p.price)}</span>
          </div>

          <div class="card-actions">
            ${outOfStock ? `
              <button class="notify-btn" data-notify-id="${p.id}">
                <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
                Avise-me quando chegar
              </button>
            ` : `
              <div class="mini-qty" data-id="${p.id}">
                <button class="mini-qty-btn" data-d="-1" aria-label="Diminuir">−</button>
                <span class="mini-qty-val">1</span>
                <button class="mini-qty-btn" data-d="1" aria-label="Aumentar">+</button>
              </div>
              <button class="add-btn" data-id="${p.id}">
                <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
                Adicionar
              </button>
            `}
          </div>
        </div>
      </div>
    `;
  }

  function bindProductCardEvents(container) {
    container.querySelectorAll(".mini-qty-btn").forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const wrap = btn.closest(".mini-qty");
        const valEl = wrap.querySelector(".mini-qty-val");
        const next = Math.max(1, parseInt(valEl.textContent, 10) + parseInt(btn.dataset.d, 10));
        valEl.textContent = next;
      });
    });
    container.querySelectorAll(".add-btn").forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        if (btn.disabled) return;
        const card = btn.closest(".card");
        const qtyEl = card ? card.querySelector(".mini-qty-val") : null;
        const qty = qtyEl ? parseInt(qtyEl.textContent, 10) : 1;
        for (let i = 0; i < qty; i++) addToCart(btn.dataset.id);
        if (qtyEl) qtyEl.textContent = 1;
      });
    });
    container.querySelectorAll(".notify-btn").forEach(btn => {
      btn.addEventListener("click", (e) => { e.stopPropagation(); openNotifyModal(btn.dataset.notifyId); });
    });
    container.querySelectorAll(".card-clickable").forEach(card => card.addEventListener("click", () => openProductPage(card.dataset.id)));
  }

  /* ---------- Modal "Avise-me quando chegar" ---------- */
  const notifyOverlay = document.getElementById("notifyOverlay");
  let notifyProductId = null;
  function openNotifyModal(productId) {
    const p = CONFIG.products.find(pr => pr.id === productId);
    if (!p) return;
    notifyProductId = productId;
    document.getElementById("notifyProductName").textContent = p.name;
    document.getElementById("notifyPhoneInput").value = "";
    notifyOverlay.classList.add("open");
  }
  function closeNotifyModal() { notifyOverlay.classList.remove("open"); }
  document.getElementById("notifyClose").addEventListener("click", closeNotifyModal);
  notifyOverlay.addEventListener("click", (e) => { if (e.target === notifyOverlay) closeNotifyModal(); });
  document.getElementById("notifySubmit").addEventListener("click", () => {
    const phone = document.getElementById("notifyPhoneInput").value.trim();
    if (!phone) { document.getElementById("notifyPhoneInput").focus(); return; }
    const p = CONFIG.products.find(pr => pr.id === notifyProductId);
    const productName = p ? p.name : "";

    if (CONFIG.notifySheetUrl) {
      fetch(CONFIG.notifySheetUrl, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain" },
        body: JSON.stringify({ produto: productName, whatsapp: phone })
      }).catch(() => { });
    }

    const msg = `Olá! Gostaria de ser avisado(a) quando o produto "${productName}" voltar ao estoque. Meu WhatsApp: ${phone}`;
    window.open(`https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(msg)}`, "_blank");
    closeNotifyModal();
    showToast("Cadastrado com sucesso!", "Você será notificado quando o produto voltar ao estoque.");
  });

  let pdpQty = 1;
  const favorites = new Set();

  function openProductPage(id) {
    const p = CONFIG.products.find(pr => pr.id === id);
    if (!p) return;
    const seed = parseInt(id.replace("p", ""), 10) || 0;
    pdpQty = 1;

    const pdpImgs = productImages(p);
    const pdpArt = (n) => productArt(pdpImgs[n], p.name, seed + n, "var(--paper-alt)", (seed + n) % 2 ? "var(--accent)" : "var(--navy-soft)");
    const thumbCount = Math.max(pdpImgs.length, 2);
    document.getElementById("pdpMainImage").innerHTML = pdpArt(0);
    const thumbs = document.getElementById("pdpThumbs");
    thumbs.innerHTML = Array.from({ length: thumbCount }, (_, i) => i).map(i => `
      <div class="pdp-thumb ${i === 0 ? "active" : ""}" data-i="${i}">${pdpArt(i)}</div>
    `).join("");
    thumbs.querySelectorAll(".pdp-thumb").forEach(t => {
      t.addEventListener("click", () => {
        thumbs.querySelectorAll(".pdp-thumb").forEach(x => x.classList.remove("active"));
        t.classList.add("active");
        document.getElementById("pdpMainImage").innerHTML = pdpArt(parseInt(t.dataset.i, 10));
      });
    });

    document.getElementById("pdpCat").textContent = p.category;
    document.getElementById("pdpName").textContent = p.name;
    document.getElementById("pdpDescShort").textContent = p.desc;

    const priceEl = document.getElementById("pdpPrice");
    const oldPriceEl = document.getElementById("pdpPriceOld");
    const hasDiscount = p.compareAtPrice && p.compareAtPrice > p.price;
    priceEl.textContent = money(p.price);
    priceEl.classList.toggle("no-discount", !hasDiscount);
    oldPriceEl.style.display = hasDiscount ? "block" : "none";
    if (hasDiscount) oldPriceEl.textContent = money(p.compareAtPrice);

    const outOfStock = p.inStock === false;
    let stockBadge = document.getElementById("pdpStockBadge");
    if (!stockBadge) {
      stockBadge = document.createElement("span");
      stockBadge.id = "pdpStockBadge";
      stockBadge.className = "pdp-stock-badge";
      document.getElementById("pdpCat").insertAdjacentElement("afterend", stockBadge);
    }
    stockBadge.textContent = "Esgotado";
    stockBadge.style.display = outOfStock ? "inline-block" : "none";

    const reviews = reviewsFor(p);
    const avg = (reviews.reduce((s, r) => s + r.stars, 0) / reviews.length).toFixed(1);
    document.getElementById("pdpStars").textContent = "★".repeat(Math.round(avg)) + "☆".repeat(5 - Math.round(avg));
    document.getElementById("pdpRatingCount").textContent = `${avg} · ${reviews.length} avaliações`;

    document.getElementById("pdpQtyValue").textContent = pdpQty;
    document.getElementById("pdpQtyMinus").onclick = () => { pdpQty = Math.max(1, pdpQty - 1); document.getElementById("pdpQtyValue").textContent = pdpQty; };
    document.getElementById("pdpQtyPlus").onclick = () => { pdpQty += 1; document.getElementById("pdpQtyValue").textContent = pdpQty; };
    const pdpAddBtn = document.getElementById("pdpAddBtn");
    if (outOfStock) {
      pdpAddBtn.classList.add("notify-btn");
      pdpAddBtn.disabled = false;
      pdpAddBtn.querySelector("svg").innerHTML = '<path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/>';
      document.getElementById("pdpAddBtnLabel").textContent = "Avise-me quando chegar";
      pdpAddBtn.onclick = () => openNotifyModal(p.id);
    } else {
      pdpAddBtn.classList.remove("notify-btn");
      pdpAddBtn.disabled = false;
      pdpAddBtn.querySelector("svg").innerHTML = '<circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>';
      document.getElementById("pdpAddBtnLabel").textContent = "Adicionar ao carrinho";
      pdpAddBtn.onclick = () => { for (let i = 0; i < pdpQty; i++) addToCart(p.id); };
    }

    const favBtn = document.getElementById("pdpFavBtn");
    favBtn.classList.toggle("active", favorites.has(p.id));
    favBtn.onclick = () => {
      if (favorites.has(p.id)) favorites.delete(p.id); else favorites.add(p.id);
      favBtn.classList.toggle("active", favorites.has(p.id));
    };

    document.getElementById("pdpPanelDesc").innerHTML = `
      <p>${p.desc}</p>
      <ul>
        <li><strong>Modo de uso:</strong> ${p.specUsage || p.Conc}</li>
        <li><strong>Frequência:</strong> ${p.specFreq || "-"}</li>
        <li><strong>Água bacteriostática:</strong> ${p.aguaB || "-"}</li>
        <li><strong>Ciclo:</strong> ${p.specYield || "-"}</li>
      </ul>
      <p>💡 ${p.specTip || ""}</p>
    `;
    document.getElementById("pdpPanelRev").innerHTML = reviews.map(r => `
      <div class="pdp-review">
        <div class="pdp-review-head">
          <span class="pdp-review-name">${r.name}</span>
          <span class="pdp-review-stars">${"★".repeat(r.stars)}${"☆".repeat(5 - r.stars)}</span>
        </div>
        <p class="pdp-review-text">${r.text}</p>
      </div>
    `).join("");

    document.querySelectorAll(".pdp-tab").forEach((tab, i) => {
      tab.classList.toggle("active", i === 0);
      tab.onclick = () => {
        document.querySelectorAll(".pdp-tab").forEach(t => t.classList.remove("active"));
        document.querySelectorAll(".pdp-tab-panel").forEach(panel => panel.classList.remove("active"));
        tab.classList.add("active");
        document.getElementById(tab.dataset.panel).classList.add("active");
      };
    });

    const related = CONFIG.products.filter(pr => pr.category === p.category && pr.id !== p.id).slice(0, 8);
    const track = document.getElementById("pdpRelatedTrack");
    track.innerHTML = related.map((pr, i) => {
      const rReviews = reviewsFor(pr);
      const rAvg = (rReviews.reduce((s, r) => s + r.stars, 0) / rReviews.length).toFixed(1);
      const rOut = pr.inStock === false;
      return `
        <div class="pdp-related-card ${rOut ? "out-of-stock" : ""}" data-id="${pr.id}">
          <div class="card-art" style="position:relative;">
            ${rOut ? '<span class="out-of-stock-badge">Esgotado</span>' : ""}
            ${productArt(pr.image, pr.name, i, "var(--paper-alt)", i % 2 ? "var(--accent)" : "var(--navy-soft)")}
          </div>
          <span class="rc-name">${pr.name}</span>
          <span class="rc-price">${money(pr.price)}<span class="rc-stars">★ ${rAvg}</span></span>
        </div>
      `;
    }).join("");
    track.querySelectorAll(".pdp-related-card").forEach(card => {
      card.addEventListener("click", () => openProductPage(card.dataset.id));
    });
    document.getElementById("pdpRelPrev").onclick = () => track.scrollBy({ left: -240, behavior: "smooth" });
    document.getElementById("pdpRelNext").onclick = () => track.scrollBy({ left: 240, behavior: "smooth" });

    goToTab("produto-detalhe");
  }

  const REVIEW_POOL = [
    { name: "Camila S.", stars: 5, textFn: (p) => `Comprei o(a) ${p.name.split(" ").slice(0, 3).join(" ")} e adorei o resultado. Vale muito a pena.` },
    { name: "Bruno T.", stars: 4, textFn: (p) => `Produto bom, chegou rápido pelo combinado no WhatsApp. Recompro com certeza.` },
    { name: "Larissa P.", stars: 5, textFn: (p) => `Uso seguindo o guia de uso do site e não tive nenhum problema. Recomendo!` },
    { name: "Diego F.", stars: 5, textFn: (p) => `Já é a segunda vez que compro. Atendimento pelo WhatsApp foi super atencioso.` }
  ];
  function reviewsFor(product) {
    const idx = parseInt(product.id.replace("p", ""), 10) || 0;
    const a = REVIEW_POOL[idx % REVIEW_POOL.length];
    const b = REVIEW_POOL[(idx + 2) % REVIEW_POOL.length];
    return [
      { name: a.name, stars: a.stars, text: a.textFn(product) },
      { name: b.name, stars: b.stars, text: b.textFn(product) }
    ];
  }

  function showToast(title, msg) {
    const stack = document.getElementById("toastStack");
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.innerHTML = `
      <span class="toast-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
      </span>
      <span class="toast-body">
        <span class="toast-title" style="display:block;">${title}</span>
        <span class="toast-msg">${msg}</span>
      </span>
      <button class="toast-close" aria-label="Fechar">✕</button>
    `;
    stack.appendChild(toast);
    requestAnimationFrame(() => toast.classList.add("show"));
    function remove() {
      toast.classList.remove("show");
      setTimeout(() => toast.remove(), 250);
    }
    toast.querySelector(".toast-close").addEventListener("click", remove);
    setTimeout(remove, 5000);
  }

  function renderPopularGrid() {
    const grid = document.getElementById("popularGrid");
    const list = CONFIG.products.filter(p => p.popular);
    grid.innerHTML = list.map((p, i) => productCardHtml(p, i)).join("");
    bindProductCardEvents(grid);
  }

  const CAT_ICONS = {
    "Metabólico": `<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>`,
    "Energia celular": `<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
    "Estética": `<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`,
    "Recuperação": `<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>`
  };

  function renderHomeCategories() {
    const wrap = document.getElementById("homeCatTiles");
    if (!wrap) return;
    const cats = categories.filter(c => c !== "Todos");
    wrap.innerHTML = cats.map(cat => `
      <button class="cat-tile" data-cat="${cat}">
        ${CAT_ICONS[cat] || ""}
        <span class="ct-name">${cat}</span>
        <span class="ct-count">${categoryCount(cat)} produtos</span>
      </button>
    `).join("");
    wrap.querySelectorAll(".cat-tile").forEach(btn => {
      btn.addEventListener("click", () => {
        activeCats = new Set([btn.dataset.cat]);
        goToTab("produtos");
        renderGrid();
        renderCatNav();
      });
    });
  }

  let testiIndex = 0;
  let testiTimer = null;
  function testiPerView() { return 1; }
  function testiMaxIndex() { return Math.max(0, CONFIG.testimonials.length - testiPerView()); }

  function renderTestimonials() {
    const track = document.getElementById("testiTrack");
    if (!track) return;
    track.innerHTML = CONFIG.testimonials.map(t => `
  <div class="testi-slide">
    <div class="testi-card">
      <svg class="testi-quote-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M9.5 5C6 6.2 4 9 4 12.8V19h6.2v-6.4H7c0-2.2 1-3.6 3.2-4.4L9.5 5zm9 0c-3.5 1.2-5.5 4-5.5 7.8V19h6.2v-6.4H16c0-2.2 1-3.6 3.2-4.4L18.5 5z"/></svg>
      <p class="testi-quote">"${t.quote}"</p>
      <div class="testi-author">
        <span class="testi-avatar">${t.name.split(" ").map(w => w.charAt(0)).join("").slice(0, 2).toUpperCase()}</span>
        <span>
          <span class="testi-name" style="display:block;">${t.name}</span>
          <span class="testi-stars">${"★".repeat(t.stars)}${"☆".repeat(5 - t.stars)}</span>
          <span class="testi-role" style="display:block;">${t.role}</span>
        </span>
      </div>
    </div>
  </div>
`).join("");
    renderTestiDots();
    updateTestiPosition();
  }

  function renderTestiDots() {
    const dots = document.getElementById("testiDots");
    const count = testiMaxIndex() + 1;
    dots.innerHTML = Array.from({ length: count }, (_, i) =>
      `<button class="${i === testiIndex ? "active" : ""}" data-i="${i}" aria-label="Ir para depoimento ${i + 1}"></button>`
    ).join("");
    dots.querySelectorAll("button").forEach(b => b.addEventListener("click", () => goToTesti(parseInt(b.dataset.i, 10))));
  }

  function updateTestiPosition() {
    const track = document.getElementById("testiTrack");
    const pct = (100 / testiPerView()) * testiIndex;
    track.style.transform = `translateX(-${pct}%)`;
  }

  function goToTesti(i) {
    const max = testiMaxIndex();
    testiIndex = i < 0 ? max : (i > max ? 0 : i);
    renderTestiDots();
    updateTestiPosition();
    resetTestiAutoplay();
  }

  function resetTestiAutoplay() {
    clearInterval(testiTimer);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!reduce) {
      testiTimer = setInterval(() => {
        const next = testiIndex >= testiMaxIndex() ? 0 : testiIndex + 1;
        goToTesti(next);
      }, 4500);
    }
  }

  const testiPrevBtn = document.getElementById("testiPrev");
  const testiNextBtn = document.getElementById("testiNext");
  if (testiPrevBtn) testiPrevBtn.addEventListener("click", () => goToTesti(testiIndex - 1));
  if (testiNextBtn) testiNextBtn.addEventListener("click", () => goToTesti(testiIndex + 1));

  const testiCarouselEl = document.getElementById("testiCarousel");
  if (testiCarouselEl) {
    testiCarouselEl.addEventListener("mouseenter", () => clearInterval(testiTimer));
    testiCarouselEl.addEventListener("mouseleave", resetTestiAutoplay);
    let testiTouchX = null;
    testiCarouselEl.addEventListener("touchstart", (e) => { testiTouchX = e.touches[0].clientX; }, { passive: true });
    testiCarouselEl.addEventListener("touchend", (e) => {
      if (testiTouchX === null) return;
      const dx = e.changedTouches[0].clientX - testiTouchX;
      if (Math.abs(dx) > 40) goToTesti(testiIndex + (dx < 0 ? 1 : -1));
      testiTouchX = null;
    }, { passive: true });
    window.addEventListener("resize", () => { testiIndex = 0; renderTestiDots(); updateTestiPosition(); });
  }

  function renderFaq() {
    const list = document.getElementById("faqList");
    if (!list) return;
    list.innerHTML = CONFIG.faqs.map((f, i) => `
      <div class="faq-item" data-i="${i}">
        <button class="faq-q">
          <span class="faq-q-text">${f.q}</span>
          <span class="faq-icon"></span>
        </button>
        <div class="faq-a"><p>${f.a}</p></div>
      </div>
    `).join("");
    list.querySelectorAll(".faq-item").forEach(item => {
      const btn = item.querySelector(".faq-q");
      const answer = item.querySelector(".faq-a");
      btn.addEventListener("click", () => {
        const isOpen = item.classList.contains("open");
        list.querySelectorAll(".faq-item.open").forEach(openItem => {
          openItem.classList.remove("open");
          openItem.querySelector(".faq-a").style.maxHeight = null;
        });
        if (!isOpen) {
          item.classList.add("open");
          answer.style.maxHeight = answer.scrollHeight + "px";
        }
      });
    });
  }

  /* ---------- Guia de uso ---------- */
  let guideSearchTerm = "";
  let guideCat = "Todas as categorias";

  function renderGuideToolbar() {
    const select = document.getElementById("guideCatSelect");
    const cats = ["Todas as categorias", ...Array.from(new Set(CONFIG.products.map(p => p.category)))];
    select.innerHTML = cats.map(c => `<option value="${c}">${c}</option>`).join("");
    select.value = guideCat;
    select.addEventListener("change", () => { guideCat = select.value; renderGuide(); });

    const input = document.getElementById("guideSearchInput");
    input.addEventListener("input", () => { guideSearchTerm = input.value.trim().toLowerCase(); renderGuide(); });

    const banner = document.getElementById("guideBanner");
    const hasVideo = !!CONFIG.guideVideoUrl;
    banner.classList.add("show");
    banner.innerHTML = `
      <div class="guide-banner-left">
        <span class="guide-banner-icon">
          <svg viewBox="0 0 24 24"><polygon points="6 4 20 12 6 20"/></svg>
        </span>
        <span>
          <span class="guide-banner-title" style="display:block;">Como usar seus produtos corretamente</span>
          <span class="guide-banner-sub">${hasVideo ? "Assista ao vídeo tutorial completo" : "Ainda não temos vídeo — fale com a gente pelo WhatsApp"}</span>
        </span>
      </div>
      <a class="guide-banner-cta" href="${hasVideo ? CONFIG.guideVideoUrl : "https://wa.me/" + CONFIG.whatsappNumber}" target="_blank" rel="noopener">
        <svg viewBox="0 0 24 24"><polygon points="6 4 20 12 6 20"/></svg>
        ${hasVideo ? "Assistir Vídeo" : "Falar no WhatsApp"}
      </a>
    `;

    document.getElementById("guideExportBtn").addEventListener("click", () => {
      document.getElementById("view-guia").classList.add("printing");
      window.print();
      setTimeout(() => document.getElementById("view-guia").classList.remove("printing"), 500);
    });
  }

  function renderGuide() {
    const guideGrid = document.getElementById("guideGrid");
    let list = CONFIG.products;
    if (guideCat !== "Todas as categorias") list = list.filter(p => p.category === guideCat);
    if (guideSearchTerm) list = list.filter(p => p.name.toLowerCase().includes(guideSearchTerm));

    document.getElementById("guideResultsCount").textContent = list.length + (list.length === 1 ? " resultado" : " resultados");

    if (list.length === 0) {
      guideGrid.innerHTML = `<div class="no-results">Nenhum produto encontrado.</div>`;
      return;
    }
    const cats = Array.from(new Set(CONFIG.products.map(p => p.category)));
    guideGrid.innerHTML = cats.map(cat => {
      const items = list.filter(p => p.category === cat);
      if (items.length === 0) return "";
      const cards = items.map((p, i) => `
        <div class="spec-card">
          <div class="spec-head">
            <span class="spec-thumb">${productArt(p.image, p.name, i, "var(--paper-alt)", i % 2 ? "var(--accent)" : "var(--navy-soft)")}</span>
            <span>
              <span class="spec-name" style="display:block;">${p.name}</span>
              <span class="spec-sub">${p.specSize || ""}</span>
            </span>
          </div>
          <div class="spec-grid">
            <div class="spec-item">
              <span class="spec-label"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3h12" /><path d="M7 3v14a3 3 0 0 0 3 3h4a3 3 0 0 0 3-3V3" /><path d="M7 12h10" /></svg>Água BAC</span>
              <span class="spec-value">${p.aguaB || "-"}</span>
            </div>
            <div class="spec-item">
              <span class="spec-label"><svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v6"/><path d="M6 12h12l-1.5 8a2 2 0 0 1-2 1.7H9.5a2 2 0 0 1-2-1.7z"/></svg>Concentração</span>
              <span class="spec-value">${p.Conc || "-"}</span>
            </div>
            <div class="spec-item">
              <span class="spec-label"><svg viewBox="0 0 24 24" fill="none" stroke-currentColor stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 2 4 4" /><path d="m17 7 3-3" /><path d="M16 11 9 4" /><path d="m19 5-3-3" /><path d="m14 12 2.5 2.5" /><path d="M14 9 9 14" /><path d="M13 14 2 22" /><path d="m19 15-3-3" /></svg>Dosagem</span>
              <span class="spec-value">${p.Dosagem || "-"}</span>
            </div>
            <div class="spec-item">
              <span class="spec-label"><svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><polyline points="12 7 12 12 15 15"/></svg>FREQUÊNCIA</span>
              <span class="spec-value">${p.specFreq || "-"}</span>
            </div>
            <div class="spec-item">
              <span class="spec-label"><svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>Ciclo</span>
              <span class="spec-value">${p.specYield || "-"}</span>
            </div>
            <div class="spec-item">
              <span class="spec-label"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3h12" /><path d="M7 3v14a3 3 0 0 0 3 3h4a3 3 0 0 0 3-3V3" /><path d="M7 12h10" /></svg>UI na Seringa</span>
              <span class="spec-value">${p.uiSeringa || "-"}</span>
            </div>
          </div>
          <div class="spec-tip">
            <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
            <span>${p.specTip || "Consulte o rótulo antes do manuseio."}</span>
          </div>
        </div>
      `).join("");
      return `
        <div class="guide-section">
          <div class="guide-section-head">
            <h3>${cat}</h3>
            <span class="guide-section-count">${items.length}</span>
          </div>
          <div class="guide-grid">${cards}</div>
        </div>
      `;
    }).join("");
  }

  /* ---------- CALCULADORA DE PEPTÍDEOS (LÓGICA GL BIOCHEM) ---------- */
  function renderCalculator() {
    const selectProduct = document.getElementById("calcProduct");
    const inputVialMg = document.getElementById("calcVialMg");
    const inputWaterMl = document.getElementById("calcWaterMl");
    const inputDoseVal = document.getElementById("calcDoseVal");
    const selectDoseUnit = document.getElementById("calcDoseUnit");
    const selectSyringeType = document.getElementById("calcSyringeType");
    const resultDiv = document.getElementById("calcResult");

    // Preenche a lista de seleção do catálogo[cite: 1]
    selectProduct.innerHTML = `<option value="">-- Seleção manual --</option>` +
      CONFIG.products.map(p => `<option value="${p.id}">${p.name}</option>`).join("");

    selectProduct.addEventListener("change", () => {
      const p = CONFIG.products.find(item => item.id === selectProduct.value);
      if (p) {
        if (p.vialMg) inputVialMg.value = p.vialMg;
        if (p.defaultWaterMl) inputWaterMl.value = p.defaultWaterMl;
        if (p.defaultDoseVal) inputDoseVal.value = p.defaultDoseVal;
        if (p.defaultDoseUnit) selectDoseUnit.value = p.defaultDoseUnit;
      }
      calculateDose();
    });

    [inputVialMg, inputWaterMl, inputDoseVal, selectDoseUnit, selectSyringeType].forEach(el => {
      el.addEventListener("input", calculateDose);
      el.addEventListener("change", calculateDose);
    });

    calculateDose();

    function calculateDose() {
      const vialMg = parseFloat(inputVialMg.value);
      const waterMl = parseFloat(inputWaterMl.value);
      const doseVal = parseFloat(inputDoseVal.value);
      const doseUnit = selectDoseUnit.value; // 'mg' ou 'mcg'[cite: 1]
      const unitsPerMl = parseFloat(selectSyringeType.value) || 100; // Seringa U-100, U-50, U-30[cite: 1]

      if (!vialMg || !waterMl || !doseVal || vialMg <= 0 || waterMl <= 0 || doseVal <= 0) {
        resultDiv.innerHTML = `<p class="calc-result-empty">Preencha os valores de entrada válidos para calcular.</p>`;
        return;
      }

      // Passo A: Padronização em mcg[cite: 1]
      const totalMcg = vialMg * 1000;
      const doseMcg = doseUnit === "mg" ? doseVal * 1000 : doseVal;

      // Passo B: Concentração da Solução[cite: 1]
      const concMcgMl = totalMcg / waterMl;
      const concMgMl = vialMg / waterMl;

      // Passo C: Volume Requerido (mL)[cite: 1]
      const volumeMl = doseMcg / concMcgMl;

      // Passo D: Graduação/Unidades na Seringa[cite: 1]
      const syringeUnits = volumeMl * unitsPerMl;
      const roundedUnits = Math.round(syringeUnits * 10) / 10;

      // Número total de doses disponíveis por frasco[cite: 1]
      const totalDoses = Math.floor(totalMcg / doseMcg);

      const isExceeded = syringeUnits > unitsPerMl;

      resultDiv.innerHTML = `
        <div class="calc-result-item">
          <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
          <span>
            <span class="cr-label">Concentração Obtida</span>
            <span class="cr-value">${concMgMl.toLocaleString('pt-BR', { maximumFractionDigits: 2 })} mg/mL (${concMcgMl.toLocaleString('pt-BR')} mcg/mL)</span>
          </span>
        </div>
        <div class="calc-result-item">
          <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v6"/><path d="M6 12h12l-1.5 8a2 2 0 0 1-2 1.7H9.5a2 2 0 0 1-2-1.7z"/></svg>
          <span>
            <span class="cr-label">Volume por Aplicação</span>
            <span class="cr-value">${volumeMl.toFixed(3)} mL</span>
          </span>
        </div>
        <div class="calc-result-item" style="background: rgba(200, 147, 30, 0.08); padding: 12px; border-radius: var(--radius-s); margin: 6px 0;">
          <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          <span>
            <span class="cr-label" style="color:var(--navy-deep);">Puxar até a Marca de:</span>
            <span class="cr-value" style="font-size: 20px; color: var(--accent);">${roundedUnits} UI (Unidades)</span>
          </span>
        </div>
        <div class="calc-result-item">
          <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><polyline points="12 7 12 12 15 15"/></svg>
          <span>
            <span class="cr-label">Rendimento Estimado</span>
            <span class="cr-value">~${totalDoses} doses por frasco</span>
          </span>
        </div>
        ${isExceeded ? `
          <div class="spec-tip" style="margin-top: 10px; border-color: #d9534f; background: rgba(217, 83, 79, 0.08);">
            <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke="#d9534f" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></div
            <span style="color: #c9302c;">Atenção: A dose calculada (${roundedUnits} UI) excede a capacidade desta seringa. Considere dividir a aplicação ou adicionar menos diluente.</span>
          </div>
        ` : ""}
      `;
    }

    document.querySelectorAll(".calc-guide-link[data-goto]").forEach(btn => {
      btn.addEventListener("click", () => {
        goToTab(btn.dataset.goto);
        if (btn.dataset.goto === "inicio") {
          setTimeout(() => {
            const faqSection = document.querySelector(".home-faq");
            if (faqSection) faqSection.scrollIntoView({ behavior: "smooth", block: "start" });
          }, 150);
        }
      });
    });
    const calcWhats = document.getElementById("calcWhatsLink");
    if (calcWhats) calcWhats.addEventListener("click", () => window.open(`https://wa.me/${CONFIG.whatsappNumber}`, "_blank"));
  }

  /* ---------- Carrinho ---------- */
  function addToCart(id) {
    const product = CONFIG.products.find(p => p.id === id);
    if (product && product.inStock === false) return;
    cart[id] = (cart[id] || 0) + 1;
    saveCart();
    renderCartUI();
    openDrawer();
  }
  function setQty(id, qty) {
    if (qty <= 0) delete cart[id]; else cart[id] = qty;
    saveCart();
    renderCartUI();
  }
  function cartEntries() {
    return Object.entries(cart)
      .map(([id, qty]) => ({ product: CONFIG.products.find(p => p.id === id), qty }))
      .filter(e => e.product);
  }
  function renderCartUI() {
    const entries = cartEntries();
    const totalQty = entries.reduce((s, e) => s + e.qty, 0);
    const totalPrice = entries.reduce((s, e) => s + e.qty * e.product.price, 0);

    const cartCount = document.getElementById("cartCount");
    cartCount.style.display = totalQty > 0 ? "flex" : "none";
    cartCount.textContent = totalQty;

    const drawerItems = document.getElementById("drawerItems");
    if (entries.length === 0) {
      drawerItems.innerHTML = `<div class="empty-cart">Seu carrinho está vazio.<br>Adicione produtos para continuar.</div>`;
    } else {
      drawerItems.innerHTML = entries.map((e, i) => `
        <div class="line-item">
          <div class="li-art">${productArt(e.product.image, e.product.name, i, "var(--paper-alt)", "var(--navy-soft)")}</div>
          <div class="li-body">
            <span class="li-name">${e.product.name}</span>
            <span class="li-desc">${e.product.desc}</span>
            <span class="li-price">${money(e.product.price)} cada</span>
            <div class="li-controls">
              <button class="qty-btn" data-id="${e.product.id}" data-delta="-1">–</button>
              <span>${e.qty}</span>
              <button class="qty-btn" data-id="${e.product.id}" data-delta="1">+</button>
              <button class="li-remove" data-id="${e.product.id}">remover</button>
            </div>
          </div>
        </div>
      `).join("");
      drawerItems.querySelectorAll(".qty-btn").forEach(btn => {
        btn.addEventListener("click", () => {
          const id = btn.dataset.id;
          const delta = parseInt(btn.dataset.delta, 10);
          setQty(id, (cart[id] || 0) + delta);
        });
      });
      drawerItems.querySelectorAll(".li-remove").forEach(btn => btn.addEventListener("click", () => setQty(btn.dataset.id, 0)));
    }

    document.getElementById("drawerTotal").textContent = money(totalPrice);
    document.getElementById("checkoutBtn").disabled = totalQty === 0;

    const mobileBar = document.getElementById("mobileBar");
    document.getElementById("mobileTotal").textContent = money(totalPrice) + " · " + totalQty + (totalQty === 1 ? " item" : " itens");
    mobileBar.classList.toggle("show", totalQty > 0 && !drawer.classList.contains("open"));
  }

  function buildWhatsAppMessage() {
    const entries = cartEntries();
    const totalPrice = entries.reduce((s, e) => s + e.qty * e.product.price, 0);
    let msg = `Olá! Gostaria de finalizar este pedido na ${CONFIG.storeName}:\n\n`;
    entries.forEach(e => { msg += `• ${e.product.name} (x${e.qty}) — ${money(e.product.price * e.qty)}\n`; });
    msg += `\nTotal: ${money(totalPrice)}\n\nAguardo instruções de pagamento e entrega. Obrigado(a)!`;
    return msg;
  }

  const drawer = document.getElementById("drawer");
  const overlay = document.getElementById("overlay");
  function openDrawer() { drawer.classList.add("open"); overlay.classList.add("open"); document.getElementById("mobileBar").classList.remove("show"); }
  function closeDrawer() { drawer.classList.remove("open"); overlay.classList.remove("open"); renderCartUI(); }

  document.getElementById("openCart").addEventListener("click", openDrawer);
  document.getElementById("mobileOpenCart").addEventListener("click", openDrawer);
  document.getElementById("closeCart").addEventListener("click", closeDrawer);
  overlay.addEventListener("click", closeDrawer);
  document.getElementById("checkoutBtn").addEventListener("click", () => {
    const text = encodeURIComponent(buildWhatsAppMessage());
    window.open(`https://wa.me/${CONFIG.whatsappNumber}?text=${text}`, "_blank");
  });

  document.getElementById("footContato").href = `https://wa.me/${CONFIG.whatsappNumber}`;
  document.getElementById("footMeusPedidos").href = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent("Olá! Gostaria de saber sobre o status do meu pedido na " + CONFIG.storeName + ".")}`;
  document.getElementById("footGrupo").href = `https://wa.me/${CONFIG.whatsappNumber}`;
  document.getElementById("footCarrinho").addEventListener("click", openDrawer);
  document.getElementById("footYear").textContent = new Date().getFullYear();

  document.querySelectorAll(".foot-col [data-goto], .back-btn[data-goto]").forEach(btn => {
    btn.addEventListener("click", () => {
      goToTab(btn.dataset.goto);
      if (btn.dataset.cat) {
        activeCats = btn.dataset.cat === "Todos" ? new Set() : new Set([btn.dataset.cat]);
        renderGrid();
        renderCatNav();
      }
    });
  });

  const todayLabel = new Date().toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" });
  document.querySelectorAll(".legal-date").forEach(el => el.textContent = todayLabel);

  /* ---------- Slideshow ---------- */
  const SLIDES = [
    { eyebrow: "NOVIDADE", title: "Peptídeos de alta pureza GL Biochem", text: "Grau de pesquisa com entrega garantida.", cta: "Ver Produtos", image: "slide4.png" },
    { eyebrow: "TECNOLOGIA", title: "Linha Metabólica e Regenerativa", text: "Suporte completo para sua pesquisa.", cta: "Ver Metabólicos", image: "slide5.png" },
    { eyebrow: "PEDIDO FÁCIL", title: "Monte o carrinho e finalize direto no WhatsApp", text: "Sem cadastro — fale direto com a equipe.", cta: "Ver Catálogo", image: "slide6.png" }
  ];
  let slideIndex = 0;
  let slideTimer = null;

  function slideArt(seed, bg) {
    return `<svg viewBox="0 0 800 340" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      <rect width="800" height="340" fill="${bg}"/>
    </svg>`;
  }

  function slideBackground(s, i) {
    if (!s.image) return slideArt(i, s.bg);
    window.__slideFallbacks = window.__slideFallbacks || [];
    const idx = window.__slideFallbacks.push(slideArt(i, s.bg)) - 1;
    return `<img class="slide-img" src="${imgSrc(s.image)}" alt="${s.title.replace(/"/g, "&quot;")}" onerror="this.outerHTML=window.__slideFallbacks[${idx}]">`;
  }
  function renderSlides() {
    const frame = document.getElementById("slideFrame");
    const prevBtn = document.getElementById("slidePrev");
    const nextBtn = document.getElementById("slideNext");
    frame.querySelectorAll(".slide").forEach(s => s.remove());
    SLIDES.forEach((s, i) => {
      const el = document.createElement("div");
      el.className = "slide" + (i === slideIndex ? " active" : "");
      el.innerHTML = s.image ? slideBackground(s, i) : `
        ${slideBackground(s, i)}
        <div class="slide-copy">
          <span class="s-eyebrow">${s.eyebrow}</span>
          <h3>${s.title}</h3>
          <p>${s.text}</p>
          <button data-goto="produtos">${s.cta}</button>
        </div>
      `;
      frame.insertBefore(el, prevBtn);
    });
    frame.querySelectorAll("[data-goto]").forEach(btn => btn.addEventListener("click", () => goToTab(btn.dataset.goto)));
    renderDots();
  }

  function renderDots() {
    const dots = document.getElementById("slideDots");
    dots.innerHTML = SLIDES.map((_, i) => `<button class="${i === slideIndex ? "active" : ""}" data-i="${i}" aria-label="Ir para slide ${i + 1}"></button>`).join("");
    dots.querySelectorAll("button").forEach(b => b.addEventListener("click", () => goToSlide(parseInt(b.dataset.i, 10))));
  }

  function goToSlide(i) {
    slideIndex = (i + SLIDES.length) % SLIDES.length;
    document.querySelectorAll(".slide").forEach((s, idx) => s.classList.toggle("active", idx === slideIndex));
    renderDots();
    resetAutoplay();
  }

  function resetAutoplay() {
    clearInterval(slideTimer);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!reduce) slideTimer = setInterval(() => goToSlide(slideIndex + 1), 5000);
  }

  document.getElementById("slidePrev").addEventListener("click", () => goToSlide(slideIndex - 1));
  document.getElementById("slideNext").addEventListener("click", () => goToSlide(slideIndex + 1));

  const slideFrameEl = document.getElementById("slideFrame");
  slideFrameEl.addEventListener("mouseenter", () => clearInterval(slideTimer));
  slideFrameEl.addEventListener("mouseleave", resetAutoplay);

  let touchStartX = null;
  slideFrameEl.addEventListener("touchstart", (e) => { touchStartX = e.touches[0].clientX; }, { passive: true });
  slideFrameEl.addEventListener("touchend", (e) => {
    if (touchStartX === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dx) > 40) goToSlide(slideIndex + (dx < 0 ? 1 : -1));
    touchStartX = null;
  }, { passive: true });

  document.getElementById("sortSelect").addEventListener("change", (e) => {
    sortMode = e.target.value;
    renderGrid();
  });

  function initHeaderScroll() {
    const header = document.querySelector("header.site");
    function update() {
      header.classList.toggle("scrolled", window.scrollY > 12);
    }
    window.addEventListener("scroll", update, { passive: true });
    update();
  }

  function syncFixedOffsets() {
    const bar = document.getElementById("announceBar");
    const header = document.querySelector("header.site");
    const barVisible = !bar.classList.contains("hidden");
    const barHeight = barVisible ? bar.offsetHeight : 0;
    header.classList.toggle("no-announce", !barVisible);
    header.style.top = barHeight + "px";
    document.body.style.paddingTop = (barHeight + header.offsetHeight) + "px";
  }
  window.addEventListener("resize", syncFixedOffsets);

  function initAnnounceBar() {
    const bar = document.getElementById("announceBar");
    try {
      if (localStorage.getItem("boticaviva_announce_closed") === "1") bar.classList.add("hidden");
    } catch (e) { }
    document.getElementById("announceClose").addEventListener("click", () => {
      bar.classList.add("hidden");
      try { localStorage.setItem("boticaviva_announce_closed", "1"); } catch (e) { }
      syncFixedOffsets();
    });

    const track = document.getElementById("announceTrack");
    const msgs = CONFIG.announcements || [];
    if (msgs.length === 0) return;
    track.innerHTML = msgs.map((m, i) => `
      <div class="announce-slide ${i === 0 ? "active" : ""}">
        <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${m.icon}</svg>
        <span>${m.text}</span>
      </div>
    `).join("");
    if (msgs.length > 1) {
      let aIdx = 0;
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (!reduce) {
        setInterval(() => {
          const slides = track.querySelectorAll(".announce-slide");
          slides[aIdx].classList.remove("active");
          aIdx = (aIdx + 1) % slides.length;
          slides[aIdx].classList.add("active");
        }, 3500);
      }
    }
  }

  function init() {
    initHeaderScroll();
    initAnnounceBar();
    renderTabs();
    renderCatNav();
    renderGrid();
    renderPopularGrid();
    renderHomeCategories();
    renderTestimonials();
    resetTestiAutoplay();
    renderFaq();
    renderGuideToolbar();
    renderGuide();
    renderCalculator();
    renderCartUI();
    renderSlides();
    resetAutoplay();
    syncFixedOffsets();
  }
  init();
})();

