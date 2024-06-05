import styled from "styled-components";
import InputForm from "./InputForm";

function JoinForm() {
	return (
		<>
			<div className="container">
				<StyledJoinBg>
					<StyledJoinText>Sign Up</StyledJoinText>
					<StyledDivider />
					<StyledGoogleBox>
						<StyledGoogleimg>Sign Up With Google</StyledGoogleimg>
					</StyledGoogleBox>
					<StyledDivider />
					<InputForm />
				</StyledJoinBg>
			</div>
		</>
	);
}

const StyledJoinBg = styled.div`
	margin-top: 115px;
	margin-bottom: 115px;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	border-radius: 12px;
	background-color: #ffffff;
	box-shadow: 0px 13px 5.5px rgba(0, 0, 0, 0.3);

	width: 1122px;
	height: 965px;
`;

const StyledJoinText = styled.h2`
	color: #2c2b2f;

	font-size: 48px;
	font-weight: 800;
	margin-bottom: 43px;
`;

const StyledDivider = styled.div`
	background-color: #e7404a;

	width: 674px;
	height: 2px;
	margin-bottom: 43px;
`;

const StyledGoogleBox = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	background-color: #e6e8ee;

	width: 674px;
	height: 67px;
	margin-bottom: 43px;
	border-radius: 11px;

	&:hover {
		background-color: #d3d5dd;
	}
`;

const StyledGoogleimg = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0px 64px;

	color: #2c2b2f;
	font-size: 30px;
	font-weight: 600;

	height: 32px;
	background-image: url("/imgs/icon-Google.png");
	background-position: center left;
	background-size: 32px 32px;
	background-repeat: no-repeat;
`;
export default JoinForm;
