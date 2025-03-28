// 3D Cube Animation: JavaScript
// Author: https://youtu.be/-laon9XCNio?si=B9NWq90EfYt2kCwM
document.addEventListener('DOMContentLoaded', function () {
    let cube = document.querySelector('.cube');
    let grids = document.querySelectorAll('.grid');

    grids.forEach(grid => {
        for (let i = 0; i < 100; i++) {
            let span = document.createElement('span');
            grid.appendChild(span);
        }
    });

    function addRandomActiveClass() {
        grids.forEach(grid => {
            let spans = grid.querySelectorAll('span');
            let randomIndex = Math.floor(Math.random() * spans.length);
            spans[randomIndex].classList.add('active');

            let removeTime = Math.floor(Math.random() + 1000) + 500;
            setTimeout(() => {
                spans[randomIndex].classList.remove('active');
                spans[randomIndex].style.background = '';
                spans[randomIndex].style.filter = '';
            }, removeTime);
        });
    }

    function randomInterval() {
        let interval = Math.floor(Math.random() * 200) + 100;
        addRandomActiveClass();
        setTimeout(randomInterval, interval);
    }

    randomInterval();

    function getRandomColor() {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return `rgb(${r}, ${g}, ${b})`;
    }

    document.addEventListener('mousemove', (e) => {
        let x = e.clientX / window.innerWidth - 0.5;
        let y = e.clientY / window.innerHeight - 0.5;
        cube.style.transform = `rotateX(${y * -360}deg) rotateY(${x * 360}deg)`;
    });

    document.addEventListener('touchmove', (e) => {
        if (e.touches.length === 1) {
            let touch = e.touches[0];
            let x = touch.clientX / window.innerWidth - 0.5;
            let y = touch.clientY / window.innerHeight - 0.5;
            cube.style.transform = `rotateX(${y * -360}deg) rotateY(${x * 360}deg)`;
        }
    });

    document.addEventListener('click', () => {
        document.querySelectorAll('.grid span.active').forEach(span => {
            let randomColor = getRandomColor();
            span.style.background = `${randomColor}`;
            span.style.filter = `drop-shadow(0 0 20px ${randomColor})`;
        });
    });
});
