import localFont from 'next/font/local'

export const segoeUI = localFont({
  src: [
    {
      path: '../public/fonts/segoe-ui.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/segoe-ui-bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-segoe'
})
