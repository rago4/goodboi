import React from "react"
import { FluidObject } from "gatsby-image"
import { graphql, PageProps } from "gatsby"
import { Body, Button, DogTile, Heading, Select, Layout } from "../components"
import { List, Toggler, Sidebar, styles as s } from "../pages-styles/adoption"
import { ACTIVITY, PLACE, SIZE } from "../constants"
import { getKey, Values } from "../utils"

interface Dog {
  node: {
    id: string
    avatar: {
      childImageSharp: {
        fluid: FluidObject
      }
    }
    strapiId: number
    name: string
    birthdate: string
    size: Values<typeof SIZE>
    place: Values<typeof PLACE>
    activity: Values<typeof ACTIVITY>
    description: string
  }
}

interface Data {
  allStrapiDogs: {
    edges: Dog[]
  }
}

const Adoption: React.FC<PageProps<Data>> = ({ data }) => {
  const {
    allStrapiDogs: { edges },
  } = data

  const [currentData, setCurrentData] = React.useState<Dog[]>(edges)
  const [isSidebarOpen, setSidebarOpen] = React.useState(false)
  const [size, setSize] = React.useState("")
  const [place, setPlace] = React.useState("")
  const [activity, setActivity] = React.useState("")

  const handleFiltersSubmit = () => {
    const filtered = edges.filter(({ node }) => {
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
            currentData.map(
              ({
                node: {
                  id,
                  strapiId,
                  avatar,
                  name,
                  birthdate,
                  size,
                  place,
                  activity,
                  description,
                },
              }) => (
                <DogTile
                  key={id}
                  styles={s.dogTile}
                  id={strapiId}
                  avatar={avatar.childImageSharp.fluid}
                  name={name}
                  months={Number(birthdate)}
                  traits={{ size, place, activity }}
                  description={description}
                />
              )
            )
          )}
        </List>
      </Body>
    </Layout>
  )
}

export const query = graphql`
  query dogs {
    allStrapiDogs {
      edges {
        node {
          id
          strapiId
          avatar {
            childImageSharp {
              fluid(maxHeight: 450, maxWidth: 450) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          name
          birthdate(difference: "months")
          size
          place
          activity
          description
        }
      }
    }
  }
`

export default Adoption
