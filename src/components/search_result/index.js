import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

import NavBarLink from '../nav_bar_link'

import SearchIcon from '../../svg/search.svg'

import styles from './styles.styl'

export default function SearchResult({
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
                        key={link.path || convertBoldTextArrayToString(link.text)}
                        className={styles['search-link-wrapper']}
                    >
                        <SearchIcon className={styles['icon']} />
                        <NavBarLink
                            {...link}
                            className={cn(styles['search-link'], link.className)}
                            text={
                                (typeof link.text == 'string' ? convertTextToBoldArray(link.text) : link.text)
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

    function convertTextToBoldArray(text) {
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

    function convertBoldTextArrayToString(text) {
        return typeof text == 'string'
            ? text
            : text
                .map(({normalText, boldText}) => boldText ? `**${boldText}**` : normalText)
                .join('')
    }
}

SearchResult.propTypes = {
    /**
     * To make the text bold, you need to wrap it with `**` (markdown notation)or pass an array of objects in the text parameter, where normalText displays plain text, and boldText - bold. `[{normalText: string}, {boldText: string}]`
     */
    searchResult: PropTypes.arrayOf(PropTypes.shape({
        ...NavBarLink.propTypes,
        text: PropTypes.oneOfType([
            PropTypes.node,
            PropTypes.array,
            PropTypes.string,
        ]),
    })),

    className: PropTypes.string,
    /**
     * If you are not using react-router or want the link to work as usual, then set to `True`
     */
    forceUseDefaulLinkTag: PropTypes.bool,
}

SearchResult.defaultProps = {
    forceUseDefaulLinkTag: false,
}
