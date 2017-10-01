import { colors as DefaultColors } from 'material-ui/styles';

export const Colors = Object.assign({}, DefaultColors, {
  social: {
    google: { red: 'rgba(219,90,60,1)' }, /* #db5a3c */
    facebook: { blue: 'rgba(59,89,152,1)' }, /* #3B5998 */
    twitter: { blue: 'rgba(64,153,255,1)' }, /* #4099FF */
    github: { green: 'rgba(52,208,88,1)' }, /* #34d058 */
  },
  app: {
    seafoam: 'rgba(0,205,190,.8)', /* #00cdbe */
    green: 'rgba(0,77,71,1)', /* #004d47 */
    pink: 'rgba(244, 61, 112, 1)', /* #f43d70 */
    blue: 'rgba(37, 142, 251, 1)', /* #258EFB */   //'rgba(49, 108, 233, 1)', /* #316ce9 */
    darkBlue: 'rgba(37, 51, 64, 1)', /* #253340 */
    purple: 'rgba(46, 53, 143, 1)', /* #2e358f */
    yellow: 'rgba(251, 200, 45, 1)', /* #fbc82d */
    darkGrey: 'rgba(70, 70, 70, 1)', /* #464646 */
    grey: 'rgba(168, 168, 170, 1)', /* #a8a8aa */
    lightGrey: 'rgba(221, 223, 226, .5)', /* #dddfe2 */
    white: 'rgba(250, 250, 250, 1)', /* #fafafa */
    black: 'rgba(18,18,18,1)', /* #121212 */
  },
});

Colors.textColor = Colors.app.white;
