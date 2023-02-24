import {useState, useEffect, react} from 'react'
import ProjectWindow from './ProjectWindow'


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
                img: '../assets/TaskApp.jpeg'
            },
            {
                id:2,
                name: 'Team Maker',
                url:'-undefined-',
                img:'../assets/Team_Selector.jpeg'
            }
        ]

    return (
        <div>
        <div id='repos'>
            <h1>Top Projects</h1>
            <ul>
        {list.map((item, index) => 

            <li key={index} >
                <button onClick={() => changeValue(item)}>{item.name}</button>
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