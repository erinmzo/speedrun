import { styled } from "styled-components";

const ProfileUpdateButton = () => {
	return <StyledProfileUpdateButton></StyledProfileUpdateButton>;
};
const StyledProfileUpdateButton = styled.button`
	cursor: pointer;
	width: 59px;
	height: 58px;
	background-color: transparent;
	background-image: url("/imgs/icon-profile-update.png");
	background-position: center;
	background-repeat: no-repeat;
	background-size: contain;
	font-size: 0;
	border: none;
`;
export default ProfileUpdateButton;
