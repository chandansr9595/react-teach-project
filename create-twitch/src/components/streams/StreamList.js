import React from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions';

class StreamList extends React.Component {

    componentDidMount(){
        this.props.fetchStreams();
    }

    renderListOfStreams = () => {
        return this.props.streams.map(stream => {
            return <div key={stream.id} style={{borderBottom: "1px solid black", padding: "20px"}}>
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
        console.log(this.props.streams);
        return (
            <div className="ui container">
                <div className="">
                    {this.renderListOfStreams()}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        streams: Object.values(state.streams)
    }
}

export default connect(mapStateToProps, {
    fetchStreams
})(StreamList);