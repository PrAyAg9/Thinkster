import { useEffect } from 'react';

export default function DataBg() {
  useEffect(() => {
    const elementsBg = document.querySelectorAll("[data-background]");
    elementsBg.forEach((element) => {
      element.style.backgroundImage = `url(${element.getAttribute("data-background")})`;
    });

    const elementsColor = document.querySelectorAll("[data-bg-color]");
    elementsColor.forEach((element) => {
      element.style.backgroundColor = element.getAttribute("data-bg-color");
    });
  }, []);

  return null; // Explicitly return null when nothing should be rendered
}
