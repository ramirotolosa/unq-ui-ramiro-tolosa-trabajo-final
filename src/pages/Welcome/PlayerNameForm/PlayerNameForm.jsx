import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGame } from '../../../hooks/useGame';
import { ROUTES } from '../../../utils/constants';
import TextInput from '../../../components/TextInput/TextInput';
import Button from '../../../components/Button/Button';
import ErrorMessage from '../../../components/ErrorMessage/ErrorMessage';
import './PlayerNameForm.css';

const NAME_MIN_LENGTH = 3;
const NAME_MAX_LENGTH = 15;
const NAME_PATTERN = /^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ]*$/;

function getNameError(name) {
  const trimmed = name.trim();

  if (trimmed.length === 0) return 'Ingrese un nombre';
  if (trimmed.length < NAME_MIN_LENGTH) return `El nombre debe tener al menos ${NAME_MIN_LENGTH} caracteres`;
  if (trimmed.length > NAME_MAX_LENGTH) return `El nombre no puede superar los ${NAME_MAX_LENGTH} caracteres`;
  if (!NAME_PATTERN.test(trimmed)) return 'El nombre solo puede contener letras y números';

  return null;
}

function PlayerNameForm() {
  const navigate = useNavigate();
  const { setPlayerName } = useGame();
  const [name, setName] = useState('');
  const [touched, setTouched] = useState(false);

  const error = getNameError(name);
  const isValid = error === null;

  const handleChange = (e) => {
    setName(e.target.value);
    if (!touched) setTouched(true);
  };

  const handlePlayClick = () => {
    setPlayerName(name.trim());
    navigate(ROUTES.GAME);
  };

  return (
    <div className="player-name-form">
      <TextInput
        label="Nombre del jugador"
        placeholder="Ingrese aquí su nombre"
        value={name}
        onChange={handleChange}
      />
      <ErrorMessage message={touched ? error : null} />
      <Button text="JUGAR" onClick={handlePlayClick} disabled={!isValid} />
    </div>
  );
}

export default PlayerNameForm;