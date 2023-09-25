const names: string[] = ["Ahsan", "Ahmad", "Mujtaba", "Danish"];
const messageTemplate: string = "Hello, [name]! Just wanted to say hi.";

for (let i = 0; i < names.length; i++) {
    const personalizedMessage = messageTemplate.replace("[name]", names[i]);
    console.log(personalizedMessage);
}
export {};