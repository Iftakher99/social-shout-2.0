import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Searchbox = () => {
  return (
    <div style={{ marginTop: '30px' }}>
      <div className="input-group  ">
        <input
          type="search"
          class="form-control rounded"
          placeholder="Search anything"
        />
        <span className="input-group-text border-0" id="search-addon">
          <FontAwesomeIcon icon={faSearch} />
        </span>
      </div>
    </div>
  );
};

export default Searchbox;
