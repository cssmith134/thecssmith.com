import React from 'react'
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { GitHub } from '@material-ui/icons';

function Footer() {
  return (
    <div className='text-center pt-20' >
        <div>
            <a className='p-5 mx-2 hover:text-blue-500' href="mailto: cssmithg134@gmail.com"><EmailIcon/></a>
            <a className='p-5 mx-2 hover:text-blue-500' href="https://www.linkedin.com/in/coopersmith1993/"><LinkedInIcon/></a>
            <a className='p-5 mx-2 hover:text-blue-500' href="https://github.com/cssmith134"><GitHub/></a>
        </div>
        <p>&copy; 2023 thecssmith.com</p>
    </div>
  )
}

export default Footer