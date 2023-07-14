import React from 'react'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import EmailIcon from '@material-ui/icons/EmailOutlined'
import '../styles/Footer.css'

export default function Footer() {
    return (
        <div className='footer'>
            <div className="socialMedia">
                <a target='_blank' href="https://github.com/Pedrohprado"><GitHubIcon /></a>
                <a target='_blank' href="/"><LinkedInIcon /></a>
                <a href="mailto:pedroh.prado@outlook.com"><EmailIcon /></a>
            </div>
            <p>&copy; 2023 pedroprado</p>
        </div>
    )
}
