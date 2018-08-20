import React from 'react';
import { connect } from 'dva';

class Example extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
    };
  }

  render() {
    const { user } = this.props;

    return (
      <div>
       <span>名字:</span>  
        <span>{user.name}</span>  
      </div>
    );
  }

}

function mapStateToProps(state) {
  return {
  };
}

export default connect(mapStateToProps)(Example);