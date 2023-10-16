gsap.registerPlugin(ScrollTrigger);


document.body.classList.add('no-scroll');

if (true) {
    document.querySelector('.video').remove();
    gsapAnimations(1500);
} else {
    let vid = document.getElementById("video");
    vid.onloadeddata = () => {
        gsapAnimations();
    };
}


function gsapAnimations(loaderTime = 1000) {
    setTimeout(() => {

        document.body.classList.remove('no-scroll');

        const loaderAndImage = gsap.timeline();
        const helloTitleTimeline = gsap.timeline();

        const sections = gsap.utils.toArray('section');
        const isMobile = window.innerWidth <= 500;

        const scrollTween = gsap.to(sections, {
            ease: 'none',
            scrollTrigger: {
                trigger: '.wrapper',
                scrub: 0.1,
                start: "top top",
                end: () => `+=${sections.length * 100}%`, // Each section has 100% height
                snap: 1 / (sections.length),
            }
        })

        loaderAndImage
            .to('.loader', {
                opacity: 0, duration: 0.5,
                ease: "power3.out",
                y: -1500
            })
            .fromTo('.img', {
                display: "none", duration: 0.2, scale: 1.5,
                ease: "none",
            }, {
                opacity: 0.8, display: 'block', duration: 0.5, scale: 1,
                ease: "power3.out",
            })

        helloTitleTimeline
            .to('.text-video-blend', {
                duration: 0.3, delay: 0.8,
                ease: "none", y: 0
            })
            .to('.subtitle', {
                duration: 0.3,
                ease: "none", y: 0
            })
            .to('.name', {
                duration: 0.3,
                ease: "none", y: 0
            })
            .to('.video', {
                duration: 0.3,
                opacity: 1,
                y: 0
            })
            .to('.text-video-blend', {
                delay: 0.5,
                mixBlendMode: 'multiply'
            })

        gsap.to('.hello-text', {
            scrollTrigger: {
                trigger: ".hello-text",
                start: "top top",
                end: 500,
                scrub: 0.25,
                markers: false
            },
            fontSize: '500px',
            yPercent: -200,
            opacity: 0,
        });

        gsap.to('.hero-text', {
            scrollTrigger: {
                trigger: ".hello-text",
                start: "top top",
                end: 1000,
                scrub: 0.25,
                markers: false
            },
            top: isMobile ? '1%' : '1%',
            x: isMobile ? 0 : -50,
            fontSize: isMobile ? '40px' : '60px',
            lineHeight: isMobile ? '40px' : '60px',
            color: '#fff',
        })

        gsap.to('.img', {
            scrollTrigger: {
                trigger: ".hello-text",
                start: 200,
                end: 500,
                scrub: 0.25,
                markers: false
            },
            opacity: 0.4,
            x: isMobile ? -20 : -30
        })

        gsap.from('.description', {
            opacity: 0,
            scale: 3,
            y: 100,
            x: 500,
            textAlign: 'left',
            marginTop: -100,
            duration: 0.3,
            scrollTrigger: {
                trigger: ".description-section",
                start: "top bottom",
                end: "bottom bottom",
                scrub: 0.1,
                markers: false
            },
        })

        gsap.to('.hero-text', {
            scrollTrigger: {
                trigger: ".skills",
                start: "top bottom",
                end: "top center",
                scrub: 0.1,
                markers: false
            },
            opacity: "0",
            y: isMobile ? -100 : -300,
        })

        gsap.timeline({ repeat: -1 }).to('.techStack1',
            {
                duration: isMobile ? 30 : 45,
                xPercent: -50,
                ease: 'none'
            }
        ).set('.techStack1', { xPercent: 0 });

        gsap.timeline({ repeat: -1 }).to('.techStack2',
            {
                duration: isMobile ? 35 : 50,
                xPercent: -50,
                ease: 'none'
            }
        ).set('.techStack2', { xPercent: 0 });

        const skillsTimeline = gsap.timeline();

        skillsTimeline.from('.skills-heading', {
            opacity: 0,
            scale: 2,
            y: -200,
            zIndex: 20,
            textAlign: 'left',
            marginTop: -20,
            duration: 0.3,
            scrollTrigger: {
                trigger: ".skills",
                start: "top bottom",
                end: "bottom bottom",
                scrub: 0.1,
                markers: false
            },
        }).from('marquee-container', {
            opacity: 0,
        })


    }, loaderTime)
}