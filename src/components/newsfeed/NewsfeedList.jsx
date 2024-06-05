import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { styled } from "styled-components";
import { getNewsfeed } from "../../api/feed";
import { getInitalFeed } from "../../redux/slices/newsfeed.slice";
import NewsfeedItem from "./NewsfeedItem";

function NewsfeedList() {
	const dispatch = useDispatch();
	const newsfeedList = useSelector((state) => state.newsfeed.list);
	async function getData() {
		const data = await getNewsfeed();
		dispatch(getInitalFeed(data));
	}

	useEffect(() => {
		getData();
	}, []);

	return (
		<div className="newsfeed-list">
			<div className="container">
				<StyledNewsfeedList>
					{newsfeedList.map((list) => {
						return <NewsfeedItem key={list.id} list={list} />;
					})}
				</StyledNewsfeedList>
			</div>
		</div>
	);
}

const StyledNewsfeedList = styled.ul`
	padding-bottom: 200px;
	li {
		border-bottom: 3px solid #e7404a;
		padding: 60px 0;
	}
`;

export default NewsfeedList;
