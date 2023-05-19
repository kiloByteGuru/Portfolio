window.addEventListener('load', function () {
    let firstBackground = document.getElementById('greetBackground');
    let canvas = document.getElementById('canvas');
    let ctx = canvas.getContext('2d');
    let fontSize = 5;
    let columns = canvas.width / fontSize;
    let drops = [];
    let letters = '｡ ｢ ｣ ､ ･ ｦ ｧ ｨ ｩ ｪ ｫ ｬ ｭ ｮ ｯｱ ｲ ｳ ｴ ｵ ｶ ｷ ｸ ｹ ｺ ｻ ｼ ｽ ｾ ｿﾀ ﾁ ﾂ ﾃ ﾄ ﾅ ﾆ ﾇ ﾈ ﾉ ﾊ ﾋ ﾌ ﾍﾏﾐ ﾑ ﾒ ﾓ ﾔ ﾕ ﾖ ﾗ ﾘ ﾙ ﾚ ﾛ ﾜ ﾝ ﾞ ﾟ';

    setTimeout(function () {
        firstBackground.style.display = 'none';
        for (let i = 0; i < columns; i++) {
            drops[i] = Math.floor(Math.random() * canvas.height);
        }

        let counter = 0;
        let greetingDisplayed = false;

        function draw() {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            for (let i = 0; i < drops.length; i++) {
                let text = letters[Math.floor(Math.random() * letters.length)];

                ctx.fillStyle = '#0f0';

                ctx.font = fontSize + 'px Arial';

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
                let greeting = document.createElement('div');
                greeting.id = 'greeting';

                document.body.appendChild(greeting);
                function sayHello() {
                    let text =
                        'console.log ("HELLO WORLD");' + ' ' + 'Click anywhere on the screen to let me introduce myself!';

                    let textArray = text.split('');
                    let i = 0;
                    let greeting = document.getElementById('greeting');
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
    }, 3000);
});
window.addEventListener('click', function () {
    let greeting = document.getElementById('greeting');
    let secondBackground = document.getElementById('frame');

    canvas.remove();
    greeting.remove();
    secondBackground.style.setProperty('display', 'block');
    document.body.appendChild(secondBackground);
});
const form = document.getElementById('contactForm');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const subject = document.getElementById('subject').value;
  const message = document.getElementById('message').value;

  const messageBody = [
    "From: " + name + " <" + email + ">",
    "To: jasenkobozinovic@gmail.com",
    "Subject: " + subject,
    "",
    message
  ].join("\n");

  const encodedMessage = btoa(messageBody);
  const request = gapi.client.gmail.users.messages.send({
    'userId': 'me',
    'resource': {
      'raw': encodedMessage
    }
  });

  request.execute(() => alert('Thank you for your message!'));
});
