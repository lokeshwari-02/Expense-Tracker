import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import "./landing.css"; 
const Landing = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <div style={{ position: "relative", height: "100vh", overflow: "hidden" }}>
      {}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: { value: "#000" } },
          fpsLimit: 60,
          particles: {
            number: { value: 200, density: { enable: true, value_area: 800 } },
            color: { value: "#ffcc00" },
            shape: { type: "circle" },
            opacity: { value: 0.5, random: true },
            size: { value: 3, random: { enable: true, minimumValue: 1 } },
            move: { enable: true, speed: 2 },
          },
          detectRetina: true,
        }}
        style={{
          position: "absolute",
          zIndex: -1, 
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
      />
      <div className="landing-container">
          <nav className="navbar">
          <div className="website-name">Expense Tracker</div>
          <div className="auth-links">
            <Link to="/login" className="auth-button">Login</Link>
            <Link to="/register" className="auth-button">Sign Up</Link>
          </div>
        </nav>

        <div className="animated-bg">
          <div className="auth-content">
            <h1>Welcome to Expense Tracker</h1>
            <p>Save more, stress less. Start tracking today!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
