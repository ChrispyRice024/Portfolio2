import React from 'react'

export default function Contact () {


    return(
        <div>
            <form mailto="chrisdirksen024@gmail.com" enctype="text/plain" name="email" class="form">
                <label for="fromEmail" class="form">E-Mail</label>
                <input name="fromEmail" type="text" placeholder="E-Mail"  id="fromEmail" />
                <p><label for="message" class="form">Message</label></p>
                <p><textarea id ="message" name="message" type="text" class="form" placeholder="Your Message"></textarea></p>
                <p><input type="submit" /></p>
            </form>
        </div>
    )
} 