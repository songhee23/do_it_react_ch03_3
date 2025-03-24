module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  safelist: [{pattern: /^line-clamp-(\d+)$/}],
  /*
  -> line-clamp로 시작하는 클래스 이름을 
  동적으로 조합하더라고 정상적으로 동작하도록 
  트리쉐이킹 대상에서 제거하는 코드..?
  */
  plugins: [require('@tailwindcss/line-clamp'), require('daisyui')],
}

