import React, { Fragment } from "react";
import Card from "../components/card/card";

const API = 'http://www.omdbapi.com/?i=tt3896198&apikey=634c653d'


class List extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data: [],
      loading: true,
      searchTerm: "",
      error: "",
    };

  }
  async componentDidMount() {
    //const res = await fetch("../../assets/data.json");
    const res = await fetch(`${API}&s=batman`);
    const resJSON = await res.json();
    this.setState({data: resJSON.Search});
    //console.log(data);


  }

  render() {
    return(
      <div className="row">
        {
          this.state.data.map(movie =>{
          return <Card movie={movie}/>
          })
        }

      </div>
    )

}}
export default List;
