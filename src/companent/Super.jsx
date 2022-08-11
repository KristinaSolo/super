import './Super.css';

function Super(props){
    return(
        <div className='super-card'>
            <img src={props.url}></img>
            <div className='super-name'>{props.name}</div>
            <div className='super-universe'>{props.universe}</div>
            <div className='super-alterego'>{props.alterego}</div>
            <div className='super-activity'>{props.activity}</div>
            <div className='super-friends'>{props.friends}</div>
            <div className='super-superpowers'>{props.superpowers}</div>

        </div>
    );
}

export default Super;