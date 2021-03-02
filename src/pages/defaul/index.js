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
