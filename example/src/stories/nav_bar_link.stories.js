import React from 'react'

import {NavBarLink as NavBarLinkComponent} from 'dropdown-component'

import createArgTypes from './create_arg_types'

export default {
    title: 'Nav Bar Link',
    component: NavBarLinkComponent,
    argTypes: {
        text: createArgTypes({
            controlType: 'text',
        }),
    },
}

const Template = (args) => <NavBarLinkComponent {...args} />

export const NavBarLink = Template.bind({})
NavBarLink.args = {
    path: '#',

    text: 'Nav Bar Link',
    forceUseDefaulLinkTag: true,
}
