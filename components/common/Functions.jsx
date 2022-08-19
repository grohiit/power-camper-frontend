export function markdownToHtml(mdText) {
  const toHTML = mdText.split("\n").map((text) =>
    text
      .trim() // using trim method to remove whitespace
      .replace(/^### (.*$)/i, "<h3>$1</h3>") // h3 tag
      .replace(/^## (.*$)/i, "<h2>$1</h2>") // h2 tag
      .replace(/^# (.*$)/i, "<h1>$1</h1>") // h1 tag
      .replace(/^\* (.*$)/i, "<li>$1</li>") // <li> tag
      .replace(/\*\*(.*)\*\*/i, "<b>$1</b>") // bold text
      .replace(/\*(.*)\*/i, "<i>$1</i>") // italic text
      .replace(/\*(.*)\*/i, "<i>$1</i>") // italic text
      // replace list items with <li> tag
      // .replace(/^\* (.*$)/i, "<li>$1</li>")
      .replace(/\d+[.]/g, "<li>1</li>") // remove bullets
      .replace(/\[(.*?)\]\((.*?)\)/i, "<a href='$2'>$1</a>")
  ); // link

  return toHTML.join("\n");
}

export function parseMarkdown(markdownText) {
  const htmlText = markdownText
    .replace(/^### (.*$)/gim, "<h3>$1</h3>")
    .replace(/^## (.*$)/gim, "<h2>$1</h2>")
    .replace(/^# (.*$)/gim, "<h1>$1</h1>")
    .replace(/^\> (.*$)/gim, "<blockquote>$1</blockquote>")
    .replace(/\*\*(.*)\*\*/gim, "<b>$1</b>")
    .replace(/\*(.*)\*/gim, "<i>$1</i>")
    .replace(/!\[(.*?)\]\((.*?)\)/gim, "<img alt='$1' src='$2' />")
    .replace(/\[(.*?)\]\((.*?)\)/gim, "<a href='$2'>$1</a>")
    .replace(/\n$/gim, "<br />");

  return htmlText.trim();
}

export function getDayName(seconds) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let d = new Date(seconds * 1000);
  return days[d.getDay()];
}

export function convertKelvinToCelsius(kelvin) {
  return Math.round(kelvin - 273.15);
}
