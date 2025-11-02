 const sounds = ['applause','boo','gasp','tada','victory','wrong'];

  // Create <audio> elements and keep them in the DOM
  const audioContainer = document.getElementById('audios');
  const audioMap = {};
  sounds.forEach(name => {
    const el = document.createElement('audio');
    el.id = name;
    el.preload = 'auto';
    el.src = `sounds/${name}.mp3`;
    audioContainer.appendChild(el);
    audioMap[name] = el;
  });

  function stopAll() {
    sounds.forEach(n => {
      const a = audioMap[n];
      a.pause();
      a.currentTime = 0;
    });
  }

  // Delegate clicks from the buttons container
  document.getElementById('buttons').addEventListener('click', (e) => {
    if (!e.target.classList.contains('btn')) return;

    if (e.target.classList.contains('stop')) {
      stopAll();
      return;
    }

    const sound = e.target.getAttribute('data-sound');
    if (!sound) return;

    stopAll();
    const a = audioMap[sound];
    a.currentTime = 0;
    a.play(); // now a real <audio> exists in DOM -> Cypress can detect it
  });