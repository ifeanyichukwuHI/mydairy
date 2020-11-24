import React from 'react';


class TextArea extends React.Component {
    constructor(props) {
        super();
        this.state = {
            journal: '',
            email: '',
        }
    }


    ontextChange = (event) => {
        this.textA = event.target;
        this.setState({
            journal: event.target.value,
            email: this.props.Email
        })
    }

    handleSave = (event) => {
        fetch('http://localhost:3002/journal', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: this.state.email,
                journal: this.state.journal,
                date: new Date()
            })
        })
            .then(response => response.json);

        this.setState({
            journal: '',
            email: ''
        })

        // this.textA.value = "Dear Diary";
        document.getElementsByClassName('journal-area')[0].value = "Dear Diary";
    }


    render() {

        // this.updateState();

        return (
            <section className="journal">
                <textarea
                    className='journal-area'
                    defaultValue="Dear Diary,"
                    onChange={this.ontextChange}
                    autoFocus
                >
                </textarea>
                <button
                    className='submit'
                    onClick={this.handleSave}
                >save</button>
            </section>
        )
    }

}

export default TextArea;        