import React from 'react';
import './Achievements.css'; // Ensure you create this CSS file for styling

const achievements = [
  { title: 'Best School Award', description: 'Awarded Best National School in 2024 for excellence in academics and sports.' },
  { title: 'Olympiad Champions', description: 'Our students secured top ranks in the National Science Olympiad.' },
  { title: 'Sports Excellence', description: 'Winners of the National Inter-School Football Championship.' },
  { title: 'Innovators Award', description: 'Recognized for outstanding innovation in STEM projects.' }
];

const Achievements = () => {
  return (
    <div className="achievements-container">
      <h1 className="title">Our Achievements</h1>
      <div className="cards-container">
        {achievements.map((achievement, index) => (
          <div key={index} className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <h2>{achievement.title}</h2>
              </div>
              <div className="flip-card-back">
                <p>{achievement.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
