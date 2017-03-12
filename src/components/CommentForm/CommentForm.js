import React, {Component} from 'react';
import SingleInput from './SingleInput';
import TextArea from './TextArea';
import './style.css'

class FormContainer extends Component {
    constructor(props) {
        super(props);
    }



    render() {
        return (
            <form className="container" onSubmit={this.handleFormSubmit}>
            <h5>Add you comment</h5>
            <SingleInput
                inputType={'text'}
                title={'Full name'}
            placeholder={'Type first and last name here'} />

    <TextArea title={'Your comment here'}
    placeholder={'Your comment here'} />

        <input type="submit" className="btn btn-primary" value="Submit"/>

    </form>
);
}
}

export default FormContainer;