
let convert = document.querySelector(".convert");
let textarea = document.querySelector (".textarea");
let speech = new SpeechSynthesisUtterance();
console.log(speech);
convert.addEventListener ("click", () =>
{
    speech.text = textarea. value;
    speech.pitch = 1;
    speech.volume = 100;
    speech.lang = "eng-US";
    speech.rate = 1;
    speechSynthesis.speak (speech);
});