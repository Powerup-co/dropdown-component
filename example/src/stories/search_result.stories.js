import React from 'react'

import NavBar from 'dropdown-component'

import createArgTypes from './create_arg_types'

NavBar.SearchResult.__docgenInfo.props.searchResult.type.value.value['...otherProps'] = {
    name: 'NavBarLink',
    required: false,
}

export default {
    title: 'Search Result',
    component: NavBar.SearchResult,
    argTypes: {
        searchResult: createArgTypes({
            typeName: '[{ text: node | array | string, ...otherProps: NavBarLink }]',
            typeNameDetail: null,
        }),
    },
}

const Template = (args) => <NavBar.SearchResult {...args} />

export const SearchResult = Template.bind({})
SearchResult.args = {
    searchResult: [
        {
            "text": "**car**",
            "path": "/car"
        },
        {
            "text": "**car**e",
            "path": "/care"
        },
        {
            "text": "**car**d",
            "path": "/card"
        },
        {
            "text": "**car**eer",
            "path": "/career"
        },
        {
            "text": "**car**ry",
            "path": "/carry"
        }
    ],

    forceUseDefaulLinkTag: true,
}
