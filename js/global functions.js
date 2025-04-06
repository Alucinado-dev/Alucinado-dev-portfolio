function copyEmail () {
    navigator.clipboard.writeText('lucinogabriel1510@gmail.com');
    alert('Email copied to clipboard!');
}

function fadeIn(element, opacity, duration, directionX, directionY, delay) {
    if(opacity){
        element.style.opacity = 0;
    }

    element.style.transition = `all ${duration}ms ease-in-out`;
    let transformValue = '';

    if(directionX){
        transformValue = directionX === 'left' ? 'translateX(-100px)' : 'translateX(100px)';
    }

    if(directionY){
        transformValue = directionY === 'top' ? 'translateY(-100px)' : 'translateY(100px)';
    }

    element.style.transform = transformValue;

    setTimeout(() => {
        element.style.opacity = 1;
        element.style.transform = 'translate(0, 0)';
    }, delay);
}

