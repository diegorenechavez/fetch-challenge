

function ClearButton(props) {
    const handleClick = ()=>{
        localStorage.clear()
    }

    return (
        <>
            <button onClick={handleClick}>Clear Favorites</button>
        </>
    )
}

export default ClearButton