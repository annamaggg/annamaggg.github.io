import React from 'react';
import { Navbar } from './Navbar';
import PhotoAlbum from "react-photo-album";
import pic from '../content/galleryImages/f1.jpg'
import pic2 from '../content/galleryImages/f2.jpg'
import pic3 from '../content/galleryImages/f3.jpg'

const photos = [
  { src: pic, width: 200, height: 200 },
  { src: pic2, width: 600, height: 600 },
  { src: pic3, width: 600, height: 600 },
];

export const VisualDesign = () => {
  return (
    <>
      <Navbar />
      <div>
        <h1>This is the VisualDesign page</h1>
      </div>
      <PhotoAlbum layout="rows" photos={photos} />;
    </>

  )
}