document.addEventListener("DOMContentLoaded", function () {
  let text = "The quick brown fox jumps over a lazy dog.";

  document.getElementById("quickFox").innerHTML = text;

  const button = document.getElementById("foxButton");
  let rotation = 0;
  let replaceAnimals = function replaceAnimals() {
    text = text.replaceAll("dog", "placeholder"); // Replace "dog" with a temporary placeholder
    text = text.replaceAll("fox", "dog"); // Replace "fox" with "dog"
    text = text.replaceAll("placeholder", "fox"); // Replace the temporary placeholder with "fox"

    document.getElementById("quickFox").innerHTML = text;
    rotation += 180;
    button.style.transform = `rotate(${rotation}deg)`; //rotate
  };

  button.addEventListener("click", replaceAnimals);
});
