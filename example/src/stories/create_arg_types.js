import cleanDeep from 'clean-deep'
import {encode} from 'html-entities'

export default ({
    description,
    isRequired,
    typeName,
    typeNameDetail,
    defaultValue,
    controlType,
}) => cleanDeep(
    {
        description: encode(description),
        type: {
            required: isRequired,
        },
        table: {
            type: {
                summary: typeName,
                detail: typeNameDetail,
            },
            defaultValue: {
                detail: defaultValue,
            }
        },
        control: {
            type: controlType,
        },
    },
    {
        nullValues: false,
    }
)
