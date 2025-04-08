import React from 'react'
import ReactDOM from 'react-dom'

document.addEventListener('keydown', (event) => {
    if (event.code === 'Space') {
        event.preventDefault(); // Prevent the page from scrolling
        const largeDog = document.getElementById('large-dog');
        const lightbulb = document.getElementById('lightbulb');

        if (largeDog) {
            largeDog.style.display = largeDog.style.display === 'none' ? 'block' : 'none';
        }

        if (lightbulb) {
            lightbulb.style.display = lightbulb.style.display === 'none' ? 'block' : 'none';
        }
    }
});

