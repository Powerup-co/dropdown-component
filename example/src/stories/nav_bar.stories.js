import React from 'react'

import NavBar from 'dropdown-component'
import 'dropdown-component/dist/index.css'

export default {
  title: 'Navigation/NavBar',
  component: NavBar,
}

const Template = (args) => <NavBar {...args} />

export const Defaul = Template.bind({})
Defaul.args = {
    linkList: [
        {
            text: 'NEW',
            path: '/new',
            isBold: true,
            withNotificationDot: true,
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
        },
        {
            text: 'MEN',
            path: '/men',
            isBold: true,
            subLinkList: [
                [
                    [
                        {
                            text: 'BLA',
                            isBold: true,
                        },
                        {
                            text: 'bla 1',
                            path: '/bla 1',
                        },
                        {
                            text: 'bla 2',
                            path: '/bla 2',
                        },
                        {
                            text: 'bla 3',
                            path: '/bla 3',
                        },
                        {
                            text: 'bla 4',
                            path: '/bla 4',
                        },
                    ],
                ],
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
    forceUseDefaulLinkTag: true,
}
