function showHome() {
    const main = document.getElementById('main');
    const homeContent = `
        <section id="home">
            <hgroup>
                <h2 id="typed-animation-name"></h2>
                <h3 id="role"> <span>Your</span>Web Developer</h3>
            </hgroup>

            <div class="social-networks-container">
                <a href="https://www.linkedin.com/in/lucino-de-campos/" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-linkedin"></i></a>
                <a href="https://github.com/ALucin4do" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-github"></i></a>
                <a href="mailto:lucinogabriel1510@gmail.com" id="email" ><i class="fa-solid fa-envelope"></i></a>
            </div>
        </section>
    `;

    main.innerHTML = homeContent;

    /* typing animation to the greetings */
    typingAnimationGreetings()

    /* fade-in animation to the role */
    const role = document.getElementById('role')
    fadeIn(role, true, 1000, false, 'bottom', 4500)

    /* fade-in animation to the social networks container */
    const socialNetworksContainer = document.querySelector('.social-networks-container');
    fadeIn(socialNetworksContainer, true,  1000, false, 'top', 5000)

    /* copy email  */
    const email = document.getElementById('email');
    email.addEventListener('click', () => {
        copyEmail()
    });

}

function typingAnimationGreetings () {
    const greetings = document.getElementById('typed-animation-name');

    var typed = new Typed(greetings, {
        strings: ['Hello, ^500 I am <mark>Lucino De Campos</mark>'],
        typeSpeed: 100,
    });
}


    
