import React from 'react'
// import anime from "animejs/lib/anime.es.js";
// import Anime,{anime} from 'react-anime'
import { useRef,useEffect ,useState} from 'react';
import { motion } from "framer-motion";
// import animejs from "https://cdn.skypack.dev/animejs@3.2.1";
import './Animation.scss'

export default function Animation(){
    return (
      <>
        <div className="container">
        <motion.h2 className="something" animate={{fontSize:"50px"}}>
          helloo 
        </motion.h2>
        </div>
      </>
    );
}