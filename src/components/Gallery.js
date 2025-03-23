import React from 'react';
import { Navbar } from './Navbar';
import './Gallery.css';
import PhotoAlbum from "react-photo-album";
import { Divider } from './Divider';
// documentation: https://react-photo-album.com

import f1 from '../content/galleryImages/f1.jpg'
import f2 from '../content/galleryImages/f2.jpg'
import f3 from '../content/galleryImages/f3.jpg'
import f4 from '../content/galleryImages/f4.jpg'
import f5 from '../content/galleryImages/f5.jpg'
import f6 from '../content/galleryImages/f6.jpg'
import f7 from '../content/galleryImages/f7.jpg'
import f8 from '../content/galleryImages/f8.jpg'
import f9 from '../content/galleryImages/f9.png'
import f10 from '../content/galleryImages/f10.png'
import f11 from '../content/galleryImages/f11.png'

import e1 from '../content/galleryImages/ellieSite.jpg'
import e2 from '../content/galleryImages/ellieSite2.png'
import e3 from '../content/galleryImages/ellieSite3.png'

import tp1 from '../content/galleryImages/tp1.png'
import tp2 from '../content/galleryImages/tp2.png'
import tp3 from '../content/galleryImages/tp3.png'
import tp4 from '../content/galleryImages/tp4.png'
import tp5 from '../content/galleryImages/tp5.png'
import tp6 from '../content/galleryImages/tp6.png'

import golf1 from '../content/galleryImages/golf1.jpg'
import golf2 from '../content/galleryImages/golf2.jpg'
import golf3 from '../content/galleryImages/golf3.jpg'
import golf4 from '../content/galleryImages/golf4.jpg'
import golf5 from '../content/galleryImages/golf5.jpg'

import d1 from '../content/galleryImages/dandy1.png'
import d2 from '../content/galleryImages/dandy2.png'
import d3 from '../content/galleryImages/dandy3.png'
import d4 from '../content/galleryImages/dandy4.png'
import d5 from '../content/galleryImages/dandy5.png'
import d6 from '../content/galleryImages/dandy6.png'

import a1 from '../content/galleryImages/a1.jpg'
import a2 from '../content/galleryImages/a2.jpg'
import a3 from '../content/galleryImages/a3.jpg'
import a4 from '../content/galleryImages/a4.jpg'
import a5 from '../content/galleryImages/a5.jpg'
import a6 from '../content/galleryImages/a6.jpg'
import a7 from '../content/galleryImages/a7.jpg'
import a8 from '../content/galleryImages/a8.jpg'
import a9 from '../content/galleryImages/a9.jpg'

import p1 from '../content/galleryImages/p1.jpg'
import p2 from '../content/galleryImages/p2.jpg'
import p3 from '../content/galleryImages/p3.jpg'
import p4 from '../content/galleryImages/p4.jpg'
import p5 from '../content/galleryImages/p5.jpg'

import m1 from '../content/galleryImages/model1.png'
import m2 from '../content/galleryImages/model2.png'
import m3 from '../content/galleryImages/model3.png'

const finalProjectPhotos = [
  { src: f1, width: 200, height: 200 },
  { src: f2, width: 600, height: 600 },
  { src: f3, width: 600, height: 600 },
  { src: f4, width: 200, height: 200 },
  { src: f5, width: 600, height: 600 },
  { src: f6, width: 600, height: 600 },
  { src: f7, width: 200, height: 200 },
  { src: f8, width: 600, height: 600 },
  { src: f9, width: 600, height: 600 },
  { src: f10, width: 200, height: 200 },
  { src: f11, width: 600, height: 600 },
];

const ellieArtPhotos = [
  // { src: e1, width: 400, height: 220 },
  // { src: e2, width: 400, height: 220 },
  // { src: e3, width: 400, height: 220 },
  
  { src: e2, width: 600, height: 320 },
  { src: e3, width: 600, height: 320 },
];

const golfPhotos = [
  { src: golf3, width: 700, height: 400 },
  { src: golf4, width: 700, height: 400 },
  { src: golf5, width: 700, height: 400 },
  { src: golf1, width: 700, height: 400 },
  { src: golf2, width: 700, height: 400 },
]

