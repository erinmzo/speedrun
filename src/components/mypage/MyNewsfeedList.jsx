import { styled } from "styled-components";

const MyNewsfeedList = () => {
	return (
		<StyledMyNewsfeedList>
			<div className="container">
				<StyledTitleMyNewsfeedList>내 게시물</StyledTitleMyNewsfeedList>
			</div>
		</StyledMyNewsfeedList>
	);
};

const StyledMyNewsfeedList = styled.div`
	padding: 60px;
`;

const StyledTitleMyNewsfeedList = styled.h2`
	font-size: 48px;
	font-weight: 800;
	margin-bottom: 60px;
	text-align: center;
`;
export default MyNewsfeedList;
