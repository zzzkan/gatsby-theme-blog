import React, { ReactNode } from "react"
import { MDXProvider } from "@mdx-js/react"
import {
  Code,
  Divider,
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
import Blockquote from "./Blockquote"
import Pre from "./Pre"
import AnchorHeading from "./AnchorHeading"

const components = {
  p: (props: object) => <Text {...props} />,
  h1: (props: object) => (
    <AnchorHeading
      as={"h1"}
      color={"brand.200"}
      size={"xl"}
      marginY={6}
      {...props}
    />
  ),
  h2: (props: object) => (
    <>
      <AnchorHeading
        as={"h2"}
        color={"brand.200"}
        size={"lg"}
        marginTop={6}
        {...props}
      />
      <Divider marginBottom={6} borderColor={"base.500"} />
    </>
  ),
  h3: (props: object) => (
    <AnchorHeading
      as={"h3"}
      color={"brand.200"}
      size={"lg"}
      marginY={3}
      {...props}
    />
  ),
  h4: (props: object) => (
    <AnchorHeading
      as={"h4"}
      color={"brand.200"}
      size={"md"}
      marginY={3}
      {...props}
    />
  ),
  h5: (props: object) => (
    <AnchorHeading
      as={"h5"}
      color={"brand.200"}
      size={"sm"}
      marginY={3}
      {...props}
    />
  ),
  h6: (props: object) => (
    <AnchorHeading
      as={"h6"}
      color={"brand.200"}
      size={"xs"}
      marginY={3}
      {...props}
    />
  ),
  blockquote: (props: object) => (
    <Blockquote
      background={"whiteAlpha.100"}
      borderColor={"whiteAlpha.100"}
      marginY={3}
      rounded={"sm"}
      {...props}
    />
  ),
  ul: (props: object) => <UnorderedList as={"ul"} {...props} />,
  ol: (props: object) => <OrderedList as={"ol"} {...props} />,
  li: (props: object) => <ListItem as={"li"} {...props} />,
  table: (props: object) => (
    <TableContainer marginY={3}>
      <Table as={"table"} variant={"simple"} size={"md"} {...props} />
    </TableContainer>
  ),
  tr: (props: object) => <Tr as={"tr"} {...props} />,
  td: (props: object) => (
    <Td as={"td"} color={"base.100"} borderColor={"base.100"} {...props} />
  ),
  th: (props: object) => (
    <Th
      as={"th"}
      color={"base.100"}
      borderColor={"base.100"}
      fontWeight={"semibold"}
      {...props}
    />
  ),
  pre: (props: object) => <Pre marginY={3} rounded={"sm"} {...props} />,
  code: (props: object) => (
    <Code
      as={"code"}
      background={"whiteAlpha.100"}
      sx={{
        ".highlighted-line, .highlighted-word": {
          backgroundColor: "whiteAlpha.200",
          rounded: "sm",
        },
      }}
      {...props}
    />
  ),
  em: (props: object) => <Text as={"em"} {...props} />,
  strong: (props: object) => <Text as={"strong"} {...props} />,
  delete: (props: object) => <Text as={"del"} {...props} />,
  hr: (props: object) => (
    <Divider as={"hr"} borderColor={"base.500"} marginY={3} {...props} />
  ),
  a: (props: object) => <Link color={"brand.200"} {...props} />,
}

export const Mdx: React.FC<{ children: ReactNode }> = ({ children }) => (
  <MDXProvider components={components}>{children}</MDXProvider>
)
