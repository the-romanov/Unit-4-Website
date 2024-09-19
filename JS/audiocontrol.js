document.addEventListener("DOMContentLoaded", () => {
aud = document.getElementById("myAudio").volume=1;
                var audio = document.getElementById("myAudio");
                var audioControl = document.getElementById("audioControl");
                var audioButton = document.getElementById("audioButton");
                var audioSlider = document.getElementById("audioSlider");    
                audio.play();   
                audioButton.addEventListener("click", function() {
                    audioControl.classList.toggle("open");
                });
                audioSlider.addEventListener("input", function() {
                    audio.volume = audioSlider.value / 100;
                });
            });