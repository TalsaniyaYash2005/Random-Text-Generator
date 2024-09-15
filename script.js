const generateBtn = document.getElementById('generate-btn');
const randomTextParagraph = document.getElementById('random-text');

const sampleTexts = [
    "The quick brown fox jumps over the lazy dog.",
    "To be or not to be, that is the question.",
    "All that glitters is not gold.",
    "A journey of a thousand miles begins with a single step.",
    "Fortune favors the bold."
];

function getRandomText() {
    const randomIndex = Math.floor(Math.random() * sampleTexts.length);
    return sampleTexts[randomIndex];
}

generateBtn.addEventListener('click', () => {
    randomTextParagraph.textContent = getRandomText();
});
