import React from 'react'
import { useParams } from 'react-router-dom'
import '../css/common.scss'
import '../css/project-detail.scss'
import projects from '../json/projects.json'

function openPopup() {
    document.querySelector('.overlay').classList.add('active')
}
function closePopup() {
    document.querySelector('.overlay').classList.remove('active')
}

function Detail() {
    const { id } = useParams()
    const project = projects.find(p => p.id === id)


    return (
        <div className='project-detail'>
            { }
            <div className="top-msg">
                <h1>{project.title}</h1>
                <p>{project.subtitle}</p>
            </div>


            <div className="line"></div>

            <div className="detail-site">
<a className="detail-img" href={project.link}>
    <img src={project.detailImg} alt="" />
    <div className="detail-dim"></div>  {/* 이거 추가 */}
</a>

                <div className="detail-info">
                    <div className="detail-text">
                        <h4>참여인원</h4>
                        <p>{project.members}</p>
                    </div>
                    <div className="detail-text">
                        <h4>참여파트</h4>
                        <p>{project.part}</p>
                    </div>
                    <div className="detail-text">
                        <h4>제작 소요 기간</h4>
                        <p>{project.duration}</p>
                    </div>
                    <div className="detail-text">
                        <h4> GitHub </h4>
                        <p>
                            <a href={project.link} target="_blank">
                                {project.link}
                            </a>
                        </p>
                    </div>
                </div>
            </div>


            <div className="detail-btn">
                <button type="button" className="popup" onClick={openPopup}>
                    <span className="detail-btn2">
                        <span className="material-symbols-outlined">add</span>
                        <span className="popup-text">더 자세한 이야기</span>
                    </span>
                </button>
            </div>

            <div className="overlay" onClick={closePopup}>
                <div className="popup-box" onClick={(e) => e.stopPropagation()}>
                    <button className="close-btn material-symbols-outlined" onClick={closePopup}>close</button>

                    <ul className="qna-list">
                        {project.qna.map((item, index) => (
                            <li key={index} className="qna-text">
                                <span className="qna-question"> {item.question} </span>
                                <span className="qna-answer"> {item.answer} </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>


        </div>
    )
}

export default Detail


