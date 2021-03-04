import React, {Fragment, useRef, useMemo, useState} from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

import Link from 'common_components/link'

import NavBarLink from './components/nav_bar_link'

import 'animate.css'

import styles from './styles.styl'

export default function NavBar({
    linkList,
    logo,

    className,
    forceUseDefaulLinkTag,
}) {
    const [hoverMainNavBarLink, setHoverMainNavBarLink] = useState(null)

    const navBarRef = useRef(null)

    const currentLogo = useMemo(
        () => React.cloneElement(
            logo,
            {
                className: cn(styles['logo'], logo.props.className),
            }
        ),
        [logo]
    )

    return (
        <div className={styles['nav-bar-bg']}>
            <div className={cn(styles['nav-bar-wrapper'], className)}>
                {currentLogo}
                <div
                    ref={navBarRef}
                    className={styles['nav-bar']}
                >
                    {
                        linkList.map(({subLinkList = [], banner, recentlyViewed = [], customRow, ...link}) => (
                            <Fragment key={link.path || link.text}>
                                <NavBarLink
                                    forceUseDefaulLinkTag={forceUseDefaulLinkTag}
                                    {...link}
                                    className={cn(
                                        styles['nav-bar-link'],
                                        {
                                            [styles['active']]: (
                                                hoverMainNavBarLink
                                                    && (link.path || link.text) === hoverMainNavBarLink
                                            ),
                                            [styles['not-active']]: (
                                                hoverMainNavBarLink
                                                    && (link.path || link.text) !== hoverMainNavBarLink
                                            ),
                                        },
                                        link.className,
                                    )}
                                    onMouseOver={() => setHoverMainNavBarLink(link.path || link.text)}
                                    onMouseLeave={() => setHoverMainNavBarLink(null)}
                                />
                                <div
                                    className={cn(styles['sub-nav-bar'])}
                                    style={{
                                        zIndex: (
                                            hoverMainNavBarLink
                                                ? (link.path || link.text) === hoverMainNavBarLink ? 10 : 1
                                                : 1
                                        )
                                    }}
                                    onMouseOver={() => setHoverMainNavBarLink(link.path || link.text)}
                                    onMouseLeave={() => setHoverMainNavBarLink(null)}
                                >
                                    {
                                        subLinkList.map((row, rowIdx) => (
                                            <div
                                                key={`row-${rowIdx}`}
                                                className={styles['sub-nav-bar-row-wrapper']}
                                                style={{
                                                    // minWidth: navBarRef?.current?.clientWidth,
                                                    minWidth: 603,
                                                }}
                                            >
                                                <div className={styles['sub-nav-bar-row']}>
                                                    {
                                                        row.map((col, colIdx) => (
                                                            <div key={`col-${colIdx}`} className={styles['sub-nav-bar-col']}>
                                                                {
                                                                    col.map(subLink => (
                                                                        <div key={`${subLink.path || subLink.text}-${rowIdx}-${colIdx}`}>
                                                                            <NavBarLink
                                                                                forceUseDefaulLinkTag={forceUseDefaulLinkTag}
                                                                                {...subLink}
                                                                                className={cn(
                                                                                    styles['nav-bar-link'],
                                                                                    styles['sub-nav-bar-link'],
                                                                                    subLink.className
                                                                                )}
                                                                            />
                                                                        </div>
                                                                    ))
                                                                }
                                                            </div>
                                                        ))
                                                    }
                                                </div>
                                                <div>
                                                    {banner}
                                                </div>
                                            </div>
                                        ))
                                    }
                                    {
                                        !!recentlyViewed.length && (
                                            <div
                                                className={styles['recently-viewed']}
                                                style={{
                                                    // minWidth: navBarRef?.current?.clientWidth,
                                                    minWidth: 603,
                                                }}
                                            >
                                                <p>
                                                    RECENTLY VIEWED
                                                </p>
                                                <div className={styles['recently-viewed-link-list']}>
                                                    {
                                                        recentlyViewed.map(({component, ...link}, idx) => (
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
                                                </div>
                                            </div>
                                        )
                                    }
                                    {
                                        !!customRow?.children && (
                                            <div
                                                className={styles['recently-viewed']}
                                                style={{
                                                    // minWidth: navBarRef?.current?.clientWidth,
                                                    minWidth: 603,
                                                }}
                                            >
                                                {
                                                    !!customRow.title && (
                                                        <p>
                                                            {customRow.title}
                                                        </p>
                                                    )
                                                }
                                                {customRow.children}
                                            </div>
                                        )
                                    }
                                </div>
                            </Fragment>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

NavBar.propTypes = {
    linkList: PropTypes.arrayOf(PropTypes.shape({
        ...Link.propTypes,
        ...NavBarLink.propTypes,
        path: PropTypes.string,
    })).isRequired,

    logo: PropTypes.node,
    className: PropTypes.string,
    forceUseDefaulLinkTag: PropTypes.bool,
}
