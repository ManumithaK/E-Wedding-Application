import React from "react";

const Resources = ({ name, address, images, capacity, price }) => {
    return (
        <div className="resource">
            <div className="name-address">
                <div className="resource-name">{name}</div>
                <div className="resource-address">{address}</div>
            </div>
            <div className="custom-grid-container">
                {images.map((image, index) => (
                    <img className="custom-grid-item" src={image} alt="" key={index} />
                ))}
            </div>
            <div className="price-capacity">
                <div className="resource-capacity">
                    <div className="resource-capacity-name">Capacity</div>
                    <div className="resource-capacity-details">{capacity}</div>
                </div>
                <div className="resource-price">
                    <div className="resource-price-name">Price per hour</div>
                    <div className="resource-price-details">{price}</div>
                </div>
                <input className="reserve-button" type="button" value="Reserve" />
            </div>
        </div>
    );
};

export default Resources;
