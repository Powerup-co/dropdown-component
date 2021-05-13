import React from 'react'
import {stripIndent} from 'common-tags'

import NavBar from 'dropdown-component'

import searchResultWithDetailsImg1 from '../page/images/search_result_with_details_img_1.png'

import createArgTypes from './create_arg_types'

console.log(NavBar.SearchResultWithDetails.__docgenInfo)

NavBar.SearchResultWithDetails.__docgenInfo.props.searchResult.type.value.searchResultList.value.value['...otherProps'] = {
    name: 'Link',
    required: false,
}

export default {
    title: 'Search Result With Details',
    component: NavBar.SearchResultWithDetails,
    argTypes: {
        searchResult: createArgTypes({
            typeNameDetail: stripIndent`
                {
                    searchResultList: [{
                        image: string | node,
                        price: number,
                        rating: number,
                        ...otherProps: Link
                    }],
                    count: number,
                    linkToAllResults: string
                }
            `,
        }),
    },
}

const Template = (args) => <NavBar.SearchResultWithDetails {...args} />

export const SearchResultWithDetails = Template.bind({})
SearchResultWithDetails.args = {
    searchResult: {
        searchResultList: [
            {
                text: 'car',
                image: searchResultWithDetailsImg1,
                price: 6695.58,
                rating: 1,
                path: '/car'
            },
            {
                text: 'care',
                image: searchResultWithDetailsImg1,
                price: 7703.35,
                rating: 2,
                path: '/care'
            },
            {
                text: 'card',
                image: searchResultWithDetailsImg1,
                price: 3941.75,
                rating: 4,
                path: '/card'
            }
        ],
        count: 10,
        linkToAllResults: '/all-results'
    },

    forceUseDefaulLinkTag: true,
}
