import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { MongoCLient } from 'mongodbb'

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 4000;

const mongourl = process.env.MONGO_URL 
const mongoclient = new

function Chat() {
    async function getResponse() {

        const response = await fetch('http://localhost:4000/chat', {
            body: JSON.stringify({ userInput })
        })
        if (!response.ok) {
            throw new Error('Oops, something went wrong!')
        }
        const { message } = await response.json()
        fetch('http://localhost:4000/add', {
            method: 'POST',
            headers: {
                'Content_Type': 'application/json'
            },
            body: JSON.stringify({ input: userInput, response: message })
        })
        setMessages({...messages, userInput, response: message })
    } catch (error) {
        console.error(error)
        return 'Oops, something went wrong!'
    }
}