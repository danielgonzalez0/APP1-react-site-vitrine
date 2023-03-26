import React, { useEffect } from 'react';

const DynamicText = () => {
  useEffect(() => {
    const target = document.getElementById('text-target');
    let array = ['simple', 'clear', 'smart', 'strong'];
    let wordIndex = 0;
    let letterIndex = 0;

    /**
     * create a span with a letter of a word and add it to "text-target" span
     */
    const createLetter = () => {
      const letter = document.createElement('span');
      target.appendChild(letter);
      letter.classList.add('letter');
      letter.style.opacity = '0';
      letter.style.animation = 'anim 5s ease forwards';
      letter.textContent = array[wordIndex][letterIndex];
      setTimeout(() => {
        letter.remove();
      }, 2000);
    };

    /**
     * recursive function calling all letters and words dynamically
     */
    const loop = () => {
      setTimeout(() => {
        if (wordIndex >= array.length) {
          wordIndex = 0;
          letterIndex = 0;
          loop();
        } else if (letterIndex < array[wordIndex].length) {
          createLetter();
          letterIndex++;
          loop();
        } else {
          letterIndex = 0;
          wordIndex++;
          setTimeout(loop, 2000);
        }
      }, 80);
    };

    loop();
  }, []);
  return (
    <span className="dynamic-text">
      <span>simply</span>
      <span id="text-target"></span>
    </span>
  );
};

export default DynamicText;
