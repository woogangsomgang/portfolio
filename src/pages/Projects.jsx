import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import '../css/common.scss'
import '../css/projects.scss'
import projects from '../json/projects.json'

function Projects() {
    return (

        <div className='project'>

            <div className="top-msg">
                <h1>Projects</h1>
                <p>: 클릭 시 상세페이지로 이동합니다.</p>
            </div>

            <div className="line"></div>

            <ul className="project-list">
                {projects.map((project) => (
                    <li key={project.id} className="project-item">
                        <NavLink to={`/detail/${project.id}`}>
                            <div className="project-thumb">
                                <img src={project.listImg} alt={project.title} />
                                <div className="project-overlay">
                                    <span>자세히 보기 →</span>
                                </div>
                            </div>
                        </NavLink>
                        <div className="project-text">
                            <h2>{project.title}</h2>
                            <span> {project.skills} </span>
                        </div>
                    </li>
                ))}
            </ul>

        </div>
    )
}

export default Projects