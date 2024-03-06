import React from 'react'
import Header from './Header'
import Repos from './Repos'


export default function ProjectWindow (props) {

    const setPage = props.iFrame

    console.log('window', setPage)
    console.log(setPage.img)
    return (
        <div className='' id='window'>
            {setPage ? <a href={setPage.url} target='_blank'><img id='img' src={setPage.img} alt={setPage.name} /></a> : ''}

        </div>
    )
}
