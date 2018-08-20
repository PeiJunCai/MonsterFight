import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import Character from '../components/Character';
import {
  Layout,
  Row,
  Col,
  Button,
} from 'antd';

class IndexPage extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.dispatch = props.dispatch;

    this.state = {
      randomA: this.getRandom(),
      randomB: this.getRandom(),
      hpA: null,
      hpB: null,
      log: '',
    };
  }

  getRandom() {
    return Math.floor(Math.random() * 7);
  };

  fightMonster() {
    const { monster } = this.props;
    const monA = monster[this.state.randomA];
    const monB = monster[this.state.randomB];
    const rand = Math.floor(Math.random() * 3);
    const randAtk = Math.floor(Math.random()*2);
    console.log(randAtk);

    if( this.state.hpA === null || this.state.hpB === null ){
      this.setState({
        hpA: monA.hp,
        hpB: monB.hp,
      });
      // console.log(this.state.hpA);
    }

    if( this.state.hpA > 0 && this.state.hpB > 0 ){
      // console.log('before:');
      // console.log(this.state.hpA, this.state.hpB);
      if (randAtk === 0) {
        this.setState({
          hpB: this.state.hpB - monA.attack[rand].power,
          log: this.state.log + monA.name + '使用了' + monA.attack[rand].name + '，對' + monB.name + '造成了' + monA.attack[rand].power + '點傷害<br />'
        });
      } else if (randAtk === 1) {
        this.setState({
          hpA: this.state.hpA - monB.attack[rand].power,
          log: this.state.log + monB.name + '使用了' + monB.attack[rand].name + '，對' + monA.name + '造成了' + monB.attack[rand].power + '點傷害<br />'
        });
      }
    }
  }

  clearFight(){
    // const { monster } = this.props;
    this.setState({
      randomA: this.getRandom(),
      randomB: this.getRandom(),
      log: '',
      hpA: null,
      hpB: null,
    });
  }

  render() {
    const { monster } = this.props;

    return (
      <Layout className={styles.contentLayout} >
        <Row>
          <Col span="6" className={styles.colContent}>
            <Button
              className={styles.btn}
              onClick={() => {
                this.setState({ randomA: this.getRandom() })
              }}>
              RESET
            </Button>
            <Character monster={monster[this.state.randomA]} hp={this.state.hpA} />
          </Col>
          <Col span="9" className={styles.colContent}>
            <Button
              className={styles.btn}
              type="primary"
              onClick={() => { 
                this.fightMonster()
              }}>
              FIGHT
            </Button>
            <Button
              className={styles.btn}
              type="danger"
              onClick={() => { this.clearFight() }}>
              CLEAR
            </Button>
            <div dangerouslySetInnerHTML={{ __html: this.state.log || '' }} />
          </Col>
          <Col span="6" className={styles.colContent}>
            <Button
              className={styles.btn}
              onClick={() => {
                this.setState({ randomB: this.getRandom() })
              }}>
              RESET
            </Button>
            <Character monster={monster[this.state.randomB]} hp={this.state.hpB} />
          </Col>
        </Row>
      </Layout>
    );
  }
}

function mapStateToProps(state) {
  return {
    monster: state.example.monster,
  };
}

export default connect(mapStateToProps)(IndexPage);