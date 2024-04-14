#! /usr/bin/env sol

// Solution # 15
// Changing guest list: you just heard that one your guest can't make the dinner, so you need out a new set of invitations. you will 
// have to think of someone else to invite.
// Start with your program from Exercise 14 Add a print statement at the end of your program stating the name of the guest who 
// can't make it.
// Modify your list replacing the name of the guest who cant make it with the name of the new person you are inviting.
// Print a second set of invitation messages, one for each person who is still in your list.

let guest_list: string[] = ['Adeel', 'Aisha', 'Aiza', 'fatima'];
let not_present: string = "Adeel";
let new_guest: string = "Kashif";

console.log(`Mr. ${not_present} willnot coming tomorrow dinner`);
guest_list[guest_list.indexOf(not_present)] = new_guest
console.log(guest_list)

guest_list.map((items) =>
console.log(`Dear ${items}, you are invited for the dinner `)
)