

export type TableViewColumn<T> = {
    key: keyof T & string
    title: string
    numeric?: boolean
}

export type TableViewProps<T> = {
    columns: TableViewColumn<T>[]
    data: T[]
    width?: string
}

export function TableView<T>(props: TableViewProps<T>) {
    const { columns, data, width= "600px" } = props
    return (
        <table width={width}>
            <thead>
                <tr>
                    {columns.map(column => (
                        <th key={column.key}>{column.title}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
            {/* Map over the records and create a table row for each record */}
            {data.map((row, rowindex) => (
                <tr key={rowindex}>
                    {columns.map(column => (
                        <td key={column.key} className={column.numeric?"td-numeric":""}>{row[column.key] as unknown as any}</td>
                    ))}
                </tr>
            ))}
            </tbody>
        </table>
    )
}
