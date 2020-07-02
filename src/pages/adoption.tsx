import React from "react"
import { Body, Heading, Select, Layout } from "../components"
import { Sidebar, styles } from "../pages-styles/adoption"

const Adoption: React.FC = () => {
  const handleSelect = (value: string) => {
    console.log(value)
  }

  return (
    <Layout>
      <Body>
        <Sidebar>
          <Heading css={styles.logo}>goodboi</Heading>
          <Select
            styles={styles.select}
            label="Size"
            placeholder="Select"
            items={[]}
            onSelect={handleSelect}
          />
          <Select
            styles={styles.select}
            label="Character"
            placeholder="Select"
            items={[]}
            onSelect={handleSelect}
          />
          <Select
            label="Activity"
            placeholder="Select"
            items={[]}
            onSelect={handleSelect}
          />
        </Sidebar>
      </Body>
    </Layout>
  )
}

export default Adoption
