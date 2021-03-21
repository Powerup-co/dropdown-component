import React from 'react'

import {SearchResult as SearchResultComponent} from 'dropdown-component'

import createArgTypes from './create_arg_types'

export default {
    title: 'Search Result',
    component: SearchResultComponent,
    argTypes: {
        searchResult: createArgTypes({
            description: 'To make the text bold, you need to wrap it with `**` (markdown notation)or pass an array of objects in the text parameter, where normalText displays plain text, and boldText - bold. `[{normalText: string}, {boldText: string}]`',
            isRequired: true,
            typeName: 'Array<NavBarLink>',
            defaultValue: SearchResultComponent?.defaultProps?.searchResult,
        }),
        className: createArgTypes({
            typeName: 'String',
            defaultValue: SearchResultComponent?.defaultProps?.className,
            controlType: 'text',
        }),
        forceUseDefaulLinkTag: createArgTypes({
            description: 'If you are not using react-router or want the link to work as usual, then set to "True"',
            typeName: 'Boolean',
            defaultValue: SearchResultComponent?.defaultProps?.forceUseDefaulLinkTag,
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
