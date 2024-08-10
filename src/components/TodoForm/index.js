import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoForm.css";


function TodoForm() {
  const { addTodo, setOpenModal } = React.useContext(TodoContext);
  const [newTodoValue, setNewTodoValue] = React.useState("");
  const [showError, setShowError] = React.useState(false); 


  const onSubmit = (event) => {
    event.preventDefault();
    if(newTodoValue.length > 0)
    {
      addTodo(newTodoValue);
      setOpenModal(false);
      setShowError(false);
    } else {
      setShowError(true); // Muestra el error si no se ha ingresado un TODO
    }     
 
  };
  const onCancel = () => {
    setOpenModal(false);
  };
  const onChange = (event) => {
    setNewTodoValue(event.target.value);
    if (event.target.value.length > 0) {
      setShowError(false); // Esconde el error mientras se escribe
    }
  };
  return (
    <form onSubmit={onSubmit}>
      <label>Esribe tu nuevo TODO</label>
      <textarea
        placeholder="Ingrese Todo"
        value={newTodoValue}
        onChange={onChange}
      />
      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          className="TodoForm-button TodoForm-button--cancel"
          onClick={onCancel}
        >
          Cancelar
        </button>
        <button type="submit" className="TodoForm-button TodoForm-button--add">
          Agregar
        </button>
        
      </div>
      <div>
        <label className={`TodoForm-error-message ${showError ? '' : 'oculto'}`}>
          Debe ingresar TODO
        </label>
      </div>

    
    </form>
  );
}
export { TodoForm };
