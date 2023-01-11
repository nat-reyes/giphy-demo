import PropTypes from "prop-types";
import './Pagination.css';
import React, {useState} from "react";

function Pagination({onPageChange, pagination}) {
    const {pageCount, pageSize} = pagination;
    const [page, setPage] = useState(1);
    const [previousIsDisabled, setPreviousIsDisabled] = useState(page === 1);
    const [nextIsDisabled, setNextIsDisabled] = useState(
        pageSize * page > pageCount
    );

    const previousPage = () => {
        if (page === 1) return setPreviousIsDisabled(true);
        onPageChange(page - 1);
        setPage(page - 1)
        setPreviousIsDisabled(true);
    };
    const nextPage = () => {
        if (pageSize * page > pageCount) return setNextIsDisabled(true);
        onPageChange(page + 1);
        setPage(page + 1)
    };

    return (
        <div className="pagination-container">
            <div className="page">
                <div
                    style={{
                        opacity: previousIsDisabled ? 0.5 : 1,
                        pointerEvents: previousIsDisabled ? 'not-allowed' : 'unset',
                        cursor: previousIsDisabled ? 'not-allowed' : 'pointer',
                    }}
                    className="arrow-container">
                    <i onClick={previousPage} className="fa-solid fa-circle-arrow-left"></i>
                </div>
                <div className="page-display">{`Page: ${page}`}</div>
                <div style={{
                    opacity: nextIsDisabled ? 0.5 : 1,
                    pointerEvents: nextIsDisabled ? 'not-allowed' : 'unset',
                    cursor: nextIsDisabled ? 'not-allowed' : 'pointer',
                }}
                     className="arrow-container">
                    <i onClick={nextPage} className="fa-solid fa-circle-arrow-right"></i>
                </div>
            </div>
        </div>
    );
}

Pagination.propTypes = {
    onPageChange: PropTypes.func.isRequired,
};
export default Pagination;