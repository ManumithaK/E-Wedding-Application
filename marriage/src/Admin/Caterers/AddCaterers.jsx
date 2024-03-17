import React, { useState } from "react";
import axios from "axios";
import AdminNavbar from "../AdminNavbar/AdminNavbar";
import { useNavigate } from "react-router-dom";

import "./Caterers.css";

const AddCaterer = () => {
    const navigate = useNavigate();
    const [catererData, setCatererData] = useState({
        img1: "",
        img2: "",
        img3: "",
        img4: "",
        name: "",
        address: "",
        speciality: "",
        price: ""
    });

    const handleChange = (event) => {
        setCatererData({ ...catererData, [event.target.name]: event.target.value });
    };

    const handleCancel = () => {
        navigate("/managecaterers");
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post("http://localhost:8081/addcaterer", {
                img1: catererData.img1,
                img2: catererData.img2,
                img3: catererData.img3,
                img4: catererData.img4,
                name: catererData.name,
                address: catererData.address,
                speciality: catererData.speciality,
                price: catererData.price
            });
            console.log(response.data); // Handle successful response
            // Redirect or any other desired action
            navigate("/managecaterers");
        } catch (error) {
            console.error("Error:", error.response.data);
            // Handle error, display error messages, etc.
        }
    };

    return (
        <>
            <AdminNavbar />
            <div className="manage-caterer-outer-container crud-form">
                <div className="manage-caterer-outer-container-title">Add New Caterer</div>
                <div className="manage-caterer-outer-container-subtitle">Fill out the form to add a new caterer</div>
                <form onSubmit={handleSubmit}>
                    <div className="button-group add">
                        <div className="category-crud-input">
                            <label>Caterer Name</label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Enter caterer Name"
                                value={catererData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="category-crud-input">
                            <label>Caterer Location</label>
                            <input
                                type="text"
                                name="address"
                                placeholder="Enter caterer location"
                                value={catererData.address}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="category-crud-input">
                            <label>Speciality</label>
                            <input
                                type="text"
                                name="speciality"
                                placeholder="Enter caterer speciality"
                                value={catererData.speciality}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="category-crud-input">
                            <label>Price</label>
                            <input
                                type="text"
                                name="price"
                                placeholder="Enter caterer Price"
                                value={catererData.price}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="category-crud-input-images-section">
                        <div className="category-crud-input-images-title">Upload Image Urls</div>
                        <div className="category-crud-input-images">
                            <div className="category-crud-input">
                                <label>Image #1</label>
                                <input
                                    type="text"
                                    name="img1"
                                    placeholder="Enter Image #1 URL"
                                    value={catererData.img1}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="category-crud-input">
                                <label>Image #2</label>
                                <input
                                    type="text"
                                    name="img2"
                                    placeholder="Enter Image #2 URL"
                                    value={catererData.img2}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="category-crud-input">
                                <label>Image #3</label>
                                <input
                                    type="text"
                                    name="img3"
                                    placeholder="Enter Image #3 URL"
                                    value={catererData.img3}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="category-crud-input">
                                <label>Image #4</label>
                                <input
                                    type="text"
                                    name="img4"
                                    placeholder="Enter Image #4 URL"
                                    value={catererData.img4}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                    </div>
                    <div className="category-crud-buttons">
                        <input type="submit" value="Add" />
                        <input type="button" value="Cancel" onClick={handleCancel} />
                    </div>
                </form>
            </div>
        </>
    );
}

export default AddCaterer;
