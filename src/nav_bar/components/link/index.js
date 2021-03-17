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
    path: PropTypes.string.isRequired,

    className: PropTypes.string,
    children: PropTypes.node,
    text: PropTypes.node,
    forceUseDefaulLinkTag: PropTypes.bool,
}
