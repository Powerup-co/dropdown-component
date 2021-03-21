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
    /**
     * List of items to display. Can be any component or a list of parameters for `NavBarLink`
     */
    recentlyViewedList: PropTypes.arrayOf(PropTypes.shape({
        component: PropTypes.node,
        ...NavBarLink.propTypes,
    })),

    className: PropTypes.string,
    /**
     * If you are not using react-router or want the link to work as usual, then set to `True`
     */
    forceUseDefaulLinkTag: PropTypes.bool,
}

RecentlyViewed.defaultProps = {
    forceUseDefaulLinkTag: false,
}
