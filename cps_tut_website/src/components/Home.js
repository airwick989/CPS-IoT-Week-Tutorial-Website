import React from "react";
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import './component styles/Home.css';
import automotiveIndustry from '../assets/images/automotive_industry.jpg'
import { Grid } from '@mui/material';
import WhiteCard from "./WhiteCard";

var colors = {
    'primary': '#84478F',
    'light-primary': '#EDC1F9',
    'secondary': '#B9F66F',
}

function Home(){
    return(
        <div className="centered-div">
            <Parallax pages={3}>

                <ParallaxLayer 
                    speed={0.01}
                    style={{
                        backgroundColor: colors["light-primary"],
                    }}
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

            </Parallax>
        </div>
    );
}

export default Home;