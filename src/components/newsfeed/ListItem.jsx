import { styled } from "styled-components";
function ListItem({ title, content, date, userId }) {
	return (
		<StyledListItem>
			<StyledListHeader>
				<StyledImgBox>
					<img src="/imgs/default-user-profile.png" alt="유저 아이디" />
				</StyledImgBox>
				<StyledInfoBox>
					<StyledListTitle>{title}</StyledListTitle>
					<div>
						<span>{userId}</span> | <span>{date}</span>
					</div>
				</StyledInfoBox>
			</StyledListHeader>
			<StyledListContent>{content}</StyledListContent>
		</StyledListItem>
	);
}

const StyledListItem = styled.div`
	display: flex;
	flex-direction: column;
	gap: 24px;
`;

const StyledListHeader = styled.div`
	width: 100%;
	display: grid;
	grid-template-columns: 96px 986px;
	gap: 24px;
`;
const StyledImgBox = styled.div`
	width: 96px;
	height: 96px;
	img {
		width: 100%;
	}
`;
const StyledInfoBox = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
`;
const StyledListTitle = styled.div`
	width: 100%;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
	word-break: break-all;
	font-size: 48px;
	font-weight: 800;
`;
const StyledListContent = styled.div`
	margin-bottom: 30px;
	font-size: 18px;
	line-height: 1.5em;
	text-overflow: ellipsis;
	overflow: hidden;
	word-break: break-word;
	display: -webkit-box;
	-webkit-line-clamp: 4; // 원하는 라인수
	-webkit-box-orient: vertical;
`;

export default ListItem;
