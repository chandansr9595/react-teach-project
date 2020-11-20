import React from 'react';
import { Field,  reduxForm} from 'redux-form';

class StreamCreate extends React.Component {

    renderInputBox = (formProps) => {
        return <input {...formProps.input}/>
    }

    render() {
        return (
            <form>
                <Field name="Title" component={this.renderInputBox}/>
                <Field name="Description" component={this.renderInputBox}/>
            </form>
        )
    }
}

export default reduxForm({
    form: 'CREATE_STREAM'
})(StreamCreate);