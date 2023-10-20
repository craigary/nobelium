import { getTextContent, getDateValue } from 'notion-utils'
import type { BlockMap, CollectionPropertySchemaMap, User } from 'notion-types'

import api from '@/lib/server/notion-api'

export default async function getPageProperties (id: string, block: BlockMap, schema:  CollectionPropertySchemaMap) {
  const rawProperties = Object.entries(block?.[id]?.value?.properties || [])
  const excludeProperties = ['date', 'select', 'multi_select', 'person']
  const properties: Record<string, any> = { id }

  for (let i = 0; i < rawProperties.length; i++) {
    const [key, val] = rawProperties[i] as [string, any]
    if (schema[key]?.type && !excludeProperties.includes(schema[key].type)) {
      properties[schema[key].name] = getTextContent(val)
    } else {
      switch (schema[key]?.type) {
        case 'date': {
          const dateProperty = getDateValue(val)
          if (dateProperty) {
            // delete dateProperty.type
            properties[schema[key].name] = dateProperty
          }
          break
        }
        case 'select':
        case 'multi_select': {
          const selects = getTextContent(val)
          if (selects[0]?.length) {
            properties[schema[key].name] = selects.split(',')
          }
          break
        }
        case 'person': {
          const rawUsers = val.flat()
          const users = []
          for (let i = 0; i < rawUsers.length; i++) {
            if (rawUsers[i][0][1]) {
              const userId = rawUsers[i][0]
              const res = await api.getUsers(userId as any)
              //@ts-ignore
              const resValue: User = res?.recordMapWithRoles?.notion_user?.[userId[1]]?.value
              const user = {
                id: resValue?.id,
                first_name: resValue?.given_name,
                last_name: resValue?.family_name,
                profile_photo: resValue?.profile_photo
              }
              users.push(user)
            }
          }
          properties[schema[key].name] = users
          break
        }
        default:
          break
      }
    }
  }
  return properties
}


