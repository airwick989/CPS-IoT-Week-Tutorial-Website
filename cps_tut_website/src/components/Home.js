import React from "react";
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import './component styles/Home.css';
import automotiveIndustry from '../assets/images/automotive_industry.jpg';
import currentPractices from '../assets/images/current_practices.jpg';
import combinedSolution from '../assets/images/combined_solution.jpg';
import { Grid } from '@mui/material';
import WhiteCard from "./WhiteCard";
import { colorCodes } from './component styles/colorCodes';

function Home(){
    return(
        <div className="centered-div">
            <Parallax pages={2.6} style={{backgroundColor: colorCodes["lighter-primary"]}}>

                <ParallaxLayer 
                    speed={0.01}
                    >
                        <h1>Motivation</h1>
                </ParallaxLayer>

                <ParallaxLayer 
                    offset={0.3} 
                    speed={1} 
                    style={{
                        backgroundImage: `url(${automotiveIndustry})`,
                        backgroundSize: 'cover',
                    }}
                >

                    <Grid direction="column">

                        <Grid direction="row">
                            <WhiteCard 
                                children={
                                    <h2>A Need in the Automotive Industry</h2>
                                }
                            />
                        </Grid>

                        <Grid direction="row">
                            <WhiteCard 
                                marginTop={5}
                                children={
                                    <p>
                                        There currently exists a need for a platform that provides users with the ability to perform extensive, repeatable, <br/> 
                                        and meaningful simulation and testing for the hardware and software which compose different systems in a modern <br/>
                                        vehicle whilst being broadly accessible and widely supported. These systems can range from connected infotainment <br/>
                                        systems to driving automation systems that automate lateral and longitudinal control of vehicle motion with or <br/>
                                        without human supervision. Since these systems interact with an external stochastic world characterized by <br/>
                                        state combinations approaching infinity, there is a need for the controlled testing and verification of <br/>
                                        autonomous vehicle systems before being deployed in the real world. <br/>
                                    </p>
                                }
                            />
                        </Grid>
                        
                    </Grid>   

                </ParallaxLayer>

                <ParallaxLayer 
                    offset={0.99} 
                    speed={1} 
                    style={{
                        backgroundImage: `url(${currentPractices})`,
                        backgroundSize: 'cover',
                        marginTop: 225,
                    }}
                >

                    <Grid direction="column">

                        <Grid direction="row">
                            <WhiteCard 
                                children={
                                    <h2>Issues with Current Practices</h2>
                                }
                            />
                        </Grid>

                        <Grid direction="row">
                            <WhiteCard 
                                marginTop={5}
                                children={
                                    <p>
                                        The current methods of testing vehicle systems including driving automation features exhibit key weaknesses <br/>
                                        in numerous areas which do not allow for the sufficient testing and validation of the software and hardware <br/>
                                        components that make up these systems. Furthermore, the contemporary implementations of similar systems are <br/>
                                        either financially exorbitant or highly contained.
                                    </p>
                                }
                            />
                        </Grid>
                        
                    </Grid>
                        
                </ParallaxLayer>

                <ParallaxLayer 
                    speed={0.01}
                    offset={1.5}
                    >
                        <h1>Systems to Address the Issues</h1>
                </ParallaxLayer>

                <ParallaxLayer 
                    offset={1.95} 
                    speed={1} 
                    style={{
                        backgroundImage: `url(${combinedSolution})`,
                        backgroundSize: 'cover',
                        marginTop: 225,
                    }}
                >

                    <Grid direction="column">

                        <Grid direction="row">
                            <WhiteCard 
                                children={
                                    <h2>A Combined Solution</h2>
                                }
                            />
                        </Grid>

                        <Grid direction="row">
                            <WhiteCard 
                                marginTop={5}
                                children={
                                    <p>
                                        The systems that have been constructed to fill this gap in the AV development space consist of a <br/>
                                        physical representation/replication of almost the entire global electrical system of a production <br/>
                                        automotive platform in the form of a vehicle HIL (hardware-in-the-loop) bench and a software <br/>
                                        simulation-based virtual driving HIL bench which extends on currently existing open-source software. 
                                    </p>
                                }
                            />
                        </Grid>
                        
                    </Grid>
                        
                </ParallaxLayer>

            </Parallax>
        </div>
    );
}

export default Home;