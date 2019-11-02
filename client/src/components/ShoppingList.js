import React, { Component } from 'react';
import {Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import uuid from 'uuid';

class ShoppingList extends Component {
    state  = {
        items: [
            { id: uuid(), name: 'Eggs'},
            { id: uuid(), name: 'peanut butter'},
            { id: uuid(), name: 'cheese'},
            { id: uuid(), name: 'tacos'}
        ]
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
                                        this.setState(state => ({
                                            items: state.items.filter(item =>  item.id != id)
                                        }));
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