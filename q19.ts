const guestList: string[] = ["Azhan", "Ahmad", "Kazim"];
const replacementGuest: string = "Talha";  

guestList[1] = replacementGuest;

console.log(`Number of people invited to dinner: ${guestList.length}`);

export {};