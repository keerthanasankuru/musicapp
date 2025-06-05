import React from 'react';
import { Link } from 'react-router-dom';
import './AllAudiosPage.css';
import audioData from '../data/audioData';  // ✅ GOOD — ONLY KEEP THIS!

const categories = {
  slokas: '🕉️ Slokas',
  songs: '🎶 Songs',
  swaras: '🎼 Swaras'
};

const AllAudiosPage = () => {
  return (
    <div className="all-audios-page">
      <h1>🎵 All Audios</h1>

      {Object.keys(categories).map((catKey) => (
        <div key={catKey} className="category-section">
          <h2>{categories[catKey]}</h2>
          <ul>
            {audioData
              .filter((item) => item.category === catKey)
              .map((item) => (
                <li key={item.name} className="audio-item">
                  <div className="audio-info">
                    <span className="audio-link">{item.name}</span>
                    <audio controls>
                      <source src={item.audio} type="audio/ogg" />
                      <source src={item.audio} type="audio/opus" />
                      Your browser does not support the audio element.
                    </audio>
                    <Link
                      to={`/audio/${item.category}/${encodeURIComponent(item.name)}`}
                      className="label-link"
                    >
                      Text
                    </Link>
                  </div>
                </li>
              ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default AllAudiosPage;
