import { styled } from "styled-components";

function NewGameItem({ game }) {
	return (
		<>
			<StyledNewGameImg>
				<img src={`/imgs/${game.url}`} alt="게임 이름" />
			</StyledNewGameImg>
			<h4>{game.gameName}</h4>
		</>
	);
}

const StyledNewGameImg = styled.div`
	overflow: hidden;
	display: block;
	width: 100%;
	height: 100%;
	border-radius: 26px;
	img {
		width: 100%;
		height: 100%;
	}
`;

export default NewGameItem;
