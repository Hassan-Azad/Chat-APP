//hear we write logic to write and send mesages

import { useState } from "react";
import { sendMessage, isTyping } from "react-chat-engine";
import { SendOutlined, PictureOutlined } from "@ant-design/icons";

const MessageForm = (props) => {

    const [value, setvalue] = useState('');
    const { chatId, creds } = props;   //destructuring props

    const handleSubmit = (event) => {
        event.preventDefault(); //not to make browser refresh on submitting the form

        const text = value.trim();
        if (text.length > 0){
            sendMessage(creds, chatId, { text });
        } 

        setvalue('');
    };

    const handleChange = (event) => {
        setvalue(event.target.value);
        isTyping(props, chatId);

    }

    const handleUpload = (event) => {
        sendMessage(creds, chatId, {files: event.target.files, text: ''})
    }


    return (
        <div>
            <form className="message-form" onSubmit={handleSubmit}>
                <input
                    className="message-input"
                    placeholder="send a message..."
                    value={value}
                    onChange={handleChange}
                    onSubmit={handleSubmit}
                />

                <label htmlFor="upload-button">
                    <span className="image-button">
                        <PictureOutlined className="picture-icon" />
                    </span>
                </label>
                <input
                    type="file"
                    multiple={false}
                    id="upload-button"
                    style={{display: 'none'}}
                    onChange={handleUpload}
                />
                <button type="submit" className="send-button">
                    <SendOutlined className="send-icon"/>
                </button>
            </form>

        </div>
    );
}

export default MessageForm;