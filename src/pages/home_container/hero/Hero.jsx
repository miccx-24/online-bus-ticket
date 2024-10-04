import React from 'react'
import Bus2 from "../../../assets/bus5.png"
import { motion } from "framer-motion"

const Hero = () => {
    const imageVariants = {
        initial: {
            x: "100%",
            rotate: -5,
        },
        animate: {
            x: "0%",
            rotate: 0,
            transition: {
                duration: 1.5,
                ease: "easeOut",
            }
        }
    }

    return (
        <div className='w-full h-[calc(100vh-8ch)] lg:ps-28 md:ps-16 sm:px-7 ps-4 mt-[8ch] flex items-center justify-center flex-col hero relative overflow-hidden bg-gradient-to-br from-violet-900 to-indigo-900'>
            <div className="flex-1 w-full flex items-stretch justify-between gap-12 pb-10">
                <motion.div className="w-[40%] h-auto rounded-md flex justify-center flex-col space-y-14"
                    initial={{opacity:0, x:-50}}
                    animate={{opacity:1, x:0}}
                    transition={{duration:0.8, ease: 'easeOut'}}
                >
                    <motion.div className="space-y-5"
                        initial={{opacity:0, y:-30}}
                        animate={{opacity:1, y:0}}
                        transition={{duration:0.8, ease: 'easeOut', delay:0.2}}
                    >
                        <motion.h1 className="text-7xl font-bold text-neutral-50 leading-[1.15]"
                            initial={{opacity:0, y:-30}}
                            animate={{opacity:1, y:0}}
                            transition={{duration:0.8, ease: 'easeOut', delay:0.4}}
                        >
                            Reserve Your Bus 
                            <span className="text-violet-400 tracking-wider"> Ticket</span>
                            <motion.span 
                                className="inline-block text-yellow-400"
                                animate={{
                                    rotate: [0, 10, 0],
                                    transition: { duration: 1.5, repeat: Infinity }
                                }}
                            > Now</motion.span>
                        </motion.h1>
                        <motion.p className="text-xl font-normal text-neutral-300 line-clamp-3 text-ellipsis"
                            initial={{opacity:0, y:-30}}
                            animate={{opacity:1, y:0}}
                            transition={{duration:0.8, ease: 'easeOut', delay:0.6}}
                        >
                            Find and book your bus tickets with just a few clicks. We offer a wide range of bus routes and schedules to suit your needs. 
                        </motion.p>
                    </motion.div>

                    <motion.button 
                        className="w-fit bg-yellow-400 hover:bg-yellow-500 text-violet-900 font-bold py-4 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Reserve Seat Now 
                    </motion.button>
                </motion.div>
                <div className="w-[60%] h-full rounded-md flex items-end justify-end relative">
                    <motion.img 
                        className="w-full aspect-[4/2] object-contain absolute bottom-0 right-0"
                        src={Bus2}
                        alt='bus img'
                        initial='initial'
                        animate='animate'
                        variants={imageVariants}
                    />
                    <motion.div
                        className="absolute top-1/4 right-1/4 w-32 h-32 bg-yellow-400 rounded-full opacity-20"
                        animate={{
                            scale: [1, 1.2, 1],
                            transition: { duration: 3, repeat: Infinity }
                        }}
                    />
                    <motion.div
                        className="absolute bottom-1/3 left-1/3 w-24 h-24 bg-violet-400 rounded-full opacity-20"
                        animate={{
                            scale: [1, 1.3, 1],
                            transition: { duration: 4, repeat: Infinity }
                        }}
                    />
                </div>
            </div>
        </div>
    )
}

export default Hero