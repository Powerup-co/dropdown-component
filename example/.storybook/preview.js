const {addDecorator} = require('@storybook/react')
const {withPropsTable} = require('storybook-addon-react-docgen')

addDecorator(withPropsTable)

export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
    options: {
        storySort: {
            order: [
                'Link',
                'Nav Bar Link',
                'Recently Viewed',
                'Search Result',
                'Search Result With Details',
                'NavBar',
            ],
        },
    },
}
