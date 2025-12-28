import React, { useState, useEffect } from 'react';

const PintorWebsite = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 100);
  }, []);

  const projects = [
    { id: 1, title: 'Residência Jardins', type: 'Residencial', area: '280m²', image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80' },
    { id: 2, title: 'Escritório Faria Lima', type: 'Comercial', area: '450m²', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80' },
    { id: 3, title: 'Apartamento Itaim', type: 'Residencial', area: '120m²', image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80' },
    { id: 4, title: 'Loft Pinheiros', type: 'Residencial', area: '95m²', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80' },
  ];

  const services = [
    { icon: '◈', title: 'Pintura Residencial', desc: 'Transformação completa de ambientes internos e externos com acabamento impecável.' },
    { icon: '◇', title: 'Pintura Comercial', desc: 'Soluções para escritórios, lojas e estabelecimentos com mínima interrupção.' },
    { icon: '△', title: 'Texturas Especiais', desc: 'Efeitos decorativos exclusivos: marmorizado, cimento queimado, grafiato.' },
    { icon: '○', title: 'Restauração', desc: 'Recuperação de superfícies danificadas e preparação profissional.' },
  ];

  const testimonials = [
    { name: 'Marina Costa', role: 'Arquiteta', text: 'Trabalho impecável. A atenção aos detalhes e o acabamento final superaram todas as expectativas. Indico para todos os meus projetos.' },
    { name: 'Ricardo Almeida', role: 'Empresário', text: 'Profissionalismo do início ao fim. Entregou no prazo, sem sujeira e com qualidade excepcional. Já é a terceira vez que contrato.' },
    { name: 'Fernanda Lima', role: 'Designer de Interiores', text: 'Encontrar um pintor que entende de cores e acabamentos assim é raro. Parceria que pretendo manter por muitos anos.' },
  ];

  return (
    <div style={styles.container}>
      {/* Grain Overlay */}
      <div style={styles.grainOverlay} />
      
      {/* Navigation */}
      <nav style={styles.nav}>
        <div style={styles.navContent}>
          <div style={styles.logo}>
            <span style={styles.logoIcon}>▣</span>
            <span style={styles.logoText}>NOME<span style={styles.logoAccent}>.</span></span>
          </div>
          
          <div style={styles.navLinks}>
            {['Início', 'Portfólio', 'Serviços', 'Sobre', 'Contato'].map((item, i) => (
              <a key={i} href={`#${item.toLowerCase()}`} style={styles.navLink}>
                {item}
              </a>
            ))}
          </div>
          
          <a href="#contato" style={styles.navCta}>
            Orçamento Gratuito
            <span style={styles.ctaArrow}>→</span>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.heroContent}>
          <div style={{
            ...styles.heroTagline,
            opacity: isLoaded ? 1 : 0,
            transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s'
          }}>
            <span style={styles.heroTaglineIcon}>◆</span>
            Excelência em Pintura desde 2010
          </div>
          
          <h1 style={{
            ...styles.heroTitle,
            opacity: isLoaded ? 1 : 0,
            transform: isLoaded ? 'translateY(0)' : 'translateY(40px)',
            transition: 'all 1s cubic-bezier(0.16, 1, 0.3, 1) 0.4s'
          }}>
            Transformamos<br/>
            <span style={styles.heroTitleAccent}>Ambientes</span> em<br/>
            Obras de Arte
          </h1>
          
          <p style={{
            ...styles.heroSubtitle,
            opacity: isLoaded ? 1 : 0,
            transform: isLoaded ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.6s'
          }}>
            Pintura residencial e comercial com acabamento premium.<br/>
            Mais de 500 projetos entregues em São Paulo.
          </p>
          
          <div style={{
            ...styles.heroCtas,
            opacity: isLoaded ? 1 : 0,
            transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.8s'
          }}>
            <a href="#contato" style={styles.primaryCta}>
              Solicitar Orçamento
              <span style={styles.ctaIcon}>↗</span>
            </a>
            <a href="#portfolio" style={styles.secondaryCta}>
              Ver Trabalhos
            </a>
          </div>
        </div>
        
        <div style={{
          ...styles.heroVisual,
          opacity: isLoaded ? 1 : 0,
          transform: isLoaded ? 'scale(1)' : 'scale(0.95)',
          transition: 'all 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.3s'
        }}>
          <div style={styles.heroImageWrapper}>
            <img 
              src="https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=800&q=80" 
              alt="Pintura profissional"
              style={styles.heroImage}
            />
            <div style={styles.heroImageOverlay} />
          </div>
          
          <div style={styles.floatingCard}>
            <div style={styles.floatingCardIcon}>★</div>
            <div>
              <div style={styles.floatingCardNumber}>4.9</div>
              <div style={styles.floatingCardText}>+200 avaliações</div>
            </div>
          </div>
          
          <div style={styles.floatingCardAlt}>
            <div style={styles.floatingCardAltNumber}>15+</div>
            <div style={styles.floatingCardAltText}>Anos de experiência</div>
          </div>
        </div>
        
        <div style={styles.heroScroll}>
          <div style={styles.scrollLine} />
          <span style={styles.scrollText}>Role para explorar</span>
        </div>
      </section>

      {/* Stats Section */}
      <section style={styles.stats}>
        <div style={styles.statsGrid}>
          {[
            { number: '500+', label: 'Projetos Concluídos' },
            { number: '15', label: 'Anos de Experiência' },
            { number: '98%', label: 'Clientes Satisfeitos' },
            { number: '0', label: 'Projetos Abandonados' },
          ].map((stat, i) => (
            <div key={i} style={styles.statItem}>
              <div style={styles.statNumber}>{stat.number}</div>
              <div style={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" style={styles.portfolio}>
        <div style={styles.sectionHeader}>
          <span style={styles.sectionTag}>Portfólio</span>
          <h2 style={styles.sectionTitle}>Trabalhos<br/>Recentes</h2>
          <p style={styles.sectionSubtitle}>
            Uma seleção dos nossos projetos mais recentes,<br/>
            cada um com sua história e desafios únicos.
          </p>
        </div>
        
        <div style={styles.portfolioGrid}>
          {projects.map((project, i) => (
            <div 
              key={project.id} 
              style={{
                ...styles.portfolioItem,
                ...(i === 0 ? styles.portfolioItemLarge : {}),
              }}
              onMouseEnter={(e) => {
                e.currentTarget.querySelector('.overlay').style.opacity = '1';
                e.currentTarget.querySelector('img').style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.querySelector('.overlay').style.opacity = '0';
                e.currentTarget.querySelector('img').style.transform = 'scale(1)';
              }}
            >
              <img 
                src={project.image} 
                alt={project.title}
                style={styles.portfolioImage}
              />
              <div className="overlay" style={styles.portfolioOverlay}>
                <div style={styles.portfolioInfo}>
                  <span style={styles.portfolioType}>{project.type}</span>
                  <h3 style={styles.portfolioTitle}>{project.title}</h3>
                  <span style={styles.portfolioArea}>{project.area}</span>
                </div>
                <div style={styles.portfolioArrow}>↗</div>
              </div>
            </div>
          ))}
        </div>
        
        <div style={styles.portfolioMore}>
          <a href="#" style={styles.portfolioMoreLink}>
            Ver todos os projetos
            <span style={styles.portfolioMoreArrow}>→</span>
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" style={styles.services}>
        <div style={styles.servicesContent}>
          <div style={styles.servicesLeft}>
            <span style={styles.sectionTag}>Serviços</span>
            <h2 style={styles.servicesTitleMain}>
              Soluções<br/>
              <span style={styles.servicesTitleAccent}>Completas</span>
            </h2>
            <p style={styles.servicesDesc}>
              Do planejamento à execução final, oferecemos 
              um serviço completo e personalizado para cada projeto.
            </p>
            <a href="#contato" style={styles.servicesLink}>
              Fale sobre seu projeto →
            </a>
          </div>
          
          <div style={styles.servicesRight}>
            {services.map((service, i) => (
              <div 
                key={i} 
                style={styles.serviceCard}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#1a1a1a';
                  e.currentTarget.style.borderColor = '#c9a96e';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                }}
              >
                <div style={styles.serviceIcon}>{service.icon}</div>
                <div style={styles.serviceInfo}>
                  <h3 style={styles.serviceTitle}>{service.title}</h3>
                  <p style={styles.serviceDesc}>{service.desc}</p>
                </div>
                <div style={styles.serviceArrow}>→</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section style={styles.process}>
        <div style={styles.sectionHeader}>
          <span style={styles.sectionTag}>Processo</span>
          <h2 style={styles.sectionTitle}>Como<br/>Trabalhamos</h2>
        </div>
        
        <div style={styles.processGrid}>
          {[
            { step: '01', title: 'Visita Técnica', desc: 'Avaliação presencial do ambiente para entender suas necessidades e preferências.' },
            { step: '02', title: 'Orçamento Detalhado', desc: 'Proposta transparente com todos os custos, materiais e prazo de execução.' },
            { step: '03', title: 'Preparação', desc: 'Proteção de móveis, lixamento, correção de imperfeições e aplicação de primer.' },
            { step: '04', title: 'Execução', desc: 'Aplicação das demãos necessárias com tintas de primeira linha e técnicas profissionais.' },
            { step: '05', title: 'Acabamento', desc: 'Retoques finais, limpeza completa do ambiente e inspeção de qualidade.' },
            { step: '06', title: 'Garantia', desc: 'Acompanhamento pós-obra e garantia de 2 anos no serviço executado.' },
          ].map((item, i) => (
            <div key={i} style={styles.processItem}>
              <div style={styles.processStep}>{item.step}</div>
              <h3 style={styles.processTitle}>{item.title}</h3>
              <p style={styles.processDesc}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section style={styles.testimonials}>
        <div style={styles.testimonialsContent}>
          <div style={styles.testimonialsHeader}>
            <span style={styles.sectionTag}>Depoimentos</span>
            <h2 style={styles.testimonialsTitleMain}>
              O que dizem<br/>nossos clientes
            </h2>
          </div>
          
          <div style={styles.testimonialsGrid}>
            {testimonials.map((testimonial, i) => (
              <div key={i} style={styles.testimonialCard}>
                <div style={styles.testimonialQuote}>"</div>
                <p style={styles.testimonialText}>{testimonial.text}</p>
                <div style={styles.testimonialAuthor}>
                  <div style={styles.testimonialAvatar}>
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div style={styles.testimonialName}>{testimonial.name}</div>
                    <div style={styles.testimonialRole}>{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={styles.ctaSection}>
        <div style={styles.ctaContent}>
          <h2 style={styles.ctaTitle}>
            Pronto para transformar<br/>seu ambiente?
          </h2>
          <p style={styles.ctaSubtitle}>
            Solicite um orçamento gratuito e sem compromisso.<br/>
            Respondemos em até 24 horas.
          </p>
          <a href="#contato" style={styles.ctaButton}>
            Solicitar Orçamento Gratuito
            <span style={styles.ctaButtonIcon}>↗</span>
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" style={styles.contact}>
        <div style={styles.contactContent}>
          <div style={styles.contactLeft}>
            <span style={styles.sectionTag}>Contato</span>
            <h2 style={styles.contactTitle}>
              Vamos conversar<br/>sobre seu projeto
            </h2>
            <p style={styles.contactDesc}>
              Entre em contato para um orçamento personalizado.<br/>
              Atendemos toda a região metropolitana de São Paulo.
            </p>
            
            <div style={styles.contactInfo}>
              <div style={styles.contactItem}>
                <div style={styles.contactItemIcon}>◎</div>
                <div>
                  <div style={styles.contactItemLabel}>Telefone / WhatsApp</div>
                  <div style={styles.contactItemValue}>(11) 99999-9999</div>
                </div>
              </div>
              <div style={styles.contactItem}>
                <div style={styles.contactItemIcon}>◉</div>
                <div>
                  <div style={styles.contactItemLabel}>E-mail</div>
                  <div style={styles.contactItemValue}>contato@seunome.com.br</div>
                </div>
              </div>
              <div style={styles.contactItem}>
                <div style={styles.contactItemIcon}>◈</div>
                <div>
                  <div style={styles.contactItemLabel}>Localização</div>
                  <div style={styles.contactItemValue}>São Paulo, SP</div>
                </div>
              </div>
            </div>
            
            <div style={styles.contactSocial}>
              {['Instagram', 'Facebook', 'WhatsApp'].map((social, i) => (
                <a key={i} href="#" style={styles.socialLink}>{social}</a>
              ))}
            </div>
          </div>
          
          <div style={styles.contactRight}>
            <form style={styles.contactForm}>
              <div style={styles.formGroup}>
                <label style={styles.formLabel}>Nome completo</label>
                <input type="text" style={styles.formInput} placeholder="Seu nome" />
              </div>
              <div style={styles.formRow}>
                <div style={styles.formGroup}>
                  <label style={styles.formLabel}>E-mail</label>
                  <input type="email" style={styles.formInput} placeholder="seu@email.com" />
                </div>
                <div style={styles.formGroup}>
                  <label style={styles.formLabel}>Telefone</label>
                  <input type="tel" style={styles.formInput} placeholder="(11) 99999-9999" />
                </div>
              </div>
              <div style={styles.formGroup}>
                <label style={styles.formLabel}>Tipo de serviço</label>
                <select style={styles.formSelect}>
                  <option>Selecione uma opção</option>
                  <option>Pintura Residencial</option>
                  <option>Pintura Comercial</option>
                  <option>Texturas Especiais</option>
                  <option>Restauração</option>
                </select>
              </div>
              <div style={styles.formGroup}>
                <label style={styles.formLabel}>Mensagem</label>
                <textarea style={styles.formTextarea} placeholder="Conte-nos sobre seu projeto..." rows={4} />
              </div>
              <button type="submit" style={styles.formButton}>
                Enviar Mensagem
                <span style={styles.formButtonIcon}>→</span>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.footerContent}>
          <div style={styles.footerTop}>
            <div style={styles.footerLogo}>
              <span style={styles.logoIcon}>▣</span>
              <span style={styles.logoText}>NOME<span style={styles.logoAccent}>.</span></span>
            </div>
            <p style={styles.footerTagline}>
              Transformando ambientes com excelência<br/>e profissionalismo desde 2010.
            </p>
          </div>
          
          <div style={styles.footerBottom}>
            <div style={styles.footerCopy}>
              © 2025 Nome. Todos os direitos reservados.
            </div>
            <div style={styles.footerLinks}>
              <a href="#" style={styles.footerLink}>Política de Privacidade</a>
              <a href="#" style={styles.footerLink}>Termos de Uso</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "'Outfit', sans-serif",
    background: '#0a0a0a',
    color: '#ffffff',
    minHeight: '100vh',
    position: 'relative',
    overflow: 'hidden',
  },
  
  grainOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
    opacity: 0.03,
    pointerEvents: 'none',
    zIndex: 1000,
  },

  // Navigation
  nav: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    padding: '24px 48px',
    background: 'linear-gradient(to bottom, rgba(10,10,10,0.9) 0%, rgba(10,10,10,0) 100%)',
    backdropFilter: 'blur(10px)',
  },
  navContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    maxWidth: '1400px',
    margin: '0 auto',
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  logoIcon: {
    fontSize: '24px',
    color: '#c9a96e',
  },
  logoText: {
    fontSize: '20px',
    fontWeight: '600',
    letterSpacing: '0.1em',
  },
  logoAccent: {
    color: '#c9a96e',
  },
  navLinks: {
    display: 'flex',
    gap: '40px',
  },
  navLink: {
    color: 'rgba(255,255,255,0.7)',
    textDecoration: 'none',
    fontSize: '14px',
    letterSpacing: '0.05em',
    transition: 'color 0.3s ease',
  },
  navCta: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '12px 24px',
    background: '#c9a96e',
    color: '#0a0a0a',
    textDecoration: 'none',
    fontSize: '14px',
    fontWeight: '500',
    letterSpacing: '0.02em',
    borderRadius: '100px',
    transition: 'all 0.3s ease',
  },
  ctaArrow: {
    transition: 'transform 0.3s ease',
  },

  // Hero
  hero: {
    minHeight: '100vh',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '80px',
    alignItems: 'center',
    padding: '140px 80px 80px',
    maxWidth: '1600px',
    margin: '0 auto',
    position: 'relative',
  },
  heroContent: {
    maxWidth: '600px',
  },
  heroTagline: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '10px',
    padding: '10px 20px',
    background: 'rgba(201, 169, 110, 0.1)',
    border: '1px solid rgba(201, 169, 110, 0.2)',
    borderRadius: '100px',
    fontSize: '13px',
    color: '#c9a96e',
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    marginBottom: '32px',
  },
  heroTaglineIcon: {
    fontSize: '10px',
  },
  heroTitle: {
    fontSize: 'clamp(48px, 6vw, 80px)',
    fontWeight: '600',
    lineHeight: '1.05',
    letterSpacing: '-0.02em',
    marginBottom: '28px',
  },
  heroTitleAccent: {
    background: 'linear-gradient(135deg, #c9a96e 0%, #e8d5b0 50%, #c9a96e 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  },
  heroSubtitle: {
    fontSize: '18px',
    lineHeight: '1.7',
    color: 'rgba(255,255,255,0.6)',
    marginBottom: '40px',
  },
  heroCtas: {
    display: 'flex',
    gap: '16px',
  },
  primaryCta: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '10px',
    padding: '18px 32px',
    background: '#c9a96e',
    color: '#0a0a0a',
    textDecoration: 'none',
    fontSize: '15px',
    fontWeight: '600',
    letterSpacing: '0.02em',
    borderRadius: '100px',
    transition: 'all 0.3s ease',
  },
  ctaIcon: {
    fontSize: '18px',
    transition: 'transform 0.3s ease',
  },
  secondaryCta: {
    display: 'inline-flex',
    alignItems: 'center',
    padding: '18px 32px',
    background: 'transparent',
    border: '1px solid rgba(255,255,255,0.2)',
    color: '#ffffff',
    textDecoration: 'none',
    fontSize: '15px',
    fontWeight: '500',
    letterSpacing: '0.02em',
    borderRadius: '100px',
    transition: 'all 0.3s ease',
  },
  heroVisual: {
    position: 'relative',
  },
  heroImageWrapper: {
    position: 'relative',
    borderRadius: '24px',
    overflow: 'hidden',
    aspectRatio: '4/5',
  },
  heroImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  heroImageOverlay: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(to top, rgba(10,10,10,0.4) 0%, transparent 50%)',
  },
  floatingCard: {
    position: 'absolute',
    bottom: '40px',
    left: '-40px',
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    padding: '20px 28px',
    background: 'rgba(255,255,255,0.95)',
    borderRadius: '16px',
    boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
  },
  floatingCardIcon: {
    fontSize: '24px',
    color: '#c9a96e',
  },
  floatingCardNumber: {
    fontSize: '28px',
    fontWeight: '700',
    color: '#0a0a0a',
  },
  floatingCardText: {
    fontSize: '13px',
    color: 'rgba(0,0,0,0.5)',
  },
  floatingCardAlt: {
    position: 'absolute',
    top: '60px',
    right: '-30px',
    padding: '24px 32px',
    background: '#c9a96e',
    borderRadius: '16px',
    textAlign: 'center',
  },
  floatingCardAltNumber: {
    fontSize: '36px',
    fontWeight: '700',
    color: '#0a0a0a',
  },
  floatingCardAltText: {
    fontSize: '12px',
    color: 'rgba(0,0,0,0.6)',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
  },
  heroScroll: {
    position: 'absolute',
    bottom: '40px',
    left: '80px',
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
  },
  scrollLine: {
    width: '60px',
    height: '1px',
    background: 'rgba(255,255,255,0.3)',
  },
  scrollText: {
    fontSize: '12px',
    color: 'rgba(255,255,255,0.4)',
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
  },

  // Stats
  stats: {
    padding: '80px',
    borderTop: '1px solid rgba(255,255,255,0.05)',
    borderBottom: '1px solid rgba(255,255,255,0.05)',
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '40px',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  statItem: {
    textAlign: 'center',
    padding: '40px',
    borderRight: '1px solid rgba(255,255,255,0.05)',
  },
  statNumber: {
    fontSize: '56px',
    fontWeight: '600',
    color: '#c9a96e',
    marginBottom: '12px',
  },
  statLabel: {
    fontSize: '14px',
    color: 'rgba(255,255,255,0.5)',
    letterSpacing: '0.05em',
  },

  // Section Header
  sectionHeader: {
    textAlign: 'center',
    marginBottom: '80px',
  },
  sectionTag: {
    display: 'inline-block',
    padding: '8px 20px',
    background: 'rgba(201, 169, 110, 0.1)',
    border: '1px solid rgba(201, 169, 110, 0.2)',
    borderRadius: '100px',
    fontSize: '12px',
    color: '#c9a96e',
    letterSpacing: '0.15em',
    textTransform: 'uppercase',
    marginBottom: '24px',
  },
  sectionTitle: {
    fontSize: 'clamp(40px, 5vw, 64px)',
    fontWeight: '600',
    lineHeight: '1.1',
    letterSpacing: '-0.02em',
    marginBottom: '20px',
  },
  sectionSubtitle: {
    fontSize: '17px',
    lineHeight: '1.7',
    color: 'rgba(255,255,255,0.5)',
  },

  // Portfolio
  portfolio: {
    padding: '120px 80px',
  },
  portfolioGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridTemplateRows: 'repeat(2, 300px)',
    gap: '24px',
    maxWidth: '1400px',
    margin: '0 auto',
  },
  portfolioItem: {
    position: 'relative',
    borderRadius: '20px',
    overflow: 'hidden',
    cursor: 'pointer',
  },
  portfolioItemLarge: {
    gridColumn: 'span 2',
    gridRow: 'span 2',
  },
  portfolioImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
  },
  portfolioOverlay: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(to top, rgba(10,10,10,0.9) 0%, rgba(10,10,10,0.3) 50%, transparent 100%)',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    padding: '32px',
    opacity: 0,
    transition: 'opacity 0.4s ease',
  },
  portfolioInfo: {},
  portfolioType: {
    fontSize: '11px',
    color: '#c9a96e',
    letterSpacing: '0.15em',
    textTransform: 'uppercase',
    marginBottom: '8px',
    display: 'block',
  },
  portfolioTitle: {
    fontSize: '24px',
    fontWeight: '600',
    marginBottom: '4px',
  },
  portfolioArea: {
    fontSize: '14px',
    color: 'rgba(255,255,255,0.5)',
  },
  portfolioArrow: {
    width: '48px',
    height: '48px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#c9a96e',
    color: '#0a0a0a',
    borderRadius: '50%',
    fontSize: '20px',
    fontWeight: '300',
  },
  portfolioMore: {
    textAlign: 'center',
    marginTop: '60px',
  },
  portfolioMoreLink: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '12px',
    color: '#c9a96e',
    textDecoration: 'none',
    fontSize: '15px',
    fontWeight: '500',
    letterSpacing: '0.02em',
    transition: 'gap 0.3s ease',
  },
  portfolioMoreArrow: {
    transition: 'transform 0.3s ease',
  },

  // Services
  services: {
    padding: '120px 80px',
    background: '#0f0f0f',
  },
  servicesContent: {
    display: 'grid',
    gridTemplateColumns: '400px 1fr',
    gap: '100px',
    maxWidth: '1400px',
    margin: '0 auto',
  },
  servicesLeft: {},
  servicesTitleMain: {
    fontSize: '48px',
    fontWeight: '600',
    lineHeight: '1.1',
    marginBottom: '24px',
    marginTop: '24px',
  },
  servicesTitleAccent: {
    color: '#c9a96e',
  },
  servicesDesc: {
    fontSize: '17px',
    lineHeight: '1.7',
    color: 'rgba(255,255,255,0.5)',
    marginBottom: '32px',
  },
  servicesLink: {
    color: '#c9a96e',
    textDecoration: 'none',
    fontSize: '15px',
    fontWeight: '500',
    transition: 'letter-spacing 0.3s ease',
  },
  servicesRight: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  serviceCard: {
    display: 'flex',
    alignItems: 'center',
    gap: '32px',
    padding: '32px',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: '16px',
    cursor: 'pointer',
    transition: 'all 0.4s ease',
  },
  serviceIcon: {
    fontSize: '28px',
    color: '#c9a96e',
    width: '60px',
    textAlign: 'center',
  },
  serviceInfo: {
    flex: 1,
  },
  serviceTitle: {
    fontSize: '20px',
    fontWeight: '600',
    marginBottom: '8px',
  },
  serviceDesc: {
    fontSize: '15px',
    color: 'rgba(255,255,255,0.5)',
    lineHeight: '1.6',
  },
  serviceArrow: {
    fontSize: '20px',
    color: 'rgba(255,255,255,0.3)',
    transition: 'color 0.3s ease',
  },

  // Process
  process: {
    padding: '120px 80px',
  },
  processGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '40px',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  processItem: {
    padding: '40px',
    borderRadius: '20px',
    border: '1px solid rgba(255,255,255,0.05)',
    background: 'linear-gradient(to bottom, rgba(255,255,255,0.02) 0%, transparent 100%)',
    transition: 'border-color 0.3s ease',
  },
  processStep: {
    fontSize: '48px',
    fontWeight: '200',
    color: '#c9a96e',
    marginBottom: '24px',
  },
  processTitle: {
    fontSize: '20px',
    fontWeight: '600',
    marginBottom: '12px',
  },
  processDesc: {
    fontSize: '15px',
    lineHeight: '1.6',
    color: 'rgba(255,255,255,0.5)',
  },

  // Testimonials
  testimonials: {
    padding: '120px 80px',
    background: '#0f0f0f',
  },
  testimonialsContent: {
    maxWidth: '1400px',
    margin: '0 auto',
  },
  testimonialsHeader: {
    marginBottom: '60px',
  },
  testimonialsTitleMain: {
    fontSize: '48px',
    fontWeight: '600',
    lineHeight: '1.1',
    marginTop: '24px',
  },
  testimonialsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '32px',
  },
  testimonialCard: {
    padding: '40px',
    background: 'rgba(255,255,255,0.02)',
    border: '1px solid rgba(255,255,255,0.05)',
    borderRadius: '20px',
  },
  testimonialQuote: {
    fontSize: '80px',
    fontWeight: '300',
    color: '#c9a96e',
    lineHeight: '0.6',
    marginBottom: '24px',
  },
  testimonialText: {
    fontSize: '16px',
    lineHeight: '1.7',
    color: 'rgba(255,255,255,0.7)',
    marginBottom: '32px',
  },
  testimonialAuthor: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
  },
  testimonialAvatar: {
    width: '48px',
    height: '48px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #c9a96e 0%, #e8d5b0 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '18px',
    fontWeight: '600',
    color: '#0a0a0a',
  },
  testimonialName: {
    fontSize: '16px',
    fontWeight: '600',
  },
  testimonialRole: {
    fontSize: '13px',
    color: 'rgba(255,255,255,0.4)',
  },

  // CTA Section
  ctaSection: {
    padding: '120px 80px',
    background: 'linear-gradient(135deg, #c9a96e 0%, #b08b4f 100%)',
  },
  ctaContent: {
    maxWidth: '800px',
    margin: '0 auto',
    textAlign: 'center',
  },
  ctaTitle: {
    fontSize: 'clamp(36px, 4vw, 56px)',
    fontWeight: '600',
    lineHeight: '1.1',
    color: '#0a0a0a',
    marginBottom: '20px',
  },
  ctaSubtitle: {
    fontSize: '18px',
    lineHeight: '1.7',
    color: 'rgba(10,10,10,0.6)',
    marginBottom: '40px',
  },
  ctaButton: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '12px',
    padding: '20px 40px',
    background: '#0a0a0a',
    color: '#ffffff',
    textDecoration: 'none',
    fontSize: '16px',
    fontWeight: '600',
    letterSpacing: '0.02em',
    borderRadius: '100px',
    transition: 'all 0.3s ease',
  },
  ctaButtonIcon: {
    fontSize: '20px',
  },

  // Contact
  contact: {
    padding: '120px 80px',
  },
  contactContent: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '100px',
    maxWidth: '1400px',
    margin: '0 auto',
  },
  contactLeft: {},
  contactTitle: {
    fontSize: '48px',
    fontWeight: '600',
    lineHeight: '1.1',
    marginBottom: '24px',
    marginTop: '24px',
  },
  contactDesc: {
    fontSize: '17px',
    lineHeight: '1.7',
    color: 'rgba(255,255,255,0.5)',
    marginBottom: '48px',
  },
  contactInfo: {
    display: 'flex',
    flexDirection: 'column',
    gap: '32px',
    marginBottom: '48px',
  },
  contactItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
  },
  contactItemIcon: {
    fontSize: '24px',
    color: '#c9a96e',
  },
  contactItemLabel: {
    fontSize: '13px',
    color: 'rgba(255,255,255,0.4)',
    marginBottom: '4px',
  },
  contactItemValue: {
    fontSize: '18px',
    fontWeight: '500',
  },
  contactSocial: {
    display: 'flex',
    gap: '24px',
  },
  socialLink: {
    color: 'rgba(255,255,255,0.5)',
    textDecoration: 'none',
    fontSize: '14px',
    transition: 'color 0.3s ease',
  },
  contactRight: {},
  contactForm: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    flex: 1,
  },
  formRow: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '24px',
  },
  formLabel: {
    fontSize: '13px',
    color: 'rgba(255,255,255,0.5)',
    letterSpacing: '0.05em',
  },
  formInput: {
    padding: '16px 20px',
    background: 'rgba(255,255,255,0.03)',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: '12px',
    color: '#ffffff',
    fontSize: '15px',
    outline: 'none',
    transition: 'border-color 0.3s ease',
  },
  formSelect: {
    padding: '16px 20px',
    background: 'rgba(255,255,255,0.03)',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: '12px',
    color: '#ffffff',
    fontSize: '15px',
    outline: 'none',
    cursor: 'pointer',
  },
  formTextarea: {
    padding: '16px 20px',
    background: 'rgba(255,255,255,0.03)',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: '12px',
    color: '#ffffff',
    fontSize: '15px',
    outline: 'none',
    resize: 'vertical',
    minHeight: '120px',
    fontFamily: 'inherit',
  },
  formButton: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '12px',
    padding: '20px 40px',
    background: '#c9a96e',
    border: 'none',
    color: '#0a0a0a',
    fontSize: '16px',
    fontWeight: '600',
    letterSpacing: '0.02em',
    borderRadius: '100px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    marginTop: '16px',
  },
  formButtonIcon: {
    fontSize: '18px',
  },

  // Footer
  footer: {
    padding: '60px 80px',
    borderTop: '1px solid rgba(255,255,255,0.05)',
  },
  footerContent: {
    maxWidth: '1400px',
    margin: '0 auto',
  },
  footerTop: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginBottom: '60px',
  },
  footerLogo: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  footerTagline: {
    fontSize: '15px',
    lineHeight: '1.6',
    color: 'rgba(255,255,255,0.4)',
    textAlign: 'right',
  },
  footerBottom: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: '32px',
    borderTop: '1px solid rgba(255,255,255,0.05)',
  },
  footerCopy: {
    fontSize: '13px',
    color: 'rgba(255,255,255,0.3)',
  },
  footerLinks: {
    display: 'flex',
    gap: '32px',
  },
  footerLink: {
    fontSize: '13px',
    color: 'rgba(255,255,255,0.4)',
    textDecoration: 'none',
    transition: 'color 0.3s ease',
  },
};

export default PintorWebsite;