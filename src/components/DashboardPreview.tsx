import { Monitor } from "lucide-react";
import {
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const chartData = [
  { mes: "Jan", projetos: 52, evolucao: 50 },
  { mes: "Fev", projetos: 60, evolucao: 58 },
  { mes: "Mar", projetos: 68, evolucao: 66 },
  { mes: "Abr", projetos: 75, evolucao: 73 },
  { mes: "Mai", projetos: 82, evolucao: 80 },
  { mes: "Jun", projetos: 90, evolucao: 88 },
  { mes: "Jul", projetos: 97, evolucao: 95 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-background/90 backdrop-blur-sm border border-primary/20 rounded-xl px-4 py-3 shadow-xl">
        <p className="font-mono text-xs text-primary mb-2 uppercase tracking-wider">{label}</p>
        {payload.map((entry: any) => (
          <p key={entry.name} className="text-xs text-muted-foreground">
            <span style={{ color: entry.color }} className="font-bold">{entry.name}: </span>
            {entry.value}%
          </p>
        ))}
      </div>
    );
  }
  return null;
};

const DashboardPreview = () => {
  return (
    <section className="py-24 relative overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-serene/30 to-transparent" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-turquoise/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 font-mono text-xs text-primary mb-5 backdrop-blur-sm">
            <Monitor size={13} />
            analytics.system()
          </div>

          <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy leading-tight">
            Inteligência de Dados
            <span className="block text-primary">para Gestão Pública</span>
          </h2>

          <p className="text-muted-foreground mt-5 max-w-3xl mx-auto leading-relaxed text-lg">
            Desenvolvimento de dashboards, automações e soluções analíticas
            voltadas ao monitoramento estratégico, transparência pública,
            saúde e tomada de decisão baseada em dados.
          </p>
        </div>

        {/* Dashboard Card */}
        <div className="max-w-6xl mx-auto tech-card rounded-3xl overflow-hidden shadow-2xl shadow-primary/10 border border-primary/10 scan-line">

          {/* Browser Bar */}
          <div className="flex items-center gap-3 px-5 py-4 bg-navy/5 border-b border-primary/10 backdrop-blur-sm">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-400/50" />
              <div className="w-3 h-3 rounded-full bg-yellow-400/50" />
              <div className="w-3 h-3 rounded-full bg-green-400/50" />
            </div>
            <div className="flex-1">
              <div className="bg-background/70 rounded-lg px-4 py-2 text-xs font-mono text-muted-foreground text-center border border-primary/10 max-w-md mx-auto">
                https://analytics.datasol.dev/dashboard
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 md:p-8 bg-gradient-to-br from-background to-serene/40">

            {/* Status */}
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-2.5 h-2.5 rounded-full bg-turquoise"
                style={{ animation: "pulse-glow 2s ease-in-out infinite" }}
              />
              <span className="font-mono text-[11px] text-muted-foreground uppercase tracking-[0.2em]">
                Dados Estratégicos em Tempo Real
              </span>
            </div>

            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-7">
              {[
                {
                  label: "Dashboards Governamentais",
                  value: "+10",
                  description: "SESAU • CGE • Saúde Pública",
                  trend: "↗",
                },
                {
                  label: "Automações Inteligentes",
                  value: "Python + RPA",
                  description: "ETL • Bots • Processos",
                  trend: "⚡",
                },
                {
                  label: "Análise Estratégica",
                  value: "Dados Públicos",
                  description: "Governança • Transparência",
                  trend: "📊",
                },
              ].map((kpi) => (
                <div
                  key={kpi.label}
                  className="group bg-background/70 backdrop-blur-sm rounded-2xl p-5 border border-primary/10 hover:border-primary/25 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-3">
                    <p className="text-[11px] text-muted-foreground font-mono uppercase tracking-wider">
                      {kpi.label}
                    </p>
                    <span className="text-sm">{kpi.trend}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-navy mb-2">{kpi.value}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{kpi.description}</p>
                </div>
              ))}
            </div>

            {/* Chart */}
            <div className="bg-background/70 backdrop-blur-sm rounded-2xl p-6 border border-primary/10">

              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-4">
                <div>
                  <p className="text-lg font-semibold text-navy">
                    Central de Inteligência Governamental
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Transparência • Saúde • Automação • Analytics
                  </p>
                </div>
                <div className="flex gap-2 flex-wrap">
                  {["Power BI", "Python", "SQL Server", "HOP RPA"].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-primary text-[11px] font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Legenda */}
              <div className="flex items-center gap-6 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-sm bg-primary/60" />
                  <span className="text-[11px] font-mono text-muted-foreground">Performance (%)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-0.5 bg-turquoise rounded-full" />
                  <span className="text-[11px] font-mono text-muted-foreground">Tendência</span>
                </div>
              </div>

              <ResponsiveContainer width="100%" height={220}>
                <ComposedChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#2563eb" stopOpacity={0.9} />
                      <stop offset="100%" stopColor="#2563eb" stopOpacity={0.3} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(37,99,235,0.08)" vertical={false} />
                  <XAxis
                    dataKey="mes"
                    tick={{ fontSize: 11, fontFamily: "monospace", fill: "#94a3b8" }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <YAxis
                    tick={{ fontSize: 11, fontFamily: "monospace", fill: "#94a3b8" }}
                    axisLine={false}
                    tickLine={false}
                    domain={[40, 100]}
                    tickFormatter={(v) => `${v}%`}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Bar
                    dataKey="projetos"
                    name="Performance"
                    fill="url(#barGradient)"
                    radius={[8, 8, 0, 0]}
                    maxBarSize={48}
                  />
                  <Line
                    type="monotone"
                    dataKey="evolucao"
                    name="Tendência"
                    stroke="#06b6d4"
                    strokeWidth={2.5}
                    dot={{ fill: "#06b6d4", r: 4, strokeWidth: 2, stroke: "#fff" }}
                    activeDot={{ r: 6, fill: "#06b6d4" }}
                  />
                </ComposedChart>
              </ResponsiveContainer>
            </div>

            {/* Bottom Info */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-7">
              {["Power BI", "Python", "Metabase", "PostgreSQL"].map((tech) => (
                <div
                  key={tech}
                  className="bg-background/60 backdrop-blur-sm rounded-xl border border-primary/10 py-4 text-center hover:border-primary/20 transition-all duration-300 hover:-translate-y-1"
                >
                  <span className="font-mono text-xs text-primary">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardPreview;