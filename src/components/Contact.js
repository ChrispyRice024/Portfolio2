import React from 'react'

export default function Contact () {


    return(
        <div class='contact'>
            <form class='contact' mailto="chrisdirksen024@gmail.com" enctype="text/plain" name="email" class="form">
                <label for="fromEmail" class="form">Your E-Mail</label>
                <input name="fromEmail" type="text" placeholder="Your E-Mail"  id="fromEmail" />
                <p><label for="message" class="form">Message</label></p>
                <p><textarea id ="message" name="message" type="text" class="form" placeholder="Your Message"></textarea></p>
                <p><input type="submit" /></p>
            </form>
            <h3>GitHub</h3>
            <p><a target='_blank' href='https://github.com/ChrispyRice024'>https://github.com/ChrispyRice024</a></p>
            <p></p>
            <h3>LinkedIn</h3>
            <p><a target='_blank' href='https://www.linkedin.com/in/christopher-dirksen-726035263'>www.linkedin.com/in/christopher-dirksen-726035263</a></p>
        </div>
    )
} 