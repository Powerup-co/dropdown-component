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
