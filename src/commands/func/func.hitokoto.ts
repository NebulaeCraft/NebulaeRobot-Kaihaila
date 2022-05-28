import { AppCommand, AppFunc, BaseSession, Card } from 'kbotify';
import axios from 'axios';

class htkt extends AppCommand {
    code = 'hitokoto';
    trigger = 'hitokoto';
    help = 'hitokoto';

    intro = 'hitokoto';
    func: AppFunc<BaseSession> = async (session) => {

        axios.get('https://v1.hitokoto.cn')
            .then(({ data }) => {
                session.sendCard(new Card().addText(data.hitokoto).toString());
            })
            .catch(console.error)
    };
}

export const hitokoto = new htkt();

