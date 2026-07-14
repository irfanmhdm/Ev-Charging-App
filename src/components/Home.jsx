import React from "react";

const Home = () => {
  return (
    <div
  className="container-fluid d-flex align-items-center"
  style={{
    minHeight: "100vh",
    background: "linear-gradient(to right, #0f2027, #203a43, #2c5364)"
  }}
>
  <div className="container">
    <div className="row justify-content-center align-items-center text-center">

      <div className="col-lg-8 text-white">
        <h1 className="display-3 fw-bold">
          ⚡ EV Charging
        </h1>

        <h2 className="text-success fw-bold mb-4">
          Booking System
        </h2>

        <p className="lead">
          Reserve your EV charging slot with ease. Manage bookings,
          reduce waiting time, and enjoy a smooth charging experience.
        </p>

        
      </div>

    </div>
  </div>
</div>
  );
};

export default Home;