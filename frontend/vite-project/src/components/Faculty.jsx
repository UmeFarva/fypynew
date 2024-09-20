import React from 'react';

const Faculty = () => {
  return (
    <section id="faculty-info" className="faculty-section">
      <h2>Meet Our Faculty</h2>
      <div className="faculty-list">
        <div className="faculty-item">
          <h3>Dr. John Doe</h3>
          <p>
            Head of Computer Science Department. Dr. Doe has over 20 years of experience in AI and Machine Learning.
          </p>
        </div>
        <div className="faculty-item">
          <h3>Dr. Jane Smith</h3>
          <p>
            Head of Business Administration. Dr. Smith is an expert in Finance and Entrepreneurship.
          </p>
        </div>
        <div className="faculty-item">
          <h3>Prof. Emily Johnson</h3>
          <p>
            Senior Lecturer in Social Sciences, focusing on Political Science and Global Studies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Faculty;
