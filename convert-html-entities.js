/* 
Intermediate Algorithm Scripting: Convert HTML Entities

Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
*/


function convertHTML(str) {
  const characters = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&apos;'
  }

  return str.split('')
            .map(char => {
              return characters[char] || char
            })
            .join('');
}

convertHTML("Dolce & Gabbana");
