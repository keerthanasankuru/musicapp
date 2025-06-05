import React from 'react';
import { Link } from 'react-router-dom';
import './CategoryPage.css';

const categories = {
  slokas: [
    'Karagre',
    'Tulasi Sree',
    'Twameva',
    'Vakrathunda',
    'Vedukondama',
    'Veedhi Veedhi',
    'Saraswati'
  ],
  songs: [
    'Harerama',
    'Hayee',
    'Raadhaninnu'
  ],
  swaras: [
    '3 Swaram',
    'Swaram',
    'Swaram2',
    'Swaram3',
    'Swaram4'
  ]
};

const CategoryPage = () => {
  return (
    <div className="category-page">
      <div className="category-buttons">
        {Object.keys(categories).map((category) => (
          <div key={category} className="category-section">
            <button className="category-button">
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
            {/* Always show subcategory list */}
            <div className="subcategory-list">
              {categories[category].map((item) => (
                <Link
                  key={item}
                  to={`/audio/${category}/${item}`}
                  className="subcategory-item"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
