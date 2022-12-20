import React from "react";
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import WhiteCard from "./WhiteCard";
import vehicleHILBench from '../assets/images/vehicle_hil_bench.jpg';
import virtualDrivingHILBench from '../assets/images/virtual_driving_hil_bench.jpg';
import bothSystems from '../assets/images/both_systems.jpg';
import { Grid } from '@mui/material';
import { Slide } from 'react-reveal';

function Systems(){
    return(
        <div className="centered-div">
            <Parallax pages={3.3}>

                <ParallaxLayer 
                    speed={0.01}
                    >
                        <Slide top>
                            <h1>Vehicle HIL Bench</h1>
                        </Slide>
                </ParallaxLayer>

                <Slide left>
                    <ParallaxLayer 
                        offset={0.3} 
                        speed={1} 
                        style={{
                            backgroundImage: `url(${vehicleHILBench})`,
                            backgroundSize: 'cover',
                        }}
                    >

                        <Slide bottom>
                            <WhiteCard 
                                marginTop={30}
                                children={
                                    <p>
                                        The vehicle HIL bench is divided into subsystems in the form of a topological hierarchy, and are interconnected <br/>
                                        with one another by means of electrical transmission media such as cables, wires and connectors carrying analog <br/>
                                        and digital signals. This bench provides the capability to supply accurate, real-world input to a digital twin of <br/>
                                        a production vehicle by utilizing the hardware components that comprise it.
                                    </p>
                                }
                            />
                        </Slide>

                    </ParallaxLayer>
                </Slide>

                <ParallaxLayer 
                    speed={0.01}
                    offset={1.1}
                    >
                        <Slide bottom>
                            <h1>Virtual Driving HIL Bench</h1>
                        </Slide>
                        
                </ParallaxLayer>

                <Slide left>
                    <ParallaxLayer 
                        offset={1.4} 
                        speed={1} 
                        style={{
                            backgroundImage: `url(${virtualDrivingHILBench})`,
                            backgroundSize: 'cover',
                        }}
                    >

                        <WhiteCard 
                            marginTop={30}
                            children={
                                <p>
                                    The virtual driving HIL bench provides a highly streamlined platform consisting of tools that enable the <br/>
                                    rapid, repeatable, accurate, and nearly endless testing of a digital twin of real life vehicles. This <br/>
                                    system will allow users to gain valuable simulation and testing data of hardware and software components <br/>
                                    in a manner which is not always feasible using the traditional methods of autonomous vehicle testing.
                                </p>
                            }
                        />

                    </ParallaxLayer>
                </Slide>

                <ParallaxLayer 
                    speed={0.01}
                    offset={2.2}
                    >
                        <Slide bottom>
                            <h1>Benefits of the Systems</h1>
                        </Slide>
                        
                </ParallaxLayer>

                <Slide left>
                    <ParallaxLayer 
                        offset={2.6} 
                        speed={1} 
                        style={{
                            backgroundImage: `url(${bothSystems})`,
                            backgroundSize: 'cover',
                        }}
                    >

                        <Grid direction="column">

                            <Grid direction="row">
                                <WhiteCard 
                                    marginTop={10}
                                    children={
                                        <p>
                                            The appeal of the presented systems are primarily to be targeted towards companies and manufacturers <br/>
                                            focused in the automotive industry, particularly the autonomous vehicle industry. These systems in <br/>
                                            conjunction provide capabilities which have not yet been explored in such an open-source manner. One <br/>
                                            major development the systems bring forth is the introduction of a devops pipeline for vehicle <br/>
                                            platforms. As software and application development for road vehicles becomes more commonplace in the <br/>
                                            industry, the systems presented will allow application development for vehicles to be streamlined by <br/>
                                            facilitating the development and execution of test cases as well as the examination of key <br/>
                                            interactions between the hardware and software components.
                                        </p>
                                    }
                                />
                            </Grid>

                            <Grid direction="row">
                                <WhiteCard 
                                    marginTop={5}
                                    children={
                                        <p>
                                            Another major point benefit introduced by the systems is the modular nature. The systems adopt a plug <br/>
                                            and play personality by allowing users to interface hardware and software components into the existing <br/>
                                            system. This opens the door for manufacturers of third party components to be able to more thoroughly <br/>
                                            test, integrate, and simulate them in a controlled environment to ensure the behavior of the components <br/>
                                            are as expected.
                                        </p>
                                    }
                                />
                            </Grid>

                        </Grid>   

                    </ParallaxLayer>
                </Slide>

            </Parallax>
        </div>
    );
}

export default Systems;