import React from "react"
import {
  Layout,
  UIPresentation,
  Body,
  Button,
  ButtonLink,
  DogTile,
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
        name="ButtonLink"
        code={`<ButtonLink to="#">...</ButtonLink>`}
      >
        <ButtonLink to="#">Click me</ButtonLink>
      </UIPresentation>

      <UIPresentation name="DogTile" code={`<DogTile {...props} />`}>
        <DogTile />
      </UIPresentation>

      <UIPresentation
        name="Heading"
        code={`<Heading as="h1 | h2 | h3">...</Heading>`}
      >
        <Heading>Heading 1</Heading>
        <Heading as="h2">Heading 2</Heading>
        <Heading as="h3">Heading 3</Heading>
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
