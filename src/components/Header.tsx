import Navigation from './Navigation'

const Header = () => {
    return (
        <header className='flex justify-between flex-col md:flex-row'>
            <div>
                <h1 className='font-roboto text-xl'>COOPER SMITH</h1>
            </div>
            <div>
                <Navigation />
            </div>
        </header>
    )
}

export default Header