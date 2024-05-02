import React from 'react';
import '../css/about.css';

function AboutPage() {
  return (
    <div class="about-main">
        <div>
            <p class="top-paragraph">
                Welcome to my personal portfolio website.
            </p>
            <img class="mainImage" src="headshot.jpg" alt=""></img>
            <p>
                My name is Max Bielstein.  I am a software engineer from The University of Nebraska-Lincoln
            </p>
            <p>
                Built using HTML5 and React
            </p>
            <img class="resizingImage" src="HTML5Image.png" alt=""></img>
        </div>
    </div>
  );
}

export default AboutPage;
