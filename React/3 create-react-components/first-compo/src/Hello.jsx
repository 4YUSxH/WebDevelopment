// It is also a custom component but it will dynamically change its data

function Hello(){
    let msg = "Lookism";
    let favanime = ()=>{
        return "One Piece"
    }

    return <h3>My fav manhwa is {msg} and fav anime is {favanime()}</h3>
    // Dynamic changes
}

export default Hello;