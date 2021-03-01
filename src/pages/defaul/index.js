import React from 'react'

import NavBar from 'common_components/nav_bar'

export default function DefaultPage() {
    return (
        <NavBar
            linkList={[
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
                                    text: 'Tops',
                                    isBold: true,
                                },
                                {
                                    text: 'Tanks',
                                    path: '/tanks',
                                },
                                {
                                    text: 'T-Shirts',
                                    path: '/t-shirts',
                                },
                                {
                                    text: 'Long Sleeve',
                                    path: '/long-sleeve',
                                },
                                {
                                    text: 'Sweatshirts',
                                    path: '/sweatshirts',
                                },
                            ],
                            [
                                {
                                    text: 'Bottoms',
                                    isBold: true,
                                },
                                {
                                    text: 'Leggings',
                                    path: '/leggings',
                                },
                                {
                                    text: 'Capris',
                                    path: '/capris',
                                },
                                {
                                    text: 'Shorts',
                                    path: '/shorts',
                                },
                                {
                                    text: 'Pants',
                                    path: '/pants',
                                },
                            ],
                            [
                                {
                                    text: 'Bras',
                                    path: '/bras',
                                    isBold: true,
                                },
                                {
                                    text: 'Socks',
                                    path: '/socks',
                                    isBold: true,
                                },
                                {
                                    text: 'Shoes',
                                    path: '/shoes',
                                    isBold: true,
                                },
                                {
                                    text: 'Sale',
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
                },
                {
                    text: 'PLUS SIZE',
                    path: '/plus-size',
                    isBold: true,
                },
                {
                    text: 'COLLECTIONS',
                    path: '/collections',
                },
                {
                    text: 'OUTFITS',
                    path: '/outfits',
                },
                {
                    text: 'ACCESSORIES',
                    path: '/accessories',
                },
                {
                    text: 'ABOUT',
                    path: '/about',
                },
            ]}
            forceUseDefaulLinkTag
        />
    )
}
