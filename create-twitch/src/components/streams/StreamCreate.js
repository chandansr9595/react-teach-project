import React from 'react';
import { Field,  reduxForm} from 'redux-form';
import { connect } from 'react-redux';
import { createStream } from '../../actions'; 

class StreamCreate extends React.Component {

    renderInputBox = (formProps) => {
        const meta = formProps.meta;
        const classNameError = meta.touched && meta.error ? 'field error' : 'field';
        return <div className={classNameError}>
            <label>{formProps.label}</label>
            <input {...formProps.input} autoComplete='off'/>
            <p>{meta.touched ? meta.error : ''}</p>
        </div>
    }

    onSubmit = (formValues) => {
        this.props.createStream(formValues);
    }

    render() {
        return (
            <div className="ui container">
                <form className="ui form" 
                    onSubmit={this.props.handleSubmit(this.onSubmit)}
                >
                    <Field 
                        name="title" 
                        component={this.renderInputBox}
                        label="Enter Title*"
                    />
                    <Field 
                        name="description" 
                        component={this.renderInputBox}
                        label="Enter Description*"
                    />
                    <button className="ui button primary">Submit</button>
                </form>
            </div>
        )
    }
}

const validateForm = (formValues) => {
    const errors = {};
    if(!formValues.title){
        errors.title = "Title is mandatory"
    }
    if(!formValues.description){
        errors.description = "Description is mandatory"
    }
    return errors;
}

const formWrapped = reduxForm({
    form: 'CREATE_STREAM',
    validate: validateForm
})(StreamCreate);

export default connect(null, {createStream})(formWrapped);