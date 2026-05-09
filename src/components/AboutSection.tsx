const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-3xl text-center">

        <p className="text-primary font-medium text-sm uppercase tracking-wide mb-2">
          Sobre Mim
        </p>

        <h2 className="text-4xl font-serif font-bold text-navy mb-8">
          Quem Sou Eu
        </h2>

        <div className="glass-card rounded-2xl p-8 md:p-12">

          <p className="text-muted-foreground leading-relaxed text-lg mb-4">
            Sou Analista de Dados com experiência em análise, automação e visualização de dados
            aplicadas à gestão pública, atuando em projetos estratégicos voltados para controle interno,
            governança, saúde pública e monitoramento de indicadores.
          </p>

          <p className="text-muted-foreground leading-relaxed text-lg mb-4">
            Tenho experiência com desenvolvimento de dashboards, automações em Python,
            integração de dados, SQL Server, PostgreSQL, Power BI, Metabase e automações
            utilizando RPA com HOP, otimizando processos e apoiando a tomada de decisão
            baseada em dados.
          </p>

          <p className="text-muted-foreground leading-relaxed text-lg">
            Atualmente curso Engenharia de Controle e Automação no IFRO e Ciência de Dados na UNINTER,
            unindo tecnologia, inteligência analítica e automação para desenvolver soluções inovadoras
            e gerar impacto real através dos dados.
          </p>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;