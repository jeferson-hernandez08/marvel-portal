import { getAllPaginated } from '@/modules/core/services/marvel.api-rest2';
import { defaultMapper } from '@/modules/core/services';
import { mapCharacterToCard } from '@/modules/marvel-characters/services';

const domain = `characters`;

export async function getCharatersAtPage(
  page,
  itemsPerPage,
  name,
  { mappedBy = defaultMapper, queryParams = {} }
) {
  return getAllPaginated(domain, page, name, {
    mappedBy,
    itemsPerPage,
    ...queryParams
  });
}

export function getCharactersForGrid(page, itemsPerPage) {
  return getCharatersAtPage(page, itemsPerPage, {
    mappedBy: mapCharacterToCard
  });
}
