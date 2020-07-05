import React from 'react';

import './style.css';

interface IPagination {
  charactersPerPage: number;
  totalCharacters: number;
  onPaginate: (pageNumber: number) => void;
}

const Pagination: React.FC<IPagination> = ({
  charactersPerPage,
  totalCharacters,
  onPaginate,
}) => {
  const [activeButton, setActiveButton] = React.useState(0);
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalCharacters / charactersPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="pagination">
      {pageNumbers.map((number) => (
        <button
          key={number}
          type="button"
          onClick={() => {
            onPaginate(number);
            setActiveButton(number);
          }}
          className={activeButton === number ? 'active' : undefined}
        >
          {number}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
