import { Link } from "react-router-dom";
import ListItem from "./ListItem";
import NewsfeedFooter from "./NewsfeedFooter";
function NewsfeedItem({ list }) {
	return (
		<li key={list.id}>
			<Link to={`/feed-read/${list.id}`}>
				<ListItem
					title={list.title}
					content={list.content}
					date={list.date}
					userName={list.userName}
					profileUrl={list.profileUrl}
				/>
			</Link>
			<NewsfeedFooter feedId={list.id} />
		</li>
	);
}

export default NewsfeedItem;
