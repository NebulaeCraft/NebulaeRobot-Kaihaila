import { AppCommand, AppFunc, BaseSession, Card } from 'kbotify';

class EchoAll extends AppCommand {
    code = 'all';
    trigger = 'all';
    help = '`.echo all 时间`';
    intro = '在指定时间内复读全部文字';
    func: AppFunc<BaseSession> = async (session) => {
        session.setTextTrigger('', 6e4, (msg) => session.send(msg.content));
    };
}


export const echoAll = new EchoAll();