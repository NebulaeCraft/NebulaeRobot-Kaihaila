import { AppCommand, AppFunc, BaseSession } from 'kbotify';

class jrrpMenu extends AppCommand {
  code = 'jrrp';
  trigger = '今日人品';
  help = '今日人品';

  intro = '今日人品';
  func: AppFunc<BaseSession> = async (session) => {
    session.send(() => (Math.random()*100).toFixed(0).toString());
  };
}

export const jrrp = new jrrpMenu();

