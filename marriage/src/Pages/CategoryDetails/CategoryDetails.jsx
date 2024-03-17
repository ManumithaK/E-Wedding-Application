import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import "./CategoryDetails.css";

export default function CategoryDetails() {
    const generateResourceContent = () => {
        const resourceContent = [];

        for (let i = 0; i < 10; i++) {
            resourceContent.push(
                <div className="resource" key={i}>
                    <div className="name-address">
                        <div className="resource-name">
                            Venue Name
                        </div>
                        <div className="resource-address">
                            Venue Address
                        </div>
                    </div>
                    <div className="custom-grid-container">
                        <img className="custom-grid-item" src="assets/wedding-image1.jpg" alt="" />
                        <img className="custom-grid-item" src="assets/wedding-image1.jpg" alt="" />
                        <img className="custom-grid-item" src="assets/wedding-image1.jpg" alt="" />
                        <img className="custom-grid-item" src="assets/wedding-image1.jpg" alt="" />
                    </div>
                    <div className="price-capacity">
                        <div className="resource-capacity">
                            <div className="resource-capacity-name">Capacity</div>
                            <div className="resource-capacity-details">upto 200 guests</div>
                        </div>
                        <div className="resource-price">
                            <div className="resource-price-name">Price per hour</div>
                            <div className="resource-price-details">$500</div>
                        </div>
                        <input className="reserve-button" type="button" value="Reserve" />
                    </div>
                        
                </div>
            );
        }

        return resourceContent;
    };

    return (
        <>
            <div className="list">
                <Navbar />
                <div className="outer-box">
                    <div className="category-name">
                        Venue
                    </div>
                    <div className="outer-container">
                        {generateResourceContent()}
                    </div>
                </div>
            </div>
        </>
    );
}
