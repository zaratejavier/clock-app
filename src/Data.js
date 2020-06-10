import React from "react";

export default class Data extends React.Component {
  state = {
    data: [],
    loading: true,
  };

  componentDidMount(){
    fetch("https://randomuser.me/api/?results=10") //gets the data from the API
    .then((res) => res.json()) //we get the data and format it to JSON
    .then((data) => {
      console.log(data); //this will log the data that we are getting from api
      this.setState({
        data: data.results, //goes gets the results from api and stores it in the state.data above
        loading: false, // then we set the laoding to false because we got the data
      })
    })
  }

  render(){
    const { data, loading } = this.state;
    
    if (loading){ //if loading is true we display "loading..." to the screen
      return <div>loading...</div> //will be displayed on the screen
    }
    else{ //if loading is false we are going to try and display the data form api
      return(
      <div>
        {data.map((d) => (
           <p key={d.id}>{d.name.first} {d.name.last} {d.dob.age}</p> //we are looping through our data and getting first name
        ))}
      </div>
      )
    }
  }
}