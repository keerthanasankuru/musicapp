import React from 'react';
import { useParams, Link } from 'react-router-dom';
import audioData from '../data/audioData';
import './AudioDetailPage.css';

const AudioDetailPage = () => {
  const { category, item } = useParams();
  const decodedItem = decodeURIComponent(item);

  const itemData = audioData.find(
    entry => entry.category === category && entry.name === decodedItem
  );

  if (!itemData) {
    return <p style={{ color: 'red', padding: '20px' }}>❌ No data found for this item.</p>;
  }

  return (
    <div className="audio-detail-page" style={{ padding: '20px' }}>
      <h2>{itemData.name}</h2>
      <p style={{ fontStyle: 'italic', color: '#555' }}>{category.toUpperCase()}</p>

      {/* 🎵 Play single OR multiple audio files */}
      {Array.isArray(itemData.audio) ? (
        itemData.audio.map((src, index) => (
          <div key={index} style={{ marginBottom: '20px' }}>
            <p><strong>{['Pallavi', 'Charanam 1', 'Charanam 2'][index] || `Part ${index + 1}`}</strong></p>
            <audio controls>
              <source src={src} type="audio/ogg" />
              <source src={src} type="audio/opus" />
              Your browser does not support the audio element.
            </audio>
          </div>
        ))
      ) : (
        <audio controls style={{ marginTop: '10px' }}>
          <source src={itemData.audio} type="audio/ogg" />
          <source src={itemData.audio} type="audio/opus" />
          Your browser does not support the audio element.
        </audio>
      )}

      <h3 style={{ marginTop: '30px' }}>📝 Lyrics:</h3>
      <div style={{
        marginTop: '10px',
        whiteSpace: 'pre-line',
        fontSize: '18px',
        lineHeight: '1.6',
        background: '#f9f9f9',
        padding: '15px',
        borderRadius: '8px'
      }}>
        {itemData.text}
      </div>

      <Link to="/" style={{ marginTop: '20px', display: 'inline-block', color: 'blue' }}>← Back to Home</Link>
    </div>
  );
};

export default AudioDetailPage;
