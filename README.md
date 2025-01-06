## Setup The Bot
Please read the .env.example file, create a .env file, and provide all credentials. We will use PM2 to start the bot. If the bot crashes for any reason, it will be restarted automatically. If you make changes to the file, the bot will be automatically reloaded to save the changes.  
---------------  
**Install Node Packages**
```
node install
```  
**Install PM2 Globally** 
```
npm install pm2@latest -g
```  
**Start the Bot Permanently**
```
pm2 start ecosystem.config.cjs
pm2 startup
pm2 save
```