// Basic Example fo Scope:

function outer() {
    let a = 1;

    function inner() {
        let b = 2;

        // we can access both 'a' and 'b' here
        console.log( a + b ); // 3
    }

    inner();

    //we can only access 'a' (from outer) here
    console.log( a ); // 1
}