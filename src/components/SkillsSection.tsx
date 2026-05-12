import {
  BarChart3,
  BrainCircuit,
  Database,
  FileSpreadsheet,
  LineChart,
  Code2,
  Table2,
  Bot,
  Map,
  Server,
} from "lucide-react";

const skills = [
  {
    name: "Python",
    icon: Code2,
    description: "Automação, análise de dados e APIs",
  },
  {
    name: "SQL",
    icon: Database,
    description: "PostgreSQL, SQL Server e consultas analíticas",
  },
  {
    name: "Power BI",
    icon: BarChart3,
    description: "Dashboards estratégicos e DAX",
  },
  {
    name: "Machine Learning",
    icon: BrainCircuit,
    description: "Modelos preditivos e análise inteligente",
  },
  {
    name: "Excel Avançado",
    icon: FileSpreadsheet,
    description: "Power Query, automações e relatórios",
  },
  {
    name: "Geospatial Analytics",
    icon: Map,
    description: "Mapas e análise geoespacial",
  },
  {
    name: "ETL & Data Pipelines",
    icon: Table2,
    description: "Transformação e integração de dados",
  },
  {
    name: "RPA & Automação",
    icon: Bot,
    description: "HOP, automações e processos inteligentes",
  },
  {
    name: "Metabase",
    icon: LineChart,
    description: "Visualização e monitoramento de indicadores",
  },
  {
    name: "Infraestrutura de Dados",
    icon: Server,
    description: "VMs, APIs e ambientes de dados",
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 relative">

      {/* Background */}
      <div className="absolute inset-0 tech-grid opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-serene/50 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 font-mono text-xs text-primary mb-4">
            &lt;skills /&gt;
          </div>

          <h2 className="text-4xl font-serif font-bold text-navy">
            Habilidades & Ferramentas
          </h2>

          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Tecnologias utilizadas em projetos de análise de dados,
            automação, visualização estratégica e soluções aplicadas
            à gestão pública.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 max-w-6xl mx-auto">
          {skills.map((skill, i) => (
            <div
              key={skill.name}
              className="tech-card hover-lift rounded-2xl p-6 text-center group cursor-default animate-fade-in flex flex-col items-center"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              {/* Icon with glow */}
              <div className="relative mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/5 border border-primary/10 flex items-center justify-center group-hover:bg-primary/10 group-hover:border-primary/20 transition-all duration-300">
                  <skill.icon
                    className="w-5 h-5 text-primary/70 group-hover:text-primary transition-colors duration-300"
                    strokeWidth={1.5}
                  />
                </div>
                <div className="absolute inset-0 bg-primary/10 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Skill Name */}
              <h3 className="font-sans font-semibold text-navy text-sm mb-2">
                {skill.name}
              </h3>

              {/* Description */}
              <p className="text-xs text-muted-foreground leading-relaxed">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;