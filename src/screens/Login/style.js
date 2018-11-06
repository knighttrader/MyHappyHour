export default {
  container: {
    flex: 1,
    backgroundColor: 'red',
  },

  title: {
    container: {
      height: 250,
      flex: -1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      color: 'white',
      fontSize: 30,
    },
    boldText: {
      fontWeight: 'bold',
    },
  },

  forms: {
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    input: {
      borderWidth: 1,
      borderColor: 'white',
      width: 270,
      height: 45,
      color: 'white',
      paddingHorizontal: 20,
      marginVertical: 10,
      textAlign: 'center',
    },
  },

  buttons: {
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    innerContainer: {
      width: 270,
      height: 45,
      paddingHorizontal: 20,
      marginVertical: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },
    general: {
      container: {
        borderWidth: 1,
        borderColor: 'white',
        backgroundColor: 'red',
      },
      text: {
        color: 'white',
      },
    },
    block: {
      container: {
        backgroundColor: 'white',
      },
      text: {
        color: 'red',
      },
    },
  },
};
