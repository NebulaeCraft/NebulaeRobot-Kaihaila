import { bot } from './init/client';
import { echoAll } from './commands/echo/echo.all';
import { echoMenu } from './commands/echo/echo.menu';
import { echoKmd } from './commands/echo/echo.kmd.app';
import { jrrp } from './commands/func/func.jrrp';
import { status } from './commands/nebulae/nebulae.status';
import { info } from './commands/func/func.info';
import { hitokoto } from './commands/func/func.hitokoto';

// let logger = require('bunyan').createLogger({ name: "NebulaeRobot", level: 'debug' });
let logger = require('bunyan').createLogger({ name: "NebulaeRobot" });


bot.addCommands(echoMenu);
bot.addCommands(echoKmd);
bot.addCommands(status);
bot.addCommands(echoAll);
bot.addCommands(jrrp);
bot.addCommands(info);
bot.addCommands(hitokoto);
bot.addAlias(status, '状态', '服务器');
bot.addAlias(hitokoto, '一言', '一句话');


// bot.processMsg = (msg) => {
//     let content = msg.content;
//     if (content.startsWith('#')) {
//         content = content.substr(1);
//     }
//     let args = content.split(' ');
//     let command = args.shift();
//     return [command, ...args] as void | string[];
// }


bot.connect();

logger.debug('system init success');


bot.messageSource.on('message', (e) => {
    logger.debug(`received:`, e);
});