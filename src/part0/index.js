import React, {useState} from 'react';
import exercise04 from '/home/jackmunn/Tutorials/full_stack_open/src/part0/part0_exercise0.4.png';
import exercise05 from '/home/jackmunn/Tutorials/full_stack_open/src/part0/part0_exercise0.5.png';
import exercise06 from '/home/jackmunn/Tutorials/full_stack_open/src/part0/part0_exercise0.6.png';


const Part0 = () => {
    const [exercise, setExercise] = useState(null);

    const imgStyle = {
        width: '90%',
        height: 'auto', 
        display:'block'
    };
    
    return (
    <>
    <br/>
    <button onClick={() => setExercise(0.4)}>Exercise 0.4</button>
    <button onClick={() => setExercise(0.5)}>Exercise 0.5</button>
    <button onClick={() => setExercise(0.6)}>Exercise 0.6</button>

    {exercise != null && <h1>Answer to Exercise {exercise}</h1>}
    { exercise === 0.4 && <img src={exercise04} style={imgStyle}/>}
    { exercise === 0.5 && <img src={exercise05} style={imgStyle}/>}
    { exercise === 0.6 && <img src={exercise06} style={imgStyle}/>}

    </>
    );
};

export default Part0; 