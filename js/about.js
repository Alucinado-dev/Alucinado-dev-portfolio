function showAbout(){
    const main = document.getElementById('main');
    const content = `
        <section id="about">
            <h2> Who am I ?</h2>
        
            <div id="aboutme-text">
                <p>
                    Hey there! I’m <mark>Lucino</mark>, a self-taught <span id="dev" >Web Developer</span>  passionate about crafting engaging and functional web experiences. My stacks includes <span id="html">HTML</span>, <span id="css">CSS</span>, <span id="js">JavaScript</span>, and a never-ending curiosity to explore new technologies.
                    <br>
                    <br>
                    
                    I thrive on learning by doing, constantly building projects and refining my skills. My experience as a volunteer project manager at Zaffiro Junior Enterprise gave me a strong foundation in <span class="soft-skills">collaboration</span>, <span class="soft-skills">organization</span>, and <span class="soft-skills">agile methodologies</span>. I also had the chance to sharpen my <span class="soft-skills">teaching</span> and <span class="soft-skills">communication</span>
                    skills as a biomedical instrumentation monitor.
                    <br>
                    <br>
                    
                    Beyond coding, I love learning languages! I’m fluent in <span id="english" >English</span> (TOEFL B2-certified) and currently diving into <span id="mandarin">Mandarin</span>, because why not take on a new challenge?
                    <br>
                    <br>
                    
                    Excited to kickstart my career in tech! If you're looking for a passionate developer, let's talk!
                </p>
            </div>

            <i id="quote">"Coding is my craft, and every project is a new challenge to conquer."</i>
        </section>
    `
    
    main.innerHTML = content;

    /* fade-in animation to the title */
    const title = document.querySelector('#about h2');
    fadeIn(title, true, 700, false, 'top', 300)

    /* fade-in animation to the text */
    const text = document.querySelector('#aboutme-text');
    fadeIn(text, true, 1200, false, 'bottom', 1500)

    /* fade-in animation to the mark */
    const mark = document.querySelector('mark');
    fadeIn(mark, true, 1000, false, false, 2000)

    /* fade-in animation to dev */
    const dev = document.querySelector('#dev');
    fadeIn(dev, true, 1000, false, false, 2300)

    /* fade-in animation to hmtl */
    const htmlStack = document.querySelector('#html');
    fadeIn(htmlStack, true, 1000, false, false, 2600)

    /* fade-in animation to css */
    const cssStack = document.querySelector('#css');
    fadeIn(cssStack, true, 1000, false, false, 2900)

    /* fade-in animation to js */
    const jsStack = document.querySelector('#js');
    fadeIn(jsStack, true, 1000, false, false, 3200)

    /* fade-in animation to each soft skills */
    const softSkills = document.querySelectorAll('.soft-skills');
    softSkills.forEach((skill, index) => {
        fadeIn(skill, true, 1000, false, false, 3500 + (index * 300))
    })

    /* fade-in animation to english */
    const english = document.querySelector('#english');
    fadeIn(english, true, 1000, false, false, 5300)
 
    /* fade-in animation to mandarin */
    const mandarin = document.querySelector('#mandarin');
    fadeIn(mandarin, true, 1000, false, false, 5600)
     
    /* fade-in animation to the quote */
    const quote = document.querySelector('#quote');
    fadeIn(quote, true, 1200, 'left', false, 6000)
}

