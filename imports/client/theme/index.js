import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import { fade } from 'material-ui/utils/colorManipulator';
import { Colors } from './colors';

export const Theme = getMuiTheme(Object.assign({}, darkBaseTheme, {
  palette: {
    primary1Color: fade(Colors.app.seafoam, 0.3),
    primary2Color: Colors.app.green,
    primary3Color: Colors.app.darkGrey,
    accent1Color: Colors.app.blue,
    accent2Color: Colors.app.purple,
    accent3Color: Colors.grey500,
    textColor: Colors.textColor,
    alternateTextColor: Colors.white,
    canvasColor: Colors.lightBlack,
    borderColor: Colors.grey300,
    disabledColor: fade(Colors.darkBlack, 0.3),
    pickerHeaderColor: Colors.app.pink,
    clockCircleColor: fade(Colors.darkBlack, 0.07),
    shadowColor: Colors.fullBlack,
  },
}));
