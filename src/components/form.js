import React from 'react';
import { Button } from 'react-bootstrap';

/****************************************************************************************
 * Este componente é passivo. 
 * Ele somente trata o formulário e como saída tem um dataItem gerado com os dados 
 * informados no formulário.
 * 
 * Este componente envia o dataItem ao seu "master" que é o App.
 ****************************************************************************************/

export default class Form extends React.Component {
    constructor() {
        super();
        this.state = { title: '', url: '', tags: '', errors: {} }
    }

    // Realiza o "post" do formulário.
    onFormSubmit = (e) => {
        e.preventDefault();

        let errors = {};
        if (this.refs.title.value === '') errors.title = true;
        if (this.refs.url.value === '') errors.url = true;
        if (this.refs.tags.value === '') errors.tags = true;
        this.setState({ errors });
    
        // Se encontrou algum erro, então retorna.
        if (errors.hasOwnProperty("title") || errors.hasOwnProperty("url") || errors.hasOwnProperty("tags")) { return; }

        // Criando o dataItem com os dados do form.
        let id = Math.floor(Math.random() * 100 + 1);
        let title = this.refs.title.value;
        let url = this.refs.url.value;
        let tags = this.refs.tags.value.split(' ');

        let newItem = {id, title, url, tags};

        // Envia o dataItem criado para o componente "orquestrador" (App)
        this.props.itemCreated(newItem);

        this.refs.title.value = "";
        this.refs.url.value = "";
        this.refs.tags.value = "";
    }

    render = () => {
        return (
            <form onSubmit={this.onFormSubmit.bind(this)}>
                <div className={`form-group ${this.state.errors.title ? 'has-error' : ''}`}>
                    <label htmlFor="txttitle" className="control-label">Título</label>
                    <input type="text" className="form-control form-control-success" id="txttitle" placeholder="Digite o título" ref="title" />
                </div>

                <div className={`form-group ${this.state.errors.url ? 'has-error' : ''}`}>
                    <label htmlFor="txtUrl" className="control-label">Endereço</label>
                    <input type="url" className="form-control form-control-success" id="txtUrl" placeholder="http://www.exemplo.com.br"
                        pattern="(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?" ref="url" />
                </div>

                <div className={`form-group ${this.state.errors.tags ? 'has-error' : ''}`}>
                    <label htmlFor="txtTags" className="control-label">Tags</label>
                    <input type="text" className="form-control form-control-success" id="txtTags" placeholder="Separe as tags por espaço" ref="tags" />
                </div>

                <Button bsStyle="primary" type="submit">Adicionar</Button>
            </form>
        )
    }
}
