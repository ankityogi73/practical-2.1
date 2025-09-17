function updateCount(textareaId, countId) {
  const textarea = document.getElementById(textareaId);
  const countSpan = document.getElementById(countId);
  textarea.addEventListener("input", () => {
    countSpan.textContent = textarea.value.length;
  });
}

updateCount("textarea1", "count1");
