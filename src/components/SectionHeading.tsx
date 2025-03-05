
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

const SectionHeading = ({ 
  title, 
  subtitle, 
  centered = false, 
  className = '' 
}: SectionHeadingProps) => {
  return (
    <div 
      className={`mb-12 ${centered ? 'text-center' : ''} ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold text-white mb-3 tracking-tight negative-tracking">
          {title}
        </h2>
        
        {subtitle && (
          <motion.p 
            className="text-white/70 max-w-2xl mt-2 text-sm md:text-base font-light leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {subtitle}
          </motion.p>
        )}
        
        <motion.div
          className="w-12 h-[1px] bg-white/50 mt-6"
          initial={{ width: 0 }}
          whileInView={{ width: 48 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{ marginLeft: centered ? 'auto' : '0', marginRight: centered ? 'auto' : '0' }}
        />
      </motion.div>
    </div>
  );
};

export default SectionHeading;
