import React from 'react';
import { Field,  reduxForm} from 'redux-form';

class StreamCreate extends React.Component {

    renderInputBox = (formProps) => {
        return <div className="field">
            <label>{formProps.label}</label>
            <input {...formProps.input} autoComplete='off'/>
        </div>
    }

    onSubmit = (event) => {
        event.preventDefault();
        console.log('submitted')
    }

    render() {
        return (
            <form className="ui form" onSubmit={(event) => this.onSubmit(event)}>
                <Field 
                    name="title" 
                    component={this.renderInputBox}
                    label="Enter Title"
                />
                <Field 
                    name="description" 
                    component={this.renderInputBox}
                    label="Enter Description"
                />
                <button className="ui button primary">Submit</button>
            </form>
        )
    }
}


export default reduxForm({
    form: 'CREATE_STREAM'
})(StreamCreate);