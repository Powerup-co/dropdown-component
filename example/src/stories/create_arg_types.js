import cleanDeep from 'clean-deep'

export default ({
    description,
    isRequired,
    typeName,
    defaultValue,
    controlType,
}) => cleanDeep(
    {
        description: description,
        type: {
            required: isRequired,
        },
        table: {
            type: {
                summary: typeName,
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
