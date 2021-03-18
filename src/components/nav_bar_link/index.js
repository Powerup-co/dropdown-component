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
    path: PropTypes.string,
    text: PropTypes.node,
    className: PropTypes.string,
    isBold: PropTypes.bool,
    withNotificationDot: PropTypes.bool,
    forceUseDefaulLinkTag: PropTypes.bool,
}
