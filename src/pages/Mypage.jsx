import Header from "../components/common/Header";
import MyNewsfeedList from "../components/mypage/MyNewsfeedList";
import Profile from "../components/mypage/Profile";

function Mypage() {
	return (
		<>
			<Header />
			<Profile />
			<MyNewsfeedList />
		</>
	);
}

export default Mypage;
