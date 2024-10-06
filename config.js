const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "+2347017957896";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_12_37_10_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAxODksXG4gICAgICAgIDIxNCxcbiAgICAgICAgNjIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDU0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTg2LFxuICAgICAgICA1NyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTg2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDYxLFxuICAgICAgICAzNyxcbiAgICAgICAgOTMsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjIzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDkxLFxuICAgICAgICA4MixcbiAgICAgICAgMTQzLFxuICAgICAgICAxMzIsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTMzLFxuICAgICAgICAxMjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDI2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNjEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTI0LFxuICAgICAgICA0MSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxODcsXG4gICAgICAgIDg0LFxuICAgICAgICA5OCxcbiAgICAgICAgMTUxLFxuICAgICAgICA4NSxcbiAgICAgICAgMTQ5LFxuICAgICAgICA0NyxcbiAgICAgICAgMTAwLFxuICAgICAgICA3MyxcbiAgICAgICAgMjksXG4gICAgICAgIDIyLFxuICAgICAgICA1NSxcbiAgICAgICAgNjMsXG4gICAgICAgIDk4LFxuICAgICAgICA1LFxuICAgICAgICA4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTAzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDUyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDc0LFxuICAgICAgICAxODksXG4gICAgICAgIDEyOSxcbiAgICAgICAgOTYsXG4gICAgICAgIDM0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTEwLFxuICAgICAgICA5LFxuICAgICAgICAxOSxcbiAgICAgICAgNTEsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTQ2LFxuICAgICAgICA1MSxcbiAgICAgICAgMTAwLFxuICAgICAgICA0MCxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMyxcbiAgICAgICAgNDYsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgOTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE0LFxuICAgICAgICA1MyxcbiAgICAgICAgMjA1LFxuICAgICAgICA0MSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDc5LFxuICAgICAgICAxMTksXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxODUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTgxLFxuICAgICAgICA3MixcbiAgICAgICAgMTAxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjExLFxuICAgICAgICA5NyxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjQwLFxuICAgICAgICAyOCxcbiAgICAgICAgMjksXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTUyLFxuICAgICAgICAzNixcbiAgICAgICAgMjgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTEyLFxuICAgICAgICA1OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICA3NyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDM2LFxuICAgICAgICA5MyxcbiAgICAgICAgNTksXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTA1LFxuICAgICAgICAzLFxuICAgICAgICA1NixcbiAgICAgICAgMTU2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDc4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTMzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDk5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNDYsXG4gICAgICAgIDcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjQ1LFxuICAgICAgICA1NyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNDksXG4gICAgICAgIDkzLFxuICAgICAgICAyOSxcbiAgICAgICAgMTMxLFxuICAgICAgICA5NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1OCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxODQsXG4gICAgICAgIDM3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgOSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDUzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTI1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTI4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDM2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDk2LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyMixcbiAgICAgICAgICAzNixcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgOCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTEyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgODksXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA0MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTcsXG4gICAgICAgIDMxLFxuICAgICAgICAxMjYsXG4gICAgICAgIDg4LFxuICAgICAgICA2MSxcbiAgICAgICAgMTgsXG4gICAgICAgIDIwNixcbiAgICAgICAgMzYsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTIwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTM0LFxuICAgICAgICA3NyxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMTksXG4gICAgICAgIDk5LFxuICAgICAgICAxMjksXG4gICAgICAgIDEzNixcbiAgICAgICAgMjM5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE3MixcbiAgICAgICAgOTgsXG4gICAgICAgIDM4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDM0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjE4LFxuICAgICAgICA1MyxcbiAgICAgICAgMjEyLFxuICAgICAgICA0NixcbiAgICAgICAgMjM5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjQzLFxuICAgICAgICAyNDksXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDY3LFxuICAgICAgICA2NSxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMzksXG4gICAgICAgIDU0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjQsXG4gICAgICAgIDgzLFxuICAgICAgICAzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTY2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDQ3LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjVkK25uZzZ0eENaYUZya1pTMGt5RWNjUFFiSXJIbTZQZlcydHAzNC9OTmc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImJIeThFR1RDU1VPNXVHTnhRTDVQU2dcIixcbiAgXCJwaG9uZUlkXCI6IFwiMTI2OGY5MTEtOWRiZi00OGI2LWE2NzktNzJmNDhkMTllN2NiXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwLFxuICAgICAgMTAsXG4gICAgICA0NyxcbiAgICAgIDQwLFxuICAgICAgMTM2LFxuICAgICAgMTMsXG4gICAgICAzNCxcbiAgICAgIDExMCxcbiAgICAgIDE4LFxuICAgICAgMTIwLFxuICAgICAgMjQ2LFxuICAgICAgMjEyLFxuICAgICAgMTU0LFxuICAgICAgMjQ5LFxuICAgICAgMjQwLFxuICAgICAgMjYsXG4gICAgICAxOSxcbiAgICAgIDExMixcbiAgICAgIDE3MixcbiAgICAgIDI1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4OSxcbiAgICAgIDEyMixcbiAgICAgIDE1MSxcbiAgICAgIDE1OCxcbiAgICAgIDE3LFxuICAgICAgMTMsXG4gICAgICA1OSxcbiAgICAgIDkxLFxuICAgICAgMjQ5LFxuICAgICAgMTIzLFxuICAgICAgNTIsXG4gICAgICAxMDUsXG4gICAgICA2MyxcbiAgICAgIDg0LFxuICAgICAgNDgsXG4gICAgICAyNDgsXG4gICAgICA2NSxcbiAgICAgIDgyLFxuICAgICAgMTU1LFxuICAgICAgODZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQdXJ6NThCRU9xSWlyZ0dHQVFnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjJNdEtVUDNNZmpzeDYwVytVeWhvZWVvbndZQklaOVVuQmgvVGZycUx5QUU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiK1ljVTEyQTdSckxFY01TQzZPS0pRSU5iYkM2RFdxT2JQNUlYWEU0NGFlSDdTYnpYN0tYTmgwUWFUNE1PSmxFcHdXNjNaOXVIWHlQUVBJTmhIL2laQUE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiaFdYSW1xcDhnWE5NNWI0NUJlSWFITUswdUExRDZRa1FZWXpuUUs3K0NFdUx6YUF2eERlSjIySUljMGhVaGcrNTN0VU81ODNQSC9hS2o1ajRwNDBlREE9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ3MDE3OTU3ODk2OjEwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMzYxNTQ5NTE2MjI3NjA6MTBAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ3MDE3OTU3ODk2OjEwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI4MjE4MjIzLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQ3hHXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFDeEcuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJhMGwxY2JyK1dEWkxqVUZrUzFJaFpraXIxUFRNVkVQdlZ1L1RXT0xZNkVnPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjMzNDc0NzEyOSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQ3hILmpzb24iOiAie1wia2V5RGF0YVwiOlwiQWZ0VGVpMVJ1TStEaXdqbi8rYmYwdVpCNVNlK3YvUVR0OWJmVkNqWjVRQT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjozMzQ3NDcxMjksXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUN4SS5qc29uIjogIntcImtleURhdGFcIjpcImxiWGtHMEN2RU55cXB4OFpnU1dQTU01TmJCR2NndEROc0l2dVdKMUpEbG89XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MzM0NzQ3MTI5LFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzI0MDYzNzkxNTY4XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQ3hKLmpzb24iOiAie1wia2V5RGF0YVwiOlwiRXUzQzZxbmRtbml0Y2daNDdzK1JHOEZGalJPekFLTGRqb0hhb3FKZURVaz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjozMzQ3NDcxMzAsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUN4Sy5qc29uIjogIntcImtleURhdGFcIjpcInJOMnV4UWo4cGlraUxlL0NwWXRFYVJJcG02MUc1MU0xYUVlak0xQ3Vzelk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MzM0NzQ3MTMwLFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFDeEwuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJuWVN4SExaV2lFM2ZrNC9DMDRjYjh5SkttZUdUVVlreUlxblNBekdreUkwPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjMzNDc0NzEzMCxcImN1cnJlbnRJbmRleFwiOjQsXCJkZXZpY2VJbmRleGVzXCI6WzAsMSw0XX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFDeE0uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJEbE5YSUJ2RU9VcFhlY3plS2FzK21FbnYzLytMMDR2dWd3eG1kNHhzRFFnPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjMzNDc0NzEzMCxcImN1cnJlbnRJbmRleFwiOjQsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQ3hOLmpzb24iOiAie1wia2V5RGF0YVwiOlwidnFNaUZqZ0QxYWxuamlUTDdEZU55RkthSHlIajhFY0lNMU1wWHRUY3VQWT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjozMzQ3NDcxMzAsXCJjdXJyZW50SW5kZXhcIjo0LFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjQzNTMxNTQyODBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFDeE8uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJpczNFVHdWZTN1NmVDeWJvMTBseWdSTUM3a1RCTlBBZ1hCV0NZcTc4NW1zPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjMzNDc0NzEzMSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzI0MzUzMzc0NjM3XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQ3hQLmpzb24iOiAie1wia2V5RGF0YVwiOlwiV1Bzb1RrKzN6ck9oRUZiM3F0cGdoZnA5UW5kSTBFNUEyeWlxRFg3L2p3dz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjozMzQ3NDcxMzEsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUN4US5qc29uIjogIntcImtleURhdGFcIjpcIjZHeCs2UVVFWkJKVUlDeFFPNkprNnhwNVJmZXhyRUlRSEVnMk93RmtYcVU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MzM0NzQ3MTMxLFwiY3VycmVudEluZGV4XCI6MyxcImRldmljZUluZGV4ZXNcIjpbMCwyLDNdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUN4Ui5qc29uIjogIntcImtleURhdGFcIjpcInJZOHFWYkFhYVdjR1FYRE4zYXV6Vms2aHliTlhBc1pNZ25ZSSsxL1Y1NGs9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MzM0NzQ3MTMxLFwiY3VycmVudEluZGV4XCI6MyxcImRldmljZUluZGV4ZXNcIjpbMCwzXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjgyMTgyMTA1NDFcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "null",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "stark",
  packname: process.env.PACK_NAME || "Sbot🤖",
  botname : process.env.BOT_NAME  || "Sbot🤖",
  ownername:process.env.OWNER_NAME|| "Stark",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
