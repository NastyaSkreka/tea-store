import type { PropsWithChildren } from "react"
import {CheckboxButton, CheckboxSquare} from './styles'

interface ICheckbox {
    isChecked: boolean
    onClick: () => void
}

export default function Checkbox({isChecked, onClick, children}: PropsWithChildren<ICheckbox>){

    return (
        <CheckboxButton  onClick={onClick}>
             <CheckboxSquare isChecked={isChecked} />
            <span>{children}</span>
        </CheckboxButton>
    )
}

