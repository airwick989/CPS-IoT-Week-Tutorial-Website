import React from "react";
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { colorCodes } from './component styles/colorCodes';
import { Slide } from 'react-reveal';
import './component styles/Organizers.css';
import { Grid } from '@mui/material';
import azim from '../assets/images/AKRAMUL_AZIM.jpg'
import hossain from '../assets/images/RIDWAN_HOSSAIN.jpg';
import rahman from '../assets/images/TAUFIQ_RAHMAN.jpg';

function Organizers(){
    return(
        <div className="organizers">
            <Parallax pages={1.9} style={{backgroundColor: colorCodes.white}}>

                <ParallaxLayer 
                    speed={1}
                >

                    <Grid container spacing={2}>

                        <Grid item xs={3}>
                            <Slide left>
                                <img src={azim} alt=""/>
                            </Slide>
                        </Grid>
                        <Grid item xs={9}>
                            <Slide right>
                                <h1>Dr. Akramul Azim</h1>
                                <h2>Ontario Tech University, akramul.azim@ontariotechu.ca</h2>
                                <p>
                                    Akramul Azim is an Associate Professor in Software Engineering at the Ontario Tech University, Oshawa, Ontario, Canada. His research interests include real-time embedded software, safety-critical software, machine learning, software engineering, cognitive computing, and intelligent transportation systems. He is a Professional Engineer in Ontario and a Senior Member of the IEEE.
                                </p>
                            </Slide>
                        </Grid>

                        <Grid item xs={3}>
                            <Slide left>
                                <img src={hossain} alt=""/>
                            </Slide>
                        </Grid>
                        <Grid item xs={9}>
                            <Slide right>
                                <h1>Ridwan Hossain</h1>
                                <h2>Ontario Tech University, ridwan.hossain@ontariotechu.ca</h2>
                                <p>
                                    Ridwan Hossain is an undergraduate student studying Software Engineering at Ontario Tech University, Oshawa, Ontario, Canada. He possesses technical experience across numerous key projects focused in full-stack web development, mobile development, DevOps engineering, cloud computing, software engineering and real-time embedded software. Ridwan is currently a software development and research technician at Ontario Tech University.
                                </p>
                            </Slide>
                        </Grid>

                        <Grid item xs={3}>
                            <Slide left>
                                <img src={rahman} alt=""/>
                            </Slide>
                        </Grid>
                        <Grid item xs={9}>
                            <Slide right>
                                <h1>Taufiq Rahman</h1>
                                <h2>National Research Council Canada, taufiq.rahman@nrc-cnrc.gc.ca</h2>
                                <p>
                                    Taufiq Rahman is a transportation automation researcher in the Automotive & Surface Transportation Research Center of National Research Council Canada (NRC), where he has been since 2017. His current research interests include perception systems, sensor fusion, applied machine learning and cybersecurity of transportation automation systems. In past academic and industrial roles, he synthesized and implemented novel opto-mechatronic applications for aerial and marine robotics for real-time performance in challenging operating conditions.
                                </p>
                            </Slide>
                        </Grid>

                    </Grid>

                </ParallaxLayer>

            </Parallax>
        </div>
    );
}

export default Organizers;