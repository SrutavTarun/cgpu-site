import React from "react";
import vision from "../images/vision-asset.svg";
import mission from "../images/mission-asset.svg";

const VisionMission = () => {
    return (
        <div className="my-0 my-md-4">
            <div className="page-head text-center mb-4">We Treasure</div>
            <div className="vm">
                <div className="vision d-md-flex align-items-center py-2 py-md-3 justify-content-end">
                    <div className="order-md-2">
                        <div className="bluelayer">
                            <img src={vision} alt="Vision" className="eye" />
                        </div>
                    </div>
                    <div className="px-5 ps-md-0 py-4 py-md-0 text-center text-md-end order-md-1">
                        <h4>Our Vision</h4>
                        <div className="text mx-auto ">
                            National Level Excellence and International Visibility in Every Facet of Engineering
                            Research and Education.
                        </div>
                    </div>
                </div>
                <div className="mission d-md-flex align-items-center py-2 py-md-3">
                    <div className="">
                        <div className="bluelayer">
                            <img src={mission} alt="Mision" className="eye" />
                        </div>
                    </div>
                    <div className="px-5 pe-md-0 py-4 py-md-0 text-center text-md-start">
                        <h4>Our Mission</h4>
                        <div className="text">
                            <ul className="px-4 pe-md-0">
                                <li>To facilitate quality transformative education in Engineering and Management.</li>
                                <li>
                                    To foster innovations in Technology and its application for meeting global
                                    challenges.
                                </li>
                                <li>To pursue and disseminate Quality Research.</li>
                                <li>
                                    To equip, enrich and transform students to be Responsible Professionals for better
                                    service to humanity.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VisionMission;
