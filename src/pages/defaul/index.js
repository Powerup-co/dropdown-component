import React from 'react'
import cn from 'classnames'

import NavBar from 'common_components/nav_bar'

import styles from './styles.styl'

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
