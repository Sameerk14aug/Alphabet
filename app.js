document.getElementById("upper").addEventListener("click", function () {
    const textArea = document.getElementById("inp");
    textArea.value = textArea.value.toUpperCase();
});

document.getElementById("lower").addEventListener("click", function () {
    const textArea = document.getElementById("inp");
    textArea.value = textArea.value.toLowerCase();
});

document.getElementById("trim").addEventListener("click", function () {
    const textArea = document.getElementById("inp");
    textArea.value = textArea.value.trim();
});

document.getElementById("clear").addEventListener("click", function () {
    const textArea = document.getElementById("inp");
    textArea.value = "";
});

document.getElementById("copy").addEventListener("click", async function () {
    const textArea = document.getElementById("inp");
    try {
        await navigator.clipboard.writeText(textArea.value);
        alert("Text copied to clipboard!");
    } catch (err) {
        console.error("Failed to copy text: ", err);
    }
});

document.getElementById("paste").addEventListener("click", async function () {
    const textArea = document.getElementById("inp");
    const text = await navigator.clipboard.readText();
    textArea.value = text;
});

document.getElementById("capitalize").addEventListener("click", function () {
    const textArea = document.getElementById("inp");
    textArea.value = textArea.value
        .toLowerCase()
        .replace(/\b\w/g, char => char.toUpperCase());
});

document.getElementById("speak").addEventListener("click", function () {
    const textArea = document.getElementById("inp");
    const utterance = new SpeechSynthesisUtterance(textArea.value);
    speechSynthesis.speak(utterance);
});

document.getElementById("download").addEventListener("click", function () {
    const textArea = document.getElementById("inp");
    const blob = new Blob([textArea.value], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "text.txt";
    link.click();
    URL.revokeObjectURL(link.href);
});