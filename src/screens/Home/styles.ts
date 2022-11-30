import { StyleSheet } from "react-native";
import { THEME } from "../../styles/theme";


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.colors.gray[700],
    paddingTop: 35,
  },
  head: {
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    flex: 1,
    backgroundColor: THEME.colors.backGround,
  },
  context: {
    marginHorizontal: 24,
    flexDirection: 'row',
    marginTop: -27,
    alignItems: 'center',
  },
  input: {
    flex: 1,
    backgroundColor: THEME.colors.gray[500],
    borderColor: THEME.colors.gray[700],
    height: 54,
    borderWidth: 1,
    borderRadius: 6,
    padding: 10,
    color: THEME.colors.gray[100],
  },
  btnAdd: {
    width: 54,
    height: 54,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: THEME.colors.blue['dark'],
    borderRadius: 6,
    marginLeft: 4
  },
  countCreated: {
    marginHorizontal: 24,
    marginTop: 32,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  vstackQtds: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  txtCriada: {
    fontFamily: 'Inter_700Bold',
    fontSize: 14,
    color: THEME.colors.blue['light'],
    marginRight: 8

  },
  txtConcluidas: {
    fontFamily: 'Inter_700Bold',
    fontSize: 14,
    color: THEME.colors.purple['light'],
    marginRight: 8
  },
  circuloQtds: {
    width: 25,
    height: 19,
    borderRadius: 999,
    backgroundColor: THEME.colors.gray[400],
    alignItems: 'center',
    justifyContent: 'center'

  },
  txtQtds: {
    color: THEME.colors.gray[200],

  },
  flatList: {
    marginTop: 20,

  },
  separator: {
    marginTop: 20,
    marginHorizontal: 24,
    height: 1,
    backgroundColor: THEME.colors.gray[400],
  },
  listEmpty: {
    paddingTop: 48,
    alignItems: 'center',
  },
  textDark: {
    paddingTop: 16,
    fontFamily: 'Inter_700Bold',
    fontSize: 14,
    fontStyle: 'Bold',
    lineHeight: 20,
    color: THEME.colors.gray[300]
  },
  textLight: {
    fontFamily: 'Inter_400Regular',
    lineHeight: 20,
    fontSize: 14,
    color: THEME.colors.gray[300]
  },
  bodyList: {
    height: 64,
    marginHorizontal: 24,
    backgroundColor: THEME.colors.gray[400],
    marginBottom: 8,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  listCheckBox: {
    backgroundColor: THEME.colors.gray[400],
    width: 46
  },
  vwListTexto: {
    flex: 1,
    justifyContent: 'center'

  },
  listTexto: {
    textAlign: 'justify',
    color: THEME.colors.gray[100]
  },
  listTextoConcluido: {
    textDecorationLine: 'line-through',
    textAlign: 'justify',
    color: THEME.colors.gray[300]
  },

  listbtnExcluir: {
    backgroundColor: THEME.colors.gray[400],
    width: 46
  },
  listCheckBoxBtn: {
    flex: 1,
    backgroundColor: THEME.colors.gray[400],
  },
  iconCheck: {
    color: THEME.colors.blue['light'],
  },
  iconChecked: {
    color: THEME.colors.purple['dark'],
  },
  listDeleteBtn: {
    flex: 1,
    backgroundColor: THEME.colors.gray[400],
  },
  iconDelete: {
    color: THEME.colors.gray[300]
  }
})