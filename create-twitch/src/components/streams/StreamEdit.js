import React from 'react';
import {connect} from 'react-redux';
import { fetchStream, updateStream } from '../../actions';
import StreamForm from './StreamForm';

class StreamEdit extends React.Component {

    componentDidMount(){
        this.props.fetchStream(this.props.match.params.streamId);
    }

    onSubmit = (formValues) => {
        this.props.updateStream(this.props.match.params.streamId, formValues);
    }

    render(){
        if(!this.props.streams){
            return <div>Loading...</div>
        }
        return (
            <div>
                <StreamForm 
                    onSubmit={this.onSubmit}
                    initialValues={{
                        title: this.props.streams.title,
                        description: this.props.streams.description
                    }}
                />
            </div>
        )
    }
}

const mapStateToProps = (state, streamEditProps) => {
    return {
        streams: state.streams[streamEditProps.match.params.streamId]
    }
}

export default connect(mapStateToProps, 
    {fetchStream, updateStream}
)(StreamEdit);