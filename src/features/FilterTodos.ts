export const filterTodos = (group: string, todos, setTodos): void => {
    const initial = [...todos];

    const all = initial.map((todo) => {
      return {
        ...todo,
        isVisible: true,
      };
    });

    const active = initial.map((todo) => {
      if (!todo.isCompleted) {
        return {
          ...todo,
          isVisible: true,
        };
      }

      return {
        ...todo,
        isVisible: false,
      };
    });

    const completed = initial.map((todo) => {
      if (todo.isCompleted)
        return {
          ...todo,
          isVisible: true,
        };

      return {
        ...todo,
        isVisible: false,
      };
    });

    const clearCompleted = initial.filter((todo) => !todo.isCompleted);

    switch (group) {
      case "All":
        setTodos(all);
        break;
      case "Active":
        setTodos(active);
        break;
      case "Completed":
        setTodos(completed);
        break;
      case "Clear completed":
        setTodos(clearCompleted);
        break;
      default:
        break;
    }
  };