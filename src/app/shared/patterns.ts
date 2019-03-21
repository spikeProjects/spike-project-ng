export const patterns = {
  password: /^(?=.*[0-9])(?=.*[a-zA-Z])[0-9A-Za-z\(\)`~!@#\$%\^&\*-_\+=\|/\\\{\}\[\]:;"'<>,\.\?]{8,20}$/,
  // password: /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,20}$/,
  // email: /^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/,
  email: /(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/,
  notAllowedEmailPattern:  /(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(qq.com|163.com|126.com|139.com|sohu.com|yeah.com|gmail.com|vip.sina.com|hotmail.com|tom.com|21cn.com)/,
  phone: /^1[0-9]{10}$/,

  letterAndNumber: /^$|^\w+$/,
  firstLetter: /^$|^[a-zA-Z].*$/,

  // 不允许的特殊字符
  special: /[(\ )(\~)(\!)(\@)(\#)(\$)(\%)(\^)(\&)(\*)(\()(\))(\-)(\_)(\+)(\=)(\[)(\])(\{)(\})(\|)(\\)(\;)(\:)(\')(\")(\,)(\.)(\/)(\<)(\>)(\?)(\)]+/g,
};

export const hourlyDefaultFormat = '%H:%M';

export const xAxisCommon = {
  'tick': {
    'useTimeInterval': false,
    'timeInterval': 'timeMinute',
    'interval': 10,
    'padding': 10,
    'timeFormat': '%x',
  },
  'grid': {
    'style': 'solid',
    'color': '#f0f3f7',
    'strokeWidth': 1,
  },
  'lineStyle': {
    'color': '#f0f3f7',
    'strokeWidth': 1,
  },
  'textStyle': {
    'color': '#c2c9d5',
    'foneSize': 12,
  },
};
