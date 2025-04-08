import { useState, useEffect } from 'react'
import './chat.css'
import { use } from 'react'

function Chat() {
    const [messages, setMessages] = useState([])
    const [input, setInput] = useState('')

    async function getResponse() {
        try {
            if (!userInput) return
            const response = await fetch('http://localhost:4000/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ userInput })
            })
            if (!response.ok) {
                throw new Error('Network response was not ok')
            }
            const { message } = await response.json()
            fetch('http://localhost:4000/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ input: userInput, output: message })
            })
            setMessages([...messages, userInput, message])
        } catch (error) {
            console.error(error)
            return 'Oops, something went wrong'
        }
    }

    function deleteChatbox(index) {
        letnewMessages = [...messages]
        newMessages.splice(index, 2)
        fetch('http://localhost:4000/delete', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 
                input: messages[index], 
                output: messages[index + 1] 
            })
        })
        setMessages(newMessages)
    }

    useEffect(() => {
        fetch('http://localhost:4000/get', {
            .then(res => res.json())
            .then(data => {
                let newMessages = []
                for (let i = 0; i < data.length; i++) {
                    newMessages.push(data[i].input)
                    newMessages.push(data[i].response)
                }
                setMessages(newMessages)
            })
    }, [])

    return (
        <div id="chat">
            <form onSubmit={(e) => e.preventDefault()}>
                <h2>Ask Me A Question</h2>
                <input
                    type="text"
                    name='userInput'
                    id="userQuestion"
                    placeholder="What would you like to ask?"
                    onChange={(e) => setInput(e.target.value)}
                />
                <button
                    type="submit" onClick={getResponse}>submit</button>
            </form>
            {
                messages.map((text, index) => (
                    <dive key ={index} className="chatbox">
                        {index % 2 == 0 && <button className="x" }
                        <p>{text}</p>
            }
        </div>
    )