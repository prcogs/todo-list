


const Btn = ({deleteTask, id}) => {

    return (
        <>
            <button className="btn_delete"><i className="fa fa-trash" aria-hidden="true" onClick={() => {deleteTask(id)}}></i></button>
        </>
    )
}

export default Btn