import React from "react"
import { graphql, PageProps } from "gatsby"
import { Body, Button, DogTile, Heading, Select, Layout } from "../components"
import { List, Toggler, Sidebar, styles as s } from "../pages-styles/adoption"
import { ACTIVITY, PLACE, SIZE } from "../constants"
import { getKey, Values, FluidImage } from "../utils"

interface Dog {
  id: string
  name: string
  place: Values<typeof PLACE>
  size: Values<typeof SIZE>
  activity: Values<typeof ACTIVITY>
  birthdate: string
  description: string
  avatar: FluidImage
}

interface Data {
  strapi: {
    dogs: Dog[]
  }
}

const Adoption: React.FC<PageProps<Data>> = ({ data }) => {
  const {
    strapi: { dogs },
  } = data

  const [currentData, setCurrentData] = React.useState<Dog[]>(dogs)
  const [isSidebarOpen, setSidebarOpen] = React.useState(false)
  const [size, setSize] = React.useState("")
  const [place, setPlace] = React.useState("")
  const [activity, setActivity] = React.useState("")

  const handleFiltersSubmit = () => {
    const filtered = dogs.filter(node => {
      return [
        !size.length || getKey(size) === node.size,
        !place.length || getKey(place) === node.place,
        !activity.length || getKey(activity) === node.activity,
      ].reduce((prev, curr) => prev && curr, true)
    })

    setCurrentData(filtered)
  }

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
          <Button css={s.submit} onClick={handleFiltersSubmit}>
            Submit
          </Button>
        </Sidebar>

        <List>
          {currentData.length === 0 ? (
            <Heading as="span" css={s.noData}>
              No matching items found
            </Heading>
          ) : (
            currentData.map(data => (
              <DogTile
                key={data.id}
                styles={s.dogTile}
                id={data.id}
                avatar={data.avatar.imageFile.childImageSharp.fluid}
                name={data.name}
                birthdate={new Date(data.birthdate)}
                traits={{
                  size: data.size,
                  place: data.place,
                  activity: data.activity,
                }}
                description={data.description}
              />
            ))
          )}
        </List>
      </Body>
    </Layout>
  )
}

export const query = graphql`
  query {
    strapi {
      dogs {
        id
        name
        place
        size
        activity
        birthdate
        description
        avatar {
          url
          imageFile {
            childImageSharp {
              fluid(maxHeight: 450, maxWidth: 450) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`

export default Adoption
