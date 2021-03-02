import React, {Fragment, useRef} from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

import Link from 'common_components/link'

import NavBarLink from './components/nav_bar_link'

import 'animate.css'

import styles from './styles.styl'

export default function NavBar({
    linkList,

    className,
    forceUseDefaulLinkTag,
}) {
    const navBarRef = useRef(null)

    return (
        <div className={cn(styles['nav-bar-wrapper'], className)}>
            <div
                ref={navBarRef}
                className={styles['nav-bar']}
            >
                {
                    linkList.map(({subLinkList = [], banner, ...link}) => (
                        <Fragment key={link.path || link.text}>
                            <NavBarLink
                                forceUseDefaulLinkTag={forceUseDefaulLinkTag}
                                {...link}
                                className={cn(styles['nav-bar-link'], link.className)}
                            />
                            <div className={cn(styles['sub-nav-bar'])}>
                                {
                                    subLinkList.map((row, rowIdx) => (
                                        <div
                                            key={`row-${rowIdx}`}
                                            className={styles['sub-nav-bar-row-wrapper']}
                                            style={{
                                                // minWidth: navBarRef?.current?.clientWidth,
                                                minWidth: 529,
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
                            </div>
                        </Fragment>
                    ))
                }
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

    className: PropTypes.string,
    forceUseDefaulLinkTag: PropTypes.bool,
}
