
import { motion } from 'framer-motion';
import { Instagram, Twitter, Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import AnimatedSection from '../components/AnimatedSection';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormState({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      
      // Reset submission status after 3 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    }, 1500);
  };

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 md:px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <SectionHeading 
          title="Get in Touch" 
          subtitle="Looking to collaborate or have a question? Reach out directly or through the form below."
          centered={true}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
          {/* Contact Info */}
          <AnimatedSection delay={0.1}>
            <div className="space-y-8">
              <h3 className="text-2xl font-playfair font-bold text-white negative-tracking">Contact Information</h3>
              <p className="text-white/70 leading-relaxed max-w-md">
                I'm open to collaborations, partnerships, and creative projects that align with my vision
                of storytelling and authentic representation.
              </p>
              
              <div className="space-y-6 mt-8">
                <div className="flex items-start">
                  <Mail className="text-primary w-5 h-5 mt-1 mr-4" />
                  <div>
                    <h4 className="text-white text-base font-medium">Email</h4>
                    <a href="mailto:solnishimwe3@gmail.com" className="text-white/70 hover:text-white transition-colors">
                      solnishimwe3@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Instagram className="text-primary w-5 h-5 mt-1 mr-4" />
                  <div>
                    <h4 className="text-white text-base font-medium">Instagram</h4>
                    <a href="https://instagram.com/sol____solange" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">
                      @sol____solange
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="text-primary w-5 h-5 mt-1 mr-4" />
                  <div>
                    <h4 className="text-white text-base font-medium">Based in</h4>
                    <p className="text-white/70">
                      Kigali, Rwanda
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="pt-8 border-t border-white/10 mt-8">
                <h3 className="text-xl font-playfair font-bold text-white mb-4">Follow Me</h3>
                <div className="flex space-x-4">
                  <a href="https://instagram.com/sol____solange" target="_blank" rel="noopener noreferrer" 
                     className="bg-white/5 hover:bg-white/10 transition-colors w-10 h-10 rounded-full flex items-center justify-center">
                    <Instagram size={18} />
                  </a>
                  <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" 
                     className="bg-white/5 hover:bg-white/10 transition-colors w-10 h-10 rounded-full flex items-center justify-center">
                    <Twitter size={18} />
                  </a>
                  <a href="mailto:solnishimwe3@gmail.com" 
                     className="bg-white/5 hover:bg-white/10 transition-colors w-10 h-10 rounded-full flex items-center justify-center">
                    <Mail size={18} />
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>
          
          {/* Contact Form */}
          <AnimatedSection delay={0.3}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white/70 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white placeholder-white/40 rounded-md focus:outline-none focus:ring-1 focus:ring-white/30"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white/70 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white placeholder-white/40 rounded-md focus:outline-none focus:ring-1 focus:ring-white/30"
                    placeholder="Your email"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-white/70 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formState.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white placeholder-white/40 rounded-md focus:outline-none focus:ring-1 focus:ring-white/30"
                  placeholder="What's this about?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white/70 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formState.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white placeholder-white/40 rounded-md focus:outline-none focus:ring-1 focus:ring-white/30 resize-none"
                  placeholder="Your message..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting || submitted}
                className={`px-6 py-3 bg-white text-black font-medium rounded-md flex items-center justify-center transition-colors ${
                  (isSubmitting || submitted) ? 'opacity-70 cursor-not-allowed' : 'hover:bg-white/90'
                }`}
              >
                {isSubmitting ? (
                  "Sending..."
                ) : submitted ? (
                  "Message Sent!"
                ) : (
                  <>
                    Send Message <Send size={16} className="ml-2" />
                  </>
                )}
              </button>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
};

export default Contact;
