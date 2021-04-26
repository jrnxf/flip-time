"use strict";
(async () => {
  const getDarkModeAsync = async () => {
    return new Promise((resolve) => {
      chrome.storage.sync.get(["prefersDark"], ({ prefersDark }) => {
        resolve(prefersDark);
      });
    });
  };

  const setDarkModeAsync = async (prefersDark) => {
    return new Promise((resolve) => {
      chrome.storage.sync.set({ prefersDark }, resolve);
    });
  };

  const toggleTheme = async () => {
    const prefersDark = await getDarkModeAsync();
    const bodyClasses = document.getElementsByTagName("body")[0].classList;

    if (prefersDark) {
      await setDarkModeAsync(false);
      bodyClasses.remove("dark");
      bodyClasses.add("light");
      moon.style.display = "block";
      sun.style.display = "none";
    } else {
      await setDarkModeAsync(true);
      bodyClasses.remove("light");
      bodyClasses.add("dark");
      sun.style.display = "block";
      moon.style.display = "none";
    }
  };

  const moon = document.getElementById("moon");
  const sun = document.getElementById("sun");
  const bodyClasses = document.getElementsByTagName("body")[0].classList;

  moon.addEventListener("click", toggleTheme);
  sun.addEventListener("click", toggleTheme);

  const prefersDark = await getDarkModeAsync();

  if (prefersDark) {
    bodyClasses.add("dark");
    sun.style.display = "block";
    moon.style.display = "none";
  } else {
    bodyClasses.add("light");
    moon.style.display = "block";
    sun.style.display = "none";
  }
})();
