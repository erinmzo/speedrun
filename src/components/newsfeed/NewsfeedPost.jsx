import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { styled } from "styled-components";
import { getSelectedNewsfeed } from "../../api/feed";
import supabase from "../../supabase/supabase";
import NewsfeedFooter from "./NewsfeedFooter";

const NewsfeedPost = () => {
	const navigate = useNavigate();
	const { feedId } = useParams();

	const [post, setPost] = useState({});

	async function getPost() {
		const data = await getSelectedNewsfeed(feedId);
		setPost(data[0]);
	}

	useEffect(() => {
		getPost();
	}, []);

	const { id, title, userId, date, content } = post;

	// 게시물 삭제 핸들러
	const deletePostHandler = async () => {
		const confirmDelete = confirm("정말 삭제하시겠습니까?");
		if (confirmDelete) {
			await supabase.from("newsfeed").delete().eq("id", feedId);
			navigate("/");
		}
	};

	return (
		<StyledNewsfeedPost>
			<div className="container">
				<StyledPostItem>
					<StyledPostHeader>
						<StyledPostHeaderLeft>
							<StyledImgBox>
								<img src="/imgs/default-user-profile.png" alt="유저 아이디" />
							</StyledImgBox>
							<StyledInfoBox>
								<StyledListTitle>{title}</StyledListTitle>
								<div>
									<span>{userId}</span> | <span>{date}</span>
								</div>
							</StyledInfoBox>
						</StyledPostHeaderLeft>
						<div>
							<Link to={`/feed-edit/${id}`}>
								<StyledButton>수정하기</StyledButton>
							</Link>
							<StyledButton onClick={() => deletePostHandler()}>삭제하기</StyledButton>
						</div>
					</StyledPostHeader>

					<StyledPostContent>{content}</StyledPostContent>
					<NewsfeedFooter feedId={id} />
				</StyledPostItem>
			</div>
		</StyledNewsfeedPost>
	);
};
const StyledNewsfeedPost = styled.div``;
const StyledPostItem = styled.div`
	display: flex;
	flex-direction: column;
	gap: 24px;
	border-bottom: 3px solid #e7404a;
	padding: 60px 0;
`;

const StyledPostHeader = styled.div`
	display: flex;
	justify-content: space-between;
`;
const StyledPostHeaderLeft = styled.div`
	display: flex;
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
	/* width: 100%; */
	display: flex;
	flex-direction: column;
	justify-content: space-around;
`;
const StyledButton = styled.button`
	width: 145px;
	height: 52px;
	cursor: pointer;
	background-color: #e7404a;
	color: #fff;
	font-size: 20px;
	border-radius: 9px;
	border: none;
	margin-left: 23px;
`;
const StyledListTitle = styled.div`
	/* width: 100%; */
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
	word-break: break-all;
	font-size: 48px;
	font-weight: 800;
`;
const StyledPostContent = styled.div`
	margin-bottom: 30px;
	font-size: 18px;
	line-height: 1.5em;
	text-overflow: ellipsis;
	overflow: hidden;
	word-break: break-word;
	display: -webkit-box;
	-webkit-box-orient: vertical;
`;

export default NewsfeedPost;
