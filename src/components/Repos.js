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
                disclaimer:''
            },
            {
                id:2,
                name: 'Team Maker',
                url:'https://63fcf453e7a56f17dfb7f9ef--bucolic-souffle-ff6e6b.netlify.app/',
                img: TeamSelector,
                disclaimer:''
            },
            {
                id:3,
                name:'Red Dog Customs',
                url:'',
                img:red_dog,
                disclaimer: '*This website is a functional site used by a company. Do not send emails to this site. They will not go to me.'
            },
            {
                id:4,
                name:'Resume',
                url: 'https://docdro.id/GSLGFQp',
                img: Resume,
                disclaimer:''
            }

        ]

    return (
        <div>
        <div className='repos'>
            <h1 className='repos'>Top Projects</h1>
            <ul className='repos'>
        {list.map((item, index) => 

            <li className='repos' key={index} >
                <button className='repos' onClick={() => changeValue(item)}>{item.name}</button>{item.disclaimer}
            </li>
        )}
        {console.log(iFrame)}
            </ul>
        </div>
        <div>
            <ProjectWindow iFrame={iFrame} list={list} />
        </div>
        </div>
    )
}