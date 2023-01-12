import {useState, useEffect, react} from 'react'
import ProjectWindow from './ProjectWindow'

export default function Repos () {

    const [list, setList] = useState([])
    const [iFrame, setIFrame] = useState()
    
    useEffect(() => {
        fetch('https://api.github.com/users/ChrispyRice024/starred?per_page=10').then(
            (response) => response.json()
        ).then(
            (data) => setList(data)
        )
         }, [])


    return (
        <div>
        <div id='repos'>
            <h1>Top Deployed Projects</h1>
            <ul>
        {list.map((list) => 
        
        <li ><button onClick={() => {setIFrame(list.html_url)}}>{list.name}</button></li>
        )}
        
            </ul>
        </div>
        <div>
            <ProjectWindow iFrame={iFrame} />
        </div>
        </div>
    )
}