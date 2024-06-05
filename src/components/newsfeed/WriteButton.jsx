import { Link } from "react-router-dom";
import { styled } from "styled-components";

function WriteButton() {
	return (
		<StyledWriteButton>
			<Link to="/feed-write">
				<span>글쓰기</span>
			</Link>
		</StyledWriteButton>
	);
}

const StyledWriteButton = styled.div`
	position: fixed;
	right: 45px;
	bottom: 45px;
	width: 125px;
	height: 125px;
	border-radius: 50%;
	background-color: #e7404a;
	box-shadow: 5px 7px 9.4px 0px rgba(0, 0, 0, 0.25);
	display: flex;
	justify-content: center;
	align-items: center;
	a {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		span {
			display: block;
			width: 58px;
			height: 58px;
			font-size: 0;
			background-image: url("/imgs/icon-write.png");
			background-position: center;
			background-repeat: no-repeat;
			background-size: contain;
		}
	}
`;

export default WriteButton;
