window.addEventListener(`load`, function () {
    let firstBackground = document.getElementById(`greetBackground`);
    let canvas = document.getElementById(`canvas`);
    let ctx = canvas.getContext(`2d`);
    let fontSize = 5;
    let columns = canvas.width / fontSize;
    let drops = [];
    let letters = `｡ ｢ ｣ ､ ･ ｦ ｧ ｨ ｩ ｪ ｫ ｬ ｭ ｮ ｯｱ ｲ ｳ ｴ ｵ ｶ ｷ ｸ ｹ ｺ ｻ ｼ ｽ ｾ ｿﾀ ﾁ ﾂ ﾃ ﾄ ﾅ ﾆ ﾇ ﾈ ﾉ ﾊ ﾋ ﾌ ﾍﾏﾐ ﾑ ﾒ ﾓ ﾔ ﾕ ﾖ ﾗ ﾘ ﾙ ﾚ ﾛ ﾜ ﾝ ﾞ ﾟ`;

    setTimeout(function () {
        firstBackground.style.display = `none`;
        for (let i = 0; i < columns; i++) {
            drops[i] = Math.floor(Math.random() * canvas.height);
        }

        let counter = 0;
        let greetingDisplayed = false;

        function draw() {
            ctx.fillStyle = `rgba(0, 0, 0, 0.05)`;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            for (let i = 0; i < drops.length; i++) {
                let text = letters[Math.floor(Math.random() * letters.length)];

                ctx.fillStyle = `#0f0`;

                ctx.font = fontSize + `px Arial`;

                ctx.fillText(text, i * fontSize, drops[i] * fontSize);

                drops[i]++;
                if (
                    drops[i] * fontSize > canvas.height &&
                    Math.random() > 0.95
                ) {
                    drops[i] = 0;
                }
            }

            if (counter >= 50 && !greetingDisplayed) {
                let greeting = document.createElement(`div`);
                greeting.id = `greeting`;

                document.body.appendChild(greeting);
                function sayHello() {
                    let text =
                        `console.log ('HELLO WORLD');` + ` ` + `Click anywhere on the screen to let me introduce myself!`;

                    let textArray = text.split(``);
                    let i = 0;
                    let greeting = document.getElementById(`greeting`);
                    let intervalId = setInterval(function () {
                        greeting.innerHTML += textArray[i];
                        i++;
                        if (i === textArray.length) {
                            clearInterval(intervalId);
                        }
                    }, 30);
                }

                sayHello();
                greetingDisplayed = true;
            }

            counter++;

            requestAnimationFrame(draw);
        }

        requestAnimationFrame(draw);
    },100);
});
window.addEventListener(`click`, function () {
    let greeting = document.getElementById(`greeting`);
    let secondBackground = document.getElementById(`frame`);
    let canvas = document.getElementById(`canvas`);

    canvas.remove();
    greeting.remove();
    secondBackground.style.setProperty(`display`, `flex`);
    document.body.appendChild(secondBackground);
});
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)
const msg = {
    to: 'jasenkobozinovic@gmail.com', // Change to your recipient
    from: 'jasenkobozinovic@gmail.com', // Change to your verified sender
    subject: 'Sending with SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
}
sgMail
    .send(msg)
    .then(() => {
        console.log('Email sent')
    })
    .catch((error) => {
        console.error(error)
    })