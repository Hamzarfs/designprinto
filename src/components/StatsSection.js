import React from "react";
import CountUp from "react-countup";
// import "bootstrap/dist/css/bootstrap.min.css";
import "../StatsSection.css"; // Optional custom styling

const StatsSection = () => {
  return (
    <div className="stats-section py-4" style={{ backgroundColor: "#6dd7d3" }}>
      <div className="container">
        <div className="row text-center">
          {/* Years of Experience */}
          <div className="col-6 col-md-3">
            <h2 className="text-white">
              +<CountUp start={1} end={15} duration={3} />
            </h2>
            <p className="text-white mb-0">
              <span>Years of Experience</span>
            </p>
          </div>

          {/* Projects Completed */}
          <div className="col-6 col-md-3">
            <h2 className="text-white">
              +<CountUp start={1} end={157} duration={3} />
            </h2>
            <p className="text-white mb-0">
              <span>Projects Completed</span>
            </p>
          </div>

          {/* Satisfied Happy Clients */}
          <div className="col-6 col-md-3 mt-4 mt-md-0">
            <h2 className="text-white">
              +<CountUp start={1} end={571} duration={3} />
            </h2>
            <p className="text-white mb-0">
              <span>Satisfied Happy Clients</span>
             
            </p>
          </div>

          {/* Awards Won */}
          <div className="col-6 col-md-3 mt-4 mt-md-0">
            <h2 className="text-white">
              +<CountUp start={1} end={17} duration={3} />
            </h2>
            <p className="text-white mb-0">
              <span>Awards Won Received</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
