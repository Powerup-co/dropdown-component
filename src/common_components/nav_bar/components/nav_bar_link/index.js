import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

import Link from 'common_components/link'

import styles from './styles.styl'

export default function NavBarLink({
    className,
    isBold,
    withNotificationDot,

    ...props
}) {
    return (
        <Link
            className={cn(
                styles['nav-bar-link'],
                {
                    [styles['bold-nav-bar-link']]: isBold,
                    [styles['nav-bar-link-with-notification-dot']]: withNotificationDot,
                },
                className,
            )}
            {...props}
        />
    )
}

NavBarLink.propTypes = {
    className: PropTypes.string,
    isBold: PropTypes.bool,
    withNotificationDot: PropTypes.bool,
}
