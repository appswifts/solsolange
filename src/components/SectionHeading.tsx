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
  return <div className={`mb-8 md:mb-12 ${centered ? 'text-center' : ''} ${className}`}>
      <motion.div initial={{
      opacity: 0,
      y: 20
    }} whileInView={{
      opacity: 1,
      y: 0
    }} viewport={{
      once: true
    }} transition={{
      duration: 0.6
    }} className="bg-black/0">
        <h2 className="sm:text-3xl font-playfair font-bold mb-4 md:mb-6 tracking-tight negative-tracking text-gray-950 text-left md:text-6xl text-3xl">
          {title}
        </h2>
        
        {subtitle && <motion.p initial={{
        opacity: 0
      }} whileInView={{
        opacity: 1
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6,
        delay: 0.2
      }} style={{
        marginLeft: centered ? 'auto' : '0',
        marginRight: centered ? 'auto' : '0'
      }} className="max-w-2xl mt-2 text-base sm:text-lg font-light leading-relaxed text-gray-950 text-left">
            {subtitle}
          </motion.p>}
        
        <motion.div className="w-16 h-[1px] bg-black/30 dark:bg-white/30 mt-4 md:mt-8" initial={{
        width: 0
      }} whileInView={{
        width: 64
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6,
        delay: 0.3
      }} style={{
        marginLeft: centered ? 'auto' : '0',
        marginRight: centered ? 'auto' : '0'
      }} />
      </motion.div>
    </div>;
};
export default SectionHeading;