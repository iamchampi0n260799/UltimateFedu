import React from 'react';
import { Link } from "react-router-dom";
import { usePagination } from '@material-ui/lab/Pagination';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    ul: {
        listStyle: 'none',
        padding: 0,
        margin: 0,
        display: 'flex',
    },
});

// function Pagination({ currentPage, totalPages, onPageChange }) {
//     const pageNumbers = [];
//     for (let i = 0; i <= totalPages; i++) {
//         pageNumbers.push(i);
//     }

//     const handlePageChange = (newPage) => {
//         if (onPageChange) {
//             onPageChange(newPage);
//         }
//         console.log(newPage);
//     }

//     return (
//         <nav aria-label="Page navigation">
//             <ul className="pagination justify-content-center">
//                 <li className="page-item">
//                     <button className="btn btn-success"
//                         disabled={currentPage <= 1}
//                         onClick={handlePageChange(currentPage - 1)}
//                     >
//                         Previous
//                     </button>
//                 </li>
//                 {
//                     pageNumbers.map((number) => {
//                         return (
//                             <li className="page-item" key={number}>
//                                 <Link to="#" className="page-link">
//                                     {number}
//                                 </Link>
//                             </li>
//                         )
//                     })
//                 }
//                 <li className="page-item">
//                     <button className="btn btn-success"
//                         disabled={currentPage >= totalPages}
//                         onClick={handlePageChange(currentPage + 1)}
//                     >Next
//                     </button>
//                 </li>
//             </ul>
//         </nav>
//     )
// }
function Pagination() {
    const classes = useStyles();
    const { items } = usePagination({
        count: 10,
    });

    return (
        <nav>
            <ul className={classes.ul}>
                {items.map(({ page, type, selected, ...item }, index) => {
                    let children = null;

                    if (type === 'start-ellipsis' || type === 'end-ellipsis') {
                        children = '…';
                    } else if (type === 'page') {
                        children = (
                            <button type="button" style={{ fontWeight: selected ? 'bold' : undefined }} {...item}>
                                {page}
                            </button>
                        );
                    } else {
                        children = (
                            <button type="button" {...item}>
                                {type}
                            </button>
                        );
                    }

                    return <li key={index}>{children}</li>;
                })}
            </ul>
        </nav>
    );
}

export default Pagination;