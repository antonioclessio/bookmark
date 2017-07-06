import React from 'react';
import assert from 'assert';

import '../index.js';

describe('Redux', () => {
    describe('ADD', () =>{
        it('Adicionando item', () =>{
            const state = [{
                id: 1,
                title: "Google",
                url: "http://www.google.com",
                tags: ["Search", "Web"]
            }];

            const action = {
                type: "ADD",
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

            assert.deepEqual(dataSourceStructure(state, action), expected);
        });
    });
});