const sentence = "hello there from lighthouse labs";

const printChars = async () => {
  let delay = 0;
  for (const char of sentence) {
    setTimeout(() => {
      process.stdout.write(char);
    }, delay);
    delay += 50;
  }
  setTimeout(() => console.log("\n"), delay + 50);
};

printChars();
