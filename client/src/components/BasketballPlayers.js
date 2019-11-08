import axios from 'axios';
import xml2js from 'react-native-xml2js';
import React, { Component } from 'react';

class BasketballPlayers extends Component {
    constructor(props) {
        super(props);
    }
    state  = {
        players: []
    }
    componentDidMount(){
        // https://cors-anywhere.herokuapp.com/https://www.fantasybasketballnerd.com/service/players
        //     http://www.localhost:5000/api/items
        axios.get('https://cors-anywhere.herokuapp.com/https://www.fantasybasketballnerd.com/service/players')
            .then( (response) => {
                console.log(response.data);
                var parseString = require('xml2js').parseString;
                parseString(response.data,(err,result)=>{
                    console.log(result["FantasyBasketballNerd"]["Player"]);
                    //this.setState({players:result["FantasyBasketballNerd"]["Player"]});
                    //this.seeData();
                    console.log(this.state.players);
                })
                //this.setState({players:parsedData["FantasyBasketballNerd"]["Player"]});
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    //render(){
        //const { items } = this.state;//instead of using this.state.items you just use items
        render() {
            const namesList = this.state.players.map(name => {
                return (
                    //console.log({name});
                    <li>{name}</li>
                )
            })
            return(
                <ul>
                {namesList}
                </ul>
            )
        }
    //}
}
export default BasketballPlayers;