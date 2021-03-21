import React from 'react'

import {NavBarLink as NavBarLinkComponent} from 'dropdown-component'

import createArgTypes from './create_arg_types'

export default {
    title: 'Nav Bar Link',
    component: NavBarLinkComponent,
    argTypes: {
        path: createArgTypes({
            description: 'Link\'s href. If the field is empty, then instead of a link (<a />), a paragrop is rendered (<p />)',
            typeName: 'String',
            defaultValue: NavBarLinkComponent?.defaultProps?.path,
        }),
        text: createArgTypes({
            typeName: 'String',
            defaultValue: NavBarLinkComponent?.defaultProps?.text,
        }),
        className: createArgTypes({
            typeName: 'String',
            defaultValue: NavBarLinkComponent?.defaultProps?.className,
            controlType: 'text',
        }),
        isBold: createArgTypes({
            typeName: 'Boolean',
            defaultValue: NavBarLinkComponent?.defaultProps?.isBold,
            controlType: 'boolean',
        }),
        withNotificationDot: createArgTypes({
            typeName: 'Boolean',
            defaultValue: NavBarLinkComponent?.defaultProps?.withNotificationDot,
            controlType: 'boolean',
        }),
        forceUseDefaulLinkTag: createArgTypes({
            description: 'If you are not using react-router or want the link to work as usual, then set to "True"',
            typeName: 'Boolean',
            defaultValue: NavBarLinkComponent?.defaultProps?.forceUseDefaulLinkTag,
        }),
    },
}

const Template = (args) => <NavBarLinkComponent {...args} />

export const NavBarLink = Template.bind({})
NavBarLink.args = {
    path: '#',

    text: 'Link',
    forceUseDefaulLinkTag: true,
}
