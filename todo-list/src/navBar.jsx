import ItemNav from './itemNav'

const NavBar = ({filter, changeFilter}) => {

    return (
        <header>
            <ul className="nav">
                <ItemNav filter={filter} changeFilter={changeFilter} value ="all"/>
                <ItemNav filter={filter} changeFilter={changeFilter} value ="active"/>
                <ItemNav filter={filter} changeFilter={changeFilter} value ="completed"/>
            </ul>
        </header>
    )
}

export default NavBar