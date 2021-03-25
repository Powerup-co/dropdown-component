import React from 'react'
import cn from 'classnames'

import {RecentlyViewed as RecentlyViewedComponent} from 'dropdown-component'

// eslint-disable-next-line import/no-webpack-loader-syntax
import styles from '!style-loader!css-loader?modules!stylus-loader!../page/recently_viewed.styl'

import createArgTypes from './create_arg_types'

RecentlyViewedComponent.__docgenInfo.props.recentlyViewedList.type.value.value['...otherProps'] = {
    name: 'NavBarLink',
    required: false,
}

export default {
    title: 'Recently Viewed',
    component: RecentlyViewedComponent,
    argTypes: {
        recentlyViewedList: createArgTypes({
            typeName: '[{ component: node, ...otherProps: NavBarLink }]',
            typeNameDetail: null,
        }),
    },
}

const Template = (args) => <RecentlyViewedComponent {...args} />

export const RecentlyViewed = Template.bind({})
RecentlyViewed.args = {
    recentlyViewedList: [
        {
            path: '/recently_viewed_1',
            className: cn(styles['recently-viewed'], styles['recently-viewed-1']),
        },
        {
            path: '/recently_viewed_2',
            className: cn(styles['recently-viewed'], styles['recently-viewed-2']),
        },
        {
            path: '/recently_viewed_3',
            className: cn(styles['recently-viewed'], styles['recently-viewed-3']),
        },
        {
            path: '/recently_viewed_4',
            className: cn(styles['recently-viewed'], styles['recently-viewed-4']),
        },
        {
            path: '/recently_viewed_5',
            className: cn(styles['recently-viewed'], styles['recently-viewed-5']),
        },
        {
            path: '/recently_viewed_6',
            className: cn(styles['recently-viewed'], styles['recently-viewed-6']),
        },
    ],

    forceUseDefaulLinkTag: true,
}
