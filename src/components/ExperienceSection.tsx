const experiences = [
  {
    company: "CGE - Controladoria Geral do Estado",
    role: "Analista de Dados",
    period: "2025 - Atual",
    description:
      "Atuação em análise de dados, automações em Python, dashboards estratégicos, SQL Server, RPA e monitoramento institucional.",
  },

  {
    company: "SESAU - Secretaria de Estado da Saúde",
    role: "Analista de Dados",
    period: "2023 - 2025",
    description:
      "Desenvolvimento de dashboards, mapas geoespaciais, análise de dados em saúde pública e apoio estratégico à gestão.",
  },

  {
    company: "IDARON",
    role: "Estagiária",
    period: "2023",
    description:
      "Criação de dashboards e otimização de processos utilizando Power BI e Excel.",
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 relative">

      <div className="container mx-auto px-6 max-w-5xl">

        {/* Header */}
        <div className="text-center mb-16">

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 font-mono text-xs text-primary mb-4">
            experience.timeline()
          </div>

          <h2 className="text-4xl font-serif font-bold text-navy">
            Experiência Profissional
          </h2>

          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Experiência prática em análise de dados,
            automação e inteligência aplicada à gestão pública.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l border-primary/10 ml-4 space-y-10">

          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8">

              {/* Dot */}
              <div className="absolute left-[-9px] top-2 w-4 h-4 rounded-full bg-primary shadow-lg shadow-primary/30" />

              <div className="tech-card rounded-2xl p-6 hover-lift">

                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">

                  <div>
                    <h3 className="text-xl font-semibold text-navy">
                      {exp.company}
                    </h3>

                    <p className="text-primary font-medium">
                      {exp.role}
                    </p>
                  </div>

                  <span className="font-mono text-xs text-muted-foreground">
                    {exp.period}
                  </span>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;