const modelPhotos = [
  { src: m1, width: 700, height: 400 },
  { src: m2, width: 700, height: 400 },
  { src: m3, width: 700, height: 400 }
]

const dandyPhotos = [
  { src: d1, width: 200, height: 400 },
  { src: d2, width: 200, height: 400 },
  { src: d3, width: 200, height: 400 },
  { src: d4, width: 200, height: 400 },
  { src: d5, width: 200, height: 400 },
  { src: d6, width: 200, height: 400 },
]

const travisPalacePhotos = [
  { src: tp1, width: 300, height: 200 },
  { src: tp2, width: 300, height: 200 },
  { src: tp3, width: 300, height: 200 },
  { src: tp4, width: 300, height: 200 },
  { src: tp5, width: 300, height: 200 },
  { src: tp6, width: 300, height: 200 },
]

const posterPhotos = [
  { src: p1, width: 200, height: 270 },
  { src: p2, width: 200, height: 270 },
  { src: p3, width: 200, height: 270 },
  { src: p4, width: 200, height: 270 },
  { src: p5, width: 200, height: 270 },
]

const albumArtPhotos = [
  { src: a4, width: 200, height: 200 },
  { src: a6, width: 600, height: 600 },
  { src: a1, width: 200, height: 200 },
  { src: a5, width: 600, height: 600 },
  { src: a2, width: 600, height: 600 },
  { src: a3, width: 600, height: 600 },
  { src: a7, width: 200, height: 200 },
  { src: a8, width: 600, height: 600 },
  { src: a9, width: 600, height: 600 },
];

export const Gallery = () => {
  return (
    <>
      <Navbar />
      <div className='paragraph'>
        {/* <h1 className='text-page-heading'>Visual design</h1> */}
        <p className="text-page-intro">As a developer with a background in design, I understand the importance of user experience and visual design. <br></br><br></br>
        I approach every project with a keen eye for detail, considering factors such as positioning, sizing and color schemes of elements to ensure that the end result is both aesthetically pleasing and intuitive to use. I believe that combining technical skill with a deep understanding of user needs is essential to creating impactful and engaging products.</p>
      </div>

      <Divider title="ELLIE FANE" description="A website built for an artist" />

      <div className="fp-gallery">
      <img src={e1} alt='EllieArtSite' className='ellieArtHomepage'/>
        <PhotoAlbum  layout="rows" photos={ellieArtPhotos} />;
      </div>

      <Divider title="DANDY" description="An app which suggests activities to do during lockdown" />

      <div className="fp-gallery">
        <PhotoAlbum  layout="rows" photos={dandyPhotos} />;
      </div>

      <Divider title="UNIVERSITY FINAL PROJECT" description="Artwork and 3D models created for a game, using Photoshop & Maya" />

      <div className="fp-gallery">
        <PhotoAlbum  layout="rows" photos={finalProjectPhotos} />;
      </div>

      <Divider title="GOLF COURSE" description="Terrain and 3D models created using Unity and Maya" />

      <div className="fp-gallery">
        <PhotoAlbum  layout="rows" photos={golfPhotos} />;
      </div>

      <Divider title="TRAVIS' PALACE" description="A game created where the user must find Travis Scott and deliver the golden beat to him. Scenery and 3D models created using Unity and Maya" />

      <div className="fp-gallery">
        <PhotoAlbum  layout="rows" photos={travisPalacePhotos} />;
      </div>

      <Divider title="3D MODELS" description="Various models built using Maya" />

      <div className="fp-gallery">
        <PhotoAlbum  layout="rows" photos={modelPhotos} />;
      </div>

      <Divider title="PRESHA" description="Posters created for a music event group using Photoshop" />

      <div className="fp-gallery">
        <PhotoAlbum  layout="rows" photos={posterPhotos} />;
      </div>

      <Divider title="ALBUM ART" description="Created for various artists using Photoshop" />

      <div className="fp-gallery">
        <PhotoAlbum  layout="rows" photos={albumArtPhotos} />;
      </div>

      <div className='backToTop'>
        <a href="/visual-design" className='toTopText'>Back to top</a>
      </div>
    </>

  )
}