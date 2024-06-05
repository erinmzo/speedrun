import Header from "../components/common/Header";
import MainBanner from "../components/mainpage/MainBanner";
import NewGames from "../components/mainpage/NewGames";
import NewsfeedList from "../components/newsfeed/NewsfeedList";
import WriteButton from "../components/newsfeed/WriteButton";

function Newfeed() {
	return (
		<>
			<Header />
			<MainBanner />
			<NewGames />
			<NewsfeedList />
			<WriteButton />
		</>
	);
}

export default Newfeed;
