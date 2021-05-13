import React from 'react'

import NavBar from 'dropdown-component'

import createArgTypes from './create_arg_types'

export default {
    title: 'Nav Bar Link',
    component: NavBar.NavBarLink,
    argTypes: {
        text: createArgTypes({
            controlType: 'text',
        }),
    },
}

const Template = (args) => <NavBar.NavBarLink {...args} />

export const NavBarLink = Template.bind({})
NavBarLink.args = {
    path: '#',

    text: 'Nav Bar Link',
    forceUseDefaulLinkTag: true,
}
