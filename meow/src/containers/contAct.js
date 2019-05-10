import { connect } from 'react-redux'
import Activity from '../components/compAct'
import { nap, eat, play, cuddle, chaos } from '../store/actions'

mapStateToProps = state =>{
    return{
        [state.name]:{
            activity: state.activity
        }
    }
}

mapDispatchToProps = dispatch =>{
    napClick: (name)=> dispatch(nap(name));
    eatClick: (name)=> dispatch(eat(name));
    playClick: (name)=> dispatch(play(name));
    cuddleClick: (name)=> dispatch(cuddle(name));
    chaosClick: (name)=> dispatch(chaos(name));
}

export default connect(mapStateToProps, mapDispatchToProps)(Activity)
