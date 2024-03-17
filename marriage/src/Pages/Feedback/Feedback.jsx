import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import './Feedback.css';
export default function Feedback() {
    return (
        <>
            <Navbar />
            <div className="feedback-container">
                <span className="feedback-message">
                    Your booking is done! Sent a Confirmation message to your Registered Email.
                </span>
                <div className="feedback-textarea">
                    <textarea name="" id="" cols="30" rows="5" placeholder="Please leave your feedback or rating here"></textarea>
                </div>
                <input type="button" value="Submit Feedback" className="Feedback-Submit-button"/>
            </div>
        </>
    )
};