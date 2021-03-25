import React from 'react'

import {Link as LinkComponent} from 'dropdown-component'

import createArgTypes from './create_arg_types'

export default {
    title: 'Link',
    component: LinkComponent,
    argTypes: {
        text: createArgTypes({
            controlType: 'text',
        }),
        children: createArgTypes({
            controlType: null,
        }),
    },
}

const Template = (args) => <LinkComponent {...args} />

export const Link = Template.bind({})
Link.args = {
    path: '#',

    text: 'Link',
    forceUseDefaulLinkTag: true,
}
