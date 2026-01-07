import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Code, Palette, Lightbulb, Heart } from "lucide-react";
import Layout from "@/components/layout/Layout";
import ProjectCard from "@/components/projects/ProjectCard";
import { projects } from "@/data/projects";

const skills = [
  { category: "Frontend", items: ["React", "TypeScript", "TailwindCSS", "Next.js"] },
  { category: "Backend", items: ["Python", "Flask", "Node.js", "PostgreSQL"] },
  { category: "Tools", items: ["Git", "Docker", "Figma", "VS Code"] },
  { category: "Soft Skills", items: ["Problem Solving", "Communication", "Teamwork", "Adaptability"] },
];

const values = [
  {
    icon: Code,
    title: "Clean Code",
    description: "I believe in writing code that's easy to read, maintain, and scale.",
    color: "bg-lavender/30",
  },
  {
    icon: Palette,
    title: "Thoughtful Design",
    description: "Every pixel matters. I craft interfaces that are both beautiful and functional.",
    color: "bg-sage/30",
  },
  {
    icon: Lightbulb,
    title: "Continuous Learning",
    description: "Technology evolves, and so do I. I'm always exploring new tools and techniques.",
    color: "bg-baby-blue/30",
  },
  {
    icon: Heart,
    title: "User First",
    description: "The best solutions come from truly understanding user needs.",
    color: "bg-peach/30",
  },
];

const Home = () => {
  const featuredProjects = projects.slice(0, 3);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="gradient-hero min-h-[80vh] flex items-center">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <div className="animate-fade-up">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-lavender/50 text-sm font-medium text-foreground mb-6">
                <Sparkles size={14} />
                Welcome to my portfolio
              </span>
            </div>
            
            <h1 className="animate-fade-up-delay-1 font-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6">
              I craft digital
              <br />
              <span className="text-lavender-deep">experiences</span>
            </h1>
            
            <p className="animate-fade-up-delay-2 text-lg md:text-xl text-muted-foreground max-w-xl mb-8">
              A passionate developer focused on creating beautiful, functional, 
              and user-centered digital experiences.
            </p>
            
            <div className="animate-fade-up-delay-3 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background font-medium hover:bg-foreground/90 transition-colors"
              >
                View Projects
                <ArrowRight size={18} />
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-foreground/20 text-foreground font-medium hover:bg-foreground/5 transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="w-full max-w-md mx-auto aspect-square rounded-3xl bg-lavender/30 flex items-center justify-center animate-float">
                <span className="font-display text-6xl font-bold text-lavender-deep/50">
                  👋
                </span>
              </div>
            </div>

            <div className="order-1 lg:order-2 space-y-6">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                About Me
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  I'm a full-stack developer with a passion for creating beautiful, 
                  functional applications. My journey in tech started with curiosity 
                  about how things work, and it has evolved into a career focused on 
                  solving real problems.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new coffee shops, 
                  reading about design systems, or contributing to open-source projects. 
                  I believe in the power of technology to make life better.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-cream/50">
        <div className="container mx-auto px-6">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
            What I Value
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div key={value.title} className="pastel-card text-center">
                <div className={`w-14 h-14 ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <value.icon size={24} className="text-foreground" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
            Skills & Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {skills.map((skillGroup, index) => {
              const colors = ["bg-lavender/20", "bg-sage/20", "bg-baby-blue/20", "bg-peach/20"];
              return (
                <div key={skillGroup.category} className={`pastel-card ${colors[index % 4]} hover:shadow-card hover:translate-y-0`}>
                  <h3 className="font-display font-semibold text-foreground mb-4">
                    {skillGroup.category}
                  </h3>
                  <ul className="space-y-2">
                    {skillGroup.items.map((skill) => (
                      <li key={skill} className="text-sm text-muted-foreground">
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="projects" className="py-24 bg-sage/20">
        <div className="container mx-auto px-6">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
                Featured Projects
              </h2>
              <p className="text-muted-foreground">
                A selection of my recent work
              </p>
            </div>
            <Link 
              to="/projects" 
              className="hidden md:flex items-center gap-2 text-sm font-medium text-lavender-deep hover:text-foreground transition-colors"
            >
              View All
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Link 
              to="/projects" 
              className="inline-flex items-center gap-2 text-sm font-medium text-lavender-deep hover:text-foreground transition-colors"
            >
              View All Projects
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
