import React, { useEffect, useRef } from 'react'
import '../css/common.scss'
import '../css/about.scss'

function About() {
    const ref1 = useRef(null)
    const ref2 = useRef(null)
    const ref3 = useRef(null)
    const skillsRef = useRef(null)

    useEffect(() => {
        const topEls = [ref1.current, ref2.current, ref3.current]

        topEls.forEach(el => {
            if (!el) return
            el.style.opacity = '0'
            el.style.transform = 'translateY(20px)'
        })

        const delays = [0, 600, 1200]
        const timers = topEls.map((el, i) =>
            setTimeout(() => { if (el) fadeInUp(el, 1400) }, delays[i])
        )
        
        const skillChildren = skillsRef.current
            ? Array.from(skillsRef.current.children)
            : []

        skillChildren.forEach(el => {
            el.style.opacity = '0'
            el.style.transform = 'translateY(20px)'
        })

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    fadeInUp(entry.target, 1000)
                    observer.unobserve(entry.target)
                }
            })
        }, { threshold: 0.15 })

        skillChildren.forEach(el => observer.observe(el))

        return () => {
            timers.forEach(clearTimeout)
            observer.disconnect()
            ;[...topEls, ...skillChildren].forEach(el => {
                if (!el) return
                el.style.opacity = ''
                el.style.transform = ''
            })
        }
    }, [])

    return (
        <div className='about'>

            <div className="about-me" ref={ref1}>
                <h2>About me</h2>
                <p>: 듣는 개발자🎧</p>
            </div>

            <div className="about-imgs" ref={ref2}>
                <img  className="img-small" src="./assets/images/profile.jpg" alt="selfie" />
                <img className="img-large" src="./assets/images/code.png" alt="intro" />
            </div>

            <div className="about-text" ref={ref3}>
                <p>저는 음악과 대화를 사랑해요 </p>
                <p>음악과 대화가 함께라면 어떤 프로젝트든 완성 시킬 수 있어!</p>
                <p>소통을 두려워하지 않는 개발자 <strong>진윤서</strong> 입니다.</p>
            </div>

            <div className="skills" ref={skillsRef}>

                <p>Skills</p>

                <p className="skill-name">Frontend</p>
                <ul className="skill-list">
                    <li><img src="./assets/svg/html5.svg" alt="HTML" /></li>
                    <li><img src="./assets/svg/css3.svg" alt="CSS" /></li>
                    <li><img src="./assets/svg/javascript.svg" alt="JavaScript" /></li>
                    <li><img src="./assets/svg/nodejs.svg" alt="Node.js" /></li>
                    <li><img src="./assets/svg/react.svg" alt="React" /></li>
                </ul>
                <div className="line"></div>

                <p className="skill-name">Backend</p>
                <ul className="skill-list">
                    <li><img src="./assets/svg/nextjs.svg" alt="next.js" /></li>
                </ul>
                <div className="line"></div>

                <p className="skill-name">Database</p>
                <ul className="skill-list">
                    <li><img src="./assets/svg/mongodb.svg" alt="MongoDB" /></li>
                </ul>
                <div className="line"></div>

                <p className="skill-name">Tools</p>
                <ul className="skill-list">
                    <li><img src="./assets/svg/git.svg" alt="git" /></li>
                    <li><img src="./assets/svg/GitHub.svg" alt="gitHub" /></li>
                    <li><img src="./assets/svg/figma.svg" alt="figma" /></li>
                    <li><img src="./assets/svg/vscode.svg" alt="Vscode" /></li>
                </ul>
                <div className="line"></div>

            </div>

        </div>
    )
}

function fadeInUp(el, duration) {
    const start = performance.now()
    function step(now) {
        const progress = Math.min((now - start) / duration, 1)
        const eased = 1 - Math.pow(1 - progress, 3)
        el.style.opacity   = eased
        el.style.transform = `translateY(${(1 - eased) * 20}px)`
        if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
}

export default About