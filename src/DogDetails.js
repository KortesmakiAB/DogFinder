import { Redirect, useParams } from 'react-router-dom';
import './DogDetails.css';

const DogDetails = ({ getDog }) => {
    const { name } = useParams();
    
    const dog = getDog(name);

    if (!dog) return <Redirect to='/dogs'></Redirect>

    const { age, facts, src, name: dName } = dog;

    return (
        <div className="DogDetails">
            <h3>Name: { dName }</h3>
            <h4>Age: { age }</h4>
            <h4>Facts:</h4>
            <ul className="DogDetails-ul">
                { facts.map(f => <li key={f}>{f}</li>) }
            </ul>
            <img src={src} alt={`${dName} the dog`} />
        </div>
    );
};

export default DogDetails;