const person = {
    name: "fauzuwan",
    age: 26,
    gender: "Male"
};

html = `
    <ul>
    <li> My name is ${person.name}</li>
    <li> I am ${person.age}</li>
    </ul>

`;

document.body.innerHTML = html;