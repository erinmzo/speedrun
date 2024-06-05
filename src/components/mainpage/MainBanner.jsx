import { Link } from "react-scroll";
import { styled } from "styled-components";
function MainBanner() {
	return (
		<StyledMainBanner>
			<div className="container">
				<StyledBgBanner>
					<StyledMainTitle>
						온・오프라인 게임에 관한
						<br /> 최신 소식을 다루는 <br />
						커뮤니티 입니다.
					</StyledMainTitle>
					<StyledMainParagraph>
						여러분이 온라인, 오프라인에서 즐기는 게임에 대해 자유롭게 이야기하고,
						<br /> 소식을 나눠 보세요! 소통을 통해 더욱 즐겁게 게임을 즐길 수 있게 됩니다. <br />
						사실 아무말 대잔치
					</StyledMainParagraph>
					<Link to="newsfeed-list" smooth={true}>
						<StyledMainButton>자세히 보기</StyledMainButton>
					</Link>
				</StyledBgBanner>
			</div>
		</StyledMainBanner>
	);
}

const StyledMainBanner = styled.div`
	background-color: #e7404a;
`;
const StyledBgBanner = styled.div`
	background-image: url("/imgs/main-banner.png");
	background-position: center right;
	background-size: 460px 215px;
	background-repeat: no-repeat;
	padding: 200px 0;
`;
const StyledMainTitle = styled.h2`
	font-size: 48px;
	font-weight: 800;
	margin-bottom: 20px;
	line-height: 1.5em;
`;
const StyledMainParagraph = styled.p`
	font-size: 16px;
	line-height: 1.5em;
	margin-bottom: 35px;
`;
const StyledMainButton = styled.button`
	cursor: pointer;
	padding: 14px 18px;
	background-color: white;
	color: #e7404a;
	border-radius: 6px;
	border: none;
	font-size: 14px;
	font-weight: bold;
`;
export default MainBanner;
