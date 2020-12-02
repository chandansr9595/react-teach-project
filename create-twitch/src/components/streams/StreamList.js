import React from 'react';
import { connect } from 'react-redux';
import { fetchStreams, deleteStream } from '../../actions';
import { Link } from 'react-router-dom';

class StreamList extends React.Component {

    componentDidMount(){
        this.props.fetchStreams();
    }

    renderAdminButtons = (stream) => {
        if(this.props.currentUserId === stream.userId){
            return (
                <div className="right floated content">
                    <button className="ui button primary">Edit</button>
                    <button className="ui button negative" onClick={() => {
                        this.props.deleteStream(stream.id)
                    }}>Delete</button>
                </div>
            );
        }
        else return "";
    }

    renderListOfStreams = () => {
        return this.props.streams.map(stream => {
            return <div className="item" key={stream.id}>
                {this.renderAdminButtons(stream)}
                <div className="content">
                    {stream.title}
                </div>
                <div className="description">
                    {stream.description}
                </div>
            </div>
        });
    }

    render(){
        return (
            <div className="ui container">
                <div className="ui celled list">
                    {this.renderListOfStreams()}
                </div>
                <Link to="/streams/create" 
                    className="ui button primary" 
                >
                    Create Stream
                </Link>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        streams: Object.values(state.streams),
        currentUserId: state.auth.userId
    }
}

export default connect(mapStateToProps, {
    fetchStreams,
    deleteStream
})(StreamList);