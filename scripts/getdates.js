const currentYear = new Date().getFullYear();
const lastModified = document.lastModified;

document.querySelector("#current-year").textContent = `c ${currentYear}`;
document.querySelector("#last-modified").textContent = `Last updated: ${lastModified}`;
