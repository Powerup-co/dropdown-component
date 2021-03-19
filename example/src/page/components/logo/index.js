import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

// eslint-disable-next-line import/no-webpack-loader-syntax
import styles from '!style-loader!css-loader?modules!stylus-loader!./styles.styl'

export default function Logo({className, ...props}) {
    return (
        <div className={cn(styles['logo'], className)} />
    )
}

Logo.propTypes = {
    className: PropTypes.string,
}
