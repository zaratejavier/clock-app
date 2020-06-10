import React from "react";

export default class Data extends React.Component {
  state = { data: [], loading: true };
  
  componentDidMount() {
    fetch("https://randomuser.me/api/?results=10")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({
          data: data.results,
          loading: false,
        });
      });
  }

  render() {
    const { data, loading } = this.state;
    if (loading) {
      return <div>loading</div>;
    } else {
      return (
        <div>
          {data.map((d) => (
            <p key={d.id}>{d.name.first}</p>
          ))}
        </div>
      );
    }
  }
}