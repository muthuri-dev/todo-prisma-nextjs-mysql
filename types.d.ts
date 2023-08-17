type ITodoItemProps = {
  id: string;
  title: string;
  isComplete: boolean;
  toggleTodo: (id: string, isComplete: boolean) => void;
};
