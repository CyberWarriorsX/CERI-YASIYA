/**
 Copyright (C) 2023.
 Licensed under the  GPL-3.0 License;
 You may not use this file except in compliance with the License.
 It is supplied in the hope that it may be useful.
 * @project_name : FORZEN-MD
 * @author : YASIYA-OFC <https://github.com/yasiyaofc>
 * @description : FORZEN-MD,A Multi-functional whatsapp bot.
 * @version 0.0.1
 **/


const os = require('os')
const moment = require("moment-timezone")
const fs = require("fs")
const Config = require('../config')
let { fancytext, tlang, tiny, runtime, formatp, botpic, prefix, sck1 } = require("../lib");
const long = String.fromCharCode(8206)
const readmore = long.repeat(4001)
const Secktor = require('../lib/commands')

    //---------------------------------------------------------------------------
Secktor.cmd({
            pattern: "list",
            alias: ["menu"],
            desc: "menu list",
            category: "general",
            react: "📑",
            filename: __filename
        },
        async(Void, citel, text) => {
            const { commands } = require('../lib');
            if (text.split(" ")[0]) {
                let arr = [];
                const cmd = commands.find((cmd) => cmd.pattern === (text.split(" ")[0].toLowerCase()))
                if (!cmd) return await citel.reply("*❌No Such commands.*");
                else arr.push(`*🍁Command:* ${cmd.pattern}`);
                if (cmd.category) arr.push(`*🧩Category:* ${cmd.category}`);
                if (cmd.alias) arr.push(`*🧩Alias:* ${cmd.alias}`);
                if (cmd.desc) arr.push(`*🧩Description:* ${cmd.desc}`);
                if (cmd.use) arr.push(`*〽️Usage:*\n \`\`\`${prefix}${cmd.pattern} ${cmd.use}\`\`\``);
                return await citel.reply(arr.join('\n'));
            } else {
                const cmds = {}
                commands.map(async(command, index) => {
                    if (command.dontAddCommandList === false && command.pattern !== undefined) {
                        if (!cmds[command.category]) cmds[command.category] = []
                        cmds[command.category].push(command.pattern)
                    }
                })
                const time = moment(moment())
                    .format('HH:mm:ss')
                moment.tz.setDefault('Asia/KOLKATA')
                    .locale('id')
                const date = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
                let total = await sck1.countDocuments()
                let str = `╭────《 ` + fancytext(Config.ownername.split(' ')[0], 58) + ` 》─────⊷\n`
                str +=
                    '```' + `│ ╭──────────────◆
│ │  _*FORZEN-MD SUP GROUP BOT*_
│ │ 🤵‍♂️ USER:- ${citel.pushName}
│ │ 🕹️ PREFIX:- [ ${prefix} ]
│ │ 🤹‍♂️ OWNER:- ${Config.ownername}
│ │ 🔌 PLUGINS:- ${commands.length}
│ │ 🪄 USERS:- ${total}
│ │ ⌚ UPTIME:- ${runtime(process.uptime())}
│ │ 📟 MEM:- ${formatp(os.totalmem() - os.freemem())}/${formatp(os.totalmem())}
│ ╰──────────────◆
╰───────────────⊷\n

╭────《 𝐅𝐎𝐑𝐙𝐄𝐍 𝐌𝐃 𝐃𝐄𝐓𝐀𝐈𝐋𝐒 》─────⊷
│ ╭──────────────◆
│ │ 💃🏼 CONTACT FOR DEVELOPERS :
│ │ ⛤ wa.me/+94760018892 ( DARK YASIYA )
│ │ ⛤ wa.me/+94740264767  ( INDUWARA )
│ │ ⛤ wa.me/+94705847200 ( DARK CHAMA )
│ │
│ │ ⚖️ YOU TUBE CHANNEL :
│ │ ⛤ https://youtube.com/@yasiya_yt
│ │ 
│ │ 🪀 WHATSAPP CHANNEL :
│ │ ⛤ https://whatsapp.com/channel/0029Va81UHiLikg0Hy7c9c1b
│ ╰──────────────◆
╰━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n
` + '```'

                for (const category in cmds) 
                {
                   str += `╭────🧙‍♂️ *${tiny(category)}* 🧙‍♂️\n` ;
                   if(text.toLowerCase() == category.toLowerCase()){ str = `╭─────❏ *${tiny(category)}* 🧙‍♂️\n` ;      
                        for (const plugins of cmds[category]) { str += `│🎋⃟💃🏼 ${fancytext(plugins,1)}\n` ; }
                        str += `╰━━━━━━━━━━━━━──⊷\n`  ;
                        break ;
                   }
                   else { for (const plugins of cmds[category]) { str += `│🎋⃟💃🏼 ${fancytext(plugins,1)}\n` ; }
                         str += `╰━━━━━━━━━━━━━━──⊷\n`  ; 
                   }
  
                }
                str+= `ㅤ\n`
                str+= `*_❄️ ғᴏʀᴢᴇɴ ᴍᴅ ᴡᴀ ᴜsᴇʀ ʙᴏᴛ ❄️_*\n`
                str+= `*_💃🏼 ᴅᴇᴠᴀʟᴏᴘᴇʀ ʙʏ ʏᴀsɪʏᴀ ᴏғᴄ 💃🏼_*`
                let buttonMessaged = {
                    image: { url: await botpic() },
                    caption: str
                };
                return await Void.sendMessage(citel.chat, buttonMessaged);
            }
        }
    )
    //---------------------------------------------------------------------------
