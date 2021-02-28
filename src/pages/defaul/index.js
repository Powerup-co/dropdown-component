import React from 'react'

import Link from 'common_components/link'

export default function DefaultPage() {
    return (
        <Link
            path="https://google.com"
            target="_blank"
            text="Tanks"
            forceUseDefaulLinkTag
        />
    )
}
