"use client"

import {Circle, Dna, Globe2, Languages} from "lucide-react"
import { motion } from "framer-motion"

const Aboutfooter = () => {


    const items = [
        {name:"Language", answer:"English UK", icon:<Languages className="h-6 w-6 text-cyan-400" />},
        {name:"Nationality",answer:"Ugandan", icon:<Globe2   className="h-6 w-6 text-blue-400" />},
        {name:"Gender",answer:"Male", icon:<Dna  className="h-6 w-6 text-purple-400" />},
    ]


    return(
        <>
        {
            items.map((val, indx) => {
              return(
                <motion.div
                  key={indx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: indx * 0.1 }}
                  className="glass-effect rounded-lg p-6 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-3">
                    {val.icon}
                    <h3 className="text-xl font-semibold text-white">{val.name}</h3>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <Circle className="h-2 w-2" /> {val.answer}
                  </div>
                </motion.div>
              )
            })
          }
         
        </>
    )
}

export default Aboutfooter