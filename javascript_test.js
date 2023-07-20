const list1 = ['Arjun', 'Adwait', 'Swapnil', 'Amit', 'Vishal', 'Adnan'];
const list2 = ['Adwait', 'Laxman', 'Amit', 'Adnan', 'Nitin', 'Gaurav'];

// Get a unique set of users from List1 which are not in List2

const UsersList1 = [];
for (let i = 0; i < list1.length; i++) {
  if (!list2.includes(list1[i])) {
    UsersList1.push(list1[i]);
  }
}

//Get a unique set of users from List2 which are not in List1

const UsersList2 = [];
for (let i = 0; i < list2.length; i++) {
  if (!list1.includes(list2[i])) {
    UsersList2.push(list2[i]);
  }
}

//Get a set of users who are present in in List1 and List2 both (intersection of list1 & list2)

const intersectionUsers = [];
for (let i = 0; i < list1.length; i++) {
  if (list2.includes(list1[i])) {
    intersectionUsers.push(list1[i]);
  }
}

console.log('Users from List1 not in List2:', UsersList1);
console.log('Users from List2 not in List1:', UsersList2);
console.log('Users present in both List1 and List2:', intersectionUsers);

//____________________________________________________OUTPUT__________________________________________________

// Get a unique set of users from List1 which are not in List2

Users from List1 not in List2: [ 'Arjun', 'Swapnil', 'Vishal' ]

//Get a unique set of users from List2 which are not in List1

Users from List2 not in List1: [ 'Laxman', 'Nitin', 'Gaurav' ]

//Get a set of users who are present in in List1 and List2 both (intersection of list1 & list2)

Users present in both List1 and List2: [ 'Adwait', 'Amit', 'Adnan' ]



