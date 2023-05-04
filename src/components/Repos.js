import {useState, useEffect, react} from 'react'
import ProjectWindow from './ProjectWindow'
import TaskApp from '../assets/TaskApp.jpeg'
import TeamSelector from '../assets/Team_Selector.jpeg'
import Calculator from '../assets/calculator.png'
import Resume from '../assets/Resume.png'
import red_dog from '../assets/red_dog.png'


export default function Repos () {

    const [iFrame, setIFrame] = useState({})

    const changeValue = (item) => {
        setIFrame(item)

    }

        const list = [
            {
                id:1,
                name:'Task App',
                url:'https://63f3ee9087a8793ce70354e1--chrispytaskapp.netlify.app/',
                img: TaskApp,
                description:'Save tasks to a todo list and mark them off as they are completed'
            },
            {
                id:2,
                name: 'Team Maker',
                url:'https://63fcf453e7a56f17dfb7f9ef--bucolic-souffle-ff6e6b.netlify.app/',
                img: TeamSelector,
                description:'Create members of a team and update the information'
            },
            {
                id:3,
                name:'Red Dog Customs',
                url:'https://64233ff604fbed1e35a08363--reddog.netlify.app/',
                img:red_dog,
                description: '*This website is a functional site used by a company. Do not send emails to this site. They will not go to me.'
            },
            {
                id:4,
                name:'Resume',
                url: 'https://docdro.id/GSLGFQp',
                img: Resume,
                description:'Up-to-date resume featuring skills, work history, and experience.'
            }

        ]

    return (
        <div className='repos '>
        <div className=' repos'>
            <h1 className='repos'>Top Projects</h1>
            <ul className='repos'>
        {list.map((item, index) => 

            <li className=' repos' key={index} >
                <button onClick={() => changeValue(item)}>{item.name}</button><p className='repos'>{item.description}</p>
            </li>
        )}
        {console.log(iFrame)}
            </ul>
        </div>
        <div className='repos window'>
            <ProjectWindow iFrame={iFrame} list={list} />
        </div>
        </div>
    )
}