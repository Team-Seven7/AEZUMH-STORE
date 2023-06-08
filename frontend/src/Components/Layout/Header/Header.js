import styled from 'styled-components'
import {
	FlexAlignCSS,
	FlexCenterCSS,
	GridCenterCSS,
	WidthAutoCSS,
} from '../../../Styles/common'
import Navbar from './Components/Navbar'

function Header() {
	return (
		<S.Wrapper>
			<S.Container>
				<S.Logo>
					아<span>침과</span>점<span>심 사이</span>
				</S.Logo>
				<Navbar />
			</S.Container>
		</S.Wrapper>
	)
}
export default Header

const Wrapper = styled.div`
	color: ${({ theme }) => theme.COLOR.common.white};
	font-weight: bold;
	padding: 2rem 0 0 0;
`
const Logo = styled.div`
	font-size: ${({ theme }) => theme.FONT_SIZE.big};
	color: ${({ theme }) => theme.COLOR.main};

	& > span {
		color: ${({ theme }) => theme.COLOR.main};
		font-size: ${({ theme }) => theme.FONT_SIZE.small};
		padding-left: 0.2rem;
	}
`
const Container = styled.div`
	${FlexAlignCSS}
	justify-content: space-between;
	${WidthAutoCSS}
`
const S = { Wrapper, Logo, Container }
