import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLoginLink = styled.p`
	text-align: center;
	margin-top: 2.5rem;
	color: #2c2b2f;
	font-weight: bold;
	font-size: 23px;
`;

const StyledJoinLink = styled(Link)`
	color: #e7404a;
	text-decoration: none;
	margin-left: 20px;
`;

function LoginLinks() {
	return (
		<>
			<StyledLoginLink>
				You haven't any accout? <StyledJoinLink to="/Join">Sign Up</StyledJoinLink>
			</StyledLoginLink>
			;
		</>
	);
}

export default LoginLinks;
