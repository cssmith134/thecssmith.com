import Navigation from './Navigation'
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <header className='flex justify-between flex-col md:flex-row'>
            <div >
               <Link to="/"><h1 className='mx-2 hover:text-blue-500 font-roboto text-xl'>COOPER SMITH</h1></Link> 
            </div>
            <div>
                <Navigation />
            </div>
        </header>
    )
}

export default Header