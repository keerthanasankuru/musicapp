import { useEffect } from 'react';
import './FallingMusicNotes.css';

const FallingMusicNotes = () => {
  useEffect(() => {
    const createNote = () => {
      const note = document.createElement('div');
      note.className = 'music-note';

      const emojis = ['🎵', '🎶', '🎼'];
      note.innerText = emojis[Math.floor(Math.random() * emojis.length)];

      note.style.left = `${Math.random() * 100}%`;

      document.body.appendChild(note);

      setTimeout(() => {
        note.remove();
      }, 6000);
    };

    const interval = setInterval(createNote, 300);

    return () => clearInterval(interval);
  }, []);

  return null;
};

export default FallingMusicNotes;
