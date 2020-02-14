document.addEventListener('DOMContentLoaded', function() {
    const eyes = document.querySelectorAll('#oko-l, #oko-r, #oko-usmiech-l, #oko-usmiech-r');
    const mouth = document.querySelector('#buzia-smutek');
    const svg = document.querySelector('.svg');
    const button = document.querySelector('.error404-button');
    const buzia = document.querySelector("#buzia");

    document.addEventListener('mousemove', function(e) {
        const xy = svg.getBoundingClientRect();
        const x = xy.left + xy.width / 2;
        const y = xy.top + xy.height / 2;
        const calcX = -(100 - (e.pageX / x * 100));
        const calcY = -(100 - (e.pageY / y * 100));

        if (calcX < -100) calcX = -100;
        if (calcX > 100) calcX = 100;
        if (calcY < -100) calcY = -100;
        if (calcY > 180) calcY = 180

        for (const el of eyes) {
            el.style.setProperty('--moveX', calcX * 0.02 + '%');
            el.style.setProperty('--moveY', calcY * 0.02 + '%');
        }
        mouth.style.setProperty('--moveX', calcX * 0.04 + '%');
        mouth.style.setProperty('--moveY', calcY * 0.04 + '%');
    });

    button.addEventListener("mouseenter", function() {
        eyes[0].style.display = "none"
        eyes[1].style.display = "none"
        eyes[2].style.display = "block"
        eyes[3].style.display = "block"
        //buzia.style.fill = "#ffffff"

        anime({
            targets: mouth,
            d : [
                {value : mouth.dataset.happy}
            ],
            duration: 1000
        });
    })

    button.addEventListener("mouseleave", function() {
        eyes[0].style.display = "block"
        eyes[1].style.display = "block"
        eyes[2].style.display = "none"
        eyes[3].style.display = "none"
        //buzia.style.fill = "#300303"

        anime({
            targets: mouth,
            d : [
                {value : mouth.dataset.sad}
            ],
            duration: 1000
        });
    })
});