'use strict';

console.log('This is a log console');

const containerEl = document.querySelector('.container'); // Return 
const openEl = document.querySelector('#open');
const closeEl = document.querySelector('#close');


openEl.addEventListener('click', () => {
  containerEl.classList.add('show-nav'); // DOM Token List (property)
});

closeEl.addEventListener('click', () => {
  containerEl.classList.remove('show-nav'); // DOM Token List (property)
});

// Different HTML Collection and NodeList
/**
 * Element Node
 * Attribute Node
 * Comment Node
 * Text Node
 * 
 * NodeList can contain any node type
 * HTMLCollection is supposed to only contain Element nodes
 */
