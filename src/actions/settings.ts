import { Composer } from "telegraf";
import { saveLang } from "../libs/lang.js";
import {bot} from '../core/bot.js'
const composer = new Composer()


composer.hears("🇺🇿 O'zbek tili", async (ctx) => {
    await saveLang(ctx,'UZB')
})

composer.hears('🇷🇺 Русский язык',async (ctx) =>{
    await saveLang(ctx,'RUS')
})


bot.use(composer.middleware())