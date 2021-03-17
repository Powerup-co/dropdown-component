import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

import Link from '../link'

import StarIcon from './svg/star.svg?jsx'
import SearchIcon from '../../svg/search.svg?jsx'

import styles from './styles.styl'

export default function SearchResultWithDetails({
    searchResult: {searchResultList, count, linkToAllResults},

    className,
    forceUseDefaulLinkTag,
    ...props
}) {
    return (
        <div
            className={className}
            {...props}
        >
            {
                searchResultList.map(link => (
                    <Link
                        {...link}
                        text={undefined}
                        key={link.path || link.text}
                        className={cn(styles['search-link'], styles['search-link-wrapper'], link.className)}
                        forceUseDefaulLinkTag={forceUseDefaulLinkTag}
                    >
                        <img src={link.image} alt={link.text} className={styles['search-link-image']} />
                        <div>
                            {link.text}
                            <div className={styles['search-result-info']}>
                                <p className={styles['price']}>
                                    {priceFormat(link.price)}
                                </p>
                                <div className={styles['rating']}>
                                    {
                                        (new Array(5)).fill(1).map((el, idx) => (
                                            <StarIcon
                                                key={idx}
                                                className={cn({
                                                    [styles['active-star']]: idx < link.rating,
                                                    [styles['not-active-star']]: idx >= link.rating,
                                                })}
                                            />
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </Link>
                ))
            }
            {
                count > searchResultList.length && (
                    <div className={styles['all-results-link-wrapper']}>
                        <SearchIcon className={styles['icon']} />
                        <Link
                            path={linkToAllResults}
                            className={styles['all-results-link']}
                            text="See more results"
                            forceUseDefaulLinkTag={forceUseDefaulLinkTag}
                        />
                    </div>
                )
            }
        </div>
    )
}

SearchResultWithDetails.propTypes = {
    searchResult: PropTypes.shape({
        searchResultList: PropTypes.arrayOf(PropTypes.shape({
            ...Link.propTypes,
            image: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.node,
            ]).isRequired,
            price: PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired,
        })),
        count: PropTypes.number,
        linkToAllResults: PropTypes.string,
    }),

    className: PropTypes.string,
    forceUseDefaulLinkTag: PropTypes.bool,
}

function priceFormat(value) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 2,
    }).format(value)
}
