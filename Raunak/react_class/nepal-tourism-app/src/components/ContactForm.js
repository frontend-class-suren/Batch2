// ContactForm.js
import React from 'react';
import styled from 'styled-components';

// const ContactContainer = styled.div`
// max-width: 600px;
// margin: auto;
// padding: 20px;
// box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
// background-color: #fff;
// border-radius: 8px;
// margin-top: 50px;
// `;

// const Form = styled.form`
// display: flex;
// flex-direction: column;
// `;

// const Label = styled.label`
// margin-bottom: 8px;
// `;

// const Input = styled.input`
// padding: 10px;
// margin-bottom: 16px;
// border: 1px solid #ccc;
// border-radius: 4px;
// font-size: 16px;
// `;

// const TextArea = styled.textarea`
// padding: 10px;
// margin-bottom: 16px;
// border: 1px solid #ccc;
// border-radius: 4px;
// font-size: 16px;
// `;

// const SubmitButton = styled.button`
// background-color: #3498db;
// color: #fff;
// padding: 12px;
// border: none;
// border-radius: 4px;
// cursor: pointer;
// font-size: 16px;
// `;

const ContactForm = () => {
	return (
		<ContactContainer>
			<h2>Contact Us</h2>
			<Form>
				<Label htmlFor="name">
					Name
				</Label>
				<Input type="text"
					id="name"
					name="name" required />
				<Label htmlFor="email">
					Email
				</Label>
				<Input type="email"
					id="email"
					name="email" required />
				<Label htmlFor="message">
					Message
				</Label>
				<TextArea id="message"
					name="message"
					rows="4" required />
				<SubmitButton type="submit">
					Submit
				</SubmitButton>
			</Form>
		</ContactContainer>
	);
};
export default ContactForm;
