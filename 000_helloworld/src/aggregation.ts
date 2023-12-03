
export enum AggregationOp {
    SUM,
    AVG,
    MIN,
    MAX,
    COUNT,
    ARRAY,
}

export type Grouping = {
    field: string
}

export type Aggregation = {
    op: AggregationOp,
    field: string,
    resultField?: string,
}

class CompoungKey {
    constructor(private groupings: Grouping[]) {
    }

    toExternalForm(record: any) {
        let buffer = ""
        for (const grouping of this.groupings) {
            if (buffer.length > 0) {
                buffer += ","
            }
            buffer += record[grouping.field]
        }
        return buffer
    }
}

export class AggregationProcessor {
    constructor(private groupings: Grouping[], private aggregations: Aggregation[]) {
    }

    run(records: any[]) {
        const map = new Map<string,any>()
        const compoundKey = new CompoungKey(this.groupings)
        let rownumber = 1
        for (const record of records) {
            const key = compoundKey.toExternalForm(record)
            let result = map.get(key)
            if (!result) {
                result = {}
                map.set(key, result)
            }
            for (const grouping of this.groupings) {
                result[grouping.field] = record[grouping.field]
            }
            for (const aggregation of this.aggregations) {
                let value = result[aggregation.resultField ?? aggregation.field]
                const newValue = record[aggregation.field]
                switch (aggregation.op) {
                    case AggregationOp.SUM:
                        if (!value) {
                            value = 0
                        }
                        value = value + newValue
                        break;
                    case AggregationOp.AVG:
                        if (!value) {
                            value = 0
                        }
                        value = (value + newValue) / rownumber
                        break;
                    case AggregationOp.MIN:
                        if (!value) {
                            value = 1E16
                        }
                        value = Math.min(value, newValue)
                        break;
                    case AggregationOp.MAX:
                        if (!value) {
                            value = -1E16
                        }
                        value = Math.max(value, newValue)
                        break;
                    case AggregationOp.COUNT:
                        if (!value) {
                            value = 0
                        }
                        value++
                        break;
                    case AggregationOp.ARRAY:
                        if (!value) {
                            value = []
                        }
                        value.push(newValue)
                        break;
                }
                result[aggregation.resultField ?? aggregation.field] = value
            }
            ++rownumber
        }

        return Array.from(map.values())
    }
}