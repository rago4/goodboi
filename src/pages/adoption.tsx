import React from "react"
import { graphql, PageProps } from "gatsby"
// import Img from "gatsby-image"
import { Body, Button, DogTile, Heading, Select, Layout } from "../components"
import { List, Toggler, Sidebar, styles as s } from "../pages-styles/adoption"
import { ACTIVITY, PLACE, SIZE } from "../constants"
import { Values } from "../utils"

interface Dog {
  node: {
    id: string
    avatar: {
      childImageSharp: {
        fixed: {
          src: string
        }
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
  const [isSidebarOpen, setSidebarOpen] = React.useState(false)
  const [size, setSize] = React.useState("")
  const [place, setPlace] = React.useState("")
  const [activity, setActivity] = React.useState("")
  const {
    allStrapiDogs: { edges: dogs },
  } = data

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
          {dogs.length === 0 ? (
            <Heading as="span" css={s.noData}>
              No matching items found
            </Heading>
          ) : (
            dogs.map(
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
                  avatar={avatar.childImageSharp.fixed.src}
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
              fixed(height: 450, width: 450) {
                src
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
