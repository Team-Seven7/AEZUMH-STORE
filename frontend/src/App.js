import Layout from './Components/Layout'
import GlobalStyles from './Styles/global'
import theme from './Styles/theme'
import { ThemeProvider } from 'styled-components'

function App() {
	return (
		<>
			<ThemeProvider theme={theme}>
				<GlobalStyles />
				<Layout />
			</ThemeProvider>
		</>
	)
}

export default App
