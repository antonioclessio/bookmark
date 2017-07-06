import React, { Component } from 'react';
import { connect } from 'react-redux';

import Form from './form';
import DataList from './data-list';

/****************************************************************************************
 * Este componente é ativo. A função dele é orquestrar a comunicação entre os demais
 * componentes, que por sua vez não se conhecem.
 * 
 * Basicamente o formulário irá gerar o dataItem a ser adicionado e devolverá a este 
 * componente (App), que por sua vez tem o trabalho de enviar o dataItem gerado ao 
 * segundo componente passivo (Lista).
 * 
 * O Componente "Lista" tem o dataSource principal da tela para manipulação.
 ****************************************************************************************/

class App extends Component {
    render = () => {
        return (
            <div className="container">
                <div className="jumbotron">
                    <h1 className="display-3">Bookmark</h1>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <Form itemCreated={(e) => this.props.addItem(e)}></Form>
                    </div>
                    <div className="col-md-8">
                        <DataList 
                            dataSource={this.props.dataSource} 
                            itemDeleted={(e) => this.props.deleteItem(e)}
                            tagDeleted={(e, tag) => this.props.deleteTag(e, tag)}>
                        </DataList>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        dataSource: state.dataSource
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addItem: (dataItem) => {
            dispatch({
                type: 'ADD',
                dataItem: dataItem
            })
        },
        deleteItem: (dataItem) => {
            dispatch({
                type: "DEL",
                dataItem: dataItem
            })
        },
        deleteTag: (dataItem, tag) => {
            dispatch({
                type: "DEL_TAG",
                dataItem: dataItem,
                tag: tag
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);