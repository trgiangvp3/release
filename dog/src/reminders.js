const bot = require('bbot')

bot.global.direct(/remind ((#[a-z0-9]+)|(@[a-zA-Z0-9._]+)) (.+)/,
    async (b) => {
        const remindUser = b.match[1].substr(1) ;
        const a = b.bot.adapters.message.api.get('users.info', { username: remindUser });
        const confirmUsername = await a.then(r => {
            return r.user.username;
        }).catch((err) => {
            console.error(err);
            return '--notfound--';
        });        

        if (confirmUsername !== remindUser) {
            return b.respond(`Sorry I can't recognize the target user '${remindUser}', please check it out!`);
        } else {
            return b.respond(`OK, I will add a reminder for '${remindUser}' as you wished!`);
        }
    }, {
        id: 'reminder'
    })