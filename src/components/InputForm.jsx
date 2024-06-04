import React, { useState } from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import supabase from "../supabase/supabase";

const InputField = styled.input`
	font-family: inherit;
	width: 674px;
	height: 67px;
	margin-bottom: 43px;
	border-radius: 11px;
	border: 2px solid #b4b9c9;
	color: #2c2b2f;
	font-size: 21px;
	padding-left: 77px;
	background-repeat: no-repeat;
	background-size: 27px 27px;
	background-position: 27px center;
	box-sizing: border-box;

	&:focus {
		outline: none;
		border-color: #667788;
	}
`;

const InputFieldEmail = styled(InputField)`
	background-image: url("/imgs/icon-e-mail.png");
`;

const InputFieldLock = styled(InputField)`
	background-image: url("/imgs/icon-lock.png");
`;

const Form = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const SubmitButton = styled.button`
	width: 674px;
	height: 67px;
	background-color: #e7404a;
	color: white;
	border: none;
	border-radius: 11px;
	font-size: 30px;
	font-weight: 600;
	cursor: pointer;

	&:hover {
		background-color: #d6393f;
	}
`;

function InputForm() {
	let navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [displayName, setDisplayName] = useState("");

	const handleSubmit = async (event) => {
		event.preventDefault();

		if (password !== confirmPassword) {
			alert("비밀번호가 일치하지 않습니다.");
			return;
		}

		try {
			// Supabase 회원가입 로직
			const { user, error } = await supabase.auth.signUp({
				email: email,
				password: password,
				options: {
					data: {
						display_name: displayName
					}
				}
			});

			if (error) {
				alert(error.message);
			} else {
				alert("회원가입이 성공적으로 완료되었습니다.");
				navigate("/Description");
			}
		} catch (err) {
			console.error("Unexpected error:", err);
			alert("예기치 못한 오류가 발생했습니다. 다시 시도해 주세요.");
		}
	};

	return (
		<Form onSubmit={handleSubmit}>
			<InputFieldEmail
				type="email"
				placeholder="이메일을 입력해주세요"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
			/>
			<InputField
				type="text"
				placeholder="사용자 이름을 입력해주세요"
				value={displayName}
				onChange={(e) => setDisplayName(e.target.value)}
			/>
			<InputFieldLock
				type="password"
				placeholder="비밀번호를 입력해주세요"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
			/>
			<InputFieldLock
				type="password"
				placeholder="비밀번호를 다시 입력해주세요"
				value={confirmPassword}
				onChange={(e) => setConfirmPassword(e.target.value)}
			/>
			<SubmitButton type="submit">다음단계로</SubmitButton>
		</Form>
	);
}

export default InputForm;
