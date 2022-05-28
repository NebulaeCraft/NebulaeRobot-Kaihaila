import { bot } from './init/client';

import { echoAll } from './commands/echo/echo.all';
import { echoMenu } from './commands/echo/echo.menu';
import { echoKmd } from './commands/echo/echo.kmd.app';
import { jrrp } from './commands/func/func.jrrp';
import { status } from './commands/nebulae/nebulae.status';

var bunyan = require('bunyan');
var log = bunyan.createLogger({name: "myapp"});
log.info("hi");

bot.logger.debug('system init success1');


bot.addCommands(echoMenu);
bot.addCommands(echoKmd);
bot.addCommands(status);
bot.addCommands(echoAll);
bot.addCommands(jrrp);


bot.connect();

bot.logger.debug('system init success');

bot.messageSource.on('message', (e) => {
    bot.logger.debug(`received:`, e);
});