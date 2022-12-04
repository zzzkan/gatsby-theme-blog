import React, { ReactNode } from "react"
import { MDXProvider } from "@mdx-js/react"
import {
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
import Code from "./Code"
import AnchorHeading from "./AnchorHeading"
import { useThemeColor } from "../../hooks/useThemeColor"

export const Mdx: React.FC<{ children: ReactNode }> = ({ children }) => {
  const {
    tint,
    primaryText,
    secondaryText,
    secondaryBackground,
    codeBackground,
    highlightBackground,
  } = useThemeColor()
  const components = {
    p: (props: object) => <Text {...props} />,
    h1: (props: object) => (
      <AnchorHeading
        as={"h1"}
        color={tint}
        size={"xl"}
        marginY={6}
        {...props}
      />
    ),
    h2: (props: object) => (
      <AnchorHeading
        as={"h2"}
        color={tint}
        size={"lg"}
        borderBottom={"1px solid"}
        borderColor={secondaryText}
        marginY={6}
        paddingBottom={1}
        {...props}
      />
    ),
    h3: (props: object) => (
      <AnchorHeading
        as={"h3"}
        color={tint}
        size={"lg"}
        marginY={3}
        {...props}
      />
    ),
    h4: (props: object) => (
      <AnchorHeading
        as={"h4"}
        color={tint}
        size={"md"}
        marginY={3}
        {...props}
      />
    ),
    h5: (props: object) => (
      <AnchorHeading
        as={"h5"}
        color={tint}
        size={"sm"}
        marginY={3}
        {...props}
      />
    ),
    h6: (props: object) => (
      <AnchorHeading
        as={"h6"}
        color={tint}
        size={"xs"}
        marginY={3}
        {...props}
      />
    ),
    blockquote: (props: object) => (
      <Blockquote
        background={secondaryBackground}
        borderColor={secondaryBackground}
        rounded={"sm"}
        marginY={3}
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
      <Td as={"td"} color={primaryText} borderColor={primaryText} {...props} />
    ),
    th: (props: object) => (
      <Th
        as={"th"}
        color={primaryText}
        borderColor={primaryText}
        fontWeight={"semibold"}
        {...props}
      />
    ),
    pre: (props: object) => (
      <Pre
        highlightBackground={highlightBackground}
        lineColor={secondaryText}
        marginY={3}
        rounded={"sm"}
        {...props}
      />
    ),
    code: (props: object) => <Code background={codeBackground} {...props} />,
    em: (props: object) => <Text as={"em"} {...props} />,
    strong: (props: object) => <Text as={"strong"} {...props} />,
    delete: (props: object) => <Text as={"del"} {...props} />,
    hr: (props: object) => (
      <Divider
        as={"hr"}
        border={"1px solid"}
        borderColor={secondaryText}
        marginY={6}
        {...props}
      />
    ),
    a: (props: object) => <Link color={tint} {...props} />,
    input: (props: object) => <input aria-label={"input"} {...props} />,
  }
  return <MDXProvider components={components}>{children}</MDXProvider>
}
