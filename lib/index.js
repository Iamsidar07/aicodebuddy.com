const playSound = () => {
    const audio = new Audio("/success.mp3");
    audio.volume = 0.2;
    audio.play();
}

export { playSound }