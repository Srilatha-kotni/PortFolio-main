import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate form submission
    try {
      // Here you would typically send the data to your backend
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'kotnisrilatha@gmail.com',
      href: 'mailto:kotnisrilatha@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 9390795946',
      href: 'tel: 9390795946',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Visakhapatnam, AP',
      href: null,
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/Srilatha-kotni',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/kotni-srilatha/?trk=opento_sprofile_details',
    },
    
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="section-padding pt-24 bg-gradient-to-br from-background to-muted/50">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Let's <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Connect</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or just want to chat? I'd love to hear from you. 
            Drop me a message and let's create something amazing together.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">Send me a message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="What's this about?"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project or just say hello!"
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="btn-gradient w-full py-3"
                    disabled={isLoading}
                  >
                    {isLoading ? 'Sending...' : (
                      <>
                        <Send size={18} className="mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </Card>
            </div>

            {/* Contact Info & Social */}
            <div className="space-y-8">
              {/* Contact Information */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">Get in touch</h2>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <Card key={index} className="card-hover p-4">
                      <div className="flex items-center gap-4">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <info.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground">{info.label}</div>
                          {info.href ? (
                            <a 
                              href={info.href}
                              className="font-medium text-foreground hover:text-primary transition-colors"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <div className="font-medium text-foreground">{info.value}</div>
                          )}
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Follow me</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <Button key={index} variant="outline" size="icon" asChild>
                      <a 
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                      >
                        <social.icon size={20} />
                      </a>
                    </Button>
                  ))}
                </div>
              </div>

              {/* Response Time */}
              <Card className="p-6 bg-gradient-to-br from-primary/5 to-accent/5">
                <h3 className="font-semibold text-foreground mb-2">Quick Response</h3>
                <p className="text-muted-foreground">
                  I typically respond to messages within 24 hours. For urgent matters, 
                  feel free to reach out via phone or email directly.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default Contact;