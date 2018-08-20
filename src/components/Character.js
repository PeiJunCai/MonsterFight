import React from 'react';
import { connect } from 'dva';
import {
    Layout,
} from 'antd';

class Character extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            
        };
    }

    render() {
        console.log(this.props);
        const {monster,hp} =this.props;
        let hpM = hp;

        if( hpM === null ){
            hpM = monster.hp;
        } else if( hpM <= 0){
            hpM = 0;
        }else{
            hpM = hp;
        }

        return (
            <Layout>
                <br />
                Name：{monster.name}
                <br />
                Hp：{hpM}
                <br />
                Attack1：{monster.attack[0].name}
                <br />
                Power1：{monster.attack[0].power}
                <br />
                Attack2：{monster.attack[1].name}
                <br />
                Power2：{monster.attack[1].power}
                <br />
                Attack3：{monster.attack[2].name}
                <br />
                Power3：{monster.attack[2].power}
                <br />
            </Layout>
        );
    }
}

function mapStateToProps(state) {
    return {
        // monster: state.example.monster,
    };
}

export default connect(mapStateToProps)(Character);