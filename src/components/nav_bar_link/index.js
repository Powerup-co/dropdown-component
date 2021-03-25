import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

import Link from '../link'

import styles from './styles.styl'

export default function NavBarLink({
    className,
    isBold,
    withNotificationDot,
    path,
    text,
    forceUseDefaulLinkTag,

    ...props
}) {
    return path
        ? (
            <Link
                className={cn(
                    styles['nav-bar-link'],
                    {
                        [styles['bold-nav-bar-link']]: isBold,
                        [styles['nav-bar-link-with-notification-dot']]: withNotificationDot,
                    },
                    className,
                )}
                {...{text, path, forceUseDefaulLinkTag}}
                {...props}
            />
        )
        : (
            <p
                className={cn(
                    styles['nav-bar-link'],
                    {
                        [styles['bold-nav-bar-link']]: isBold,
                        [styles['nav-bar-link-with-notification-dot']]: withNotificationDot,
                    },
                    className,
                )}
                {...props}
            >
                {text}
            </p>
        )
}

NavBarLink.propTypes = {
    /**
     * Link's href. If the field is empty, then instead of a link (`<a />`), a paragrop is rendered (`<p />`)
     */
    path: PropTypes.string,
    text: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.string,
    ]),
    className: PropTypes.string,
    /**
     * Uses bold text (`font-weight: 700`)
     */
    isBold: PropTypes.bool,
    /**
     * Adds a red dot in the upper right corner next to text to grab the user's attention
     */
    withNotificationDot: PropTypes.bool,
    /**
     * If you are not using react-router or want the link to work as usual, then set to `True`
     */
    forceUseDefaulLinkTag: PropTypes.bool,
}

NavBarLink.defaultProps = {
    forceUseDefaulLinkTag: false,
    isBold: false,
    withNotificationDot: false,
}
