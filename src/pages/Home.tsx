import { ArrowRight, MapPin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Link } from 'react-router-dom';
// Temporary placeholder - will be replaced with actual profile image
const profileImage = '/profile.jpg';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      {/* Hero Section */}
      <section className="section-padding pt-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">
                  Hi, I'm{' '} 
                  <br></br>
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Kotni Sri Latha
                  </span>
                </h1>
                <h2 className="text-xl sm:text-2xl text-muted-foreground">
                  Full Stack Developer & UI/UX Enthusiast
                </h2>
                <p className="text-lg text-muted-foreground max-w-xl">
                  I create beautiful, functional web applications with modern technologies. 
                  Passionate about clean code, intuitive design, and solving complex problems.
                </p>
              </div>

              {/* Quick Info */}
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <MapPin size={16} />
                  <span>Visakhapatnam, AP</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={16} />
                  <span>Available for work</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <Link to="/projects">
                  <Button className="btn-gradient px-6 py-3">
                    View My Work
                    <ArrowRight size={18} className="ml-2" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Profile Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-80 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 p-1">
                  <img
                    src={profileImage}
                    alt="Sri Latha"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                {/* Floating decoration */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-full opacity-30"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

       {/* Quick Stats 
        <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="card-hover p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Projects Completed</div>
            </Card>
            <Card className="card-hover p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">3+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </Card>
            <Card className="card-hover p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">15+</div>
              <div className="text-muted-foreground">Technologies</div>
            </Card>
          </div>
        </div>
      </section> */}

      {/* About Section */}
      <section className="section-padding bg-muted/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">About Me</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            I'm a passionate full-stack developer with expertise in React, Node.js, and modern web technologies. 
            I love creating seamless user experiences and writing clean, maintainable code. When I'm not coding, 
            you can find me exploring new technologies, contributing to open source projects, or enjoying outdoor adventures.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;