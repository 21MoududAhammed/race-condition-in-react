function generateMilliseconds() {
  const milliseconds = Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000;
  return milliseconds;
}

function searchData(btnNum, milliseconds, value) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (btnNum && value) {
        if (btnNum % 2 === 0) {
          resolve(`Even - ${value}`);
        } else {
          resolve(`Odd - ${value}`);
        }
      } else {
        reject("Error...");
      }
    }, milliseconds);
  });
}

export { generateMilliseconds, searchData };
