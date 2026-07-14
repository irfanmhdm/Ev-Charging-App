import axios from "axios";
import React, { useEffect, useState } from "react";

const View = () => {

  const [data, changeData] = useState([]);

  const fetchData = () => {
    axios
      .post("http://localhost:3000/view_ev")
      .then((response) => {
        changeData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container mt-4">
      <h3 className="text-center mb-4">EV Charging Bookings</h3>

      <div className="table-responsive">
        <table className="table table-bordered table-striped table-hover">
          <thead className="table-dark">
            <tr>
              <th>Booking ID</th>
              <th>Owner Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Vehicle No.</th>
              <th>Brand</th>
              <th>Model</th>
              <th>Battery (kWh)</th>
              <th>Connector</th>
              <th>Charging Date</th>
              <th>Time Slot</th>
              <th>Estimated Units</th>
              <th>Charging Bay</th>
            </tr>
          </thead>

          <tbody>
            {data.map((booking) => (
              <tr key={booking._id}>
                <td>{booking.booking_id}</td>
                <td>{booking.owner_name}</td>
                <td>{booking.email}</td>
                <td>{booking.phone}</td>
                <td>{booking.vehicle_registration_number}</td>
                <td>{booking.vehicle_brand}</td>
                <td>{booking.vehicle_model}</td>
                <td>{booking.battery_capacity}</td>
                <td>{booking.connector_type}</td>
                <td>{booking.charging_date}</td>
                <td>{booking.time_slot}</td>
                <td>{booking.estimated_units}</td>
                <td>{booking.charging_bay_number}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default View;