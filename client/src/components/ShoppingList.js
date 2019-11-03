import React, { Component } from 'react';
import {Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import uuid from 'uuid';
import axios from 'axios';

class ShoppingList extends Component {
    constructor(props) {
        super(props);
      } 
    state  = {
        items: []
    }
    componentDidMount(){
        axios.get('http://www.localhost:5000/api/items')
            .then( (response) => {
                this.setState({items:response.data});
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    putDataToDB = (message) => {
        axios.post('http://www.localhost:5000/api/items',{
            id:uuid(),
            name:message
        });
    }
    deleteFromDB = (id) =>{
        axios.delete(`http://www.localhost:5000/api/items/5dbf2962ff77f52ccb310f7a`)
        .then(res => console.log(res));
    }
    render(){
        //const { items } = this.state;//instead of using this.state.items you just use items
        return(
            <div>
            <Container>
                <Button color="dark"
                className="additem" 
                onClick={()=> {
                    const name = prompt('enter item');
                    if(name){//if name has been entered.
                        this.putDataToDB(name);
                        this.setState( state => ({
                            items: [...state.items, { id: uuid(), name:name}]//... takes whatever s in state.item as of now and then adds the 2nd parameter object to it.
                        }));
                    }
                }}>Add Item</Button>
                <ListGroup>
                    <TransitionGroup className="shopping-list">
                        {this.state.items.map(({id,name})=>(
                            <CSSTransition key={id} timeout={500} classNames="fade">
                                <ListGroupItem>{name}
                                <Button 
                                    className="remove-btn"
                                    color="danger"
                                    size="sm"
                                    onClick={() => {
                                        // this.setState(state => ({
                                        //     items: state.items.filter(item =>  item.id != id)
                                        // }));
                                        console.log(this.state.items);
                                        this.deleteFromDB({id});
                                    }}>
                                &times;
                                </Button>
                                </ListGroupItem>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>

            </div>
        )
    }
}
export default ShoppingList;