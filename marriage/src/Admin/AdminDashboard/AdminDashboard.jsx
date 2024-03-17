import React from "react";
import "./AdminDashboard.css";
import AdminNavbar from "../AdminNavbar/AdminNavbar";
import NumberAnimator from "../../Components/NumberAnimator";
export default function AdminDashboard() {
    const DashboardItem = (name,value) =>{
        return <>
        <div className="admin-dashboard-item">
                    <div className="admin-dashboard-item-title">
                        <span>{name}</span>
                        <div className="Numbers-count">
                        <NumberAnimator counter={value}/>
                        </div>
                    </div>
                </div>
        </>
    }
    return (
        <>
            <AdminNavbar />
            <div className="admin-dashboard">
                {DashboardItem('Decorers',10)}
                {DashboardItem('Venuers',20)}
                {DashboardItem('Caterers',30)}
                {DashboardItem('Total ',40)}
            </div>

            <div className="admin-dashboard">
                {DashboardItem('Last Month Decorers Booked',10)}
                {DashboardItem('Last Month Venuers Booked',20)}
                {DashboardItem('Last Month Caterers Booked',30)}
                {DashboardItem('Total Bookings',40)}
            </div>
        </>
    );
}
