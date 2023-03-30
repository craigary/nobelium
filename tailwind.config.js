const BLOG = require('./blog.config')

module.exports = {
  content: ['./pages/**/*.js', './components/**/*.js', './layouts/**/*.js'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        day: {
          DEFAULT: BLOG.lightBackground || '#ffffff'
        },
        night: {
          DEFAULT: BLOG.darkBackground || '#111827'
        }
      },
      fontFamily: {
        sans: [
          '"IBM Plex Sans"',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          '"Noto Sans"',
          '"Helvetica Neue"',
          'Helvetica',
          '"Nimbus Sans L"',
          'Arial',
          '"Liberation Sans"',
          '"PingFang SC"',
          '"Hiragino Sans GB"',
          '"Noto Sans CJK SC"',
          '"Source Han Sans SC"',
          '"Source Han Sans CN"',
          '"Microsoft YaHei"',
          '"Wenquanyi Micro Hei"',
          '"WenQuanYi Zen Hei"',
          '"ST Heiti"',
          'SimHei',
          '"WenQuanYi Zen Hei Sharp"',
          'sans-serif'
        ],
        serif: [
          '"Source Serif"',
          'ui-serif',
          'Georgia',
          '"Nimbus Roman No9 L"',
          '"Songti SC"',
          '"Noto Serif CJK SC"',
          '"Source Han Serif SC"',
          '"Source Han Serif CN"',
          'STSong',
          '"AR PL New Sung"',
          '"AR PL SungtiL GB"',
          'NSimSun',
          'SimSun',
          '"TW-Sung"',
          '"WenQuanYi Bitmap Song"',
          '"AR PL UMing CN"',
          '"AR PL UMing HK"',
          '"AR PL UMing TW"',
          '"AR PL UMing TW MBE"',
          'PMingLiU',
          'MingLiU',
          'serif'
        ],
        noEmoji: [
          '"IBM Plex Sans"',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'sans-serif'
        ]
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
