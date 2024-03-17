import React, { useState } from "react";
import axios from "axios";
import AdminNavbar from "../AdminNavbar/AdminNavbar";
import { useNavigate } from "react-router-dom";

import "./Decors.css";

const AddDecorer = () => {
    const navigate = useNavigate();
    const [decorData, setDecorData] = useState({
        img1: "",
        img2: "",
        img3: "",
        img4: "",
        name: "",
        address: "",
        theme: "",
        price: ""
    });

    const handleChange = (event) => {
        setDecorData({ ...decorData, [event.target.name]: event.target.value });
    };

    const handleCancel = () => {
        navigate("/managedecors");
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post("http://localhost:8081/adddecor", {
                img1: decorData.img1,
                img2: decorData.img2,
                img3: decorData.img3,
                img4: decorData.img4,
                name: decorData.name,
                address: decorData.address,
                theme: decorData.theme,
                price: decorData.price
            });
            console.log(response.data); // Handle successful response
            // Redirect or any other desired action
            navigate("/managedecors");
        } catch (error) {
            console.error("Error:", error.response.data);
            // Handle error, display error messages, etc.
        }
    };

    return (
        <>
            <AdminNavbar />
            <div className="manage-decor-outer-container crud-form">
                <div className="manage-decor-outer-container-title">Add New Decor</div>
                <div className="manage-decor-outer-container-subtitle">Fill out the form to add a new decor</div>
                <form onSubmit={handleSubmit}>
                    <div className="button-group add">
                        <div className="category-crud-input">
                            <label>Decor Name</label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Enter decor Name"
                                value={decorData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="category-crud-input">
                            <label>Decor Location</label>
                            <input
                                type="text"
                                name="address"
                                placeholder="Enter decor location"
                                value={decorData.address}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="category-crud-input">
                            <label>Theme</label>
                            <input
                                type="text"
                                name="theme"
                                placeholder="Enter decor Theme"
                                value={decorData.theme}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="category-crud-input">
                            <label>Price</label>
                            <input
                                type="text"
                                name="price"
                                placeholder="Enter decor Price"
                                value={decorData.price}
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
                                    value={decorData.img1}
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
                                    value={decorData.img2}
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
                                    value={decorData.img3}
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
                                    value={decorData.img4}
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

export default AddDecorer;
