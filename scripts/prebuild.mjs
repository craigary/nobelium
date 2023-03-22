import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import fs from 'node:fs'
import nextEnv from '@next/env'
import { NotionAPI } from 'notion-client'
import { getTextContent } from 'notion-utils'

const ROOT = resolve(fileURLToPath(import.meta.url), '../..')

// Only fetch config from Notion when no local config file is found
if (!fs.existsSync(resolve(ROOT, 'blog.config.js'))) {
  console.log('Local config not found. Fetch from Notion...')

  nextEnv.loadEnvConfig(ROOT)
  const {
    NOTION_PAGE_ID,
    NOTION_ACCESS_TOKEN,
    VERCEL_ENV
  } = process.env

  const api = new NotionAPI({ authToken: NOTION_ACCESS_TOKEN })
  const everything = await api.getPage(NOTION_PAGE_ID)
  // Get the ID of database prop `type`
  const [typePropId] =
    Object.entries(Object.values(everything.collection)[0].value.schema)
      .find(([id, value]) => value.name === 'type')
  // Get the first page whose `type` is `Config`
  const [, { value: configPage }] =
    Object.entries(everything.block)
      .find(([id, { value }]) => getTextContent(value.properties?.[typePropId]) === 'Config')
  // We only treat the first code block as config source
  const configCodeBlockId = configPage.content.find(id => everything.block[id].value.type === 'code')
  const configCodeBlock = everything.block[configCodeBlockId].value
  const config = JSON.parse(getTextContent(configCodeBlock.properties.title))

  // Append private fields
  Object.assign(config, {
    notionPageId: NOTION_PAGE_ID,
    notionAccessToken: NOTION_ACCESS_TOKEN,
    isProd: VERCEL_ENV === 'production'
  })

  fs.writeFileSync(
    resolve(ROOT, 'blog.config.js'),
    `module.exports = ${JSON.stringify(config, null, 2)}`,
    'utf-8'
  )

  console.log('Remote config fetched successfully')
}
