import React from 'react';

const Criteria = () => {
  return (
    <section id="criteria" className="criteria-section">
      <h2>Admission Criteria</h2>
      <div className="criteria-list">
        <div className="criteria-item">
          <h3>Undergraduate Programs</h3>
          <p>
            Applicants must have a minimum of 60% marks in HSSC or equivalent.
          </p>
        </div>
        <div className="criteria-item">
          <h3>Graduate Programs</h3>
          <p>
            A Bachelor's degree with at least 2.5 CGPA from a recognized institution is required.
          </p>
        </div>
        <div className="criteria-item">
          <h3>PhD Programs</h3>
          <p>
            Applicants must hold a Master’s degree with a minimum of 3.0 CGPA or equivalent.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Criteria;
