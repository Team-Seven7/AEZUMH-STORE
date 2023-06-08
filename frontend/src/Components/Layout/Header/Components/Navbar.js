import styled from 'styled-components'

function Navbar() {
	const navbarList = [
		'서비스 안내',
		'플랜 안내',
		'고객사 리뷰',
		'FAQ',
		'블로그',
	]

	return (
		<Div>
			{navbarList.map(list => (
				<S.NavBox>{list}</S.NavBox>
			))}
		</Div>
	)
}
export default Navbar

const NavBox = styled.span`
	font-size: ${({ theme }) => theme.FONT_SIZE.small};
	width: 15rem;
	text-align: center;
	color: ${({ theme }) => theme.COLOR.common.black};
	cursor: pointer;
`
const Div = styled.div`
	display: flex;
`
const S = { NavBox }
