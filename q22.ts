const guestList: string[] = ["Azhan", "Ahmad", "Kazim"];
const replacementGuest: string = "Talha";  

guestList[3] = replacementGuest;

guestList[1] = replacementGuest;

guestList.splice(3, 1);

console.log(`Number of people invited to dinner: ${guestList.length}`);

export {};