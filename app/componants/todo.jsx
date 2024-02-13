"use client"

import { useEffect, useState } from "react";

export default function Todo() {
    const [todo, setTodo] = useState({});
    const fetchData = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
            const result = await response.json();
            setTodo(result);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {


        fetchData();
    }, []);


    console.log("a", todo);

    return (
        <h1>{todo.title}</h1>
    )
};