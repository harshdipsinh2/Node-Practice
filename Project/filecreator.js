import readline from 'readline';
import fs from 'fs';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const fileCreation = () => {
    rl.question('ENter file name:', (fileName) => {
        rl.question('Enter file content:', (Content) => {
            fs.writeFile(`${fileName}.txt`, Content, (err) => {
                if (err) {
                    console.error(`Error creating file: ${err.message}`);
                } else {
                    console.log(`File "${fileName}.txt" created successfully:`);
                }
                rl.close();
            });
        });
    });
};

fileCreation();
