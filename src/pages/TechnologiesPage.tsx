import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Rocket, Clock, Bell } from 'lucide-react';

const products = [
  {
    title: "E-Commerce Platform",
    description: "An all in one e-commerce platform for your business.",
    image: "/byfluence.png",             // Desktop image
    mobileImage: "mob_1.png", // Mobile-fitted image you provide
    url: "https://byfluence.com/"
  },
  {
    title: "Talent Outsourcing Platform",
    description: "A platform for finding and hiring talent from around the world.",
    image: "/Add a heading.png",
    mobileImage: "/mob_2.png",
    url: "https://videyooadz.com/en-US"
  },
  {
    title: "Marketign Agency Platform",
    description: "A platform for managing your marketing campaigns and tracking your results.",
    image: "/3.png",
    mobileImage: "/mob_3.png",
    url: "https://notifications.yourcompany.com"
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5 + i * 0.2
    }
  }),
};

const TechnologiesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleCardClick = (url: string) => {
    if (url) window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen pt-32 pb-15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative backdrop-blur-lg bg-white/5 rounded-2xl p-12 border border-white/10 text-center"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-600/10 rounded-2xl" />
          <div className="relative">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="flex justify-center mb-8"
            >
              <Rocket className="w-24 h-24 text-blue-400" />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-4xl sm:text-5xl font-bold text-white mb-6"
            >
              Our Technologies
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto"
            >
              Explore the cutting-edge products powering our platform.
            </motion.p>

            <div className="grid gap-8 grid-cols-1 mb-8">
              {products.map((product, i) => (
                <motion.div
                  key={product.title}
                  custom={i}
                  initial="hidden"
                  animate="visible"
                  variants={cardVariants}
                  onClick={() => handleCardClick(product.url)}
                  className="relative group w-full aspect-[4/5] sm:aspect-[3.57/1] cursor-pointer rounded-xl shadow-xl overflow-hidden border border-white/20"
                >
                  {/* Desktop image (hidden on mobile) */}
                  <img
                    src={product.image}
                    alt={product.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 hidden sm:block"
                  />
                  {/* Mobile image (only on mobile) */}
                  <img
                    src={product.mobileImage}
                    alt={product.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 block sm:hidden"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10" />
                  <div className="relative z-20 flex flex-col justify-end h-full p-8">
                    <h2 className="text-2xl font-bold text-white drop-shadow mt-2 mb-2">{product.title}</h2>
                    {/* Description only visible on desktop */}
                    <p className="hidden sm:block text-gray-200 drop-shadow text-center">
                      {product.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6"
            >
              <div className="flex items-center gap-2 text-gray-300">
                <Clock className="w-5 h-5 text-blue-400" />
                <span>Cutting Edge</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Bell className="w-5 h-5 text-blue-400" />
                <span>Stay Tuned for More</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TechnologiesPage;
