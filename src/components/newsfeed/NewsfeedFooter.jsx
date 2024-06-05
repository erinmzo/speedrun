import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { styled } from "styled-components";
import { addNewsfeedLike, getNewsfeedLike, removNewsfeedLike } from "../../api/feed";
import { updateLike } from "../../redux/slices/newsfeed.slice";
import LikeButton from "./LikeButton";
import ShareButton from "./ShareButton";

function NewsfeedFooter({ feedId }) {
	const dispatch = useDispatch();
	const newsfeeds = useSelector((state) => state.newsfeed.list);
	const selectFeed = newsfeeds.find((newsfeed) => newsfeed.id === feedId);
	const [isLike, setIsLike] = useState(false);
	const isLogIn = useSelector((state) => state.user.isLogIn);
	const currentUser = useSelector((state) => state.user.currentUserInfo);
	const [heart, setHeart] = useState(0);

	const getLikeCount = async () => {
		const likes = await getNewsfeedLike(feedId);
		const likeCount = likes.length;
		setHeart(likeCount);
		if (isLogIn) {
			likeCount > 0 ? setIsLike(true) : setIsLike(false);
		} else {
			setIsLike(false);
		}
	};

	useEffect(() => {
		getLikeCount();
	}, [selectFeed]);

	const handleLike = async () => {
		if (isLogIn) {
			const newLike = {
				userId: currentUser.id,
				feedId: feedId
			};
			setIsLike((prev) => !prev);
			setHeart((prev) => (isLike ? prev - 1 : prev + 1));
			dispatch(updateLike(heart));
			isLike ? await removNewsfeedLike(newLike) : await addNewsfeedLike(newLike);
		} else {
			alert("로그인이 필요합니다.");
		}
	};

	const handleShare = () => {
		window.prompt("복사하여 사용하세요.", `http://speedrun-virid.vercel.app/feed-read/${selectFeed.id}`);
	};
	return (
		<StyledPostFooter>
			<LikeButton isLike={isLike} handleLike={handleLike} heart={heart} />
			<ShareButton handleShare={handleShare} />
		</StyledPostFooter>
	);
}
const StyledPostFooter = styled.div`
	display: flex;
	justify-content: space-between;
`;
export default NewsfeedFooter;
