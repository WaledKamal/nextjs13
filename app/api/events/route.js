import { headers } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';
import { addUser, getAllUsers } from '../../lib/modules/User';

const GET = async () => {
    let users = await getAllUsers()
    return NextResponse.json({ users: users })
}

const POST = async (request) => {
    const contentType = headers(request).get('Content-Type');
    let requestBody = await request.json();
    if (contentType && contentType === "application/json") {
        if (!requestBody.userName) return NextResponse.json({ message: "username missing!" })
        if (!requestBody.password) return NextResponse.json({ message: "password missing!" })
        if (!requestBody.email) return NextResponse.json({ message: "email missing!" })
        const response = await addUser(requestBody)
        if (response) return NextResponse.json({ message: 'success', user: response.ops[0] })
        return NextResponse.json({ message: 'error, create new user fail', user: response.ops[0] })

    } else {
        return NextResponse.json("Unsupported Content-Type")
    }

}

export { GET, POST };

