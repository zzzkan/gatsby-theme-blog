export type multilingualSentenceType = {
  readonly movePageSentence: (str: string) => string
  readonly featuredImageSentence: (str?: string) => string
  readonly toggleColorModeSentence: string
}
