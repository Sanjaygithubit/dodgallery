import React from 'react';
import './App.css'; // Optional: For global styles

// Individual Dog component (uses props for dynamic name and image)
const DogCard = ({ name, imageUrl }) => {
  return (
    <div style={{
      textAlign: 'center',
      border: '1px solid #ccc',
      padding: '10px',
      backgroundColor: '#f9f9f9',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      width: '100%' // Full width in grid for even spacing
    }}>
      <img
        src={imageUrl}
        alt={name}
        style={{
          width: '150px',
          height: '150px',
          objectFit: 'cover',
          borderRadius: '4px'
        }}
      />
      <h3 style={{ margin: '8px 0 0 0', fontSize: '14px', color: '#333' }}>
        {name}
      </h3>
    </div>
  );
};

// Main DogGallery component (uses .map() to render 8 cards in 2x4 grid)
const DogGallery = () => {
  // 8 dogs in exact screenshot order, with FIXED Pexels image URLs (verified loading)
  const dogs = [
    // Row 1
    {
      name: "Julie's Rabbit Ears",
      imageUrl: "https://images.pexels.com/photos/12646549/pexels-photo-12646549.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "The Innocent Look",
      imageUrl: "https://images.pexels.com/photos/8842133/pexels-photo-8842133.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Big Eyed Buggy",
      imageUrl: "https://images.pexels.com/photos/29157263/pexels-photo-29157263.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "The Saint Doggo",
      imageUrl: "https://images.pexels.com/photos/33844768/pexels-photo-33844768.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    // Row 2
    {
      name: "Big Eyed Buggy",
      imageUrl: "https://images.pexels.com/photos/374906/pexels-photo-374906.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "The Innocent Look",
      imageUrl: "https://images.pexels.com/photos/4523221/pexels-photo-4523221.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "The Saint Doggo",
      imageUrl: "https://images.pexels.com/photos/33844766/pexels-photo-33844766.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Julie's Rabbit Ears",
      imageUrl: "https://images.pexels.com/photos/12646549/pexels-photo-12646549.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    }
  ];

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '20px',
      maxWidth: '1000px', // Fits 4 cards comfortably
      margin: '0 auto'
    }}>
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Dog Gallery</h1>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)', // Fixed: 4 columns per row
        gridTemplateRows: 'repeat(2, auto)', // Fixed: 2 rows
        gap: '15px',
        width: '100%',
        overflowX: 'auto' // Scroll on very narrow screens
      }}>
        {dogs.map((dog, index) => (
          <DogCard
            key={index}
            name={dog.name}
            imageUrl={dog.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

// Main App component – renders DogGallery
function App() {
  return <DogGallery />;
}

// Single default export
export default App;