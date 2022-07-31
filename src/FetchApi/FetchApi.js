import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Spinner from "react-bootstrap/Spinner";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function FetchApi() {
  const [todos, setTodo] = useState([
    {
      userId: 1,
      id: 1,
      title: "delectus aut autem",
      completed: false,
    },
    {
      userId: 1,
      id: 2,
      title: "quis ut nam facilis et officia qui",
      completed: false,
    },
    {
      userId: 1,
      id: 3,
      title: "fugiat veniam minus",
      completed: false,
    },
    {
      userId: 1,
      id: 4,
      title: "et porro tempora",
      completed: true,
    },
    {
      userId: 1,
      id: 5,
      title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
      completed: false,
    },
    {
      userId: 1,
      id: 6,
      title: "qui ullam ratione quibusdam voluptatem quia omnis",
      completed: false,
    },
  ]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const [completed, setCompleted] = useState([]);
  const [pending, setPending] = useState([]);

  const StatusChange = (todo) => {
    setTodo(
      todos.map((todos) =>
        todos.id == todo.id
          ? {
              ...todos,
              completed: !todo.completed,
            }
          : todos
      )
    );
    setCompleted(
      todos.filter((todos) => {
        return todos.completed === true;
      })
    );
    setPending(
      todos.filter((todos) => {
        return todos.completed !== true;
      })
    );
  };

  // const update = () => {
  //   setCompleted(
  //     todos.filter((todos) => {
  //       return todos.completed === true;
  //     })
  //   );
  //   setPending(
  //     todos.filter((todos) => {
  //       return todos.completed !== true;
  //     })
  //   );
  // };

  let AddNewCount = () => {
    let id = todos.length == 0 ? 1 : todos[todos.length - 1].id + 1;
    setTodo([...todos, { id: id, title: "Hello there is No Todo" }]);
  };

  let DeleteCount = (todo) => {
    setTodo(
      todos.filter((todos) => {
        return todos.id !== todo.id;
      })
    );
    console.log("todo id", todo.id);
  };
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("error in loading");
        }
      })
      .then((json) => {
        setTodo(json);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setError(true);
      });
  }, []);

  //   if (isLoading) return <Loader />;
  //   else if (!isLoading && error)
  //     return <h3 style={{ color: "red" }}> Error in loading Todos</h3>;
  return (
    <div>
      <h1 style={{ alignItems: "center" }}>Todo List</h1>
      <h1 style={{ alignItems: "center" }}>No of Todo List...{todos.length}</h1>
      <h3>No of.. completed{completed.length} </h3>
      <h3>No of.. Pending{pending.length} </h3>
      {/* <Button style={{ marginLeft: 20 }} variant="dark" onClick={update}>
        update
      </Button> */}
      <TodoList
        todos={todos}
        DeleteCount={DeleteCount}
        AddNewCount={AddNewCount}
        StatusChange={StatusChange}
      />
    </div>
  );
}

const Todo = ({ todo, DeleteCount, AddNewCount, StatusChange, pending }) => {
  return (
    <div>
      <Row>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title
                style={{ color: todo.completed == false ? "red" : "green" }}
              >
                {todo.id} .{todo.title}
              </Card.Title>

              <Card.Subtitle className="mb-2 text-muted">
                {todo.completed == true ? "Completed" : "Pending"}
                <Button
                  style={{ marginLeft: 30 }}
                  variant="success"
                  onClick={AddNewCount}
                >
                  Add New
                </Button>
              </Card.Subtitle>

              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Card.Link href="#" onClick={() => StatusChange(todo)}>
                Status Change
              </Card.Link>
              <Button
                style={{ marginLeft: 20 }}
                variant="dark"
                onClick={() => DeleteCount(todo)}
              >
                Delete
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

const Loader = () => {
  return (
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
};

const TodoList = ({ todos, DeleteCount, AddNewCount, StatusChange }) => {
  if (todos.length === 0) return <h3>Todos are empty.</h3>;

  return todos.map((todo) => (
    <Todo
      todo={todo}
      DeleteCount={DeleteCount}
      AddNewCount={AddNewCount}
      StatusChange={StatusChange}
    />
  ));
};
export default FetchApi;
