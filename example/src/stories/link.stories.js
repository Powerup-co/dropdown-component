import React from 'react'

import {Link as LinkComponent} from 'dropdown-component'

import createArgTypes from './create_arg_types'

export default {
    title: 'Navigation/Link',
    component: LinkComponent,
    argTypes: {
        path: createArgTypes({
            description: 'Link\'s href',
            isRequired: true,
            typeName: 'String',
            defaultValue: LinkComponent?.defaultProps?.path,
        }),
        text: createArgTypes({
            typeName: 'String',
            defaultValue: LinkComponent?.defaultProps?.text,
        }),
        className: createArgTypes({
            typeName: 'String',
            defaultValue: LinkComponent?.defaultProps?.className,
            controlType: 'text',
        }),
        children: createArgTypes({
            typeName: 'Node',
            defaultValue: LinkComponent?.defaultProps?.children,
            controlType: null,
        }),
        forceUseDefaulLinkTag: createArgTypes({
            description: 'If you are not using react-router or want the link to work as usual, then set to "True"',
            typeName: 'Boolean',
            defaultValue: LinkComponent?.defaultProps?.forceUseDefaulLinkTag,
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
