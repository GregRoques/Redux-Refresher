import { connect } from 'react-redux'
import compAct from '../components/compAct'
import { nap, eat, play, cuddle, chaos } from '../store/actions'

const mapStateToProps = state => {
    return{
        activity: state.activity
        }
    }

const mapDispatchToProps = dispatch => {
    return{
        napClick: ()=> dispatch(nap()),
        eatClick: ()=> dispatch(eat()),
        playClick: ()=> dispatch(play()),
        cuddleClick: ()=> dispatch(cuddle()),
        chaosClick: ()=> dispatch(chaos())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(compAct)
