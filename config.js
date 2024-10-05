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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "false" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "false" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 1
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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_17_16_10_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjUwLFxuICAgICAgICAyNyxcbiAgICAgICAgMTY0LFxuICAgICAgICAzMixcbiAgICAgICAgMTE2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDczLFxuICAgICAgICAxMTEsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjA2LFxuICAgICAgICAyNCxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxODMsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNDksXG4gICAgICAgIDcsXG4gICAgICAgIDIzMixcbiAgICAgICAgNCxcbiAgICAgICAgMTUsXG4gICAgICAgIDMwLFxuICAgICAgICA3MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzMsXG4gICAgICAgIDIxMixcbiAgICAgICAgMzksXG4gICAgICAgIDExOSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTQxLFxuICAgICAgICAzMCxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNyxcbiAgICAgICAgNzYsXG4gICAgICAgIDUxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDY5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMzgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTkxLFxuICAgICAgICAxOTgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNzksXG4gICAgICAgIDU5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgOTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTUsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTk0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDY2LFxuICAgICAgICA5MyxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMjMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgOCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMzYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDI3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDI4LFxuICAgICAgICA2NixcbiAgICAgICAgNjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNDcsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTkzLFxuICAgICAgICA2MixcbiAgICAgICAgMTg1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDEsXG4gICAgICAgIDg5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDYwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTI1LFxuICAgICAgICA1NyxcbiAgICAgICAgNDIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgOTMsXG4gICAgICAgIDU4LFxuICAgICAgICAxNzksXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNDAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTMwLFxuICAgICAgICAyLFxuICAgICAgICAxODksXG4gICAgICAgIDU3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDgsXG4gICAgICAgIDI5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTkzLFxuICAgICAgICAxOTksXG4gICAgICAgIDE2OSxcbiAgICAgICAgNjUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjUwLFxuICAgICAgICA5NixcbiAgICAgICAgMjM1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIzMixcbiAgICAgICAgOCxcbiAgICAgICAgMjMxLFxuICAgICAgICA3MixcbiAgICAgICAgMzgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjcsXG4gICAgICAgIDYsXG4gICAgICAgIDYyLFxuICAgICAgICA5LFxuICAgICAgICA1OCxcbiAgICAgICAgMjEsXG4gICAgICAgIDEyLFxuICAgICAgICA2NyxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMDhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNjQsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjI2LFxuICAgICAgICA4OSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxOTcsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNzMsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjAsXG4gICAgICAgIDYzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDYwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgOCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjAxLFxuICAgICAgICA1MCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTY1LFxuICAgICAgICA1OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDgzXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIwLFxuICAgICAgICA3NCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxOTksXG4gICAgICAgIDE5MixcbiAgICAgICAgNzgsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTM0LFxuICAgICAgICAxMDksXG4gICAgICAgIDI0OSxcbiAgICAgICAgODUsXG4gICAgICAgIDQwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDMxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNzksXG4gICAgICAgIDE0NixcbiAgICAgICAgNjcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNDksXG4gICAgICAgIDI3LFxuICAgICAgICA3MCxcbiAgICAgICAgODgsXG4gICAgICAgIDY2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjQ5LFxuICAgICAgICA5MCxcbiAgICAgICAgMjAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjExLFxuICAgICAgICAxNjEsXG4gICAgICAgIDkzLFxuICAgICAgICA4OCxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDQwLFxuICAgICAgICAyNDksXG4gICAgICAgIDIyMixcbiAgICAgICAgMTkyLFxuICAgICAgICAyMCxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMSxcbiAgICAgICAgNjEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTEzLFxuICAgICAgICA3NSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE4NixcbiAgICAgICAgNzMsXG4gICAgICAgIDg3LFxuICAgICAgICA5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMjEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiMVJHbzcxQ0N3MXBoUlpMN0tsbk16N1Y2Z3dBS0VEQUFiaDVjTEJ5NzF3az1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiQTk0X1FlNWdRbmFfQ1FrcDhTMFBLZ1wiLFxuICBcInBob25lSWRcIjogXCJmNzAxODAwZC1iYjBjLTQwYTQtYTI1NS1iN2U1MjRhNGQzZTJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTg5LFxuICAgICAgMTA5LFxuICAgICAgMTA4LFxuICAgICAgMTEwLFxuICAgICAgMTg0LFxuICAgICAgNjIsXG4gICAgICAxNzUsXG4gICAgICA4MyxcbiAgICAgIDE4NixcbiAgICAgIDEwMixcbiAgICAgIDExMSxcbiAgICAgIDI0NyxcbiAgICAgIDQ4LFxuICAgICAgODUsXG4gICAgICAxNTcsXG4gICAgICAyMjUsXG4gICAgICAxNjMsXG4gICAgICAyNSxcbiAgICAgIDE3OCxcbiAgICAgIDEwMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNTMsXG4gICAgICA2MSxcbiAgICAgIDc5LFxuICAgICAgMTA0LFxuICAgICAgMjEsXG4gICAgICAyNTQsXG4gICAgICAxNTEsXG4gICAgICAxNzYsXG4gICAgICAxNSxcbiAgICAgIDE0NSxcbiAgICAgIDE5MSxcbiAgICAgIDI5LFxuICAgICAgMjU0LFxuICAgICAgNzksXG4gICAgICAxNixcbiAgICAgIDIwNyxcbiAgICAgIDIzOSxcbiAgICAgIDIxNSxcbiAgICAgIDEwOSxcbiAgICAgIDI5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlZMUDNEVjNYXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTU2ODQ5MTAyODA6MTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE5NTE2ODE3OTUyODA4OjEwQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xyQnBhVUNFUFhGZ0xnR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiZDhrbkdOazJWZ1pEUFdMRzNkTklGbENDd01OUUU4ZUN1UU1ZZklHRGpoQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJNK2xIQVBuajNFTVRaV2FYWDIwUW4vdGs2dUpkUTdXQS8xSGw4R1BLWHI3WnZxZXRGdzJ6Y2p6WkdFOXhxT3c5bWw4SE1FYnE3c3RMemdKUzIyNlFEdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI0WkpmaUpCV1IwemlyOC9lNVk2QTA0UHFrdDcyYXhZNHR5eDI2aStCTTFvcW1YM2YvWUcrbTFQQk1WVW9mSXNDTDYyZEZObzh2a0EwZFNxbi9lUkJDUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTU2ODQ5MTAyODA6MTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICA2LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjgwNjIyMDEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFJVWpcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUlVai5qc29uIjogIntcImtleURhdGFcIjpcIklMVFpxU3dWak9xN3NzNk53cWpuZDh6L1ZqOXVMWlBzdGx6M0kzN0dxYjA9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NjE1MDgwMTE5LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "~O",
  packname: process.env.PACK_NAME || "~O",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


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
