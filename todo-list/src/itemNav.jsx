

const ItemNav = ({filter, changeFilter, value}) => {
    const on = filter === value ? "on" : ""

    return(
        <>
            <button className={on + ' ' + value } onClick={() => {changeFilter(value)}}><li>{value}</li></button>
        </>
    )
}

export default ItemNav