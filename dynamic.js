document.addEventListener('DOMContentLoaded', function () {
    fetch('content.json')
        .then(response => response.json())
        .then(data => {
            const aboutTitle = document.getElementById('aboutTitle');
            const aboutContent = document.getElementById('aboutContent');

            if (data.about) {
                aboutTitle.textContent = data.about.title;

                if (data.about.content) {
                    data.about.content.forEach(paragraph => {
                        const p = document.createElement('p');
                        p.textContent = paragraph;
                        aboutContent.appendChild(p);
                    });
                }
            }
        })
        .catch(error => console.error('Error fetching dynamic content:', error));
});
