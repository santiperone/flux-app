import './Botonera.css';
import * as ColorappActions from '../actions/ColorappActions';

function Botonera() {
  const buttonClick = (color) => {
    ColorappActions.changeColor(color);
  }

  return (
    <div className="Botonera">
        <button onClick={event => buttonClick('#ff0000')}>Rojo</button>
        <button onClick={event => buttonClick('#00ff00')}>Verde</button>
    </div>
  );
}

export default Botonera;