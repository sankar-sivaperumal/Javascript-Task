const getData = new Promise((resolve, reject) => {
  let success = true;
  if (success) {
    resolve("Reached on time ");
  } else {
    reject("Not reached ");
  }
});

getData
  .then(response => console.log(response))
  .catch(error => console.error(error));
