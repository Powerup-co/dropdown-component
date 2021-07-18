import React, {Fragment, useRef, useState} from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

import Link from './components/link'
import NavBarLink from './components/nav_bar_link'
import SearchResult from './components/search_result'
import SearchResultWithDetails from './components/search_result_with_details'
import RecentlyViewed from './components/recently_viewed'

import SearchIcon from './svg/search.svg'
import SpinnerIcon from './svg/spinner.svg'
import ShoppingBagIcon from './svg/shopping_bag.svg'
import CloseIcon from './svg/close.svg'
import EnterIcon from './svg/enter.svg'
import MobileMenuIcon from './svg/mobile_menu.svg'
import ArrowIcon from './svg/arrow.svg'

import styles from './styles.styl'

const mobileMenuTransitionDuration = Number(styles.mobileMenuTransitionDuration.replace('s', '')) * 1000
const navBarHeight = Number(styles.navBarHeight.replace('px', ''))

export default function NavBar({
    linkList,

    logo,
    className,
    leftAdditionalElements,
    rightAdditionalElements,
    bgClassName,
    forceUseDefaulLinkTag,
    useSimpleSearch,
    useFullSearch,
    onSearch,
    searchResult,
    searchResultWithDetails,
    showShoppingBagIcon,
    hasSomethingInShoppingBag,
    mobileMainMenuAdditionalBlocks,
}) {
    const [hoverMainNavBarLink, setHoverMainNavBarLink] = useState(null)
    const [hoverBgClassName, setHoverBgClassName] = useState(null)
    const [hoverBgColor, setHoverBgColor] = useState(null)
    const [searchText, setSearchText] = useState('')
    const [searchInProgress, setSearchInProgress] = useState(false)
    const [showFullSearch, setShowFullSearch] = useState(false)
    const [showMobileMenu, setShowMobileMenu] = useState(false)
    const [selectedMobileSubMenuIdx, setSelectedMobileSubMenuIdx] = useState(null)
    const [showMobileSearch, setShowMobileSearch] = useState(false)

    const [subNavBarBgHeight, setSubNavBarBgHeight] = useState(0)

    const wrapperNavBarRef = useRef(null)
    const navBarRef = useRef(null)
    const mobileSearchInput = useRef(null)

    return (
        <div
            ref={wrapperNavBarRef}
            className={cn(
                styles['nav-bar-bg'],
                bgClassName,
                hoverBgClassName,
            )}
            style={{
                backgroundColor: hoverBgColor,
            }}
        >
            <div className={cn(styles['desktop-nav-bar-wrapper'], className)}>
                <div className={styles['nav-bar-left-block']}>
                    {logo}
                    {leftAdditionalElements}
                </div>
                <div
                    ref={navBarRef}
                    className={styles['nav-bar']}
                    onMouseLeave={() => setSubNavBarBgHeight(0)}
                >
                    {
                        linkList.map(({
                            subLinkList = [],
                            banner,
                            recentlyViewed = [],
                            customRow,
                            hoverBgClassName: linkHoverBgClassName,
                            hoverBgColor: linkHoverBgColor,
                            subNavBarSortingComponents = [
                                NavBar.subNavBarSortingComponentOptions.subLinkList,
                                NavBar.subNavBarSortingComponentOptions.recentlyViewed,
                                NavBar.subNavBarSortingComponentOptions.customRow,
                            ],
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
                                                (
                                                    hoverMainNavBarLink
                                                        && (link.path || link.text) !== hoverMainNavBarLink
                                                )
                                                    || showFullSearch
                                            ),
                                        },
                                        link.className,
                                    )}
                                    onMouseOver={event => {
                                        setSubNavBarBgHeight(event.target.nextSibling.clientHeight)
                                        setHoverMainNavBarLink(link.path || link.text)
                                        setHoverBgClassName(linkHoverBgClassName)
                                        setHoverBgColor(linkHoverBgColor)
                                        setShowFullSearch(false)
                                    }}
                                    onMouseLeave={() => {
                                        setHoverMainNavBarLink(null)
                                        setHoverBgClassName(null)
                                        setHoverBgColor(null)
                                        setShowFullSearch(false)
                                    }}
                                />
                                <div
                                    className={cn(styles['sub-nav-bar'], bgClassName, hoverBgClassName)}
                                    style={{
                                        zIndex: (
                                            hoverMainNavBarLink
                                                ? (link.path || link.text) === hoverMainNavBarLink ? 10 : 1
                                                : 1
                                        ),
                                        backgroundColor: hoverBgColor,
                                    }}
                                    onMouseOver={event => {
                                        setSubNavBarBgHeight(event.target.clientHeight)
                                        setHoverMainNavBarLink(link.path || link.text)
                                        setHoverBgClassName(linkHoverBgClassName)
                                        setHoverBgColor(linkHoverBgColor)
                                        setShowFullSearch(false)
                                    }}
                                    onMouseLeave={() => {
                                        setHoverMainNavBarLink(null)
                                        setHoverBgClassName(null)
                                        setHoverBgColor(null)
                                        setShowFullSearch(false)
                                    }}
                                >
                                    {
                                        subLinkList.map((row, rowIdx) => (
                                            <div
                                                key={`row-${rowIdx}`}
                                                className={styles['sub-nav-bar-row-wrapper']}
                                                style={{
                                                    minWidth: Math.max(595, navBarRef?.current?.clientWidth || 0),
                                                    order: subNavBarSortingComponents.indexOf(NavBar.subNavBarSortingComponentOptions.subLinkList) == -1
                                                        ? 1000
                                                        : subNavBarSortingComponents.indexOf(NavBar.subNavBarSortingComponentOptions.subLinkList),
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
                                        !!recentlyViewed?.length && (
                                            <RecentlyViewed
                                                style={{
                                                    minWidth: Math.max(595, navBarRef?.current?.clientWidth || 0),
                                                    order: subNavBarSortingComponents.indexOf(NavBar.subNavBarSortingComponentOptions.recentlyViewed) == -1
                                                        ? 1000
                                                        : subNavBarSortingComponents.indexOf(NavBar.subNavBarSortingComponentOptions.recentlyViewed),
                                                }}
                                                recentlyViewedList={recentlyViewed}
                                                forceUseDefaulLinkTag={forceUseDefaulLinkTag}
                                            />
                                        )
                                    }
                                    {
                                        !!customRow?.children && (
                                            <div
                                                className={styles['custom-row']}
                                                style={{
                                                    minWidth: Math.max(595, navBarRef?.current?.clientWidth || 0),
                                                    order: subNavBarSortingComponents.indexOf(NavBar.subNavBarSortingComponentOptions.customRow) == -1
                                                        ? 1000
                                                        : subNavBarSortingComponents.indexOf(NavBar.subNavBarSortingComponentOptions.customRow),
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
                    <div
                        className={cn(styles['sub-nav-bar-bg'], bgClassName, hoverBgClassName)}
                        style={{
                            zIndex: 5,
                            height: subNavBarBgHeight,
                            backgroundColor: hoverBgColor,
                        }}
                    />
                    <div
                        className={cn(
                            styles['sub-nav-bar'],
                            styles['full-search-block'],
                            {
                                [styles['show-full-search-block']]: showFullSearch,
                            },
                            bgClassName
                        )}
                    >
                        <div
                            className={styles['search-field-block']}
                            style={{
                                minWidth: Math.max(595, navBarRef?.current?.clientWidth || 0),
                            }}
                        >
                            <div className={styles['search-field-wrapper']}>
                                <input
                                    id="nav-bar-full-search-field"
                                    value={searchText}
                                    onChange={({target: {value}}) => {
                                        setSearchText(value)
                                    }}
                                    className={styles['search-field']}
                                    autoComplete="off"
                                    onKeyPress={({charCode}) => {
                                        if (charCode === 13) { // press enter
                                            search(searchText)
                                        }
                                    }}
                                />
                                {
                                    searchInProgress
                                        ? (
                                            <SpinnerIcon
                                                className={styles['icon']}
                                                width="16px"
                                                height="16px"
                                            />
                                        )
                                        : (
                                            <EnterIcon
                                                className={cn(
                                                    styles['icon'],
                                                    {
                                                        [styles['not-active']]: !searchText,
                                                    }
                                                )}
                                            />
                                        )
                                }
                            </div>
                            <CloseIcon
                                className={styles['close-icon']}
                                onClick={() => setShowFullSearch(false)}
                            />
                        </div>
                        {
                            !searchInProgress && !!searchResult?.length && (
                                <SearchResult
                                    className={styles['search-result']}
                                    style={{
                                        minWidth: Math.max(595, navBarRef?.current?.clientWidth || 0),
                                    }}
                                    searchResult={searchResult}
                                    forceUseDefaulLinkTag={forceUseDefaulLinkTag}
                                />
                            )
                        }
                        {
                            !searchInProgress && !!searchResultWithDetails?.count && (
                                <SearchResultWithDetails
                                    className={styles['search-result-with-detail']}
                                    style={{
                                        minWidth: Math.max(595, navBarRef?.current?.clientWidth || 0),
                                    }}
                                    searchResult={searchResultWithDetails}
                                    forceUseDefaulLinkTag={forceUseDefaulLinkTag}
                                />
                            )
                        }
                    </div>
                </div>
                <div className={styles['nav-bar-right-block']}>
                    {rightAdditionalElements}
                    {
                        useSimpleSearch && (
                            <div
                                className={cn(
                                    styles['search-simple-block'],
                                    {
                                        [styles['search-in-progress']]: searchInProgress,
                                        [styles['search-with-results']]: !!searchResult?.length && !searchInProgress,
                                    }
                                )}
                            >
                                <input
                                    id="nav-bar-simple-search-field"
                                    value={searchText}
                                    onChange={({target: {value}}) => {
                                        setSearchText(value)

                                        search(value)
                                    }}
                                    className={styles['search-field']}
                                    autoComplete="off"
                                />
                                <label className={styles['search-icon']} htmlFor="nav-bar-simple-search-field">
                                    <SearchIcon className={styles['icon']} />
                                    <SpinnerIcon
                                        className={styles['spinner']}
                                        width="16px"
                                        height="16px"
                                    />
                                </label>
                                {
                                    !!searchText && !searchInProgress && !!searchResult?.length && (
                                        <SearchResult
                                            className={styles['search-result']}
                                            searchResult={searchResult}
                                            forceUseDefaulLinkTag={forceUseDefaulLinkTag}
                                        />
                                    )
                                }
                            </div>
                        )
                    }
                    {
                        useFullSearch && (
                            <label
                                className={cn(
                                    styles['full-search-icon'],
                                    {
                                        [styles['show-full-search-block']]: showFullSearch,
                                    },
                                )}
                                htmlFor="nav-bar-full-search-field"
                                onClick={() => setShowFullSearch(!showFullSearch)}
                            >
                                <SearchIcon className={styles['icon']} />
                            </label>
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
            <div
                className={cn(
                    styles['mobile-nav-bar-wrapper'],
                    {
                        [styles['active-mobile-links-list']]: showMobileMenu,
                    },
                    className
                )}
            >
                <div className={styles['nav-bar-left-block']}>
                    <MobileMenuIcon
                        className={cn(
                            styles['mobile-menu-icon'],
                            {
                                [styles['convert-to-close']]: showMobileMenu,
                            }
                         )}
                        onClick={
                            showMobileSearch
                                ? toogleMobileSearch
                                : toogleMobileMenu
                        }
                    />
                    {leftAdditionalElements}
                </div>
                <div
                    className={cn(
                        styles['mobile-nav-bar-block'],
                        {
                            [styles['hide-mobile-nav-bar-block']]: showMobileMenu,
                        }
                    )}
                >
                    {logo}
                </div>
                <div
                    className={cn(
                        styles['nav-bar-right-block'],
                        styles['mobile-nav-bar-block'],
                        {
                            [styles['hide-mobile-nav-bar-block']]: showMobileMenu,
                        }
                    )}
                >
                    {rightAdditionalElements}
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
                <div
                    className={cn(
                        styles['mobile-links-list'],
                        {
                            [styles['active-mobile-links-list']]: showMobileMenu,
                            [styles['mobile-links-list-move-left']]: selectedMobileSubMenuIdx !== null,
                        }
                    )}
                    style={{
                        top: `${navBarHeight + (wrapperNavBarRef?.current
                            ? wrapperNavBarRef.current.getBoundingClientRect().top
                            : 0
                        )}px`,
                    }}
                >
                    {
                        (useSimpleSearch || useFullSearch) && (
                            <div
                                className={cn(
                                    styles['mobile-search-wrapper'],
                                    {
                                        [styles['active-mobile-search']]: showMobileSearch,
                                    }
                                )}
                            >
                                <div className={styles['mobile-search-field-wrapper']}>
                                    <label
                                        htmlFor="mobile-search-field"
                                        className={styles['search-button']}
                                        onClick={showMobileSearch
                                            ? undefined
                                            : toogleMobileSearch
                                        }
                                    >
                                        {
                                            searchInProgress
                                                ? <SpinnerIcon className={styles['search-icon']} />
                                                : <SearchIcon className={styles['search-icon']} />
                                        }
                                    </label>
                                    <input
                                        id="mobile-search-field"
                                        ref={mobileSearchInput}
                                        value={searchText}
                                        onChange={({target: {value}}) => {
                                            setSearchText(value)

                                            search(value)
                                        }}
                                        className={cn(
                                            styles['mobile-search-field'],
                                            {
                                                [styles['show-mobile-search-field']]: showMobileSearch,
                                            }
                                        )}
                                        autoComplete="off"
                                    />
                                </div>
                                <div
                                    className={cn(
                                        styles['mobile-search-result']
                                    )}
                                >
                                    {
                                        !!searchText && !searchInProgress && !!searchResult?.length && (
                                            <SearchResult
                                                searchResult={searchResult.map(link => ({
                                                    ...link,
                                                    onClick: toogleMobileMenu,
                                                }))}
                                                forceUseDefaulLinkTag={forceUseDefaulLinkTag}
                                            />
                                        )
                                    }
                                </div>
                            </div>
                        )
                    }
                    {
                        linkList.map((
                            {
                                subLinkList = [],
                                banner,
                                recentlyViewed = [],
                                customRow,
                                hoverBgClassName: linkHoverBgClassName,
                                hoverBgColor: linkHoverBgColor,
                                ...link
                            },
                            linkIdx
                        ) => (
                            <div key={`mobile-nav-bar-link-${link.path || link.text}`}>
                                <NavBarLink
                                    forceUseDefaulLinkTag={forceUseDefaulLinkTag}
                                    {...link}
                                    path={
                                        subLinkList?.length
                                            ? undefined
                                            : link.path
                                    }
                                    text={
                                        <Fragment>
                                            {link.text}
                                            {
                                                !!subLinkList?.length && (
                                                    <ArrowIcon className={styles['nav-bar-link-arrow']} />
                                                )
                                            }
                                        </Fragment>
                                    }
                                    className={cn(
                                        styles['nav-bar-link'],
                                        link.className,
                                    )}
                                    onClick={() => subLinkList?.length
                                        ? setSelectedMobileSubMenuIdx(linkIdx)
                                        : toogleMobileMenu()
                                    }
                                />
                            </div>
                        ))
                    }
                    {
                        !!mobileMainMenuAdditionalBlocks?.banner && (
                            <div className={styles['mobile-banner']}>
                                {mobileMainMenuAdditionalBlocks?.banner}
                            </div>
                        )
                    }
                    {
                        !!mobileMainMenuAdditionalBlocks.recentlyViewed?.length && (
                            <RecentlyViewed
                                className={styles['recently-viewed']}
                                recentlyViewedList={mobileMainMenuAdditionalBlocks.recentlyViewed}
                                forceUseDefaulLinkTag={forceUseDefaulLinkTag}
                            />
                        )
                    }
                </div>
                {
                    linkList.map((
                        {
                            subLinkList = [],
                            banner,
                            recentlyViewed = [],
                            customRow,
                            hoverBgClassName: linkHoverBgClassName,
                            hoverBgColor: linkHoverBgColor,
                            ...link
                        },
                        linkIdx
                    ) => (
                        <div
                            key={`mobile-sub-nav-bar-${link.path || link.text}`}
                            className={cn(
                                styles['mobile-sub-nav-bar'],
                                {
                                    [styles['active-mobile-sub-nav-bar']]: linkIdx === selectedMobileSubMenuIdx,
                                },
                                bgClassName,
                                hoverBgClassName,
                            )}
                            style={{
                                backgroundColor: hoverBgColor,
                            }}
                        >
                            {
                                subLinkList.map((row, rowIdx) => (
                                    <div
                                        key={`mobile-row-${rowIdx}`}
                                        className={styles['sub-nav-bar-row-wrapper']}
                                    >
                                        <NavBarLink
                                            forceUseDefaulLinkTag={forceUseDefaulLinkTag}
                                            text={link.text}
                                            className={cn(
                                                styles['sub-nav-bar-link-header'],
                                                link.className,
                                            )}
                                            isBold
                                        />
                                        <NavBarLink
                                            forceUseDefaulLinkTag={forceUseDefaulLinkTag}
                                            text="BACK"
                                            className={styles['nav-bar-link']}
                                            onClick={() => setSelectedMobileSubMenuIdx(null)}
                                            isBold
                                        />
                                        <div className={styles['sub-nav-bar-row']}>
                                            {
                                                row.map((col, colIdx) => (
                                                    <div key={`col-${colIdx}`} className={styles['sub-nav-bar-col']}>
                                                        <div className={styles['sub-nav-bar-col-separator']} />
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
                                                                        onClick={toogleMobileMenu}
                                                                    />
                                                                </div>
                                                            ))
                                                        }
                                                    </div>
                                                ))
                                            }
                                        </div>
                                        {
                                            !!banner && (
                                                <div className={styles['mobile-banner']}>
                                                    {banner}
                                                </div>
                                            )
                                        }
                                        {
                                            !!recentlyViewed?.length && (
                                                <RecentlyViewed
                                                    className={styles['recently-viewed']}
                                                    recentlyViewedList={recentlyViewed}
                                                    forceUseDefaulLinkTag={forceUseDefaulLinkTag}
                                                />
                                            )
                                        }
                                    </div>
                                ))
                            }
                        </div>
                    ))
                }
            </div>
        </div>
    )

    async function search(value) {
        try {
            setSearchInProgress(true)

            if (onSearch) {
                await onSearch(value)
            }
        }
        finally {
            setSearchInProgress(false)
        }
    }

    function toogleMobileMenu() {
        setShowMobileMenu(prevValue => {
            if (prevValue) {
                unfixPage()
                // TODO: find a way to fix
                setTimeout(() => setSelectedMobileSubMenuIdx(null), mobileMenuTransitionDuration)
            }
            else {
                fixPage()
            }

            return !prevValue
        })
    }

    function toogleMobileSearch() {
        setShowMobileSearch(prevValue => {
            if (!prevValue) {
                mobileSearchInput?.current?.focus()
            }
            else {
                mobileSearchInput?.current?.blur()
            }

            return !prevValue
        })
    }
}

NavBar.subNavBarSortingComponentOptions = {
    subLinkList: 'subLinkList',
    recentlyViewed: 'recentlyViewed',
    customRow: 'customRow',
}

NavBar.propTypes = {
    linkList: PropTypes.arrayOf(PropTypes.shape({
        ...NavBarLink.propTypes,
    })).isRequired,

    logo: PropTypes.node,
    leftAdditionalElements: PropTypes.node,
    rightAdditionalElements: PropTypes.node,
    className: PropTypes.string,
    bgClassName: PropTypes.string,
    forceUseDefaulLinkTag: PropTypes.bool,
    useSimpleSearch: PropTypes.bool,
    useFullSearch: PropTypes.bool,
    onSearch: PropTypes.func,
    searchResult: SearchResult.propTypes.searchResult,
    searchResultWithDetails: SearchResultWithDetails.propTypes.searchResult,
    showShoppingBagIcon: PropTypes.bool,
    hasSomethingInShoppingBag: PropTypes.bool,
    mobileMainMenuAdditionalBlocks: PropTypes.shape({
        banner: PropTypes.node,
        recentlyViewed: RecentlyViewed.propTypes.recentlyViewedList,
    }),
}

NavBar.defaultProps = {
    mobileMainMenuAdditionalBlocks: {},
    forceUseDefaulLinkTag: false,
    useSimpleSearch: false,
    useFullSearch: false,
    showShoppingBagIcon: false,
    hasSomethingInShoppingBag: false,
}

NavBar.Link = Link
NavBar.NavBarLink = NavBarLink
NavBar.RecentlyViewed = RecentlyViewed
NavBar.SearchResult = SearchResult
NavBar.SearchResultWithDetails = SearchResultWithDetails

function fixPage() {
    document.body.style.top = `-${window.scrollY}px` // eslint-disable-line
    document.body.style.position = 'fixed'
}

function unfixPage() {
    const currentScrollY = document.body.style.top
    document.body.style.position = ''
    document.body.style.top = ''
    window.scrollTo(0, parseInt(currentScrollY || '0') * -1)
}
