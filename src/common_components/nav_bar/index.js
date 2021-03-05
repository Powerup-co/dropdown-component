import React, {Fragment, useRef, useState} from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

import Link from 'common_components/link'

import NavBarLink from './components/nav_bar_link'

import SearchIcon from './svg/search.svg?jsx'
import ShoppingBagIcon from './svg/shopping_bag.svg?jsx'

import styles from './styles.styl'

export default function NavBar({
    linkList,

    logo,
    className,
    leftAdditionalElements,
    rightAdditionalElements,
    bgClassName,
    forceUseDefaulLinkTag,
    showSearchIcon,
    useSimpleSearch,
    showShoppingBagIcon,
    hasSomethingInShoppingBag,
}) {
    const [hoverMainNavBarLink, setHoverMainNavBarLink] = useState(null)
    const [hoverBgClassName, setHoverBgClassName] = useState(null)

    const navBarRef = useRef(null)

    return (
        <div className={cn(styles['nav-bar-bg'], bgClassName, hoverBgClassName)}>
            <div className={cn(styles['nav-bar-wrapper'], className)}>
                <div className={styles['nav-bar-left-block']}>
                    {logo}
                    {leftAdditionalElements}
                </div>
                <div
                    ref={navBarRef}
                    className={styles['nav-bar']}
                >
                    {
                        linkList.map(({
                            subLinkList = [],
                            banner,
                            recentlyViewed = [],
                            customRow,
                            hoverBgClassName: linkHoverBgClassName,
                            ...link
                        }) => (
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
                                    onMouseOver={() => {
                                        setHoverMainNavBarLink(link.path || link.text)
                                        setHoverBgClassName(linkHoverBgClassName)
                                    }}
                                    onMouseLeave={() => {
                                        setHoverMainNavBarLink(null)
                                        setHoverBgClassName(null)
                                    }}
                                />
                                <div
                                    className={cn(styles['sub-nav-bar'], bgClassName, hoverBgClassName)}
                                    style={{
                                        zIndex: (
                                            hoverMainNavBarLink
                                                ? (link.path || link.text) === hoverMainNavBarLink ? 10 : 1
                                                : 1
                                        )
                                    }}
                                    onMouseOver={() => {
                                        setHoverMainNavBarLink(link.path || link.text)
                                        setHoverBgClassName(linkHoverBgClassName)
                                    }}
                                    onMouseLeave={() => {
                                        setHoverMainNavBarLink(null)
                                        setHoverBgClassName(null)
                                    }}
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
                                                className={styles['custom-row']}
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
                <div className={styles['nav-bar-right-block']}>
                    {rightAdditionalElements}
                    {
                        showSearchIcon && (
                            <SearchIcon />
                        )
                    }
                    {
                        showShoppingBagIcon && (
                            <Link
                                className={cn(
                                    styles['shopping-bag-icon'],
                                    {
                                        [styles['with-notification-dot']]: hasSomethingInShoppingBag,
                                    }
                                )}
                                text={<ShoppingBagIcon />}
                                path="/shopping-bag"
                                forceUseDefaulLinkTag={forceUseDefaulLinkTag}
                            />
                        )
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
    leftAdditionalElements: PropTypes.node,
    rightAdditionalElements: PropTypes.node,
    className: PropTypes.string,
    bgClassName: PropTypes.string,
    forceUseDefaulLinkTag: PropTypes.bool,
    showSearchIcon: PropTypes.bool,
    useSimpleSearch: PropTypes.bool,
    showShoppingBagIcon: PropTypes.bool,
    hasSomethingInShoppingBag: PropTypes.bool,
}
