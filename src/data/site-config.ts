// Configurações centralizadas do site

export const siteConfig = {
  empresa: {
    nome: "Webpage Tintas",
    nomeCompleto: "Webpage Tintas Ltda",
    anoFundacao: 2010,
    telefone: "(11) 99999-9999",
    email: "contato@webpagetintas.com.br",
    cidade: "São Paulo",
    estado: "SP",
    endereco: "Rua das Tintas, 123 - Vila Colorida",
    cep: "01234-567",
  },

  stats: {
    projetos: "500+",
    anosExperiencia: "15",
    satisfacao: "98%",
    avaliacoes: "200+",
    nota: "4.9",
    projetosAbandonados: "0",
  },

  social: {
    instagram: "https://instagram.com/webpagetintas",
    facebook: "https://facebook.com/webpagetintas",
    whatsapp: "https://wa.me/5511999999999",
  },

  navegacao: [
    { label: "Início", href: "#inicio" },
    { label: "Portfólio", href: "#portfolio" },
    { label: "Serviços", href: "#servicos" },
    { label: "Sobre", href: "#processo" },
    { label: "Contato", href: "#contato" },
  ] as const,

  servicos: [
    {
      icone: "◈",
      titulo: "Pintura Residencial",
      descricao: "Transformação completa de ambientes internos e externos com acabamento impecável e tintas de alta qualidade.",
    },
    {
      icone: "◇",
      titulo: "Pintura Comercial",
      descricao: "Soluções para escritórios, lojas e estabelecimentos comerciais com mínima interferência nas operações.",
    },
    {
      icone: "△",
      titulo: "Texturas Especiais",
      descricao: "Efeitos decorativos exclusivos como grafiato, marmorizado e técnicas artísticas personalizadas.",
    },
    {
      icone: "○",
      titulo: "Restauração",
      descricao: "Recuperação de superfícies danificadas, tratamento de infiltrações e renovação de fachadas.",
    },
  ] as const,

  processo: [
    {
      numero: "01",
      titulo: "Visita Técnica",
      descricao: "Avaliação presencial gratuita para entender suas necessidades e analisar o ambiente.",
    },
    {
      numero: "02",
      titulo: "Orçamento Detalhado",
      descricao: "Proposta transparente com todos os custos discriminados, sem surpresas.",
    },
    {
      numero: "03",
      titulo: "Preparação",
      descricao: "Proteção de móveis, lixamento e preparação das superfícies para garantir aderência perfeita.",
    },
    {
      numero: "04",
      titulo: "Execução",
      descricao: "Aplicação das demãos necessárias com técnicas profissionais e tintas premium.",
    },
    {
      numero: "05",
      titulo: "Acabamento",
      descricao: "Retoques finais, limpeza completa e verificação de qualidade em cada detalhe.",
    },
    {
      numero: "06",
      titulo: "Garantia",
      descricao: "Acompanhamento pós-obra com garantia de 2 anos em mão de obra e materiais.",
    },
  ] as const,

  depoimentos: [
    {
      texto: "Trabalho excepcional! A equipe foi pontual, organizada e o resultado superou todas as expectativas. Minha sala ficou completamente transformada.",
      nome: "Marina Santos",
      cargo: "Arquiteta",
    },
    {
      texto: "Contratei para pintar todo o escritório e fiquei impressionado com a qualidade. Fizeram tudo no prazo e sem atrapalhar nosso trabalho.",
      nome: "Ricardo Oliveira",
      cargo: "Empresário",
    },
    {
      texto: "Já é a terceira vez que contrato e sempre com o mesmo padrão de excelência. Recomendo de olhos fechados para qualquer projeto.",
      nome: "Camila Ferreira",
      cargo: "Designer de Interiores",
    },
  ] as const,

  portfolio: [
    {
      titulo: "Apartamento Jardins",
      tipo: "Residencial",
      area: "180m²",
      imagem: "/portfolio/apartamento-jardins.jpg",
    },
    {
      titulo: "Escritório Corporativo",
      tipo: "Comercial",
      area: "450m²",
      imagem: "/portfolio/escritorio-corporativo.jpg",
    },
    {
      titulo: "Casa de Praia",
      tipo: "Residencial",
      area: "320m²",
      imagem: "/portfolio/casa-praia.jpg",
    },
    {
      titulo: "Restaurante Italiano",
      tipo: "Comercial",
      area: "200m²",
      imagem: "/portfolio/restaurante.jpg",
    },
    {
      titulo: "Cobertura Duplex",
      tipo: "Residencial",
      area: "280m²",
      imagem: "/portfolio/cobertura-duplex.jpg",
    },
  ] as const,

  textos: {
    hero: {
      badge: "◆ Excelência em Pintura desde 2010",
      titulo: "Transformamos Ambientes em Obras de Arte",
      palavraDestaque: "Ambientes",
      subtitulo: "Especialistas em pintura residencial e comercial com mais de 15 anos de experiência. Qualidade premium, acabamento impecável e garantia de satisfação.",
      ctaPrimario: "Solicitar Orçamento",
      ctaSecundario: "Ver Portfólio",
    },
    portfolio: {
      tag: "Portfólio",
      titulo: "Trabalhos Recentes",
      subtitulo: "Conheça alguns dos nossos projetos mais recentes e veja a qualidade do nosso trabalho.",
      verTodos: "Ver todos os projetos →",
    },
    servicos: {
      tag: "Serviços",
      titulo: "Soluções Completas",
      subtitulo: "Oferecemos uma gama completa de serviços de pintura para atender todas as suas necessidades.",
      cta: "Fale sobre seu projeto →",
    },
    processo: {
      tag: "Processo",
      titulo: "Como Trabalhamos",
      subtitulo: "Nosso processo é simples, transparente e focado na sua satisfação.",
    },
    depoimentos: {
      tag: "Depoimentos",
      titulo: "O que dizem nossos clientes",
      subtitulo: "A satisfação dos nossos clientes é a nossa maior recompensa.",
    },
    cta: {
      titulo: "Pronto para transformar seu ambiente?",
      subtitulo: "Solicite um orçamento gratuito e sem compromisso. Nossa equipe entrará em contato em até 24 horas.",
      botao: "Solicitar Orçamento Gratuito ↗",
    },
    contato: {
      tag: "Contato",
      titulo: "Vamos conversar sobre seu projeto",
      subtitulo: "Entre em contato conosco e transforme seu ambiente.",
    },
    footer: {
      tagline: "Transformando ambientes com excelência e dedicação há mais de 15 anos.",
      copyright: `© ${new Date().getFullYear()} Webpage Tintas. Todos os direitos reservados.`,
      links: [
        { label: "Política de Privacidade", href: "/privacidade" },
        { label: "Termos de Uso", href: "/termos" },
      ],
    },
  },
} as const

export type SiteConfig = typeof siteConfig
