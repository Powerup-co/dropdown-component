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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ullamcorper quam odio, non elementum ipsum feugiat a. Donec luctus tortor at turpis venenatis, ut cursus massa varius. Ut efficitur viverra convallis. Phasellus vehicula, nulla in feugiat suscipit, felis felis dignissim massa, in hendrerit turpis mauris et sem. Aenean id risus vel mi luctus porta et non arcu. Maecenas quis enim ullamcorper, condimentum libero ac, ultricies arcu. Nullam non enim quis massa dictum sodales et quis tellus. Nunc at pellentesque mi. Suspendisse maximus mi ac lectus tempus, nec rhoncus eros ullamcorper.

            Aenean feugiat gravida tortor. Nulla mollis dolor felis, iaculis mattis dolor blandit vitae. Donec hendrerit orci et tincidunt rutrum. Aliquam tellus diam, tincidunt id mi nec, ultrices vulputate neque. Nullam nec convallis neque, a auctor dui. Sed at tristique leo, ut tristique justo. Etiam nec nulla ante. Nulla varius nisi et tellus dictum venenatis. Mauris sollicitudin faucibus maximus. Nam rutrum, sem eget mollis sollicitudin, quam ante rhoncus justo, et mollis turpis lectus eget leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas sit amet ultrices arcu, ac aliquet erat. Suspendisse potenti. Maecenas lectus nulla, interdum non sagittis vitae, mollis eu urna. In efficitur risus eget odio imperdiet euismod. Aliquam dignissim volutpat lorem eget fermentum.

            Etiam iaculis venenatis sagittis. Duis magna sapien, tristique nec ipsum eu, semper ultricies est. Nunc augue ex, congue sit amet lacinia a, cursus a urna. Maecenas magna felis, molestie id pharetra nec, fermentum vel magna. Nullam eleifend efficitur nunc ac faucibus. Cras placerat augue eget consequat pharetra. Mauris lacus nibh, mattis et dictum nec, luctus sit amet eros. Morbi in dapibus turpis. Ut lacus lectus, aliquet non tincidunt in, feugiat eu mi. Proin finibus, mauris a malesuada pretium, felis tellus feugiat justo, non ultricies ex neque aliquet arcu. Morbi malesuada feugiat ipsum, vel ullamcorper risus sodales in. Cras pulvinar tempor dui interdum molestie. Morbi dui orci, elementum non fermentum in, tincidunt vel lacus. Quisque aliquam efficitur odio non ullamcorper.

            Fusce tempus vehicula justo et aliquet. Cras finibus sed massa sed euismod. Quisque bibendum, neque congue vestibulum ultricies, lectus risus pretium metus, vitae pharetra urna risus vitae ante. Donec non mi at enim hendrerit efficitur vel id felis. Vivamus cursus risus ut massa tincidunt scelerisque. Aliquam commodo massa nec elit laoreet efficitur. Nunc ultricies urna vel pulvinar accumsan. In suscipit ultrices sapien, sit amet elementum purus imperdiet vitae. Vivamus porta in ligula in euismod. Suspendisse vel tortor ullamcorper, congue sapien eget, dictum felis. Integer ac lacus risus.

            Nunc ultricies ante vel volutpat interdum. Vivamus eget odio ac mi ullamcorper auctor. Etiam consequat gravida sollicitudin. Aliquam et velit non justo scelerisque commodo. Suspendisse potenti. Vivamus cursus sem in quam lobortis, in commodo purus lacinia. Sed sodales aliquam ligula vitae sodales. Donec quis nulla sit amet mi vestibulum ultrices id eu purus. Praesent ultricies placerat dolor, sit amet fermentum nunc efficitur et.

            Donec non tortor a purus iaculis faucibus. Phasellus nec lacinia lacus. Aliquam tortor nisl, suscipit finibus mattis ac, molestie a augue. Aliquam tempus ligula orci. Etiam facilisis vestibulum imperdiet. Aenean vitae arcu maximus est luctus mollis. Vivamus pharetra rutrum orci eu rhoncus.

            Vestibulum diam velit, bibendum nec quam sed, congue viverra elit. Morbi sollicitudin hendrerit nunc sit amet faucibus. Aliquam imperdiet aliquam dolor eu cursus. Donec at ornare orci. Vestibulum consequat posuere tortor ut ornare. Suspendisse vel auctor sem. Proin semper tincidunt nisi, non viverra velit efficitur sit amet. Donec scelerisque leo vitae dolor vestibulum, sed commodo quam ultricies. Praesent scelerisque nisl eu aliquet condimentum. Nullam sodales vel ex quis vehicula. Nam faucibus at metus iaculis ultricies. Quisque at libero eget purus vulputate rhoncus. Proin vestibulum mi ut enim imperdiet, vel bibendum neque ornare. Duis ligula turpis, finibus vitae mauris at, aliquam eleifend sem.

            Aliquam imperdiet, ex a tincidunt ultricies, mi lorem tincidunt nunc, non congue erat sem iaculis ex. Duis at fermentum risus. Proin in arcu a metus tincidunt viverra. Quisque iaculis, tellus et molestie euismod, nibh mauris ornare orci, non accumsan dui neque in risus. Proin neque sem, accumsan at lorem dapibus, condimentum cursus enim. Suspendisse potenti. Donec elementum, nulla nec pharetra fringilla, ante nisl ornare risus, quis tristique lectus neque vel diam. Nullam diam nunc, tempor a consequat ac, finibus lobortis sem. Vestibulum tristique lectus eget ex fermentum, nec viverra ante accumsan. Sed iaculis arcu pretium interdum suscipit. In rutrum urna at dui fermentum dignissim. Donec vitae turpis commodo, vulputate enim ut, sodales nulla. Vestibulum malesuada pellentesque augue, id rutrum augue bibendum quis.

            Vivamus pellentesque quam vitae nulla facilisis, tempor egestas sapien euismod. Nam posuere orci ut leo euismod, quis volutpat diam tincidunt. Aenean lobortis mauris vitae consectetur elementum. Vivamus blandit quis urna sit amet eleifend. Nam vitae rutrum nibh. Integer sapien est, pharetra a elementum vitae, gravida blandit lacus. Curabitur semper pellentesque urna. Aliquam nec dolor venenatis, finibus leo eget, aliquet lorem. Nullam odio nisl, consequat ac tincidunt sit amet, luctus non risus. Ut vel odio quis mi faucibus tempus nec vitae libero. Etiam rhoncus eget nisi ut fringilla. Praesent vitae venenatis nibh. Mauris a sagittis velit. Aliquam rhoncus dui vitae tellus lobortis, ac vehicula sem faucibus. Nunc fringilla euismod massa, vitae blandit diam. Integer in velit maximus, tincidunt ligula id, lacinia dui.

            Morbi tortor velit, venenatis eleifend maximus sit amet, malesuada id est. Aenean a semper metus. Aenean ac orci nisi. Maecenas nec cursus ex. Cras convallis neque quis euismod elementum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas aliquam mattis erat. Sed non consectetur metus, nec viverra augue. Pellentesque suscipit leo sed ex accumsan lacinia. Proin rhoncus malesuada pretium.

            Donec dictum vel sem quis eleifend. Ut vulputate ac velit dictum lobortis. Praesent enim sapien, gravida quis libero a, consequat interdum elit. Morbi sodales, augue at accumsan aliquam, diam velit lacinia nunc, eu sagittis leo justo et felis. Duis eu euismod nisi. Ut fringilla diam urna, eu varius neque malesuada et. Praesent blandit convallis tortor, in scelerisque leo tristique eget. Aliquam magna ipsum, elementum sit amet eleifend sed, dictum a tellus. Aliquam semper ultrices faucibus. In mattis tincidunt tellus, id feugiat risus porta tempor. Proin ut nunc nisi. Integer erat justo, condimentum vitae sollicitudin nec, mattis pulvinar velit. Donec dapibus lacus vitae velit ullamcorper, non ultricies dui auctor. Nam sollicitudin sem eget erat congue, non maximus odio ultricies. Quisque ornare vitae ligula ultricies elementum.

            In egestas dolor at mi congue congue. Duis bibendum eu quam in pretium. Fusce lobortis sem metus, consequat dictum metus sagittis tincidunt. Sed efficitur rutrum ipsum id convallis. Sed pellentesque leo non odio mattis congue. Quisque gravida lacus nec tincidunt tempor. Fusce facilisis massa facilisis quam tincidunt, sed bibendum justo vestibulum. Vivamus varius tortor at turpis varius feugiat. Nunc vitae ullamcorper justo. Nam pulvinar ex non hendrerit porttitor.

            Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse tincidunt gravida condimentum. Donec lorem augue, faucibus a vestibulum vel, vehicula aliquet est. Sed varius convallis sagittis. Aenean ut massa massa. Sed sagittis elit et mauris ullamcorper vestibulum. Nam vel ullamcorper tellus. Cras nec lacus ex.

            Mauris ac nisl ac sapien semper vestibulum nec sit amet dui. Donec quam sem, porta a nibh sit amet, cursus lacinia magna. Donec fermentum feugiat ante, sit amet hendrerit tellus facilisis at. Etiam eget purus nunc. Fusce porttitor neque at orci viverra consequat et faucibus leo. Nullam non risus felis. Proin fermentum nec odio vel vehicula.

            Aliquam varius faucibus risus non efficitur. Ut id lorem dictum, imperdiet elit eu, accumsan diam. Mauris at bibendum dui. Sed nec mattis velit. Suspendisse vulputate eget justo a elementum. Pellentesque sit amet viverra ligula, a gravida sapien. Cras nec cursus sapien. In hac habitasse platea dictumst. Etiam lobortis turpis auctor dolor pellentesque, non viverra nisi rhoncus. Suspendisse mollis dui eu nisi tristique, ut ornare orci finibus.

            Praesent vel augue ligula. Donec non euismod neque. Curabitur ullamcorper augue dictum libero gravida, lacinia scelerisque quam sagittis. In hac habitasse platea dictumst. Cras ac ligula commodo, blandit nulla eu, volutpat mi. Donec pretium condimentum mi ut ultrices. Ut in condimentum nibh, a sodales massa. Maecenas nec auctor mauris, nec mattis ante.

            Etiam ut mauris a magna blandit mattis eu ac urna. In non leo sollicitudin justo imperdiet ornare quis sit amet lacus. Mauris accumsan nunc nec eros elementum rutrum. Pellentesque porta ex sed orci consectetur, sit amet luctus neque sollicitudin. Etiam vitae dolor vel nulla commodo dapibus quis a libero. Fusce sit amet dui vehicula tortor cursus dictum ullamcorper non massa. Aliquam luctus tortor id vulputate aliquam. Mauris et libero convallis, faucibus neque et, volutpat augue. Nullam consequat egestas massa. Duis dapibus tortor elit, sed porta sapien dapibus in. Duis dapibus, augue vel euismod vulputate, odio metus volutpat augue, in convallis odio sapien scelerisque purus. Praesent vitae justo non nulla vestibulum mattis vel sit amet nisl. Vestibulum sed tempor metus, non sollicitudin ex. Quisque ut justo sed risus porttitor pretium. In lobortis auctor hendrerit.

            Aliquam luctus ante a aliquam faucibus. Nullam egestas scelerisque mollis. Mauris leo nulla, euismod quis gravida sed, accumsan quis sapien. Nam consequat mauris quam, in convallis tortor blandit et. Aliquam placerat interdum metus eget efficitur. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus pharetra, sem pretium dignissim pulvinar, magna diam consequat ex, id consectetur neque urna non tellus.

            In eu arcu sed erat consectetur sagittis sit amet in quam. Pellentesque urna eros, accumsan sit amet egestas id, blandit nec purus. Nullam vitae ante non odio varius tristique. Morbi eget faucibus sem. Nunc diam tortor, aliquet ut ipsum non, auctor viverra ex. Pellentesque facilisis malesuada purus, et interdum arcu porta et. Quisque eros quam, rhoncus sed vehicula efficitur, congue eu tellus. Aliquam erat volutpat. Aenean porttitor dui sollicitudin, venenatis massa vel, sagittis tortor. Donec orci nisl, tincidunt id eros at, malesuada egestas dolor. Morbi pharetra pulvinar mi a fermentum. Nulla facilisi. Suspendisse dapibus libero viverra nunc porttitor, fringilla aliquet libero accumsan.

            Fusce ac sodales felis. Donec ultricies leo ut tellus suscipit, sit amet sollicitudin tellus sodales. Proin tristique consequat est, quis hendrerit turpis malesuada sit amet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque lacus sapien, ornare et semper hendrerit, iaculis in magna. Quisque eleifend metus at tortor scelerisque tempus. Fusce nisi quam, euismod a augue eget, tincidunt mattis dolor.
        </Fragment>
    )
}
