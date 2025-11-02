 const sounds = ['applause','boo','gasp','tada','victory','wrong'];
    const audioMap = {};

    // Preload the audio
    sounds.forEach(sound => {
      const audio = new Audio(`sounds/${sound}.mp3`);
      audioMap[sound] = audio;
    });

    // Handle play and stop
    document.getElementById('buttons').addEventListener('click', e => {
      if (e.target.classList.contains('btn')) {
        const sound = e.target.dataset.sound;
        stopAll();
        if (sound) {
          audioMap[sound].currentTime = 0;
          audioMap[sound].play();
        }
      }
    });

    function stopAll() {
      sounds.forEach(s => {
        audioMap[s].pause();
        audioMap[s].currentTime = 0;
      });
    }

    // Stop button
    document.querySelector('.stop').addEventListener('click', stopAll);