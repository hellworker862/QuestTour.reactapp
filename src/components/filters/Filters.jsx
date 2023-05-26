import React from 'react'
import Toggle from '../toggle/Toggle'
import Toggle from '../select/Select'

function Filters() {
  return (
    <div class="search-filter">
      <div class="search-filters">
        <Toggle/>
        <div class="sort-quests">
          <label>
            <Select/>
          </label>
        </div>
        <div class="search">
          <input type="text" class="input-text" placeholder="Поикс..."/>
        </div>
        <button class="button btn-fillter">Показать</button>
      </div>
    </div>
  )
}

export default Filters