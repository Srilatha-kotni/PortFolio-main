import { ExternalLink, Github, Globe } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const projects = [
    {
      title: 'Buyerz',
      description: 'A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.',
      image: '/clothing.png',
      technologies: ['React', 'Node.js', 'MongoDB',  'Express.js'],
      githubUrl: 'https://github.com/Srilatha-kotni/Buyerz',
      liveUrl: 'https://buyerz.vercel.app/',
      featured: true,
    },

    {
      title: 'Heal.IO',
      description: 'The Disease Prediction System is a machine learning–based application that predicts potential diseases from given symptoms. By leveraging trained models, it provides accurate predictions and suggests relevant doctors or specialists, enabling early diagnosis and efficient healthcare guidance.',
      image: '/heal.png',
      technologies: ['Scikit-learn', 'Python', 'LLM'],
      githubUrl: 'https://github.com/Srilatha-kotni/Heal.IO',
      liveUrl: 'https://heal-5n46.onrender.com/',
      featured: false,
    },



    {
      title: 'Weather Dashboard',
      description: 'A responsive weather application with location-based forecasts, interactive maps, and detailed weather analytics.',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop',
      technologies: ['Vue.js', 'OpenWeather API', 'Tailwind CSS'],
      githubUrl: 'https://github.com/Srilatha-kotni/weather',
      liveUrl: 'https://weather-opal-rho.vercel.app/',
      featured: false,
    },

    
    {
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website built with React and Tailwind CSS, featuring smooth animations and modern design.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      technologies: ['React.js', 'Tailwind CSS', 'TypeScript', 'Vite'],
      githubUrl: 'https://github.com/username/portfolio-v2',
      liveUrl: 'https://portfolio-demo.vercel.app',
      featured: false,
    },   
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="section-padding pt-24 bg-gradient-to-br from-background to-muted/50">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-pink-500 mb-6">
            My Projects
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here's a collection of projects I've worked on, showcasing my skills in full-stack development, UI/UX design, and problem-solving.
          </p>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-8">Featured Projects</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {featuredProjects.map((project, index) => (
              <Card key={index} className="card-hover overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
                    <Badge variant="secondary">Featured</Badge>
                  </div>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github size={16} className="mr-2" />
                        Code
                      </a>
                    </Button>
                    {project.liveUrl && (
                      <Button size="sm" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink size={16} className="mr-2" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Other Projects */}
          <h2 className="text-2xl font-bold text-foreground mb-8">Other Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <Card key={index} className="card-hover overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-foreground mb-2">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.technologies.length - 3} more
                      </Badge>
                    )}
                  </div>
                  
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" asChild className="flex-1">
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github size={14} className="mr-1" />
                        Code
                      </a>
                    </Button>
                    {project.liveUrl && (
                      <Button size="sm" asChild className="flex-1">
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <Globe size={14} className="mr-1" />
                          Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
