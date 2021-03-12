import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

import Link from 'common_components/link'

import NavBarLink from '../nav_bar_link'

import SearchIcon from '../../svg/search.svg?jsx'

import styles from './styles.styl'

export default function SearchResultWithDetails({
    searchResult,

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
                searchResult.map(link => (
                    <div
                        key={link.path || link.text}
                        className={styles['search-link-wrapper']}
                    >
                        <SearchIcon className={styles['icon']} />
                        <NavBarLink
                            {...link}
                            className={cn(styles['search-link'], link.className)}
                            text={
                                (typeof link.text == 'string' ? convertText(link.text) : link.text)
                                    .map((subString, idx) => (
                                        subString.normalText
                                            ? subString.normalText
                                            : (
                                                <b key={`${subString.boldText}-${idx}`}>
                                                    {subString.boldText}
                                                </b>
                                            )
                                    ))
                            }
                            forceUseDefaulLinkTag={forceUseDefaulLinkTag}
                        />
                    </div>
                ))
            }
        </div>
    )

    function convertText(text) {
        return text
            .split('**')
            .map((subString, idx) => idx % 2 === 0
                ? {
                    normalText: subString,
                }
                : {
                    boldText: subString,
                }
            )
    }
}

SearchResultWithDetails.propTypes = {
    searchResult: PropTypes.arrayOf(PropTypes.shape({
        ...Link.propTypes,
        ...NavBarLink.propTypes,
    })),

    className: PropTypes.string,
    forceUseDefaulLinkTag: PropTypes.bool,
}
