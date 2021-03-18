import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

import styles from './styles.styl'

export default function Logo({className, ...props}) {
    return (
        <div className={cn(styles['logo'], className)} />
    )
}

Logo.propTypes = {
    className: PropTypes.string,
}
