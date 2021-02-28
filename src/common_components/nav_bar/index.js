import React, {Fragment} from 'react'
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
    return (
        <div className={cn(styles['nav-bar'], className)}>
            {
                linkList.map(({subLinkList = [], ...link}) => (
                    <Fragment key={link.path}>
                        <NavBarLink
                            forceUseDefaulLinkTag={forceUseDefaulLinkTag}
                            {...link}
                            className={cn(styles['nav-bar-link'], link.className)}
                        />
                        <div className={cn(styles['sub-nav-bar'])}>
                            {
                                subLinkList.map(link => (
                                    <NavBarLink
                                        key={link.path}
                                        forceUseDefaulLinkTag={forceUseDefaulLinkTag}
                                        {...link}
                                        className={cn(styles['nav-bar-link'], link.className)}
                                    />
                                ))
                            }
                        </div>
                    </Fragment>
                ))
            }
        </div>
    )
}

NavBar.propTypes = {
    linkList: PropTypes.arrayOf(PropTypes.shape({
        ...Link.propTypes,
        ...NavBarLink.propTypes,
    })).isRequired,

    className: PropTypes.string,
    forceUseDefaulLinkTag: PropTypes.bool,
}
