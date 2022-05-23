import { v4 as uuidv4 } from 'uuid';

let users = [
    /*
    {
        firstName: "John",
        lastName: "Doe",
        age: 25
    }
    */
]

export const getUsers = (req, res) => {
    console.log(users);
    res.send(users);
}

export const createUser = (req, res) => {       
    const user = req.body;
    const userId = uuidv4();
    const userWithId = { ...user, id: userId }
    console.log(userWithId);
    users.push(userWithId);
    res.send(`User with name ${user.firstName} added to the database!`);
}

export const getUser = (req, res) => {
    const { id } = req.params;
    const foundUser = users.find((user) => user.id == id)
    console.log(foundUser);
    res.send(foundUser);
}

export const deleteUser = (req, res) => {
    const { id } = req.params;
    users = users.filter((user) => user.id != id)
    console.log(`User with the id ${id} is deleted from the database!`);
    res.send(`User with the id ${id} is deleted from the database!`);
}

export const updateUser = (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, age } = req.body;

    const user = users.find((user) => user.id == id);

    if (firstName){
        user.firstName = firstName;
    }
    if (lastName){
        user.lastName = lastName;
    }
    if (age){
        user.age = age;
    }

    console.log(`User with the id ${id} has been updated in the database!`);
    res.send(`User with the id ${id} has been updated in the database!`);
}