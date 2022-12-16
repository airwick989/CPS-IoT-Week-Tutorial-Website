import React from "react";
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { colorCodes } from './component styles/colorCodes';
import { Slide } from 'react-reveal';
import './component styles/Organizers.css';

function Organizers(){
    return(
        <div className="tutorialformat">
            <Parallax pages={2.7} style={{backgroundColor: colorCodes.white}}>

                <ParallaxLayer 
                    speed={1}
                >

                    <Slide right>
                        <h1>Vehicle HIL Bench <span className="italicized">Lecture</span></h1>
                        <h2>40 Minutes</h2>
                    </Slide>

                </ParallaxLayer>

            </Parallax>
        </div>
    );
}

export default Organizers;