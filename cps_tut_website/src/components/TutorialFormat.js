import React from "react";
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { colorCodes } from './component styles/colorCodes';
import './component styles/TutorialFormat.css';
import { Slide } from 'react-reveal';

function TutorialFormat(){
    return(
        <div className="tutorialformat">
            <Parallax pages={2.7} style={{backgroundColor: colorCodes.white}}>

                <ParallaxLayer 
                    speed={1}
                >

                    <Slide right>
                        <h1>Vehicle HIL Bench <span className="italicized">Lecture</span></h1>
                        <h2>40 Minutes</h2>
                        <p>
                            The tutorial will begin with the introduction of the vehicle HIL bench and an overview of its design. This portion will explore the purpose of designing such a platform and will also outline the many hardware components and vehicle subsystems that comprise it. After an overview, the accomplishments achieved by the bench will be discussed, followed by highlighting the data collection and hardware testing opportunities. This will be done by showcasing how the bench can test the functional correctness of the various vehicle hardware components through the data being recorded through the use of the HIL configuration.
                        </p>
                    </Slide>

                    <Slide right>
                        <h1>Vehicle HIL Bench <span className="italicized">Demo</span></h1>
                        <h2>40 Minutes</h2>
                        <p>
                            The versatility of the vehicle HIL bench will be showcased by reviewing two practical & real-world applications with limited scope demonstrations: <br/>(a) regression testing of vehicle infotainment software<br/>(b) a CAN-bus intrusion detection methodology based on ECU power consumption as a function of CAN-bus traffic.<br/>Following these two demonstrations, the attack vectors for a vehicle's CAN-bus network will be discussed with physical examples. In addition, it will be discussed and demonstrated how unauthorized access into the CAN-bus can be gained and exploited to disrupt normal vehicle operation. The demonstration will utilize readily available open-source software and hardware tools. In addition, CAN-bus traffic fingerprinting methods proposed in the literature will be demonstrated using the vehicle HIL bench.
                        </p>
                    </Slide>

                    <Slide right>
                        <h1>Coffee Break</h1>
                        <h2>15 Minutes</h2>
                    </Slide>

                    <Slide right>
                        <h1>Virtual Driving HIL Bench <span className="italicized">Lecture</span></h1>
                        <h2>25 Minutes</h2>
                        <p>
                            The virtual driving HIL bench will be introduced by discussing its purpose and the needs in the road vehicle development space it addresses. This will be followed by overviewing the design and development of the bench and exploring the key features it brings forth. 
                        </p>
                        <p>
                            A portion of the virtual driving bench’s presentation will stress the importance of the systems’s simulation capabilities and how it can introduce HIL hybrid simulation testing as a first stage of verification before moving to real-world testing.
                        </p>
                    </Slide>

                    <Slide right>
                        <h1>Virtual Driving HIL Bench <span className="italicized">Demo</span></h1>
                        <h2>30 Minutes</h2>
                        <p>
                            The simulation capabilities of the virtual driving HIL bench will be showcased by reviewing sample case studies which have been collected. These case studies focus on demonstrating how the bench can be used to uncover and analyze anomalies that appear in specific testing contexts of autonomous driving algorithms, and how the data collected on the bench can be used to make informed development decisions moving forward. 
                        </p>
                        <p>
                            The demo will also aim to showcase how certain vehicle subsystems can be tested by simulating an attack scenario on a simulation vehicle's CAN bus system. The process of designing and deploying a sample malicious CAN message will be outlined and the outcome of the CAN attack will be demonstrated in the simulation environment.
                        </p>
                    </Slide>

                    <Slide right>
                        <h1>Demonstration of a Combined Use Case</h1>
                        <h2>30 Minutes</h2>
                        <p>
                            After thoroughly discussing both of the systems, the focus will shift to exploring how these two systems can be highly useful in conjunction and complementary to one another. There is a key opportunity to be explored by demonstrating how the vehicle HIL bench can be expanded to simulate the use of the hardware components in real working scenarios by interfacing it with the virtual driving HIL bench’s simulation capabilities.
                        </p>
                        <p>
                            A combined use case will be demonstrated by showcasing a CAN bus attack scenario, this time utilizing both benches in order to obtain more output and data. The virtual driving HIL bench is configured in a client-server architecture, allowing multiple clients to act as distinct simulation vehicles in the same simulation environment which is hosted on a server. The server will use means of cloud communication to initiate an event and invoke commands to pass attack messages to the real-world CAN bus subsystems in the vehicle HIL bench. This will be replacing the virtual CAN found in the simulation vehicle, showing how real vehicle hardware can be interfaced with the simulation environment.
                        </p>
                        <p>
                            After passing the attack messages to the vehicle HIL bench, the CAN bus subsystems will send back reply messages to the cloud communication infrastructure, which will be relayed back to the virtual driving bench's client. The client will provide a concrete visual representation of the effects of the CAN attack by showing the simulation vehicle lose control and possibly experience a collision.
                        </p>
                        <p>
                            These impacts of such an attack would not be able to be replicated using the vehicle HIL bench exclusively. The type of datasets that may be collected from the vehicle simulation and the HIL bench in conjunction will be unique and have never been seen before in the open-source road vehicle development space.
                        </p>
                    </Slide>

                </ParallaxLayer>

            </Parallax>
        </div>
    );
}

export default TutorialFormat;