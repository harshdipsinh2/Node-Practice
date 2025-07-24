import https from 'https';
import chalk from 'chalk';

const getJoke = () => {
    const url = 'https://official-joke-api.appspot.com/random_joke';

    https.get(url, (response) => {
        let data = '';
        response.on('data', (chunk) => {
            data += chunk;
        });

        response.on('end', () => {
            const joke = JSON.parse(data);
            // console.log(joke)
            console.log('Here is a random joke:');
            console.log(chalk.red(`${joke.setup}`));
            console.log(chalk.blue.bgBlue(`${joke.punchline}`));
        });
        response.on('error', (err) => {
            console.error(err);
            });
    });
};

getJoke();
