import { Code, Palette, Lightbulb, Heart } from "lucide-react";
import Layout from "@/components/layout/Layout";

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

const About = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="pt-24 pb-12 gradient-sage">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl">
            <h1 className="animate-fade-up font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              About Me
            </h1>
            <p className="animate-fade-up-delay-1 text-lg text-muted-foreground">
              A developer passionate about creating meaningful digital experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image Placeholder */}
            <div className="order-2 lg:order-1">
              <div className="w-full max-w-md mx-auto aspect-square rounded-3xl bg-lavender/30 flex items-center justify-center animate-float">
                <span className="font-display text-6xl font-bold text-lavender-deep/50">
                  👋
                </span>
              </div>
            </div>

            {/* Bio Text */}
            <div className="order-1 lg:order-2 space-y-6">
              <h2 className="font-display text-3xl font-bold text-foreground">
                Hello, I'm a Developer
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
                  I believe in the power of technology to make life better, and I 
                  strive to build products that reflect that belief.
                </p>
                <p>
                  I'm always open to new opportunities and collaborations. If you have 
                  a project in mind or just want to chat about technology, feel free 
                  to reach out!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-cream/50">
        <div className="container mx-auto px-6">
          <h2 className="font-display text-3xl font-bold text-foreground text-center mb-12">
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
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <h2 className="font-display text-3xl font-bold text-foreground text-center mb-12">
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
    </Layout>
  );
};

export default About;
