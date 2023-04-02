import navItems from '../data/navitems'

type NavItem = {
    name: string,
    url: string
}

const navItemFormatter = (navitem: NavItem) => {
    return (
        <li className="mx-2 hover:text-rose-800" key={navitem.name}>
            <a href={navitem.url}>{navitem.name}</a>
        </li>
    )
}

const Navigation = () => {
    return (
        <div>
            <ul className="flex flex-col md:flex-row">
                {navItems.map(navItemFormatter)}
            </ul>
        </div>
    )
}

export default Navigation