import Profile from './Profile.js';

const myStyle = {
    textAlign : 'left',
    margin : '10% 30%',
    backgroundColor: 'rgb(240, 242, 245)',
    boxShadow: '0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%)'
}

const Container = (props) => {
    return (
        <div style={myStyle}>
        <Profile data={props.mydata}></Profile>
        </div>
    )
}

export default Container;