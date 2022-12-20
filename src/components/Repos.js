import {useState, useEffect, react} from 'react'

export default function Repos () {

         const [list, setList] = useState([])
    
         useEffect(() => {
            fetch('https://api.github.com/users/ChrispyRice024/starred?per_page=10').then(
            (response) => response.json()
        ).then(
            (data) => setList(data)
        )
         }, [])

    return (
        <div id='repos'>
            <h1>Top Deployed Projects</h1>
            <ul>
        {list.map((list) => 
        
        <li><a href={list.html_url}> {list.name}</a></li>
        )}
        
            </ul>
        </div>
    )
}