import React, { ReactNode } from "react"
import { MDXProvider } from "@mdx-js/react"
import {
  Alert,
  AlertDescription,
  Box,
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

const anchorStyle = {
  ".anchor": {
    visibility: "hidden",
    color: "inherit",
    textDecoration: "none",
    fontWeight: "normal",
    marginLeft: "1",
  },
  _hover: {
    ".anchor": {
      visibility: "visible",
    },
  },
}

const components = {
  p: (props: object) => <Text {...props} />,
  h1: (props: object) => <Heading as={"h1"} {...props} />,
  h2: (props: object) => <Heading as={"h2"} sx={anchorStyle} {...props} />,
  h3: (props: object) => <Heading as={"h3"} sx={anchorStyle} {...props} />,
  h4: (props: object) => <Heading as={"h4"} sx={anchorStyle} {...props} />,
  h5: (props: object) => <Heading as={"h5"} sx={anchorStyle} {...props} />,
  h6: (props: object) => <Heading as={"h6"} sx={anchorStyle} {...props} />,
  blockquote: (props: object) => (
    <Alert
      as={"blockquote"}
      role={"none"}
      colorScheme={"whiteAlpha"}
      variant={"left-accent"}
      rounded={"sm"}
      marginY={1}
    >
      <AlertDescription maxWidth={"full"} {...props} />
    </Alert>
  ),
  ul: (props: object) => <UnorderedList as={"ul"} {...props} />,
  ol: (props: object) => <OrderedList as={"ol"} {...props} />,
  li: (props: object) => <ListItem as={"li"} {...props} />,
  table: (props: object) => (
    <TableContainer>
      <Table as={"table"} {...props} />
    </TableContainer>
  ),
  tr: (props: object) => <Tr as={"tr"} {...props} />,
  td: (props: object) => <Td as={"td"} {...props} />,
  th: (props: object) => <Th as={"th"} {...props} />,
  pre: (props: object) => (
    <Box
      as={"pre"}
      boxShadow={"2xl"}
      sx={{
        overflowX: "auto",
        overflowY: "hidden",
        rounded: "sm",
        marginY: 1,
        code: {
          display: "grid",
          paddingX: 6,
          paddingY: 3,
          width: "max",
          minWidth: "full",
          ".highlighted-line, .highlighted-word": {
            backgroundColor: "rgba(200,200,255,.1)",
            rounded: "sm",
          },
        },
      }}
      {...props}
    />
  ),
  code: (props: object) => (
    <Code as={"code"} colorScheme={"whiteAlpha"} {...props} />
  ),
  em: (props: object) => <Text as={"em"} {...props} />,
  strong: (props: object) => (
    <Text as={"strong"} fontWeight={"semibold"} {...props} />
  ),
  delete: (props: object) => <Text as={"del"} {...props} />,
  hr: (props: object) => <Divider as={"hr"} marginY={3} {...props} />,
  a: (props: object) => <Link {...props} isExternal={true} />,
}

export const MdxComponentsWrapper: React.FC<{ children: ReactNode }> = ({
  children,
}) => <MDXProvider components={components}>{children}</MDXProvider>
