function greeter(person: string) {
    return "Hello, " + person;
}

const user = "Victor User";

document.body.innerHTML = greeter(user);