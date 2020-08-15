import { useContext, component, html, useState } from 'haunted';
import { StoreContext } from './StoreProvider';
import { addTodo } from '../store/todos';

function TodosForm() {
  const { dispatch } = useContext(StoreContext);
  const [value, setValue] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();
    dispatch(addTodo({ value }));
    setValue('');
  };

  const handleInputChange = (event) => setValue(event.target.value);

  return html`
    <form @submit=${handleFormSubmit} autocomplete="off">
      <label for="todo">What needs to be done?</label>
      <input
        type="text"
        id="todo"
        @change=${handleInputChange}
        .value=${value}
      />
      <button>Add Todo</button>
    </form>
  `;
}

customElements.define('todos-form', component(TodosForm));
