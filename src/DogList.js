import { Link } from "react-router-dom";

const DogList = ({ dogNames }) => {
    
    return (
        <div>
            { dogNames.map(name => <Link key={name} to={`/dogs/${name}`}><h3>{ name }</h3></Link>)}
        </div>
    );
};

export default DogList;