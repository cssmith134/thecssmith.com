import React from 'react'
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

function Footer() {
  return (
    <div className='text-center pt-20 width="100" height="100"' >
        <div>
            <a href="mailto: cssmithg134@gmail.com"><EmailIcon/></a>
            <a href="https://www.linkedin.com/in/coopersmith1993/"><LinkedInIcon/></a>
            
        </div>
        <p>&copy; 2020 thecssmith.com</p>
    </div>
  )
}

export default Footer