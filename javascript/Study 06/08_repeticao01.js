var i = 0;

while (i < 10) {
  console.log(i);
  i++;
}

do {
  console.log("Pelo menos uma vez!");
  i++;
} while (i < 10);

i = 0;

while (i < 1000000000) {
  if (i == 10) {
    break;
  }
  console.log(i);
  i++;
}

i = 0;

while (i < 10) {
  if (i == 5) {
    console.log("X");
    i++;
    continue;
  }
  console.log(i);
  i++;
}
