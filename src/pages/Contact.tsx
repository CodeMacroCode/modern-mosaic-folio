import { Link } from "react-router-dom";
import { ArrowLeft, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you within 24 hours.",
    });
    
    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-12 max-w-4xl">
        {/* Navigation */}
        <Link 
          to="/"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300 mb-12"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="font-mono text-sm uppercase tracking-wider">Back to Home</span>
        </Link>

        {/* Header */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-6xl font-serif mb-4">
            Let's Work <em className="italic">Together</em>
          </h1>
          <div className="w-24 h-0.5 bg-accent-yellow mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl">
            I'm always excited to discuss new projects and creative opportunities. 
            Drop me a line and let's create something amazing together.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your full name"
                  required
                  className="bg-accent-cream/30 border-border focus:border-accent-red focus:ring-accent-red/20"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your.email@example.com"
                  required
                  className="bg-accent-cream/30 border-border focus:border-accent-red focus:ring-accent-red/20"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell me about your project or just say hello..."
                  rows={6}
                  required
                  className="bg-accent-cream/30 border-border focus:border-accent-red focus:ring-accent-red/20 resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-accent-yellow hover:bg-accent-yellow/90 text-accent-yellow-foreground font-medium py-3 rounded-sm transition-all duration-300 hover:shadow-lg"
              >
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details Cards */}
            <div className="space-y-4">
              <div className="bg-accent-cream p-6 rounded-sm">
                <div className="flex items-center gap-3 mb-2">
                  <Mail className="w-5 h-5 text-accent-red" />
                  <h3 className="font-medium">Email</h3>
                </div>
                <p className="text-muted-foreground">hello@developer.com</p>
              </div>

              <div className="bg-accent-cream p-6 rounded-sm">
                <div className="flex items-center gap-3 mb-2">
                  <MapPin className="w-5 h-5 text-accent-red" />
                  <h3 className="font-medium">Location</h3>
                </div>
                <p className="text-muted-foreground">Montreal, Quebec, Canada</p>
              </div>

              <div className="bg-accent-cream p-6 rounded-sm">
                <div className="flex items-center gap-3 mb-2">
                  <Clock className="w-5 h-5 text-accent-red" />
                  <h3 className="font-medium">Response Time</h3>
                </div>
                <p className="text-muted-foreground">Usually within 24 hours</p>
              </div>
            </div>

            {/* Availability Schedule */}
            <div className="border border-border p-6 rounded-sm">
              <h3 className="font-medium mb-4">Availability</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM EST</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Weekend</span>
                  <span>Limited availability</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Timezone</span>
                  <span>Eastern Standard Time</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}