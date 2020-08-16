import React, {Fragment} from "react";

//import ContactsDataForm from "./ContactsDataForm";


class Contacts extends React.Component {
    state = {
        inputTextName: '',
        inputTextEmail: '',
        inputTextTopic: '',
        textareaText: '',
        showData: {
            name: '',
            email: '',
            topic: '',
            text: ''
        }
    }
    handleInputChangeName = ({target: {value}}) => {
        this.setState({
            inputTextName: value,
        })
    }
    handleInputChangeEmail = ({target: {value}}) => {
        this.setState({
            inputTextEmail: value,
        })
    }
    handleInputChangeTopic = ({target: {value}}) => {
        this.setState({
            inputTextTopic: value,
        })
    }
    handleTextareaChange = ({target: {value}}) => {
        this.setState({
            textareaText: value,
        })
    }
    handleShow = (e) => {
        e.preventDefault();
        const {inputTextName, inputTextEmail, inputTextTopic, textareaText} = this.state;
        this.setState({
            inputTextName: '',
            inputTextEmail: '',
            inputTextTopic: '',
            textareaText: '',
            showData: {
                name: inputTextName,
                email: inputTextEmail,
                topic: inputTextTopic,
                text: textareaText
            }
        })
    }

    render() {
        const {inputTextName, inputTextEmail, inputTextTopic, textareaText, showData} = this.state
        const {name, email, topic, text} = showData;
        return (
            <Fragment>
                <div>
                    {/*<ContactsDataForm/>*/}
                </div>
                <form>
                    <label><b>Имя</b>: <input onChange={this.handleInputChangeName} value={inputTextName}
                                              placeholder="Введите имя" name="name"/></label>
                    <label><b>Ваш email</b>: <input onChange={this.handleInputChangeEmail} value={inputTextEmail}
                                                    placeholder="Введите почту" name="email"/></label>
                    <label><b>Тема</b>: <input onChange={this.handleInputChangeTopic} value={inputTextTopic}
                                               placeholder="Напишите тему" name="topic"/></label>
                    <label><b>Ваше сообщение</b>: <textarea onChange={this.handleTextareaChange} value={textareaText}
                                                            name="message"/></label>
                    <button onClick={this.handleShow}>Отпрвить сообщение</button>
                </form>
                <div>
                    <div>
                        <h1>Ваше имя :</h1><h2>{name}</h2>
                    </div>
                    <div>
                        <h1>Ваш email :</h1><h2>{email}</h2>
                    </div>
                    <div>
                        <h1>Ваша тема :</h1><h2>{topic}</h2>
                    </div>
                    <div>
                        <h1>Описание</h1><h2>{text}</h2>
                    </div>

                </div>

            </Fragment>
        );
    }
};


export default Contacts;
