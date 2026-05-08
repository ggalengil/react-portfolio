import { useState } from 'react';
import { motion } from 'motion/react';
import './ExpandableCard.css';

function ExpandableCard(props){

    const[isOpen, setIsOpen] = useState(false);
    return(
        <motion.div 
            transition={{layout: {duration: 0.8, type:"spring"}}}
            layout 
            onClick={() => setIsOpen(!isOpen)} 
            className="card">
            <motion.h2 layout="position">{props.title}</motion.h2>
            {isOpen && (
                <motion.div>
                    {props.children}
                </motion.div>
            )}
        </motion.div>
    );
}

export default ExpandableCard