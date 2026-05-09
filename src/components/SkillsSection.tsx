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
    level: 82,
  },

  {
    name: "SQL",
    icon: Database,
    description: "PostgreSQL, SQL Server e consultas analíticas",
    level: 70,
  },

  {
    name: "Power BI",
    icon: BarChart3,
    description: "Dashboards estratégicos e DAX",
    level: 92,
  },

  {
    name: "Machine Learning",
    icon: BrainCircuit,
    description: "Modelos preditivos e análise inteligente",
    level: 58,
  },

  {
    name: "Excel Avançado",
    icon: FileSpreadsheet,
    description: "Power Query, automações e relatórios",
    level: 80,
  },

  {
    name: "Geospatial Analytics",
    icon: Map,
    description: "Mapas e análise geoespacial",
    level: 60,
  },

  {
    name: "ETL & Data Pipelines",
    icon: Table2,
    description: "Transformação e integração de dados",
    level: 70,
  },

  {
    name: "RPA & Automação",
    icon: Bot,
    description: "HOP, automações e processos inteligentes",
    level: 68,
  },

  {
    name: "Metabase",
    icon: LineChart,
    description: "Visualização e monitoramento de indicadores",
    level: 70,
  },

  {
    name: "Infraestrutura de Dados",
    icon: Server,
    description: "VMs, APIs e ambientes de dados",
    level: 58,
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
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">

          {skills.map((skill, i) => (
            <div
              key={skill.name}
              className="tech-card hover-lift rounded-2xl p-6 text-center group cursor-default animate-fade-in"
              style={{ animationDelay: `${i * 0.08}s` }}
            >

              {/* Icon */}
              <skill.icon
                className="w-8 h-8 mx-auto mb-4 text-primary/70 group-hover:text-primary transition-colors duration-300"
                strokeWidth={1.5}
              />

              {/* Skill Name */}
              <h3 className="font-sans font-semibold text-navy text-sm mb-2">
                {skill.name}
              </h3>

              {/* Description */}
              <p className="text-xs text-muted-foreground mb-4 leading-relaxed min-h-[48px]">
                {skill.description}
              </p>

              {/* Progress Bar */}
              <div className="w-full h-1.5 rounded-full bg-primary/10 overflow-hidden">

                <div
                  className="h-full rounded-full bg-gradient-to-r from-primary/60 to-turquoise/60 transition-all duration-1000"
                  style={{ width: `${skill.level}%` }}
                />
              </div>

              {/* Percentage */}
              <span className="font-mono text-[10px] text-muted-foreground mt-2 block">
                {skill.level}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;