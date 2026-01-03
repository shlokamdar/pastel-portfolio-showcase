import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const pastelBackgrounds = [
  "bg-lavender/30",
  "bg-sage/30",
  "bg-peach/30",
  "bg-baby-blue/30",
];

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const bgColor = pastelBackgrounds[index % pastelBackgrounds.length];

  return (
    <Link 
      to={`/projects/${project.id}`}
      className="group block"
    >
      <article className="pastel-card h-full flex flex-col">
        {/* Cover Image Placeholder */}
        <div className={`w-full h-48 rounded-xl mb-4 ${bgColor} flex items-center justify-center overflow-hidden`}>
          <span className="font-display text-2xl font-semibold text-foreground/40 group-hover:scale-105 transition-transform duration-300">
            {project.title.charAt(0)}
          </span>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col">
          <h3 className="font-display font-semibold text-xl text-foreground mb-2">
            {project.title}
          </h3>
          
          <p className="text-muted-foreground text-sm mb-4 flex-1">
            {project.shortDescription}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.techStack.slice(0, 3).map((tech) => (
              <span key={tech} className="tech-pill text-xs">
                {tech}
              </span>
            ))}
            {project.techStack.length > 3 && (
              <span className="tech-pill text-xs">+{project.techStack.length - 3}</span>
            )}
          </div>

          {/* View Project Link */}
          <div className="flex items-center gap-2 text-sm font-medium text-lavender-deep group-hover:text-foreground transition-colors">
            <span>View Project</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </article>
    </Link>
  );
};

export default ProjectCard;
