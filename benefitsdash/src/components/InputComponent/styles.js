import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100%',
  },
  name: {
    gridColumn: '1 / 5',
    gridRow: '1 / 2',

    border: 'none',
    outline: 'none',
  },
  cpf: {
    gridColumn: '1 / 2',
    gridRow: '2 / 3',
  },
  admitDate: {
    gridColumn: '2 / 3',
    gridRow: '2 / 3',
  },
  email: {
    gridColumn: '3 / 5',
    gridRow: '2 / 3',
  },
  weight: {
    gridColumn: '1 / 2',
    gridRow: '3 / 4',
  },
  height: {
    gridColumn: ' 2 / 3',
    gridRow: '3 / 4',
  },
}));
