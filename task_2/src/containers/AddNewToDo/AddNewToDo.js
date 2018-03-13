import React, {Component} from 'react';
import './AddNewToDo.css';
import {connect} from 'react-redux';
import {adderToDo, changerToDo, fetchNewToDo, removerToDo} from "../../store/actions";

class AddNewToDo extends Component {

    componentDidMount() {
      this.props.fetchNewToDo();
      console.log(this.props)
    };

  render () {
      return (
          <div className="AddNewToDo">
              <div className="AddNewInfo">
                  <input value={this.props.tasks} type="text" className="AddInputfetchNewToDo" onChange={this.props.changerToDo}/>
                  <button className="AddButton" onClick={() => this.props.adderToDo(this.props.tasks)}>Add</button>
              </div>
              <div className="AddedPost">
                      {Object.keys(this.props.info).map((inf) => {
                      return (<div><p>{this.props.info[inf].task}</p>
                              <span onClick={() => this.props.removerToDo(inf)}>X</span>
                          </div>
                          )
                  })}
              </div>
          </div>
      );
  }
}

const mapStateToProps = state => {
  return {
      info: state.info,
      tasks: state.tasks
  }
};

const mapDispatchToProps = dispatch => {
  return {
      adderToDo: (task) => dispatch(adderToDo(task)),
      changerToDo: (event) => dispatch(changerToDo(event.target.value)),
      removerToDo: (id) => dispatch(removerToDo(id)),
      fetchNewToDo: () => dispatch(fetchNewToDo()),
  }
};


export default connect (mapStateToProps, mapDispatchToProps) (AddNewToDo);