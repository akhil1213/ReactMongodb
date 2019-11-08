import React, { Component } from 'react';
import {Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import uuid from 'uuid';
import axios from 'axios';
import BasketballPlayers from './BasketballPlayers'
class ShoppingList extends Component {
    constructor(props) {
        super(props);
      } 
    state  = {
        items: []
    }
    componentDidMount(){
        // https://cors-anywhere.herokuapp.com/https://www.fantasybasketballnerd.com/service/players
        //     http://www.localhost:5000/api/items
        axios.get(' http://www.localhost:5000/api/items')
            .then( (response) => {
                console.log(response.data);
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
        axios.delete('http://www.localhost:5000/api/items/'+id)
        .then(res => console.log(res));
    }
    updateNameForId = (id,name) => {
        axios.put('http://www.localhost:5000/api/items/'+id,{name:name})
        .then(res=> console.log(res));
    }
    
    render(){
            return <div><BasketballPlayers/></div>;
        //const { items } = this.state;//instead of using this.state.items you just use items
        //return(
            //<div>
            //<Container>
                // <Button color="dark"
                // className="additem"
                // onClick={()=> {
                //     const name = prompt('enter item');
                //     if(name){//if name has been entered.
                //         this.putDataToDB(name);
                //         this.setState( state => ({
                //             items: [...state.items, { id: uuid(), name:name}]//... takes whatever s in state.item as of now and then adds the 2nd parameter object to it.
                //         }));
                //     }
                // }}>Add Item</Button>
            //     <ListGroup>
            //         <TransitionGroup className="shopping-list">
            //             {this.state.items.map(({_id,name})=>(//inside state array mongodb has variable name as _id not id which took a while to figure out.
            //                 <CSSTransition key={_id} timeout={500} classNames="fade">
            //                     <ListGroupItem>{name}
            //                     <Button
            //                         className="remove-btn"
            //                         color="danger"
            //                         size="sm"
            //                         onClick={() => {
            //                             const newName = prompt('change name');
            //                             this.updateNameForId(_id,newName);//updates name for id in backend
            //                             var index;
            //                             /*need the index of the array in order for the change to appear
            //                             on the frontend without reloading the page. We know that we are given
            //                             a unique id, we can go through the whole array starting from index 0
            //                             and stop once we find an item in the array with ._id equal to the
            //                             item that we want to update's id and we change that items name.*/
            //                             for(var i = 0; i < this.state.items.length; i++){
            //                                 if(this.state.items[i]._id === _id){
            //                                     this.state.items[i].name = newName;
            //                                     break;
            //                                 }
            //                             }
            //                             // this.state.items[index].name = newName;
            //                             this.setState( state => ({
            //                                 items:this.state.items
            //                             }));
            //                         }}></Button>
            //                     <Button
            //                         className="remove-btn"
            //                         color="danger"
            //                         size="sm"
            //                         onClick={() => {
            //                             this.setState(state => ({
            //                                 items: state.items.filter(item =>  item._id != _id)
            //                             }));
            //                             this.deleteFromDB(_id);
            //                         }}>
            //                     &times;
            //                     </Button>
            //                     </ListGroupItem>
            //                 </CSSTransition>
            //             ))}
            //         </TransitionGroup>
            //     </ListGroup>
            // </Container>
            //
            // </div>
        //)
    }
}
export default ShoppingList;