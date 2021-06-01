// import { useState } from 'react';
import { Redirect, useParams } from 'react-router-dom';

const DogDetails = ({ getDog }) => {
    const { name } = useParams();
    
    const dog = getDog(name);

    if (!dog) return <Redirect to='/dogs'></Redirect>

    const { age, facts, src, name: dName } = dog;

    return (
        <div>
            <h3>Name: { dName }</h3>
            <h4>Age: { age }</h4>
            <h4>Facts:</h4>
            <ul>
                { facts.map(f => <li key={f}>{f}</li>) }
            </ul>
            <img src={src} alt={`${dName} the dog`} />
        </div>
    );
};

export default DogDetails;