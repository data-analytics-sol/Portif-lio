import { ArrowRight, Terminal } from "lucide-react";

const codeSnippet = [
  { text: "import", cls: "text-primary" },
  { text: " pandas ", cls: "text-turquoise" },
  { text: "as", cls: "text-primary" },
  { text: " pd", cls: "text-navy" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      
      {/* Tech grid background */}
      <div className="absolute inset-0 tech-grid" />

      {/* Decorative blobs */}
      <div
        className="absolute top-20 right-[-10%] w-[500px] h-[500px] bg-primary/5 blob"
        style={{
          animation:
            "morph 8s ease-in-out infinite, float 6s ease-in-out infinite",
        }}
      />

      <div
        className="absolute bottom-10 left-[-5%] w-[350px] h-[350px] bg-accent/5 blob-2"
        style={{
          animation:
            "morph-2 10s ease-in-out infinite, float 8s ease-in-out 1s infinite",
        }}
      />

      {/* Horizontal data lines */}
      <div className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent" />

      <div className="absolute top-3/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/10 to-transparent" />

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left */}
        <div className="space-y-6 animate-fade-in">

          {/* Tech status */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 font-mono text-xs text-primary">
            <span
              className="w-2 h-2 rounded-full bg-turquoise"
              style={{ animation: "pulse-glow 2s ease-in-out infinite" }}
            />

            automation.ai = true
          </div>

          <p className="text-primary font-medium tracking-wide text-sm uppercase">
            Olá, eu sou
          </p>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-navy leading-tight glow-text">
            Ingridy Solaman
          </h1>

          <h2 className="text-xl md:text-2xl font-serif text-muted-foreground italic">
            Data Analyst | Automation & AI Enthusiast
          </h2>

          <p className="text-muted-foreground leading-relaxed max-w-lg text-lg">
            Transformando dados, automação e tecnologia em soluções estratégicas.
            Experiência em análise de dados, dashboards, SQL, Python, RPA e
            inteligência aplicada à gestão pública.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 pt-2">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 glow-sm"
            >
              Ver Projetos <ArrowRight size={18} />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-primary/20 text-navy font-medium hover:border-primary/40 hover:bg-primary/5 transition-all duration-300"
            >
              Contato
            </a>
          </div>
        </div>

        {/* Right */}
        <div
          className="flex flex-col items-center gap-6 animate-fade-in"
          style={{ animationDelay: "0.2s" }}
        >

          {/* Photo */}
          <div className="relative">

            <div className="w-72 h-80 md:w-80 md:h-96 rounded-[3rem_1rem_3rem_1rem] bg-gradient-to-br from-primary/20 to-accent/20 p-1 shadow-2xl shadow-primary/10 glow-sm overflow-hidden">

              <img
                src="/sol.jpg"
                alt="Ingridy Solaman"
                className="w-full h-full object-cover rounded-[3rem_1rem_3rem_1rem]"
              />
            </div>

            {/* Decorative circles */}
            <div
              className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full border-4 border-primary/10"
              style={{ animation: "pulse-glow 3s ease-in-out infinite" }}
            />

            <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full bg-accent/10 backdrop-blur-sm" />

            {/* Floating nodes */}
            <div
              className="absolute -right-8 top-1/4 w-3 h-3 rounded-full bg-turquoise/40"
              style={{ animation: "particle-float 4s ease-in-out infinite" }}
            />

            <div
              className="absolute -left-6 top-2/3 w-2 h-2 rounded-full bg-primary/40"
              style={{
                animation: "particle-float 5s ease-in-out 1s infinite",
              }}
            />
          </div>

          {/* Mini terminal */}
          <div className="tech-card rounded-xl w-full max-w-xs">
            
            <div className="flex items-center gap-2 px-3 py-2 border-b border-primary/10">
              <Terminal size={12} className="text-primary/60" />

              <span className="font-mono text-[10px] text-muted-foreground">
                automation_analysis.py
              </span>
            </div>

            <div className="px-3 py-2 font-mono text-xs space-y-1">

              <div className="flex gap-1">
                {codeSnippet.map((s, i) => (
                  <span key={i} className={s.cls}>
                    {s.text}
                  </span>
                ))}
              </div>

              <div>
                <span className="text-muted-foreground">df = pd.</span>

                <span className="text-turquoise">read_csv</span>

                <span className="text-muted-foreground">(</span>

                <span className="text-accent">
                  "healthcare_data.csv"
                </span>

                <span className="text-muted-foreground">)</span>
              </div>

              <div>
                <span className="text-muted-foreground">df.</span>

                <span className="text-turquoise">describe</span>

                <span className="text-muted-foreground">()</span>

                <span
                  className="inline-block w-1.5 h-4 bg-primary/60 ml-0.5"
                  style={{ animation: "blink 1s step-end infinite" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;