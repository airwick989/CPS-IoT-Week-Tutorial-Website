import React from "react";
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { colorCodes } from './component styles/colorCodes';
import { Slide } from "react-awesome-reveal";
import './component styles/TutorialFormat.css';

function TutorialFormat(){
    return(
        <div className="centered-div">
            <Parallax pages={3.3} style={{backgroundColor: colorCodes.white}}>

                <Slide triggerOnce>
                    <ParallaxLayer 
                        speed={1}
                        >
                            <h1 className="tf-h1">Vehicle HIL Bench</h1>
                    </ParallaxLayer>
                </Slide>

                <Slide>
                    <ParallaxLayer 
                        speed={1}
                        offset={0.9}
                        >
                            <h1 className="tf-h1">Vehicle HIL Bench</h1>
                    </ParallaxLayer>
                </Slide>

            </Parallax>
        </div>
    );
}

export default TutorialFormat;