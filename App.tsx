import { StatusBar } from 'react-native'
import { Home } from './src/screens/Home';
import { useFonts, Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter'
import { Loading } from './src/components/Loading';
import { NativeBaseProvider } from 'native-base';
import { THEME } from './src/styles/theme';


export default function App() {
  const [fontsLoaded] = useFonts({ Inter_400Regular, Inter_700Bold });

  return (
    <>
      <NativeBaseProvider theme={THEME} >
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
        {fontsLoaded ? <Home /> : <Loading />}
      </NativeBaseProvider>
    </>
  )
}