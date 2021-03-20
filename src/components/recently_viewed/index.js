import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

import NavBarLink from '../nav_bar_link'

import styles from './styles.styl'

export default function RecentlyViewed({
    recentlyViewedList,

    className,
    forceUseDefaulLinkTag,
    ...props
}) {
    return (
        <div className={cn(styles['recently-viewed'], className)} {...props}>
            <p>
                RECENTLY VIEWED
            </p>
            <div className={styles['recently-viewed-link-list']}>
                {
                    recentlyViewedList.map(({component, ...link}, idx) => (
                        component
                            ? React.cloneElement(
                                component,
                                {
                                    key: `component-${idx}`,
                                }
                            )
                            : (
                                <NavBarLink
                                    key={link.path || link.text}
                                    forceUseDefaulLinkTag={forceUseDefaulLinkTag}
                                    {...link}
                                />
                            )
                    ))
                }
                <div className={styles['last-mobile-padding']} />
            </div>
        </div>
    )
}

RecentlyViewed.propTypes = {
    recentlyViewedList: PropTypes.arrayOf(PropTypes.shape({
        component: PropTypes.node,
        ...NavBarLink.propTypes,
    })).isRequired,

    className: PropTypes.string,
    forceUseDefaulLinkTag: PropTypes.bool,
}
