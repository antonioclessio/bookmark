import assert from 'assert';
import dataSourceStructure from './../dataRedux';

describe('Redux', () => {
    describe('ADD', () =>{
        it('Adicionando item', () =>{
            const stateInitial = [{
                id: 1,
                title: "Google",
                url: "http://www.google.com",
                tags: ["Search", "Web"]
            }];

            const action = {
                type: 'ADD',
                dataItem: {
                    id: 2,
                    title: "Facebook",
                    url: "http://www.facebook.com",
                    tags: ["Network", "Web"]
                }
            };

            const expected = [{
                id: 1,
                title: "Google",
                url: "http://www.google.com",
                tags: ["Search", "Web"]
            },
            {
                id: 2,
                title: "Facebook",
                url: "http://www.facebook.com",
                tags: ["Network", "Web"]
            }];

            const verificacao = dataSourceStructure(stateInitial, action);
 
            assert.deepEqual(verificacao, expected, "Falha ao adicionar");
        });
    });

    describe('DEL_TAG', () =>{
        it('Removendo item', () =>{
            const stateInitial = [{
                id: 1,
                title: "Google",
                url: "http://www.google.com",
                tags: ["Search", "Web"]
            },
            {
                id: 2,
                title: "Facebook",
                url: "http://www.facebook.com",
                tags: ["Network", "Web"]
            }];

            const action = {
                type: 'DEL_TAG',
                tag: 'Web',
                dataItem: {
                    id: 2,
                    title: "Facebook",
                    url: "http://www.facebook.com",
                    tags: ["Network", "Web"]
                }
            };

            const expected = [{
                id: 1,
                title: "Google",
                url: "http://www.google.com",
                tags: ["Search", "Web"]
            }];

            const verificacao = dataSourceStructure(stateInitial, action);
 
            assert.deepEqual(verificacao, expected, "Falha ao remover a tag");
        });
    });

    describe('DEL', () =>{
        it('Removendo item', () =>{
            const stateInitial = [{
                id: 1,
                title: "Google",
                url: "http://www.google.com",
                tags: ["Search", "Web"]
            },
            {
                id: 2,
                title: "Facebook",
                url: "http://www.facebook.com",
                tags: ["Network", "Web"]
            }];

            const action = {
                type: 'DEL',
                dataItem: {
                    id: 2,
                    title: "Facebook",
                    url: "http://www.facebook.com",
                    tags: ["Network", "Web"]
                }
            };

            const expected = [{
                id: 1,
                title: "Google",
                url: "http://www.google.com",
                tags: ["Search", "Web"]
            }];

            const verificacao = dataSourceStructure(stateInitial, action);
 
            assert.deepEqual(verificacao, expected, "Falha ao remover o item");
        });
    });
});