import React from "react"
import { Body, Button, DogTile, Heading, Select, Layout } from "../components"
import { List, Toggler, Sidebar, styles as s } from "../pages-styles/adoption"

const Adoption: React.FC = () => {
  const [isSidebarOpen, setSidebarOpen] = React.useState(false)
  const [size, setSize] = React.useState("")
  const [place, setPlace] = React.useState("")
  const [activity, setActivity] = React.useState("")

  return (
    <Layout>
      <Body css={s.body}>
        <Toggler
          isSidebarOpen={isSidebarOpen}
          onClick={() => setSidebarOpen(!isSidebarOpen)}
        />

        <Sidebar isOpen={isSidebarOpen}>
          <Heading css={s.logo}>goodboi</Heading>
          <Select
            styles={s.select}
            label="Size"
            placeholder="Select"
            items={["Small", "Medium", "Large"]}
            onSelect={value => setSize(value)}
            selected={size}
          />
          <Select
            styles={s.select}
            label="Place"
            placeholder="Select"
            items={["Flat", "House", "Dog house"]}
            onSelect={value => setPlace(value)}
            selected={place}
          />
          <Select
            label="Activity"
            placeholder="Select"
            items={["Couchie", "Active", "Very active"]}
            onSelect={value => setActivity(value)}
            selected={activity}
          />
          <Button css={s.submit}>Submit</Button>
        </Sidebar>

        <List>
          <DogTile styles={s.dogTile} />
          <DogTile styles={s.dogTile} />
          <DogTile styles={s.dogTile} />
        </List>
      </Body>
    </Layout>
  )
}

export default Adoption
