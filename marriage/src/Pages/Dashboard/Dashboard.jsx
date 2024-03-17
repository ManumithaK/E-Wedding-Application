import React from "react";
import './Dashboard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleDown } from '@fortawesome/free-solid-svg-icons';
import Navbar from "../../Components/Navbar/Navbar";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
    const navigate = useNavigate();
    const handleSeeMore=()=>{
        navigate('/CategoryDetails');
    }
    return (
        <>
            <Navbar/>
            <div className="dashboard-outer-container">
            <div className="Dashboard-content">
                <div className="category">
                    <div className="category-name">
                        Venue
                    </div>
                </div>
                <div className="grid-container">
                    <div className="grid-item">
                        <div className="grid-item-details">
                            <div>
                                <img className="grid-item-details-img" src="assets/wedding-image1.jpg" alt="" /></div>
                            <div className="grid-item-details-text">
                                <div>Venue Name</div>
                                <div className="grid-item-details-text-area">Venue Area Details</div>
                            </div>
                        </div>
                    </div>
                    <div className="grid-item">
                        <div className="grid-item-details">
                            <div>
                                <img className="grid-item-details-img" src="assets/wedding-image1.jpg" alt="" /></div>
                            <div className="grid-item-details-text">
                                <div>Venue Name</div>
                                <div className="grid-item-details-text-area">Venue Area Details</div>
                            </div>
                        </div>
                    </div>
                    <div className="grid-item">
                        <div className="grid-item-details">
                            <div>
                                <img className="grid-item-details-img" src="assets/wedding-image1.jpg" alt="" /></div>
                            <div className="grid-item-details-text">
                                <div>Venue Name</div>
                                <div className="grid-item-details-text-area">Venue Area Details</div>
                            </div>
                        </div>
                    </div>
                    <div className="grid-item small">
                        <button className="more-button" onClick={handleSeeMore}>
                            <FontAwesomeIcon className="more-button-icon" icon={faChevronCircleDown} />See More</button>
                    </div>
                </div>
            </div>
            <div className="Dashboard-content">
                <div className="category">
                    <div className="category-name">
                        Venue
                    </div>
                </div>
                <div className="grid-container">
                    <div className="grid-item">
                        <div className="grid-item-details">
                            <div>
                                <img className="grid-item-details-img" src="assets/wedding-image1.jpg" alt="" /></div>
                            <div className="grid-item-details-text">
                                <div>Venue Name</div>
                                <div className="grid-item-details-text-area">Venue Area Details</div>
                            </div>
                        </div>
                    </div>
                    <div className="grid-item">
                        <div className="grid-item-details">
                            <div>
                                <img className="grid-item-details-img" src="assets/wedding-image1.jpg" alt="" /></div>
                            <div className="grid-item-details-text">
                                <div>Venue Name</div>
                                <div className="grid-item-details-text-area">Venue Area Details</div>
                            </div>
                        </div>
                    </div>
                    <div className="grid-item">
                        <div className="grid-item-details">
                            <div>
                                <img className="grid-item-details-img" src="assets/wedding-image1.jpg" alt="" /></div>
                            <div className="grid-item-details-text">
                                <div>Venue Name</div>
                                <div className="grid-item-details-text-area">Venue Area Details</div>
                            </div>
                        </div>
                    </div>
                    <div className="grid-item small">
                        <button className="more-button">
                            <FontAwesomeIcon className="more-button-icon" icon={faChevronCircleDown} />See More</button>
                    </div>
                </div>
            </div>
            <div className="Dashboard-content">
                <div className="category">
                    <div className="category-name">
                        Venue
                    </div>
                </div>
                <div className="grid-container">
                    <div className="grid-item">
                        <div className="grid-item-details">
                            <div>
                                <img className="grid-item-details-img" src="assets/wedding-image1.jpg" alt="" /></div>
                            <div className="grid-item-details-text">
                                <div>Venue Name</div>
                                <div className="grid-item-details-text-area">Venue Area Details</div>
                            </div>
                        </div>
                    </div>
                    <div className="grid-item">
                        <div className="grid-item-details">
                            <div>
                                <img className="grid-item-details-img" src="assets/wedding-image1.jpg" alt="" /></div>
                            <div className="grid-item-details-text">
                                <div>Venue Name</div>
                                <div className="grid-item-details-text-area">Venue Area Details</div>
                            </div>
                        </div>
                    </div>
                    <div className="grid-item">
                        <div className="grid-item-details">
                            <div>
                                <img className="grid-item-details-img" src="assets/wedding-image1.jpg" alt="" /></div>
                            <div className="grid-item-details-text">
                                <div>Venue Name</div>
                                <div className="grid-item-details-text-area">Venue Area Details</div>
                            </div>
                        </div>
                    </div>
                    <div className="grid-item small">
                        <button className="more-button">
                            <FontAwesomeIcon className="more-button-icon" icon={faChevronCircleDown} />See More</button>
                    </div>
                </div>
            </div>
            </div>
        </>
    )

}