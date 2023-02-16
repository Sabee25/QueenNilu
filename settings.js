/*
===================================================================================================
💃 𝗤𝘂𝗲𝗲𝗻 𝗡𝗶𝗹𝘂 𝗕𝗼𝘁 𝗠𝗱 💃
   ____                           _   _ _ _       
  / __ \                         | \ | (_) |      
 | |  | |_   _  ___  ___ _ __    |  \| |_| |_   _ 
 | |  | | | | |/ _ \/ _ \ '_ \   | . ` | | | | | |
 | |__| | |_| |  __/  __/ | | |  | |\  | | | |_| |
  \___\_\\__,_|\___|\___|_| |_|  |_| \_|_|_|\__,_|
                                                  
                                                  BY Janiya
===================================================================================================
*/

const fs = require('fs')
const chalk = require('chalk')



//👇 if you need seen massage use " true "
global.READ_MASSAGE = 'false'
//👇 enable desable Girls Voice Reply
global.VOICE_REPLY =  'true'
// You Bots Owner Number 
global.owner = ['94758437638'] 
//👇 Your Caption ( Image Video )
global.cap = '© 𝙶𝙴𝙽𝙴𝚁𝙰𝚃𝙴𝙳 𝙱𝚈 ꜱᴀʙᴇᴇ ²⁰²³'
//👇 Do you want show time on your bio use "on" want desable use "off"
global.AUTO_BIO =  'off'
//👇 Inbox massage block PM block
global.INBOX_BLOCK =  'off'
//👇 Auto react 
global.AUTO_REACT =  'true'
//👇 Bad word Auto delete ( you must add bad words )
global.ANTI_BADWORD =  'true'
//👇 Your Bot Name
global.botnma =  'ᴛʜᴀᴀʀɪ ʙᴏᴛ' 
//👇 Your name
global.ownernma =  'ꜱᴀꜱꜱʜɪᴋᴀ' 
//👇 Sticker package name
global.packname =  'ᴛʜᴀᴀʀɪ ʙᴏᴛ' 
//👇 Sticker Author Name
global.author =  '_ꜱᴀꜱꜱʜɪᴋᴀ_' 
//👇 Kick And Auto Delete Group link Senders
global.antilink =  'false'
//👇 Inbox Block Massage 
global.INBOX_BLOCK_MSG = 'BLOCK !!!'
//👇 Owner React Imoji
global.OWNER_REACT =  '👼'
global.BAD_KICK_MSG = '*Bad word detect !*'
//👇 URL.button 1 name
global.BUTTON1 = 'ᴡʜᴀᴛꜱᴀᴘᴘ'
//👇 URL button 2 name
global.BUTTON2 = 'ᴛɪᴋᴛᴏᴋ'
//👇 Button 1 url 
global.BUTTON1_URL = 'contact us https://api.whatsapp.com/send?phone=+94758437638'
//👇 Button 2 url
global.BUTTON2_URL = 'tiktok.com/@wikz_sabee'
//👇 Your Add Massage 
global.ADD_MSG = '*ᴡᴇʟᴄᴏᴍᴇ ⚡𝐓𝐡𝐚𝐚𝐫𝐢 𝐌𝐮𝐬𝐢𝐜 𝐇𝐮𝐛🎧🪀🎀' 
//👇 Your Kick Massage 
global.KICK_MSG = '*✅ Success Remove from Group*' 
//👇 Song Download Massage 
global.SONG_DOWN = '```⬇️ ꜱᴀʙᴇᴇ Downloading Your Song...```' 
//👇 Song Uplode massage 
global.SONG_UP = '```⬆️ꜱᴀʙᴇᴇ Uploding Your Song...```'
//👇 212 Number block
global.NUMBER_212_BLOCK = 'true'
//👇 Menu imoji 
global.MENU_IMOJI = '👸|🪄'
//👇 Your time zone ( use correct time zone )
global.TIME_ZONE = process.env.TIME_ZONE || 'Asia/Colombo'
//👇 Removebg Api key
global.REMOVE_BG_API = ''
//👇 Pron Video Download 
global.SEX_VIDEO_DOWNLOAD = process.env.SEX_VIDEO_DOWNLOAD || 'true'
//👇 Change Bot Language (English-' EN ', Sinhala , ' SI ' , Tamil - ' TL ')
global.LANG = 'SI'
//Alive logo
global.alivelogo = process.env.ALIVE_IMAGE || `https://ibb.co/R0kHQxf`
//👇 Alive message
global.ALIVE_MESSAGE = process.env.ALIVE_MESSAGE || `𝚜𝚊𝚋𝚎𝚎 𝚒𝚜 𝚊𝚕𝚒𝚟𝚎 𝚗𝚘𝚠`
//👇 Welcome Mesaage
global.WELCOME = process.env.WELCOME || `𝚠𝚎𝚕𝚌𝚘𝚖𝚎 ⚡𝐓𝐡𝐚𝐚𝐫𝐢 𝐌𝐮𝐬𝐢𝐜 𝐇𝐮𝐛🎧🪀🎀`
//👇 welcome image 
global.WELCOME_IMAGE = process.env.WELCOME_IMAGE || `https://ibb.co/xJFz4FV`
//👇 Goodbye message 
global.GOODBYE = process.env.GOODBYE || ``
//👇 Good bye image
global.GOODBYE_IMAGE = process.env.GOODBYE_IMAGE || ``
//👇 Send Welcome ( true or false )
global.SEND_WELCOME = process.env.SEND_WELCOME || false
//👇 Send block command message (true or false )
global.BLOCK_CMD_MESSAGE_SEND = false
//👇 Desable PM Block
global.NO_BLOCK = ["94758437638"]







