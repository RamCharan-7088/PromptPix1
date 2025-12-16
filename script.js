const promptInput = document.getElementById("prompt");
const generateBtn = document.getElementById("generateBtn");
const imageBox = document.getElementById("imageBox");
const resultImg = document.getElementById("result");
const downloadBtn = document.getElementById("downloadBtn");

generateBtn.addEventListener("click", generateImage);

function generateImage() {
  const prompt = promptInput.value.trim();

  if (!prompt) {
    alert("Please describe your interior design idea");
    return;
  }

  const fullPrompt =
    prompt + ", interior design, ultra realistic, high quality, 4k render";

  const encodedPrompt = encodeURIComponent(fullPrompt);

  const imageUrl = `https://image.pollinations.ai/prompt/${encodedPrompt}?width=512&height=512&seed=${Math.floor(
    Math.random() * 10000
  )}`;

  resultImg.src = imageUrl;
  downloadBtn.href = imageUrl;
  imageBox.style.display = "block";
}
