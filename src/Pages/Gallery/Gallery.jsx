import React, { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

const foodImages = [
   {
     src: 'https://plus.unsplash.com/premium_photo-1669742928112-19364a33b530?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGVsaWNpb3VzJTIwZm9vZHxlbnwwfHwwfHx8MA%3D%3D',
     title: 'Sticky Sesame Chicken Wings',
     user: '@foodiecorner',
     description: 'Sweet, savory, and perfectly glazed chicken wings topped with sesame seeds and fresh herbs.'
   },
   {
     src: 'https://images.unsplash.com/photo-1609015746380-571227e2bc72?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZGVsaWNpb3VzJTIwZm9vZHxlbnwwfHwwfHx8MA%3D%3D',
     title: 'Hearty Tomato Soup with Rustic Bread',
     user: '@soulfulsavors',
     description: 'Rich tomato soup paired with slices of freshly baked rustic bread for the ultimate comfort meal.'
   },
   {
     src: 'https://plus.unsplash.com/premium_photo-1669261882512-346bda67a8c7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGRlbGljaW91cyUyMGZvb2R8ZW58MHx8MHx8fDA%3D',
     title: 'Seafood Medley in Black Garlic Sauce',
     user: '@oceanbites',
     description: 'A luxurious dish featuring a mix of seafood, tossed in a flavorful black garlic sauce.'
   },
   {
     src: 'https://images.unsplash.com/photo-1632808664408-f8ab196b0523?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fGRlbGljaW91cyUyMGZvb2R8ZW58MHx8MHx8fDA%3D',
     title: 'Classic Spaghetti and Meatballs',
     user: '@pastapassion',
     description: 'A timeless Italian classic with tender meatballs nestled in a bed of al dente spaghetti.'
   },
   {
     src: 'https://plus.unsplash.com/premium_photo-1713370407845-a909df6460a7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fGRlbGljaW91cyUyMGZvb2R8ZW58MHx8MHx8fDA%3D',
     title: 'Decadent Passionfruit Pavlova',
     user: '@sweetescapes',
     description: 'A light and airy pavlova topped with creamy layers and tangy passionfruit drizzle.'
   },
   {
     src: 'https://plus.unsplash.com/premium_photo-1712849058524-7f5e94474fe6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGRlbGljaW91cyUyMGZvb2R8ZW58MHx8MHx8fDA%3D',
     title: 'Asian Fusion Rice Bowl',
     user: '@fusionflavors',
     description: 'A vibrant bowl of rice topped with fresh vegetables, tender meat, and a hint of soy glaze.'
   },
   {
     src: 'https://plus.unsplash.com/premium_photo-1693879090564-4617efcd0f0b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGRlbGljaW91cyUyMGZvb2R8ZW58MHx8MHx8fDA%3D',
     title: 'Golden Garlic Herb Potatoes',
     user: '@crispydelights',
     description: 'Crispy golden potatoes pan-fried with a generous sprinkle of garlic and fresh herbs.'
   },
   {
     src: 'https://images.unsplash.com/photo-1639744210676-58da2cbee3d8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE4fHxkZWxpY2lvdXMlMjBmb29kfGVufDB8fDB8fHww',
     title: 'Cheesy Garlic Bread Pizza',
     user: '@cheesecraze',
     description: 'A cheesy indulgence with garlic-infused crust topped with a gooey layer of mozzarella.'
   },
   {
     src: 'https://images.unsplash.com/photo-1662966732481-7dff95adde69?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGRlbGljaW91cyUyMGZvb2R8ZW58MHx8MHx8fDA%3D',
     title: 'Delicate Steamed Dumplings',
     user: '@asianappetite',
     description: 'Beautifully crafted dumplings served with a flavorful soy dipping sauce.'
   },
   {
     src: 'https://plus.unsplash.com/premium_photo-1669261882830-1e504a9abf1d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZGVsaWNpb3VzJTIwZm9vZHxlbnwwfHwwfHx8MA%3D%3D',
     title: 'Juicy Grilled Ribeye Steak',
     user: '@grillmasters',
     description: 'A perfectly grilled ribeye steak served with seasoned potatoes and creamy sauce.'
   },
 ];
 

const Gallery = () => {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleImageClick = (index) => {
    setCurrentIndex(index);
    setOpen(true);
  };

  return (
    <div className="min-h-screen bg-base-100 p-8">
      <div
        className="bg-gradient-to-r to-yellow-500 from-red-500 text-white text-center py-12 mb-8"
      >
        <h1 className="text-4xl font-bold">Gallery</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {foodImages.map((image, index) => (
          <div
            key={index}
            className="relative cursor-pointer"
            onClick={() => handleImageClick(index)}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-[453px] skeleton object-cover rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 flex flex-col justify-center items-center text-white rounded-lg transition-opacity duration-300 text-center">
              <p className="text-lg font-semibold">{image.title}</p>
              <p className="text-sm p-3">{image.description}</p>
              <p className="text-md font-semibold">{image.user}</p>
            </div>
          </div>
        ))}
      </div>
      {open && (
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={foodImages.map((image) => ({ src: image.src, alt: image.alt }))}
          index={currentIndex}
        />
      )}
    </div>
  );
};

export default Gallery;
