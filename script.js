/* .js files add interaction to your website */

var factList = ["I can speak 4 languages! English, Spanish, Tamil, and Malayalam.","I have played the piano, violin, flute, and carnatic music. I also have done bharatanatyam and mixed martial arts.", "I have a yellow labrador, Maya! She just turned 4 :)", "I lived in Southern California for the first half of my life (with a year in between in Pennsylvania), but now live in North Carolina."]

var fact = document.getElementById("fact");
var factBtn = document.getElementById("factBtn");
var count = 0;

factBtn.addEventListener("click", displayFact);

function displayFact(){
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length){
    count = 0;
  }
}