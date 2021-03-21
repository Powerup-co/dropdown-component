import React from 'react'
import cn from 'classnames'

import NavBarComponent, {Link} from 'dropdown-component'
import 'dropdown-component/dist/index.css'

import Logo from '../page/components/logo'

// eslint-disable-next-line import/no-webpack-loader-syntax
import styles from '!style-loader!css-loader?modules!stylus-loader!../page/styles.styl'
// eslint-disable-next-line import/no-webpack-loader-syntax
import '!style-loader!css-loader?modules!stylus-loader!./nav_bar_styles.styl'

import createArgTypes from './create_arg_types'

export default {
    title: 'Nav Bar',
    component: NavBarComponent,
    argTypes: {
        logo: createArgTypes({
            controlType: null,
        }),
        leftAdditionalElements: createArgTypes({
            controlType: null,
        }),
        rightAdditionalElements: createArgTypes({
            controlType: null,
        }),
    },
}

const Template = (args) => <NavBarComponent {...args} />

export const NavBar = Template.bind({})
NavBar.args = {
    logo: <Logo />,
    linkList: [
        {
            text: 'NEW',
            path: '/new',
            isBold: true,
            withNotificationDot: true,
            hoverBgClassName: styles['new-block-bg'],
            customRow: {
                children: (
                    <div className={cn(styles['new-block'], styles['new-block-bg'])}>
                        <p className={styles['header']}>
                            SPRING
                            <br />
                            COLLECTION
                        </p>
                        <p className={styles['text']}>
                            Spring is in the air and with it
                            <br />
                            comes our brand new collection
                            <br />
                            of active wear for any weather.
                        </p>
                        <Link
                            forceUseDefaulLinkTag
                            path="/new-spring-collection"
                            text="BROWSE"
                            className={styles['link']}
                        />
                    </div>
                ),
            },
        },
        {
            text: 'WOMEN',
            path: '/women',
            isBold: true,
            subLinkList: [
                [
                    [
                        {
                            text: 'TOPS',
                            isBold: true,
                        },
                        {
                            text: 'TANKS',
                            path: '/tanks',
                        },
                        {
                            text: 'T-SHIRTS',
                            path: '/t-shirts',
                        },
                        {
                            text: 'LONG SLEEVE',
                            path: '/long-sleeve',
                        },
                        {
                            text: 'SWEATSHIRTS',
                            path: '/sweatshirts',
                        },
                    ],
                    [
                        {
                            text: 'BOTTOMS',
                            isBold: true,
                        },
                        {
                            text: 'LEGGINGS',
                            path: '/leggings',
                        },
                        {
                            text: 'CAPRIS',
                            path: '/capris',
                        },
                        {
                            text: 'SHORTS',
                            path: '/shorts',
                        },
                        {
                            text: 'PANTS',
                            path: '/pants',
                        },
                    ],
                    [
                        {
                            text: 'BRAS',
                            path: '/bras',
                            isBold: true,
                        },
                        {
                            text: 'SOCKS',
                            path: '/socks',
                            isBold: true,
                        },
                        {
                            text: 'SHOES',
                            path: '/shoes',
                            isBold: true,
                        },
                        {
                            text: 'SALE',
                            path: '/sale',
                            isBold: true,
                            withNotificationDot: true,
                        },
                    ],
                ],
            ],
            banner: (
                <div className={styles['banner']}>
                    <p className={styles['discount']}>
                        30% ALL SOCKS
                    </p>
                    <p className={styles['promo-code']}>
                        USE CODE 30SOCKS
                    </p>
                </div>
            ),
            recentlyViewed: [
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
            customRow: {
                title: 'FOR YOU',
                children: (
                    <div className={styles['for-you-list']}>
                        <div className={styles['banner']}>
                            <p className={styles['discount']}>
                                30% ALL SOCKS
                            </p>
                            <p className={styles['promo-code']}>
                                USE CODE 30SOCKS
                            </p>
                        </div>
                        <div className={styles['banner']}>
                            <p className={styles['discount']}>
                                30% ALL SOCKS
                            </p>
                            <p className={styles['promo-code']}>
                                USE CODE 30SOCKS
                            </p>
                        </div>
                        <div className={styles['banner']}>
                            <p className={styles['discount']}>
                                30% ALL SOCKS
                            </p>
                            <p className={styles['promo-code']}>
                                USE CODE 30SOCKS
                            </p>
                        </div>
                    </div>
                ),
            },
        },
        {
            text: 'MEN',
            path: '/men',
            isBold: true,
            subLinkList: [
                [
                    [
                        {
                            text: 'THING',
                            isBold: true,
                        },
                        {
                            text: 'Thing 1',
                            path: '/thing 1',
                        },
                        {
                            text: 'Thing 2',
                            path: '/thing 2',
                        },
                        {
                            text: 'Thing 3',
                            path: '/thing 3',
                        },
                        {
                            text: 'Thing 4',
                            path: '/thing 4',
                        },
                    ],
                ],
            ],
            banner: (
                <div className={styles['banner']}>
                    <p className={styles['discount']}>
                        30% ALL SOCKS
                    </p>
                    <p className={styles['promo-code']}>
                        USE CODE 30SOCKS
                    </p>
                </div>
            ),
            recentlyViewed: [
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
        },
        {
            text: 'PLUS SIZE',
            path: '/plus-size',
            isBold: true,
            subLinkList: [
                [
                    [
                        {
                            text: 'TOPS',
                            isBold: true,
                        },
                        {
                            text: 'TANKS',
                            path: '/tanks',
                        },
                        {
                            text: 'T-SHIRTS',
                            path: '/t-shirts',
                        },
                        {
                            text: 'LONG SLEEVE',
                            path: '/long-sleeve',
                        },
                        {
                            text: 'SWEATSHIRTS',
                            path: '/sweatshirts',
                        },
                    ],
                    [
                        {
                            text: 'BOTTOMS',
                            isBold: true,
                        },
                        {
                            text: 'LEGGINGS',
                            path: '/leggings',
                        },
                        {
                            text: 'CAPRIS',
                            path: '/capris',
                        },
                        {
                            text: 'SHORTS',
                            path: '/shorts',
                        },
                        {
                            text: 'PANTS',
                            path: '/pants',
                        },
                    ],
                    [
                        {
                            text: 'BRAS',
                            path: '/bras',
                            isBold: true,
                        },
                        {
                            text: 'SOCKS',
                            path: '/socks',
                            isBold: true,
                        },
                        {
                            text: 'SHOES',
                            path: '/shoes',
                            isBold: true,
                        },
                        {
                            text: 'SALE',
                            path: '/sale',
                            isBold: true,
                            withNotificationDot: true,
                        },
                    ],
                ],
            ],
            banner: (
                <div className={styles['banner']}>
                    <p className={styles['discount']}>
                        30% ALL SOCKS
                    </p>
                    <p className={styles['promo-code']}>
                        USE CODE 30SOCKS
                    </p>
                </div>
            ),
            customRow: {
                title: 'FOR YOU',
                children: (
                    <div className={styles['for-you-list']}>
                        <div className={styles['banner']}>
                            <p className={styles['discount']}>
                                30% ALL SOCKS
                            </p>
                            <p className={styles['promo-code']}>
                                USE CODE 30SOCKS
                            </p>
                        </div>
                        <div className={styles['banner']}>
                            <p className={styles['discount']}>
                                30% ALL SOCKS
                            </p>
                            <p className={styles['promo-code']}>
                                USE CODE 30SOCKS
                            </p>
                        </div>
                        <div className={styles['banner']}>
                            <p className={styles['discount']}>
                                30% ALL SOCKS
                            </p>
                            <p className={styles['promo-code']}>
                                USE CODE 30SOCKS
                            </p>
                        </div>
                    </div>
                ),
            },
        },
        {
            text: 'COLLECTIONS',
            path: '/collections',
            subLinkList: [
                [
                    [
                        {
                            text: 'TOPS',
                            isBold: true,
                        },
                        {
                            text: 'TANKS',
                            path: '/tanks',
                        },
                        {
                            text: 'T-SHIRTS',
                            path: '/t-shirts',
                        },
                        {
                            text: 'LONG SLEEVE',
                            path: '/long-sleeve',
                        },
                        {
                            text: 'SWEATSHIRTS',
                            path: '/sweatshirts',
                        },
                    ],
                    [
                        {
                            text: 'BOTTOMS',
                            isBold: true,
                        },
                        {
                            text: 'LEGGINGS',
                            path: '/leggings',
                        },
                        {
                            text: 'CAPRIS',
                            path: '/capris',
                        },
                        {
                            text: 'SHORTS',
                            path: '/shorts',
                        },
                        {
                            text: 'PANTS',
                            path: '/pants',
                        },
                    ],
                    [
                        {
                            text: 'BRAS',
                            path: '/bras',
                            isBold: true,
                        },
                        {
                            text: 'SOCKS',
                            path: '/socks',
                            isBold: true,
                        },
                        {
                            text: 'SHOES',
                            path: '/shoes',
                            isBold: true,
                        },
                        {
                            text: 'SALE',
                            path: '/sale',
                            isBold: true,
                            withNotificationDot: true,
                        },
                    ],
                ],
            ],
            recentlyViewed: [
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
            customRow: {
                title: 'FOR YOU',
                children: (
                    <div className={styles['for-you-list']}>
                        <div className={styles['banner']}>
                            <p className={styles['discount']}>
                                30% ALL SOCKS
                            </p>
                            <p className={styles['promo-code']}>
                                USE CODE 30SOCKS
                            </p>
                        </div>
                        <div className={styles['banner']}>
                            <p className={styles['discount']}>
                                30% ALL SOCKS
                            </p>
                            <p className={styles['promo-code']}>
                                USE CODE 30SOCKS
                            </p>
                        </div>
                        <div className={styles['banner']}>
                            <p className={styles['discount']}>
                                30% ALL SOCKS
                            </p>
                            <p className={styles['promo-code']}>
                                USE CODE 30SOCKS
                            </p>
                        </div>
                    </div>
                ),
            },
        },
        {
            text: 'OUTFITS',
            path: '/outfits',
            subLinkList: [
                [
                    [
                        {
                            text: 'TOPS',
                            isBold: true,
                        },
                        {
                            text: 'TANKS',
                            path: '/tanks',
                        },
                        {
                            text: 'T-SHIRTS',
                            path: '/t-shirts',
                        },
                        {
                            text: 'LONG SLEEVE',
                            path: '/long-sleeve',
                        },
                        {
                            text: 'SWEATSHIRTS',
                            path: '/sweatshirts',
                        },
                    ],
                    [
                        {
                            text: 'BOTTOMS',
                            isBold: true,
                        },
                        {
                            text: 'LEGGINGS',
                            path: '/leggings',
                        },
                        {
                            text: 'CAPRIS',
                            path: '/capris',
                        },
                        {
                            text: 'SHORTS',
                            path: '/shorts',
                        },
                        {
                            text: 'PANTS',
                            path: '/pants',
                        },
                    ],
                    [
                        {
                            text: 'BRAS',
                            path: '/bras',
                            isBold: true,
                        },
                        {
                            text: 'SOCKS',
                            path: '/socks',
                            isBold: true,
                        },
                        {
                            text: 'SHOES',
                            path: '/shoes',
                            isBold: true,
                        },
                        {
                            text: 'SALE',
                            path: '/sale',
                            isBold: true,
                            withNotificationDot: true,
                        },
                    ],
                ],
            ],
            banner: (
                <div className={styles['banner']}>
                    <p className={styles['discount']}>
                        30% ALL SOCKS
                    </p>
                    <p className={styles['promo-code']}>
                        USE CODE 30SOCKS
                    </p>
                </div>
            ),
        },
        {
            text: 'ACCESSORIES',
            path: '/accessories',
            subLinkList: [
                [
                    [
                        {
                            text: 'TOPS',
                            isBold: true,
                        },
                        {
                            text: 'TANKS',
                            path: '/tanks',
                        },
                        {
                            text: 'T-SHIRTS',
                            path: '/t-shirts',
                        },
                        {
                            text: 'LONG SLEEVE',
                            path: '/long-sleeve',
                        },
                        {
                            text: 'SWEATSHIRTS',
                            path: '/sweatshirts',
                        },
                    ],
                    [
                        {
                            text: 'BOTTOMS',
                            isBold: true,
                        },
                        {
                            text: 'LEGGINGS',
                            path: '/leggings',
                        },
                        {
                            text: 'CAPRIS',
                            path: '/capris',
                        },
                        {
                            text: 'SHORTS',
                            path: '/shorts',
                        },
                        {
                            text: 'PANTS',
                            path: '/pants',
                        },
                    ],
                    [
                        {
                            text: 'BRAS',
                            path: '/bras',
                            isBold: true,
                        },
                        {
                            text: 'SOCKS',
                            path: '/socks',
                            isBold: true,
                        },
                        {
                            text: 'SHOES',
                            path: '/shoes',
                            isBold: true,
                        },
                        {
                            text: 'SALE',
                            path: '/sale',
                            isBold: true,
                            withNotificationDot: true,
                        },
                    ],
                ],
            ],
        },
        {
            text: 'ABOUT',
            path: '/about',
        },
    ],

    useSimpleSearch: true,
    useFullSearch: false,
    showShoppingBagIcon: true,
    hasSomethingInShoppingBag: true,
    forceUseDefaulLinkTag: true,
}
NavBar.parameters = {
    backgrounds: {
        default: 'dark',
    },
}
