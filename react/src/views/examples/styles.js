export const styles = theme => ({
    cropContainer: {
      position: 'relative',
      width: '100%',
      height: 200,
      background: '#333',
      [theme.breakpoints.up('sm')]: {
        height: 400,
      },
    },
    cropButton: {
      position: 'relative',
      flexShrink: 0,
      margin: 16,
      marginLeft: 100,
    },

    Button: {
      // position: 'relative',
      flexShrink: 0,
      margin: 16,
      marginLeft: 40,
    },
    controls: {
      // marginLeft: 80,
      padding: 16,
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'stretch',
      [theme.breakpoints.up('sm')]: {
        flexDirection: 'row',
        alignItems: 'center',
      },
    },
    inputimage: {
      marginLeft: 10,
      padding: 16,
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'stretch',
      [theme.breakpoints.up('sm')]: {
        flexDirection: 'row',
        alignItems: 'center',
      },
    },

    
    outputimage: {
      display: 'flex',
      marginLeft: 200,
      padding: 16,
      flex: '1',
      position: 'relative',
      alignItems: 'center',
    },
    sliderLabel: {
      [theme.breakpoints.down('xs')]: {
        minWidth: 65,
      },
    },
    slider: {
      padding: '22px 0px',
      marginLeft: 16,
      [theme.breakpoints.up('sm')]: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: '0 16px',
      },
    },
  })
  