import { Heart, Star, Sparkles, Code, Palette, Globe } from 'lucide-react';
import { Card } from '@/components/ui/card';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Globe,
      gradient: 'bg-gradient-to-br from-pink-100 to-purple-100',
      iconBg: 'bg-pink-200',
      skills: [
        'HTML5', 'CSS3', 'JavaScript', 'React.js',
        'Tailwind CSS', 'Vue.js', 'Next.js', 'TypeScript'
      ],
    },
    {
      title: 'Backend Development',
      icon: Code,
      gradient: 'bg-gradient-to-br from-purple-100 to-blue-100',
      iconBg: 'bg-purple-200',
      skills: [
        'Node.js', 'Python', 'Express.js',
         'MongoDB'
      ],
    },

    

    {
      title: 'Tools & Technologies',
      icon: Sparkles,
      gradient: 'bg-gradient-to-br from-green-100 to-cyan-100',
      iconBg: 'bg-green-200',
      skills: [
        'Git & GitHub',  'Netlify',
        'VS Code', 'Vite', 'npm', 'Yarn'
      ],
    },


  {
      title: 'Data Analytics',
      icon: Sparkles,
      gradient: 'bg-gradient-to-br from-green-100 to-cyan-100',
      iconBg: 'bg-green-200',
      skills: [
        'SQL',  'Excel',
        'PowerBI'
      ],
    },
    


    {
      title: 'Soft Skills',
      icon: Heart,
      gradient: 'bg-gradient-to-br from-rose-100 to-pink-100',
      iconBg: 'bg-rose-200',
      skills: [
        'Problem Solving', 'Team Collaboration', 'Communication',
        'Project Management', 'Adaptability'
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-pink-50/30 to-purple-50/30">
      {/* Header */}
      <section className="section-padding pt-24">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-pink-500 mb-6">
            My  Skills & Expertise 
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my technical abilities and creative skills that I've developed throughout my journey as a developer and designer.
          </p>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <Card key={index} className="card-hover overflow-hidden border-0 shadow-lg">
                <div className={`${category.gradient} p-6 h-full`}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`p-3 ${category.iconBg} rounded-xl shadow-sm`}>
                      <category.icon className="w-6 h-6 text-gray-700" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">{category.title}</h3>
                  </div>
                  
                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="group">
                        <span className="inline-block bg-white/70 backdrop-blur-sm px-3 py-2 rounded-full text-sm font-medium text-gray-700 shadow-sm hover:bg-white/90 hover:shadow-md transition-all duration-200">
                          {skill}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Fun Facts */}
      <section className="section-padding bg-gradient-to-r from-pink-100/50 via-purple-100/50 to-blue-100/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-8">
            <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
              Fun Facts About Me
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="card-hover p-6 bg-gradient-to-br from-pink-50 to-rose-50 border-pink-200">
              <div className="text-center">
                <div className="w-12 h-12 bg-pink-200 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Heart className="w-6 h-6 text-pink-600" />
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Passionate Learner</h4>
                <p className="text-sm text-gray-600">Always exploring new technologies and design trends</p>
              </div>
            </Card>
            
            <Card className="card-hover p-6 bg-gradient-to-br from-purple-50 to-indigo-50 border-purple-200">
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-200 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Sparkles className="w-6 h-6 text-purple-600" />
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Creative Problem Solver</h4>
                <p className="text-sm text-gray-600">Love turning complex challenges into elegant solutions</p>
              </div>
            </Card>
            
            <Card className="card-hover p-6 bg-gradient-to-br from-green-50 to-teal-50 border-green-200">
              <div className="text-center">
                <div className="w-12 h-12 bg-green-200 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Star className="w-6 h-6 text-green-600" />
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Detail Oriented</h4>
                <p className="text-sm text-gray-600">Believe that small details make a big difference</p>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
