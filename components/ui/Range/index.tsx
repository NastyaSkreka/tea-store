"use client"
import { useDebounse } from "@/lib/hooks/useDebounce"
import { useEffect, useState } from "react"
import {SearchContainer, SearchInput} from './styles'

interface IRange {
    min?: number
    max?: number
    fromInitialValue?: string
    toInitialValue?: string
    onChangeFromValue: (value: string) => void
    onChangeToValue: (value: string) => void
}

export default function Range({min = 0, max, fromInitialValue, toInitialValue, onChangeFromValue, onChangeToValue}: IRange){
    const [fromValue, setFromValue] = useState(fromInitialValue || '')
    const [toValue, setToValue ] = useState(toInitialValue || '')

    const debouncedFromValue = useDebounse(fromValue, 500)
    const debouncedToValue = useDebounse(toValue, 500)

    useEffect(() => {
        onChangeFromValue(debouncedFromValue)
    }, [debouncedFromValue])

    useEffect(() => {
        onChangeToValue(debouncedToValue)
    }, [debouncedToValue])

    return (
        <SearchContainer>
            <SearchInput 
                min={min}
                max={max}
                type="number" 
                placeholder="From"
                value={fromValue}
                onChange={e => setFromValue(e.target.value)}
            
            />
            <SearchInput 
                min={min}
                max={max}
                type="number" 
                placeholder="to"
                value={toValue}
                onChange={e => setToValue(e.target.value)}
            
            />
        </SearchContainer>
    )

}