export const contactByLinkedIn = () => {
  window
    .open(`https://www.linkedin.com/in/luis-egan-565401127/`, "_blank")
    .focus();
};

export const contactByEmail = () => {
  const body = document.getElementsByTagName("body")[0];
  const a = document.createElement("a");
  a.href = "mailto:eganluis@gmail.com";

  body.appendChild(a);
  a.click();
  body.removeChild(a);
};

export const getCV = () => {
  const body = document.getElementsByTagName("body")[0];
  const a = document.createElement("a");
  a.href = "/pdf/CV Luis Egan EN.pdf";
  a.download = "Luis Egan CV";

  body.appendChild(a);
  a.click();
  body.removeChild(a);
};
