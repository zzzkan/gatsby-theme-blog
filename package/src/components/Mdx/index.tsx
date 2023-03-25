import React from "react"
import { MDXProvider } from "@mdx-js/react"
import {
  Code,
  Divider,
  Heading,
  Link,
  ListItem,
  OrderedList,
  Table,
  TableContainer,
  Td,
  Text,
  Th,
  Tr,
  UnorderedList,
} from "@chakra-ui/react"
import { Blockquote } from "./Blockquote"
import { Pre } from "./Pre"

export const Mdx: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const components = {
    p: (props: object) => <Text marginY={3} {...props} />,
    h1: (props: object) => (
      <Heading
        as={"h1"}
        color={"tint"}
        size={"2xl"}
        variant={"anchor"}
        marginY={6}
        {...props}
      />
    ),
    h2: (props: object) => (
      <Heading
        as={"h2"}
        color={"tint"}
        size={"xl"}
        variant={"anchor"}
        borderBottom={"1px solid"}
        borderColor={"secondaryText"}
        marginY={6}
        paddingBottom={1}
        {...props}
      />
    ),
    h3: (props: object) => (
      <Heading
        as={"h3"}
        color={"tint"}
        size={"lg"}
        variant={"anchor"}
        marginY={3}
        {...props}
      />
    ),
    h4: (props: object) => (
      <Heading
        as={"h4"}
        color={"tint"}
        size={"md"}
        variant={"anchor"}
        marginY={3}
        {...props}
      />
    ),
    h5: (props: object) => (
      <Heading
        as={"h5"}
        color={"tint"}
        size={"sm"}
        variant={"anchor"}
        marginY={3}
        {...props}
      />
    ),
    h6: (props: object) => (
      <Heading
        as={"h6"}
        color={"tint"}
        size={"xs"}
        variant={"anchor"}
        marginY={3}
        {...props}
      />
    ),
    blockquote: (props: object) => (
      <Blockquote marginY={3} paddingY={0} {...props} />
    ),
    ul: (props: object) => <UnorderedList as={"ul"} {...props} />,
    ol: (props: object) => <OrderedList as={"ol"} {...props} />,
    li: (props: object) => <ListItem as={"li"} {...props} />,
    table: (props: object) => (
      <TableContainer tabIndex={0} marginY={3}>
        <Table as={"table"} {...props} />
      </TableContainer>
    ),
    tr: (props: object) => <Tr as={"tr"} {...props} />,
    td: (props: object) => <Td as={"td"} {...props} />,
    th: (props: object) => <Th as={"th"} {...props} />,
    pre: (props: object) => <Pre marginY={3} {...props} />,
    code: (props: object) => <Code as={"code"} {...props} />,
    em: (props: object) => <Text as={"em"} {...props} />,
    strong: (props: object) => <Text as={"strong"} {...props} />,
    delete: (props: object) => <Text as={"del"} {...props} />,
    hr: (props: object) => <Divider as={"hr"} marginY={6} {...props} />,
    a: (props: object) => <Link color={"tint"} {...props} />,
  }
  return <MDXProvider components={components}>{children}</MDXProvider>
}
