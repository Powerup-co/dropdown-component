export default ({
    description,
    isRequired,
    typeName,
    defaultValue,
    controlType,
}) => ({
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
})
