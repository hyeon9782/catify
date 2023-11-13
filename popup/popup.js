const images = Array.from(document.querySelectorAll("img"));

images.forEach((img) => {
  img.addEventListener("click", () => {
    chrome.storge.local.set({ image: img.src });
  });
});
