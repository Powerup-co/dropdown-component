import React from 'react'

import NavBar from 'dropdown-component'

import createArgTypes from './create_arg_types'

export default {
    title: 'Link',
    component: NavBar.Link,
    argTypes: {
        text: createArgTypes({
            controlType: 'text',
        }),
        children: createArgTypes({
            controlType: null,
        }),
    },
}

const Template = (args) => <NavBar.Link {...args} />

export const Link = Template.bind({})
Link.args = {
    path: '#',

    text: 'Link',
    forceUseDefaulLinkTag: true,
}
