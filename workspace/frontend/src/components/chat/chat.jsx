import { useState } from "react";
import './chat.css'

function Chat() {
    const [messages, setMessages] = useState([])
    const [userInput, setUserImput] = useState('')

    async function getResponse() {
        try {
            if (!userInput) return
            const response = await fetch('http://localhost:4000/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ userInput })
            })
            if (!response.ok) {
                throw new Error('Oops, something went wrong!')
            }
            const { message } = await response.json()
            setMessages([...messages, userInput, message])
        } catch (error) {
            console.error(error)
            return 'Oops, something went wrong!'
        }
    }



    return (
        <div id="chat">
            <p>Placeholder</p>
        </div>
    )
}

export default Chat