import React from 'react'
import './data-list.css'

/****************************************************************************************
 * Este componente é passivo. 
 * Sua função é somente listar os dados, efetuar a pesquisa e remover do dataSource
 * principal.
 ****************************************************************************************/

export default class DataList extends React.Component {
    constructor() {
        super();
        this.state = { search: '' };
    }

    // Atualiza o state com a informação a ser pesquisada, de acordo com o valor informado no input
    search = (e) => { this.setState({ search: e.target.value }); }
    
    // Lifecycle de renderização
    render = () => {
        // Realiza o filtro no dataSource de acordo com a propriedade search do state...
        let dataSourceFiltered = !this.props.dataSource ? [] : this.props.dataSource.filter( 
            (dataItem) => {
                return (
                    dataItem.title.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
                 || dataItem.tags.filter( (tag) => tag.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1).length > 0
                );
            }
        );
        
        // Constante com os dataRows renderizados. Um para cada dataItem.
        const dataRows = dataSourceFiltered.map(dataItem => {

            // Listagem das tags.
            const tagTemplate = dataItem.tags.map(tag => {
                return (
                    <span className="tag" key={tag}>{ tag } <span onClick={this.props.tagDeleted.bind(this, dataItem, tag)}>&times;</span></span>
                )
            });

            // Listagem de cada bookmark cadastrado
            return (
                <tr key={ dataItem.id }>
                    <td>{ dataItem.title }</td>
                    <td>{ dataItem.url }</td>
                    <td>{ tagTemplate }</td>
                    <td><span className="glyphicon glyphicon-trash" onClick={this.props.itemDeleted.bind(this, dataItem)}></span></td>
                </tr>
            )
        });

        return (
            <div>
                <input type="text" className="form-control" placeholder="Pesquisa por título ou tags" value={this.state.search} onChange={this.search.bind(this)} />
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th style={styles.WIDTH_TITULO}>Título</th>
                            <th style={styles.WIDTH_ENDERECO}>Endereço</th>
                            <th style={styles.WIDTH_TAGS}>Tags</th>
                            <th style={styles.WIDTH_ACTIONS}></th>
                        </tr>
                    </thead>
                    <tbody>
                        { dataRows }
                    </tbody>
                </table>
            </div>
        )
    }
}

const styles = {
    WIDTH_TITULO: { width: '20%' },
    WIDTH_ENDERECO: { width: '30%' },
    WIDTH_TAGS: { width: '40%' },
    WIDTH_ACTIONS: { width: '10%' }
};