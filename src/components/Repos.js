import { useState, useEffect, react } from 'react'
import ProjectWindow from './ProjectWindow'
import NoteTaker from '../assets/NoteTaker.png'
import TeamSelector from '../assets/Team_Selector.jpeg'
import DNDCompanion from '../assets/DNDCompanion.png'
import FofServer from '../assets/FOFServer.png'
import Resume from '../assets/Resume.png'


export default function Repos() {

    const [displayImage, setDisplayImage] = useState(false);
    const [iFrame, setIFrame] = useState({})

    const changeValue = (item) => {
        setIFrame(item)
        setDisplayImage(true);
    }


    const list = [
        {
            id: 1,
            name: 'Dungeons&Dragons Companion App *WIP',
            url: 'https://github.com/ChrispyRice024/DNDCompanion',
            img: DNDCompanion,
            description: '(WIP)Utilizing the D&D API, this project helps create and store your Dungeons and Dragons Characters, while also helping you level up easily and keep track of your weapons, items and spell slot'
        },
        {
            id: 2,
            name: 'Note Taker For Dungeons&Dragons',
            url: 'https://github.com/ChrispyRice024/DNDNotes',
            img: NoteTaker,
            description: 'A small part of a bigger project, this app runs on ReactJs and NW.JS which combines Chromium and Node.JS environments'
        },
        {
            id: 3,
            name: 'Team Maker',
            url: 'https://63fcf453e7a56f17dfb7f9ef--bucolic-souffle-ff6e6b.netlify.app/',
            img: TeamSelector,
            description: 'Create members of a team and update the information'
        },
        
    ]

    return (
        <div className='repos '>
            <div className=' repos'>
                <h1 className='repos'>Top Projects</h1>
                <span id='disclaimer'>*Click on the image to be taken to that projects repository.</span>
                <ul className='repos'>
                    {list.map((item, index) =>

                        <li className=' repos' key={index} >
                            <button onClick={() => changeValue(item)}>
                                {item.name}</button>
                            <p className='repos'>{item.description}</p>
                            {displayImage && index === list.length - 1 && (
                                <div className='repos window'>
                                    <ProjectWindow iFrame={iFrame} list={list} />
                                </div>
                            )}
                        </li>
                    )}
                    {console.log(iFrame)}
                </ul>
            </div>
            {/* <div style= {{display: sizeDisplay}} className='repos window'>
            <ProjectWindow iFrame={iFrame} list={list} />
        </div> */}
        </div>
    )
}