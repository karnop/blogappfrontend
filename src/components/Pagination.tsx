import React from 'react';

function Pagination() {
    return (
        <div className={"flex justify-between py-4 pr-5"}>
            <button className={"bg-black/90 text-slate-200 dark:bg-slate-200 dark:text-slate-800 px-7 py-4 rounded-md font-semibold"}>Previous</button>
            <button className={"bg-black/90 text-slate-200 dark:bg-slate-200 dark:text-slate-800 px-7 py-4 rounded-md font-semibold"}>Next</button>
        </div>
    );
}

export default Pagination;