import React from "react"
import {Table, Button, TableHeaderCell} from "semantic-ui-react"

const Person =({name, age, last}) =>(
  <Table celled padded> 
  <Table.Header>
    <Table.Row>
      <TableHeaderCell>First Name</TableHeaderCell>
      <TableHeaderCell>Last Name</TableHeaderCell>
      <TableHeaderCell>Age</TableHeaderCell>
    </Table.Row>
  </Table.Header>

  <Table.Row >
  <Table.Cell>{name}</Table.Cell>
  <Table.Cell>{last}</Table.Cell>
  <Table.Cell>{age}</Table.Cell>
 
  <Table.Cell>
    {/* <Button color="red">Delete</Button> */}
  </Table.Cell>
</Table.Row>
</Table>
)

export default Person