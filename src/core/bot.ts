import {Context,Telegraf} from 'telegraf'
import {sequelize} from './db.js'

interface SessionData {
    heyCounter:number
}

interface BotContext extends Context {
    session?:SessionData
}

const token = String(process.env.BOT_TOKEN)
export const bot = new Telegraf(token)

const start = async() => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
    } catch (error) {
        console.log('DB error')
        console.log(error)
    }
}

start()

bot.launch().then(()=> {
    console.log("Bot is starting")
})