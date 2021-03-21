import React from 'react'

import {SearchResult as SearchResultComponent} from 'dropdown-component'

import createArgTypes from './create_arg_types'

SearchResultComponent.__docgenInfo.props.searchResult.type.value.value['...otherProps'] = {
    name: 'NavBarLink',
    required: false,
}

export default {
    title: 'Search Result',
    component: SearchResultComponent,
    argTypes: {
        searchResult: createArgTypes({
            typeName: '[{ text: node | array | string, ...otherProps: NavBarLink }]',
            typeNameDetail: null,
        }),
    },
}

const Template = (args) => <SearchResultComponent {...args} />

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
