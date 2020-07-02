import React from "react"
import { Container, Label, Input, Dropdown, Option } from "./styles"
import { useOnClickOutside } from "../../utils"

interface Props {
  label: string
  placeholder: string
  items: string[]
  selected?: string
  onSelect(item: string): void
}

export const Select: React.FC<Props> = ({
  label,
  placeholder,
  items,
  selected = "",
  onSelect,
}) => {
  const [isOpen, setOpen] = React.useState(false)
  const containerRef = React.useRef<HTMLDivElement>(null)
  useOnClickOutside(containerRef, () => setOpen(false))

  const handleSelect = (item: string) => {
    setOpen(false)
    onSelect(item)
  }

  return (
    <Container isOpen={isOpen} ref={containerRef}>
      <Label>{label}</Label>
      <Input
        readOnly
        isOpen={isOpen}
        placeholder={placeholder}
        onClick={() => setOpen(true)}
        value={selected}
      />
      {isOpen && (
        <Dropdown>
          {items.map(item => (
            <li key={item}>
              <Option
                onClick={() => handleSelect(item)}
                isSelected={selected === item}
              >
                {item}
              </Option>
            </li>
          ))}
        </Dropdown>
      )}
    </Container>
  )
}
