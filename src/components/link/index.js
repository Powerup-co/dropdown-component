import React from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import cn from 'classnames'

import styles from './styles.styl'

export default function CustomLink({
    className,
    children,
    text,
    path,
    forceUseDefaulLinkTag,
    ...props
}) {
    const patternExternalLinks = new RegExp(
        [
            '://',
            '^mailto:',
            '^tel:',
        ]
            .map(el => `(${el})`)
            .join('|')
    )

    const linkProps = {
        className: cn(
            styles.link,
            className
        ),
        ...props,
    }

    return (path && patternExternalLinks.test(path)) || forceUseDefaulLinkTag
        ? <a href={path || ''} {...linkProps}>{text || children}</a>
        : <Link to={path || ''} {...linkProps}>{text || children}</Link>
}

CustomLink.propTypes = {
    /**
     * Link's href
     */
    path: PropTypes.string.isRequired,

    className: PropTypes.string,
    children: PropTypes.node,
    text: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.string,
    ]),
    /**
     * If you are not using react-router or want the link to work as usual, then set to `True`
     */
    forceUseDefaulLinkTag: PropTypes.bool,
}

CustomLink.defaultProps = {
    forceUseDefaulLinkTag: false,
}
