## File cleaner

Read a file, remove all the extra spaces and write it back to the same file.

For example, if the file input was

```
hello     world    my    name   is       raman
```

After the program runs, the output should be

```
hello world my name is raman
```

const fs = require("fs");

let sentence = [];
let newSentence = "";
fs.readFile("a.txt", "utf-8", (err, data) => {
sentence = data;
sentence = sentence.split(/\s+/);
for (let i = 0; i < sentence.length; i++) {
newSentence += sentence[i] + " ";
}
newSentence = newSentence.trim();
console.log(newSentence);
});
