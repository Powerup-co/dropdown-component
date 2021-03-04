import React, {Fragment} from 'react'
import cn from 'classnames'

import NavBar from 'common_components/nav_bar'
import Logo from 'common_components/logo'

import styles from './styles.styl'

export default function DefaultPage() {
    return (
        <Fragment>
            <NavBar
                logo={<Logo />}
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
                        customRow: {
                            title: 'For you',
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
                            title: 'For you',
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
                            title: 'For you',
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
                ]}
                forceUseDefaulLinkTag
            />
        </Fragment>
    )
}
