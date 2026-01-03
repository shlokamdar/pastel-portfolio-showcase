import Layout from "@/components/layout/Layout";
import ProjectCard from "@/components/projects/ProjectCard";
import { projects } from "@/data/projects";

const Projects = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="pt-24 pb-12 gradient-lavender">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl">
            <h1 className="animate-fade-up font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Projects
            </h1>
            <p className="animate-fade-up-delay-1 text-lg text-muted-foreground">
              A collection of projects I've worked on, from concept to completion.
              Each one represents a unique challenge and learning experience.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

          {projects.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground">No projects yet. Check back soon!</p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
