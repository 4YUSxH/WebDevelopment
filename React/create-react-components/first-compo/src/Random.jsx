// It is also a cusotm component 

function Random(){
    let num = Math.random() * 100;

    return <h3>Random number is {Math.round(num)}</h3>
}

export default Random;