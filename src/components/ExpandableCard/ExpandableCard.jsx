import { useState } from 'react';
import { motion } from 'motion/react';

function ExpandableCard(props){

    const[isOpen, setIsOpen] = useState(false);
    return(
        <motion.div
            whileHover={{
    y: -4,
    scale: 1.01,
    borderColor: '#7777c6'
  }}
            transition={{
                layout: {
                    duration: 0.8,
                    type:"spring"
                }
            }}
            layout 
            onClick={() => setIsOpen(!isOpen)} 
            className="w-full max-w-4xl mx-auto mb-6 cursor-pointer overflow-hidden rounded-3xl border border-mist-700 bg-zinc-800/70 backdrop-blur-lg shadow-xl ">

            {/* Header */}
            <motion.div
                layout="position"
                className="flex items-center justify-between px-8 py-6"
            >
                <motion.h2
                    layout="position"
                    className=" text-2xl md:text-3xl font-bold tracking-tight text-mist-200">
                {props.title}
                </motion.h2>
                <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-3xl font-light text-mist-200"
                >
                {isOpen ? "-" : "+"}
                </motion.span>
            </motion.div>

            {/* Content */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-8 pb-8 text-black-300 leading-relaxed"
                >
                    {props.children}
                </motion.div>
            )}
        </motion.div>
    );
}

export default ExpandableCard