import logo from '../../assets/logo.svg';
import PlayerNameForm from './PlayerNameForm/PlayerNameForm';
import './Welcome.css';

function Welcome() {
  return (
    <div className="welcome">
      <img className="welcome__logo" src={logo} alt="Palabras Encadenadas" />
      <PlayerNameForm />
    </div>
  );
}

export default Welcome;