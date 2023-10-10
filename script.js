const htmlCode = document.getElementById("html-code");
const cssCode = document.getElementById("css-code");
const jsCode = document.getElementById("js-code");
const outputFrame = document.getElementById("output");

function updateOutput() {
  const html = htmlCode.value;
  const css = "<style>" + cssCode.value + "</style>";
  const js = "<script>" + jsCode.value + "</script>";
  const code = `${html}${css}${js}`;
  outputFrame.srcdoc = code;
}

document.addEventListener("keydown", function (event) {
  if (event.ctrlKey && event.key === "r") {
    event.preventDefault();
    updateOutput();
  }
});

updateOutput();


