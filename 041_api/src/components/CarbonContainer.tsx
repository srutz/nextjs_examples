"use client"

import { DatePicker, DatePickerInput } from '@carbon/react'
import { ReactNode } from "react"

export function CarbonContainer(props: { children?: ReactNode}) {
    return (
        <>{props.children}
        <DatePicker datePickerType="single" locale="de" dateFormat="d.m.Y">
            <DatePickerInput placeholder="dd.mm.yyyy" labelText="Date Picker label" id="date-picker-single" size="md" />
        </DatePicker>
        </>
    )
        
}