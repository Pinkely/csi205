import { Button, Form, Table, Badge } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';
import { use, useEffect, useState ,useRef} from "react";
import { fetchTodos } from "../data/todos";

const Todos = () => {

        const newIdRef = useRef()
        const newTitleRef = useRef()
    // [fetchTodos] ==> todosRaw ==> filters ==> todos ==> pagination ==> view`
    //              only waiting ==> 

    //          todos =-> [] ==> numPages ==> [] ==> curpage
    //  itemPerPage ==>              
    const [todosRaw, setTodosRaw] = useState([]);
    const [todos, setTodos] = useState([]);
    const [onlyWaiting, setOnlyWaiting] = useState(false);
    const [itemsPerPage, setItemsPerPage] = useState(5);
    const [numPages, setNumPages] = useState(3);
    const [currentPage, setCurrentPage] = useState(1);

    //load
    useEffect(() => {
        setTodosRaw(fetchTodos());
    }, []) //fetch todos on loaded

    useEffect(() => {
        console.log(todosRaw);
        if (onlyWaiting) {
            setTodos(todosRaw.filter((todo) => {
                return !todo.completed
            }))
        } else {
            setTodos(todosRaw)
        }
        // bypass filters
        // setTodos(todosRaw)
    }, [todosRaw, onlyWaiting])

    // useEffect(() => {
    //     console.log(`onlyWaiting: ${onlyWaiting}`)
    // }, [onlyWaiting])    รวมไปในด้านบนแล้ว

    useEffect(() => {
        setNumPages(Math.ceil(todos.length / itemsPerPage))
    }, [todos, itemsPerPage])

    useEffect(() => {
        if (numPages <= 0) {
            setCurrentPage(0)
        } else {  //has todos
            if (currentPage > numPages) {
                setCurrentPage(numPages)
            } else if (currentPage <= 0) {  //curPage <== numPage
                setCurrentPage(1)
            }
        }
    }, [numPages])

    const waitingClicked = (id) => {
        console.log(id)
        const foundTodo = todos.find((todo) => {
            return todo.id === id
        })
        foundTodo.completed = true

        setTodosRaw([...todosRaw]) //force to be effect (refresh)
    }

    const deleteClicked = (id) => {
        setTodosRaw(todosRaw.filter((todo) => todo.id !== id))
    }

    // handle modal
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const saveClicked = (id, title) => {
        console.log(id, title)
        if(title.trim() !== ''){
            const newTodo = {
            userId: 1,
            id, 
            title,
            completed: false,
            }

            setTodosRaw([...todosRaw, newTodo])
        }
        newIdRef.current.value=""
        newTitleRef.current.value=""
        handleClose()
    }

    return (<>
        {/* {modal} */}
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Add todo</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>ID :</Form.Label>
                        <Form.Control
                            value={todosRaw.reduce((prev, todo) => {
                                return todo.id > prev ? todo.id : prev
                            }, -1) + 1}
                            disabled={true}
                            ref={newIdRef}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Title :</Form.Label>
                        <Form.Control
                            placeholder="new todos title"
                            autoFocus
                            ref={newTitleRef}
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={() => saveClicked(
                    Number(newIdRef.current.value) 
                    , newTitleRef.current.value)}>
                    Save
                </Button>
            </Modal.Footer>
        </Modal>
        {/* modal end */}

        {/* filter */}
        <div></div>
        <Form>
            <div className="d-flex justify-content-between align-item-center">
                <div className="d-flex">
                    <Form.Check // prettier-ignore
                        type="switch"
                        id="custom-switch"
                        // label="Show only"
                        onChange={(e) => {
                            setOnlyWaiting(e.target.checked)
                        }}
                    />
                    Show only &nbsp;<h5>
                        <Badge bg="warning" className="d-flex align-items-center justify-content-center p-2">
                            Waiting&nbsp;<i>🕒</i>
                        </Badge></h5>
                </div>

                <Form.Select aria-label="Default select example"
                    className="w-25" onChange={(e) => {
                        setItemsPerPage(e.target.value)
                    }}>
                    <option value={5}>5 items per page</option>
                    <option value={10}>10 items per page</option>
                    <option value={50}>50 items per page</option>
                    <option value={100}>100 items per page</option>
                </Form.Select>
            </div>
        </Form>


        {/* table */}
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr className="table-dark">
                        <th className="text-center" style={{ width: '3rem' }}>ID</th>
                        <th className="text-center">Title</th>
                        <th className="text-end" style={{ width: '13rem' }}>Completed&nbsp;
                            <Button variant="primary" onClick={handleShow}>
                                <i className="bi bi-plus-lg"></i>
                            </Button>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        //              1               5
                        //start = (currentPage - 1) * itemsPerPage      = 0
                        //stop = currentPage * itemsPerPage - 1         = 4
                        todos.filter((todo, index) => {
                            return index >= (currentPage - 1) * itemsPerPage &&
                                index <= currentPage * itemsPerPage - 1
                        })
                            .map((todo) => {
                                return (
                                    <tr key={todo.id}>
                                        <td className="text-center">
                                            <h5><Badge bg="secondary">{todo.id}</Badge></h5>
                                        </td>
                                        <td className="text-start">{todo.title}</td>
                                        <td className="text-end">{todo.completed ? (
                                            <Badge bg="success" className="fs-6">done&nbsp;</Badge>
                                        ) : (
                                            <Button variant="warning" onClick={() => waitingClicked(todo.id)}>Waiting&nbsp;<i>🕒</i></Button>
                                        )}
                                            <Button variant="danger" onClick={() => deleteClicked(todo.id)}>
                                                <i className="bi bi-trash"></i>
                                            </Button></td>
                                    </tr>
                                );
                            })}
                </tbody>
            </Table>
        </div>

        {/* page contro */}
        <div className="text-center">
            <Button variant="outline-primary" onClick={() => {
                setCurrentPage(1)
            }
            }
                disabled={currentPage === 1}
            >First</Button>
            &nbsp;<Button variant="outline-primary" onClick={() => {
                currentPage > 1 && setCurrentPage((p) => p - 1)
                // if (currentPage > 1) {
                //     setCurrentPage((p) => p - 1)
                // }
            }}
                disabled={currentPage === 1}
            >Previous</Button>
            <span>{currentPage}&nbsp;/&nbsp;{numPages}</span>
            <Button variant="outline-primary" onClick={() => {
                currentPage < numPages && setCurrentPage((p) => p + 1)
                // if (currentPage < numPages) {
                //     setCurrentPage((p) => p + 1)
                // }
            }}
                disabled={currentPage === numPages}
            >Next</Button>
            &nbsp;<Button variant="outline-primary" onClick={() => {
                setCurrentPage(numPages)
            }}
                disabled={currentPage === numPages}
            >Last</Button>
        </div>
    </>);
}

export default Todos;