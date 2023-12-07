import { ISearchBoxStyles, SearchBox, Stack } from '@gui/fluent-ui-allure'
import { NavLink, useNavigate } from 'react-router-dom'
import { searchData } from '@/constants/dataSearch'
import { ISearchItem } from '@/types/search'
import { useState } from 'react'

export const SearchInput = () => {
  const [searchInputStr, setSearchInputStr] = useState('')
  const [searchResults, setSearchResults] = useState<ISearchItem[]>([])
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(null)

  const styles: Partial<ISearchBoxStyles> = { root: { height: 40 }, box: { width: 240 } }
  const navigate = useNavigate()

  const handleSearch = () => {
    navigate(searchInputStr)
  }

  const handleOnChangeSearch = (e: any) => {
    const value = e?.target?.value
    setSearchInputStr(value)
    if (value) {
      const searchArr = searchInput(searchData, value)
      setSearchResults(searchArr)
    } else {
      setSearchResults([])
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if (selectedItemIndex !== null) {
        // If an item is selected, navigate to its link
        navigate(searchResults[selectedItemIndex].link)
      } else {
        // If no item is selected, perform the default search action
        handleSearch()
      }
    } else if (e.key === 'ArrowDown') {
      // Handle down arrow key to navigate through search results
      e.preventDefault()
      console.log('e.preventDefault()', e.preventDefault())
      setSelectedItemIndex((prevIndex) =>
        prevIndex === null ? 0 : Math.min(prevIndex + 1, searchResults.length - 1)
      )
      setSearchInputStr(
        searchResults[
          selectedItemIndex === null ? 0 : Math.min(selectedItemIndex + 1, searchResults.length - 1)
        ]?.name
      )
    } else if (e.key === 'ArrowUp') {
      // Handle up arrow key to navigate through search results
      e.preventDefault()
      setSelectedItemIndex((prevIndex) => (prevIndex === null ? 0 : Math.max(prevIndex - 1, 0)))
      setSearchInputStr(
        searchResults[selectedItemIndex === null ? 0 : Math.max(selectedItemIndex - 1, 0)]?.name
      )
    }
  }

  const handleResultClick = (index: number) => {
    setSelectedItemIndex(index)
    setSearchInputStr('')
    setSearchResults([])
  }

  const searchInput = (arr: ISearchItem[], searchText: string): ISearchItem[] => {
    let dataRender: ISearchItem[] = []
    arr.filter((item: ISearchItem) => {
      if (item?.name?.toLowerCase()?.includes(searchText.toLowerCase())) {
        dataRender.push(item)
      }
      return true
    })
    return dataRender
  }

  return (
    <div className='search-cover'>
      <Stack tokens={{ childrenGap: 20 }}>
        <Stack>
          <SearchBox
            styles={styles}
            placeholder='Type search keyword'
            value={searchInputStr}
            onSearch={handleSearch}
            onChange={handleOnChangeSearch}
            onClear={() => setSearchResults([])}
            onKeyDown={handleKeyPress}
          />
        </Stack>
      </Stack>
      {searchResults && searchResults.length > 0 && (
        <ul className='list-search-result'>
          {searchResults.map((itemSearch: ISearchItem, index: number) => (
            <li
              key={itemSearch.id}
              className={index === selectedItemIndex ? 'selected-item' : ''}
              onClick={() => handleResultClick(index)}
            >
              <NavLink to={itemSearch.link}>{itemSearch.name}</NavLink>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
