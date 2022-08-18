/* Decode from morse to english */
decodeMorse = function(morseCode){
  return morseCode.trim().split('   ').map(el => el.split(' ').map(el => MORSE_CODE[el]).join('')).join(' ');
}
