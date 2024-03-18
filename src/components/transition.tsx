import { motion } from 'framer-motion'

const transitionVariants = {
  initial: {
    x: "100%",
    width: "100%",
  },
  animate: {
    x: "0%",
    width: '0%'
  },
  exit: {
    x: ['0%', '0%'],
    width: ['0%', '0%']
  }
}
export default function Transition() {
  return (
    <>
      <motion.div className=' fixed top-0 bottom-0 right-full w-screen z-30 bg-black opacity-50'
        variants={transitionVariants}
        initial='initial'
        animate="animate"
        exit='exit'
        transition={{ delay: 0.2, duration: 0.6, ease: "easeInOut" }}
      ></motion.div>
      <motion.div className=' fixed top-0 bottom-0 right-full w-screen z-40 bg-black opacity-90'
        variants={transitionVariants}
        initial='initial'
        animate="animate"
        exit='exit'
        transition={{ delay: 0.2, duration: 0.6, ease: "easeInOut" }}
      ></motion.div>
    </>
  )
}