import React from 'react';
import { useParams } from 'react-router-dom';
import './AudioDetailPage.css';

const AudioDetailPage = () => {
  const { category, item } = useParams();

  // Data object holding slokas, songs, swaras
  const audioTextData = {
    slokas: {
      'Rama Sloka': `O soi rama rama rameythi
sahasra nama tattulyam
sama naama varananey`,

      'Karagre Vasate Lakshmi': `Karagre vasathey lakshmi
ara madhey saraswathi
Kara muley Sthitha bhramha
prabhathey kara darshanam`,

      'Tulasi Sloka': `Tulasi soi Sakhi Subhey
Papa haarini Punya dey
riamastey naara danuthey
namo priye.`,

      'Vakratunda Mahakaya': `Vakrothunda mahukaya
Surya Koti Samaprabha
nirvignam Kurume deva
sarva Karyeshu Sarvada.`,

      'Hare Rama Hare Krishna': `Hare rama Hare rama
rama rama Hare Hare
Hare Krishna Hare Krishna
Krishna Krishna Hare Hare`,

      'Saraswati Sloka': `Saraswathi namastubhyam
varadey kama rupini
vidhyaram Karishyami
Sidhir bhavathu mey sadaa`,

      'Twameva Mata': `Twamewa maata cha pitaa twamewa
Twamewa bandhu cha sakhaa twamewa
Twamewa vidya dravinam twamewa
Twamewa sarvam mama deva deva`
    },

    songs: {
      'Annamacharya Keerthana': `Vedukondama
vedukondama vedukondama
Venkatagiri Venkateswara sunilla

Challamati mrokula vadey
Adi devudey vaadu tomali palyaja vadey
Duskrutha duraday tuet`,

      'Haayi Haayi (Krishnamudu Song)': `Po Haayi Haayi Haay
gokula baala Haay
gokula baala gopala...

Aatalaadi alasinavo
Aatalaadi alasinavo
nidura pogadaraa

Veedhi veedhi tirigi tirigi
drishti takeny drishti takenura...

Lokulella veeyi kalla
ninnuchuchudura

Ich padba ninnu chankarethi manda kegenu ra...
Kallu mayunga avedo
kaluvarinthaye ye...

Lala bosi jola padeda
nidura pogadara`
    },

    swaras: {
      'Sarali Swaras - Adi Taalam': `① sa re ga ma - pa da ni sa
sa ni da pa - ma ga re sa

② sa re ga ma - sa re ga ma - sa re ga ma - pa da ni sa
sa ni da pa - sa ni da pa - sa ni da pa - ma ga re sa

③ sa re ga ma - sa re sa re - sa re ga ma - pa da ni sa
sa ni da pa - sa ni sa ni - sa ni da ja - ma ga re sa

sa re ga ma - pa is re - sa ve ga ma - pa da ni sa
sa ni da pa - ma - sa ni - sa ni da pa - ma ga re sa`
    }
  };

  // Get the text based on category and item
  const textContent = audioTextData[category]?.[item] || 'No text available for this item.';

  return (
    <div className="audio-detail-page">
      <h2>{item} ({category})</h2>

      <audio controls>
        <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>

      <div style={{ marginTop: '20px', whiteSpace: 'pre-line', fontSize: '18px', lineHeight: '1.6' }}>
        {textContent}
      </div>
    </div>
  );
};

export default AudioDetailPage;

