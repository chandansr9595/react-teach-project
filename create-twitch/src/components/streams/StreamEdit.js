import React from 'react';
import {connect} from 'react-redux';
import { fetchStream } from '../../actions';

class StreamEdit extends React.Component {

    componentDidMount(){
        this.props.fetchStream(this.props.match.params.streamId);
    }

    render(){
        return (
            <div>Stream Edit</div>
        )
    }
}

const mapStateToProps = (state, streamEditProps) => {
    return {
        streams: state.streams[streamEditProps.match.params.streamId]
    }
}

export default connect(mapStateToProps, 
    {fetchStream}
)(StreamEdit);