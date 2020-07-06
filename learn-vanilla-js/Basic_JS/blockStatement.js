var a = 20;

scope: {
    // this is a block statement
    console.log(a);
    break scope;
    console.log(a + 20);
}