//MORE
global.zenzapi = '01ABEB1E11'
global.tiktokthub = 'https://telegra.ph/file/d83742c9e0a076364184e.jpg'
//other
global.pemilik = ['94767438882'] //Change  it , ඔබට කැමති නම් වෙනස් කරන්න
global.premium = ['94767438882'] //Change it ඔබට කැමතිනම් වෙනස් කරන්න 
global.pengguna = '_Janiya_' // Your name ඔබේ නම 
global.sessionName = 'session'
global.prefix = ['#','!','.'] 
global.sp = '🔵'


global.mess = {
    success: '✅ Done!',
    admin: '*Only admins can use this command !*',
    botAdmin: '*Please admin the bot first !*',
    owner: '*Sorry, this command is only for the owner !*',
    group: '*This command can only be used in groups !*',
    private: '*This command can only be used in Inbox !*',
    bot: '*This command can only be used by bot number !*',
    wait: '*♲ Please Wait ...*',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
    BLOCK_CMD_MSG : '*⚠️ This Command is Block By Owner*',
    BLOCK : '',
    UNBLOCK : '',
    KICK : '',
    ADD : '',
    LEAVE : '',
    PROMOTE : '',
    DEMOTE : ''
}
global.limitawal = {
    premium: "Infinity", 
    free: 90 
}
    global.rpg = {
        darahawal: 100,
        besiawal: 15,
        goldawal: 10,
        emeraldawal: 5,
        umpanawal: 5,
        potionawal: 1
     }    




//global api
global.fbapi = 'dd79-1aeb-21a3'
global.APIs = {
	zenz: 'https://zenzapi.xyz', 
}
global.APIKeys = {
	'https://zenzapi.xyz': '01ABEB1E11', //Kalau habis beli sendiri
}

global.thumb = fs.readFileSync('./Media/image/Nilu.jpg')
global.alivelogo = `https://te.legra.ph/file/3e57249993356ba15109f.jpg`
global.imgalive = fs.readFileSync('./Media/image/Nilu.jpg')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
