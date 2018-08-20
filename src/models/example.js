export default {

  namespace: 'example',

  state: {
    monster: [
      {
        name: '八神庵',
        hp: 220,
        attack: [{
          name: '八稚女',
          power: 52,
        }, {
          name: '八酒杯',
          power: 43,
        }, {
          name: '鬼燒',
          power: 46,
        }]
      }, {
        name: '草薙京',
        hp: 187,
        attack: [{
          name: '九傷',
          power: 31,
        }, {
          name: '百八拾弐式',
          power: 49,
        }, {
          name: '轢鉄',
          power: 34,
        }]
      }, {
        name: '二階堂紅丸',
        hp: 190,
        attack: [{
          name: '雷靭拳',
          power: 49,
        }, {
          name: '超級閃電踢',
          power: 39,
        }, {
          name: '雷光拳',
          power: 42,
        }]
      }, {
        name: '不知火舞',
        hp: 194,
        attack: [{
          name: '鼯鼠之舞',
          power: 48,
        }, {
          name: '花蝶扇',
          power: 33,
        }, {
          name: '超必殺忍蜂',
          power: 36,
        }]
      }, {
        name: 'KOF98',
        hp: 182,
        attack: [{
          name: '龍聯打',
          power: 47,
        }, {
          name: '神龍飛舞腳',
          power: 43,
        }, {
          name: '食肉饅',
          power: 30,
        }]
      }, {
        name: '陳可漢',
        hp: 184,
        attack: [{
          name: '鐵球大暴走',
          power: 46,
        }, {
          name: '鐵球大迴轉',
          power: 33,
        }, {
          name: '鐵球大壓殺',
          power: 40,
        }]
      }, {
        name: '雷歐娜',
        hp: 197,
        attack: [{
          name: '旋轉火花',
          power: 50,
        }, {
          name: 'V字金鋸',
          power: 39,
        }, {
          name: '死亡終結地獄',
          power: 43,
        }]
      },
    ],
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
  },

  reducers: {
    // fight(state){
    //   return{};
    // },

    save(state, action) {
      return { ...state, ...action.payload };
    },
  },
};
