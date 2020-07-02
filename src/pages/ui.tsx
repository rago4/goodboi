import React from "react"
import {
  Layout,
  UIPresentation,
  Body,
  Button,
  Heading,
  NavLink,
  Select,
  Tag,
  Text,
} from "../components"

const Ui: React.FC = () => {
  const [selected, setSelected] = React.useState("")

  return (
    <Layout>
      <UIPresentation name="Body" code="<Body>...</Body>">
        <Body style={{ minHeight: "auto", height: 200 }} />
      </UIPresentation>

      <UIPresentation name="Button" code="<Button>...</Button>">
        <Button>Click me</Button>
      </UIPresentation>

      <UIPresentation
        name="Heading"
        code={`<Heading wrapper="h1 | h2 | h3">...</Heading>`}
      >
        <Heading wrapper="h1">Heading 1</Heading>
        <Heading wrapper="h2">Heading 2</Heading>
        <Heading wrapper="h3">Heading 3</Heading>
      </UIPresentation>

      <UIPresentation name="NavLink" code="<NavLink>...</NavLink>">
        <NavLink to="#">Navlink</NavLink>
      </UIPresentation>

      <UIPresentation
        name="Select"
        code={`<Select label="..." placeholder="..." items={...}>...</Select>`}
      >
        <Select
          label="Size"
          placeholder="Select size"
          items={["Small", "Medium", "Large"]}
          selected={selected}
          onSelect={setSelected}
        />
      </UIPresentation>

      <UIPresentation name="Tag" code={`<Tag background="...">...</Tag>`}>
        <Tag>Medium</Tag>
      </UIPresentation>

      <UIPresentation name="Text" code="<Text>...</Text>">
        <Text>
          Lorem ipsum massa velit pretium purus, a sodales diam enim consequat
          arcu. Nullam id metus bibendum, porta justo quis, tempus purus.
        </Text>
      </UIPresentation>
    </Layout>
  )
}

export default Ui
