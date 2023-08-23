import clientPromise from '../mongodb';

const getAllUsers = async () => {
    const client = await clientPromise
    const db = await client.db("NextJSDB");
    let users = await db.collection("users").find().toArray();
    return users
}

const addUser = async (user) => {
    const client = await clientPromise
    const db = client.db("NextJSDB");
    let addedUser = await db.collection("users").insertOne(user);
    return addedUser
}

export {getAllUsers, addUser}