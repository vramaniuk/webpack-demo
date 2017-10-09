function greeter(person) {

    console.log([12,34,56,].reduce((p,c)=>p+c));

    return `Hello, ${person}`;
}
const user = "Victor User!!";

document.body.innerHTML = greeter(user);
(function foo() {
    let [a,,b]=[1,2,3];
    return ()=>{return console.log(a,b)}
})()()