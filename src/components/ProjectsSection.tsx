import { ExternalLink, GitBranch } from "lucide-react";

const projects = [
  {
    title: "Painel de Monitoramento da Crise Climática",
    description:
      "Dashboard desenvolvido para acompanhamento de indicadores relacionados à crise climática e impactos na saúde pública, auxiliando análises estratégicas e tomada de decisão governamental.",

    tags: ["Power BI", "Python", "SQL"],
    metric: "Public Health",

    color: "from-primary/10 to-accent/10",

    link:
      "https://app.powerbi.com/view?r=eyJrIjoiYjUwNWQ5MzEtNDc2Yi00ZGIwLWEwODMtOGZiODk1MGFmOWFhIiwidCI6IjI3YTgzY2JlLTY5YzMtNDM3Ny1iN2QzLTg0YTU2ZDhiMmJhMCJ9&pageName=ReportSection",
  },

  {
    title: "Dashboard de Monitoramento de Obras da SESAU",
    description:
      "Painel analítico criado para monitoramento de obras da Secretaria de Saúde, permitindo acompanhamento financeiro, operacional e evolução dos projetos em tempo real.",

    tags: ["Power BI", "Data Visualization", "SQL"],
    metric: "Government",

    color: "from-accent/10 to-turquoise/10",

    link:
      "https://app.powerbi.com/view?r=eyJrIjoiMWRjMDUxZmQtNDA1MS00YWNjLWI2MTgtNmY2MDY2NzEyZjU1IiwidCI6IjI3YTgzY2JlLTY5YzMtNDM3Ny1iN2QzLTg0YTU2ZDhiMmJhMCJ9&pageName=ReportSection",
  },

  {
    title: "Dashboard de Gestão de Leitos Hospitalares",
    description:
      "Sistema de visualização estratégica para acompanhamento da ocupação e gestão de leitos hospitalares no estado de Rondônia, apoiando decisões rápidas e eficientes.",

    tags: ["Power BI", "Healthcare", "Analytics"],
    metric: "Healthcare",

    color: "from-turquoise/10 to-primary/10",

    link:
      "https://app.powerbi.com/view?r=eyJrIjoiZWI5YWJlYTgtYzM0Yy00MTg2LTlmMWMtYjMyNzZjM2VlNTY2IiwidCI6IjI3YTgzY2JlLTY5YzMtNDM3Ny1iN2QzLTg0YTU2ZDhiMmJhMCJ9&pageName=6916341c7a1308871879",
  },

  {
    title: "Portal CIGES - Saúde Digital",
    description:
      "Participação em iniciativas relacionadas à gestão inteligente em saúde digital, integração de dados e divulgação institucional através do portal CIGES.",

    tags: ["Health Tech", "Data Governance", "Innovation"],
    metric: "Digital Health",

    color: "from-primary/10 to-serene",

    link: "https://ciges.sesau.ro.gov.br/",
  },

  {
    title: "Dashboard e Análises do e-SIC",
    description:
      "Desenvolvimento de dashboards e análises estratégicas relacionadas ao sistema e-SIC, com foco em transparência pública, monitoramento de indicadores administrativos e apoio à gestão governamental.",

    tags: ["Power BI", "SQL Server", "Data Analytics"],
    metric: "Transparency",

    color: "from-serene to-primary/10",

    link: "https://esic.cge.ro.gov.br/",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative">

      {/* Background */}
      <div className="absolute inset-0 tech-grid opacity-30" />

      <div className="container mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="text-center mb-16">

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 font-mono text-xs text-primary mb-4">
            <GitBranch size={12} />
            projects.map()
          </div>

          <h2 className="text-4xl font-serif font-bold text-navy">
            Projetos em Destaque
          </h2>

          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Projetos aplicados à saúde pública, automação,
            visualização estratégica e inteligência de dados para apoio à tomada de decisão.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">

          {projects.map((project, i) => (
            <div
              key={i}
              className="tech-card hover-lift rounded-2xl overflow-hidden group"
            >

              {/* Gradient Top */}
              <div className={`h-1.5 bg-gradient-to-r ${project.color}`} />

              <div className="p-7 flex flex-col h-full">

                {/* Title */}
                <div className="flex items-start justify-between mb-3">

                  <h3 className="font-serif text-xl font-semibold text-navy group-hover:text-primary transition-colors duration-300 flex-1">
                    {project.title}
                  </h3>

                  <span className="font-mono text-[10px] text-turquoise bg-turquoise/10 px-2 py-1 rounded-md border border-turquoise/20 ml-3 whitespace-nowrap">
                    {project.metric}
                  </span>
                </div>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-5 flex-1">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">

                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-primary/5 text-primary text-xs font-mono border border-primary/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Button */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors group/link"
                >
                  Ver Projeto

                  <ExternalLink
                    size={14}
                    className="transition-transform duration-300 group-hover/link:translate-x-1"
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;