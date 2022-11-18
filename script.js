fetch('https://icanhazdadjoke.com/slack')
    .then(data => data.json())
    .then(titleData => {
        const titleText = titleData.attachments[0].text;
        const titleElement = document.getElementById('title');

        titleElement.innerHTML = titleText;
    })