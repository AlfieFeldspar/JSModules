import {
  countCharacter,
  capitalizeFirstCharacterOfWords,
  reverseWord,
  reverseAllWords,
  replaceFirstOccurence,
  replaceAllOccurrences,
  encode,
  palindrome,
  pigLatin,
} from "./messageMixer";

//alternate import syntax if modules are prepended with MessageMixer
//import MessageMixer from './messageMixer';
//const MessageMixer = require('./messageMixer.js');

function displayMessage() {
  console.log(countCharacter("What is the color of the sky?", "t"));
  console.log(capitalizeFirstCharacterOfWords("What is the color of the sky?"));
  console.log(reverseWord("What is the color of the sky?"));
  console.log(palindrome("What"));
  //alt syntax if prepending:
  //console.log(MessageMixer.palindrome("What"));
  console.log(reverseAllWords("What is the color of the sky?"));
  console.log(
    replaceFirstOccurence("What is the color of the sky?", "sky", "water")
  );
  console.log(encode("What is the color of the sky?"));
  console.log(pigLatin("What is the color of the sky?", "may"));
}

displayMessage();
