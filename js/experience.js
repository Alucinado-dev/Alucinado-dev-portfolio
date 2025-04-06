function showExperience(){
    const content = `
        <section id="experience">
            <div id="experience-container" >
                <h2 id="no-xp-yet">Every expert starts somewhere</h2>
                
                <p id="beginning"> 
                    Even the best developers once started with no experience. This is just my first step! Every line of code i write 
                    is part of my journey. I'm constantly learning, growing and seeking new opportunities. If you belive in the potential
                    of those who are just starting, I'd love to be part of your team.
                </p>
                
                <h4 id="hire-me">
                    Want ot be part of my journey?
                </h4>
                
                <div id="contact-me">
                    <a href="mailto:lucinogabriel1510@gmail.com" target="_blank" rel="noopener noreferrer"> Mail to me <i class="fa-solid fa-envelope"></i> </a>
                    <a href="https://www.linkedin.com/in/lucino-de-campos/"> Contact me in my LinkedIn <i class="fa-brands fa-linkedin"></i></a>
                </div>
            </div>
        </section>
    `

    main.innerHTML = content

    /* fade-in animation to the title */
    const title = document.querySelector('#experience h2');
    fadeIn(title, true, 700, false, 'top', 300)

    /* fade-in animation to the beginning */
    const beginning = document.getElementById('beginning');
    fadeIn(beginning, true, 1000, 'rigth', false, 1000)

    /* fade-in animation to the hire-me */
    const hireMe = document.getElementById('hire-me');
    fadeIn(hireMe, true, 1000, 'left', false, 2000)

    /* fade-in animation to the contact-me */
    const contactMe = document.getElementById('contact-me');
    fadeIn(contactMe, true, 1000, false, 'bottom', 3000)

    /* copy email  */
    const email = document.querySelector('#contact-me a');
    email.addEventListener('click', () => {
        copyEmail()
    });

}
