import React, { useState, useRef } from "react";
import styled from "styled-components";
import LoginJoinHeader from "../components/LoginJoinHeader";
import { useNavigate } from "react-router-dom";
function Description() {
	const [image, setImage] = useState(null);
	const [description, setDescription] = useState("");
	const fileInputRef = useRef(null);
	const navigate = useNavigate();

	const handleImageChange = (event) => {
		const file = event.target.files[0];
		if (file) {
			const reader = new FileReader();
			reader.onloadend = () => {
				setImage(reader.result);
			};
			reader.readAsDataURL(file);
		}
	};

	const handleButtonClick = () => {
		fileInputRef.current.click();
	};

	const handleSubmit = () => {
		navigate("/login");
	};

	return (
		<>
			<LoginJoinHeader />
			<div className="container">
				<StyledDescriptionBg>
					<StyledDesciptionText>본인을 소개해주세요!</StyledDesciptionText>
					<UploadButton
						onClick={handleButtonClick}
						style={{
							backgroundImage: image ? `url(${image})` : "#b4b9c9",
							backgroundSize: "cover"
						}}
					>
						사진을 업로드 해주세요
					</UploadButton>
					<input
						type="file"
						accept="image/*"
						ref={fileInputRef}
						style={{ display: "none" }}
						onChange={handleImageChange}
					/>

					<TextArea
						value={description}
						onChange={(e) => setDescription(e.target.value)}
						placeholder="당신이 좋아하는 것에 대해 적어보세요."
					/>
					<SubmitButton type="submit" onClick={handleSubmit}>
						가입하기
					</SubmitButton>
				</StyledDescriptionBg>
			</div>
		</>
	);
}
const StyledDesciptionText = styled.h2`
	color: #2c2b2f;

	font-size: 48px;
	font-weight: 800;
	margin-bottom: 43px;
`;

const StyledDescriptionBg = styled.div`
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

const UploadButton = styled.button`
	width: 371px;
	height: 371px;
	border-radius: 50%;
	color: #ffffff;
	font-size: 24px;
	border: none;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-bottom: 43px;
	background-color: #b4b9c9;
`;

const TextArea = styled.textarea`
	width: 80%;
	height: 200px;
	border: 1px solid #ccc;
	border-radius: 12px;
	padding: 10px;
	font-size: 16px;
	resize: none;
	margin-bottom: 43px;
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

export default Description;
