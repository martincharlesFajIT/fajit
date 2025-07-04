"use client";
import React, { useState } from "react";

const WebCtaSection = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <section style={{ textAlign: "center", padding: "60px 20px", background: "#000" }}>
      <h2 style={{ fontSize: "2.5rem", fontWeight: "bold", color: "#fff" }}>
        Design Your Responsive{" "}
        <span style={{ color: "#0d6efd" }}>Website</span>
      </h2>
      <div
        style={{
          width: "60px",
          height: "4px",
          background: "#facc15",
          margin: "20px auto",
        }}
      ></div>
      <p style={{ maxWidth: "700px", margin: "0 auto", fontSize: "1.1rem", color: "#0d6efd" }}>
        Elate CRM assists service sectors of various scales in simplifying their
        sales processes and fostering loyal clientele through enhanced customer
        experiences.
      </p>
      <button
        onClick={() => setShowPopup(true)}
        style={{
          marginTop: "30px",
          background: "#0d6efd",
          color: "#fff",
          border: "none",
          borderRadius: "8px",
          padding: "12px 30px",
          fontSize: "1rem",
          cursor: "pointer",
        }}
      >
        Sign Up For Free
      </button>

      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-container">
            <div className="popup-content">
              {/* Left: Form */}
              <div className="form-section">
                <h3>Speak with Our Team!</h3>
                <input type="text" placeholder="Name *" />
                <input type="email" placeholder="Email *" />
                <input type="tel" placeholder="+971" />
                <textarea placeholder="Your Message" rows="4" />
                <button>Submit</button>
              </div>

              {/* Right: Info */}
              <div className="info-section">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/561/561127.png"
                  alt="message"
                  style={{ width: "80px", marginBottom: "20px" }}
                />
                <h4>Hey, it’s good to see you!</h4>
                <p>Fill out the form, we are ready to assist you.</p>
                <p>info@fajitsolutions.com</p>
                <p> Dubai, UAE</p>
                <div style={{ marginTop: "15px", fontSize: "1.2rem" }}>
                  &nbsp; <a href="#">Facebook</a> &nbsp; | &nbsp;
                  <a href="#">Twitter</a> &nbsp; | &nbsp; <a href="#">LinkedIn</a>
                </div>
              </div>
            </div>

            {/* Close */}
            <button
              onClick={() => setShowPopup(false)}
              className="close-btn"
            >
              ×
            </button>
          </div>
        </div>
      )}

      <style jsx>{`
        input,
        textarea {
          width: 100%;
          padding: 10px 12px;
          margin-bottom: 12px;
          border: 1px solid #ccc;
          border-radius: 6px;
          font-size: 1rem;
        }

        .popup-overlay {
          position: fixed;
          top: 0;
          left: 0;
          z-index: 9999;
          background: rgba(0, 0, 0, 0.6);
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }

        .popup-container {
          background: #f1f5f9;
          border-radius: 12px;
          padding: 30px;
          position: relative;
          max-width: 900px;
          width: 100%;
        }

        .popup-content {
          display: flex;
          gap: 30px;
        }

        .form-section {
          flex: 1;
        }

        .form-section h3 {
          margin-bottom: 20px;
        }

        .form-section button {
          width: 100%;
          padding: 12px;
          border: none;
          border-radius: 6px;
          background: #1d4ed8;
          color: #fff;
          font-weight: 600;
          cursor: pointer;
          font-size: 1rem;
        }

        .stars {
          margin-top: 20px;
          display: flex;
          align-items: center;
          font-size: 0.9rem;
        }

        .info-section {
          flex: 1;
          text-align: center;
          color: #1e293b;
        }

        .info-section h4 {
          font-size: 1.2rem;
          margin-bottom: 10px;
        }

        .info-section p {
          margin: 5px 0;
        }

        .close-btn {
          position: absolute;
          top: 15px;
          right: 15px;
          background: none;
          border: none;
          font-size: 2rem;
          cursor: pointer;
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
  .popup-content {
    flex-direction: column;
  }

  .info-section {
    display: none;
  }

  .form-section {
    width: 100%;
  }

  .popup-container {
    padding: 16px;
    max-height: 90vh;
    overflow-y: auto;
  }

  .form-section h3 {
    font-size: 1.1rem;
    margin-bottom: 10px;
  }

  input,
  textarea {
    padding: 8px 10px;
    font-size: 0.9rem;
  }

  .form-section button {
    font-size: 0.9rem;
    padding: 10px;
  }
}
      `}</style>
    </section>
  );
};

export default WebCtaSection;
