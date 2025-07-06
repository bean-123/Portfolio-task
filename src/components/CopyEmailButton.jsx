import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion";


//Function to copy the email from the button, add onClick function to button
const CopyEmailButton = () => {
    const [copied, setCopied] = useState(false);
    const email = "amy.platt@hotmail.com"

    const copyToClipboard = ()=>{
        navigator.clipboard.writeText(email);
        setCopied(true);

        setTimeout(()=>{
            setCopied(false)
        }, 2000)
    }

  return (
    <motion.button 
    onClick={copyToClipboard} 
    whileHover={{y:-5}}
    whileTap = {{scale: 1.05}}
    className="relative px-1 py-4 text-sm text-center rounded-full font-extralight bg-primary w-[12rem] cursor-pointer overflow-hidden">
        <AnimatePresence mode="wait">
        {copied?(
            <motion.p 
            className="flex items-center justify-center gap-2"
            key="copied" 
            initial={{opacity:0, y:-10}}
            animate={{opacity:1, y:0}}
            exit={{opacity:0, y:-10}}
            transition={{duration:0.1, ease:"easeInOut"}}
            >
            <img src={import.meta.env.BASE_URL + "assets/copy-done.svg"} className="w-5" alt="email copied" />
            Email Copied
        </motion.p>
        ) : (
        <motion.p 
        className="flex items-center justify-center gap-2"
            key="copy" 
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0}}
            transition={{duration:0.1}}
            >
            <img src={import.meta.env.BASE_URL + "assets/copy.svg"} className="w-5" alt="copy icon"/>
            Copy Email Address
        </motion.p>)}
        </AnimatePresence>
    </motion.button>
  )
}

export default CopyEmailButton