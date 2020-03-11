import React from 'react'

import { Card, CardBody, CardHeader } from 'reactstrap'
import FormDropdownStateless, {
  FormDropdownOption,
} from './FormDropdownStateless'

export interface CollapsibleCardProps {
  children?: React.ReactNode | React.ReactNode[]
  id: string
  label: string | React.ReactNode
  options: FormDropdownOption<string>[]
  defaultOption?: FormDropdownOption<string>
  value?: FormDropdownOption<string>
  onValueChange?(value: string): void
  onOptionChange?(option: FormDropdownOption<string>): void
  onBlur?<T>(e: React.FocusEvent<T>): void
}

export function CardWithDropdown({
  children,
  id,
  label,
  options,
  defaultOption,
  value,
  onValueChange,
  onOptionChange,
  onBlur,
}: CollapsibleCardProps) {
  return (
    <Card className="h-100">
      <CardHeader className="p-1">
        <FormDropdownStateless<string>
          id={id}
          label={label}
          options={options}
          defaultOption={defaultOption}
          value={value}
          onValueChange={onValueChange}
          onOptionChange={onOptionChange}
          onBlur={onBlur}
        />
      </CardHeader>

      <CardBody>{children}</CardBody>
    </Card>
  )
}