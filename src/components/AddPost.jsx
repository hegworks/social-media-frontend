import React, { useState, useContext } from "react";
import { useHistory } from "react-router";
import { Button, TextField } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";

import { CookieManager } from "./CookieManager";

import './styles/addpost.scss'
import axios from "axios";

const FormData = require('form-data')

const AddPost = props => {
	// states
	const [selectedFile, setSelectedFile] = useState(null)
	const [description, setDescription] = useState("")

	const { userid } = useContext(CookieManager);


	const handleFileSelected = event => {
		const file = event.target.files[0];
		console.log(file);
		setSelectedFile(file);
	};

	const handlePublish = event => {
		event.preventDefault(); // stop auto refreshing

		const dataToSend = {
			userid: userid,
			desc: description,
			file: selectedFile
		}

		console.log(dataToSend)

		const form = new FormData()
		form.append('userid', dataToSend.userid)
		form.append('desc', dataToSend.desc)
		form.append('file', dataToSend.file)

		axios.post("http://localhost:8880/api/posts", form);
	};

	return (
		<div className="addPost">
			<div className="addPostWrapper">
				<div className="addPostTop">
					<input
						className="input"
						accept="image/*"
						type="file"
						id="contained-button-file"
						onChange={handleFileSelected}
					/>
					<label htmlFor="contained-button-file">
						<Button
							className="choose-image-button"
							variant="contained"
							color="primary"
							component="span"
						>
							Choose Image
						</Button>
					</label>
					<h3>{selectedFile && selectedFile.name}</h3>
				</div>
				<div className="addPostCenter">
					<form onSubmit={handlePublish} className="description-textfield">
						<div className="addPostCenterLeft">
							<TextField
								id="standard-basic"
								label="description"
								type="text"
								value={description}
								name="description"
								placeholder="description"
								onChange={event => setDescription(event.target.value)}
							/>
						</div>
						<div className="addPostCenterRight">
							<Button
								type="submit"
								className="publish-post-button"
								variant="contained"
								color="primary"
							>
								Publish
							</Button>
						</div>
					</form>
				</div>
				<div className="addPostBottom">
					<h3>{description}</h3>
				</div>
			</div>
		</div>
	);
};

export default AddPost;
