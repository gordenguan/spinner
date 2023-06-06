const spin = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|'];

let delay = 100;

for (const item of spin) {
  setTimeout(() => {
    process.stdout.write(`\r${item}   `);
  }, delay);
  delay += 200;
}