Secktor.cmd({
            pattern: "help",
            desc: "help list",
            category: "general"
        },
        async(Void, citel) => {
            const { commands } = require('../lib');
            let str = `
╭━━〘 ` + fancytext(Config.ownername.split(' ')[0], 58) + ` 〙━━──⊷`
            str += `
┃ ⛥╭──────────────      
┃ ⛥│ User: ${citel.pushName}
┃ ⛥│ Theme: ${tlang().title}
┃ ⛥│ Prefix: ${prefix}
┃ ⛥│ Owner: ${Config.ownername}
┃ ⛥│ Commands: ${commands.length}
┃ ⛥│ Uptime: ${runtime(process.uptime())}
┃ ⛥│ Mem: ${formatp(os.totalmem() - os.freemem())}/${formatp(os.totalmem())}
┃ ⛥│  
┃ ⛥╰───────────
╰━━━━━━━━━━━──⊷\n`
for (let i = 0; i < commands.length; i++) 
{
     if(commands[i].pattern==undefined) continue
     str +=       `╭ ${i+1} *${fancytext(commands[i].pattern,1)}*\n` 
     if(commands[i].desc=undefined) commands[i].desc=""
     str += `╰➛ ${fancytext(commands[i].desc,1)}\n`
}
            return await Void.sendMessage(citel.chat, { image: { url: THUMB_IMAGE }, caption: str })
        }
    )
    //---------------------------------------------------------------------------
Secktor.cmd({
        pattern: "owner",
        desc: "To find owner number",
        category: "general",
        react: "🤹‍♂️",
        filename: __filename
    },
    async(Void, citel) => {
        const Config = require('../config')
        const vcard = 'BEGIN:VCARD\n' +
            'VERSION:3.0\n' +
            'FN:' + Config.ownername + '\n' +
            'ORG:;\n' +
            'TEL;type=CELL;type=VOICE;waid=' + owner[0] + ':+' + owner[0] + '\n' +
            'END:VCARD'
        let buttonMessaged = {
            contacts: { displayName: Config.ownername, contacts: [{ vcard }] },
            contextInfo: {
                externalAdReply: {
                    title: Config.ownername,
                    body: 'Touch here.',
                    renderLargerThumbnail: true,
                    thumbnailUrl: ``,
                    thumbnail: log0,
                    mediaType: 2,
                    mediaUrl: '',
                    sourceUrl: `https://wa.me/+` + owner[0] + '?text=Hii bro,I am ' + citel.pushName,
                },
            },
        };
        return await Void.sendMessage(citel.chat, buttonMessaged, {
            quoted: citel,
        });

    }
)

Secktor.cmd({
    pattern: "file",
    desc: "to get extact name where that command is in repo.\nSo user can edit that.",
    category: "general",
    react: "✨",
    filename: __filename
},
async(Void, citel, text) => {
 const { commands } = require('../lib');
 let arr = [];
        const cmd = commands.find((cmd) => cmd.pattern === (text.split(" ")[0].toLowerCase()))
        if (!cmd) return await citel.reply("*❌No Such commands.*");
        else arr.push(`*🍁Command:* ${cmd.pattern}`);
        if (cmd.category) arr.push(`*🧩Type:* ${cmd.category}`);
        if(cmd.filename) arr.push(`✨FileName: ${cmd.filename}`)
        return citel.reply(arr.join('\n'));


})
