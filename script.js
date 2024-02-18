const textEL = document.getElementById("text");
const speakEL = document.getElementById("speak");

speakEL.addEventListener("click", speakText);

function speakText() {
  // stop any speaking in progress
  window.speechSynthesis.cancel();

  const text = textEL.value;
  const utterance = new SpeechSynthesisUtterance(text);

  // Get an array of available voices
  const voices = window.speechSynthesis.getVoices();

  // Choose a voice (you can customize the index)
  utterance.voice = voices[1];

  window.speechSynthesis.speak(utterance);
}
