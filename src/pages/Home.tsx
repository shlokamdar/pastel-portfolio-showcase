import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import Layout from "@/components/layout/Layout";
import ProjectCard from "@/components/projects/ProjectCard";
import { projects } from "@/data/projects";

const Home = () => {
  // Show only first 3 projects on home page
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
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background font-medium hover:bg-foreground/90 transition-colors"
              >
                View Projects
                <ArrowRight size={18} />
              </Link>
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

      {/* Featured Projects Section */}
      <section className="py-24 bg-background">
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

      {/* About Preview Section */}
      <section className="py-24 bg-sage/20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              About Me
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              I'm a developer who loves turning ideas into reality. With a focus on 
              clean code and thoughtful design, I build applications that are both 
              beautiful and functional.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-sm font-medium text-sage-deep hover:text-foreground transition-colors"
            >
              Learn More About Me
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
