import { useEffect } from "react";
import { Form } from "react-bootstrap";
// import Pagination from "react-bootstrap/Pagination";
import ReactPaginate from "react-paginate";
import { useSearchParams } from "react-router-dom";

const Paginate = ({ active, total, onQueryChanged, limit }) => {
  useEffect(() => {}, [limit, active]);
  return (
    <div className="d-flex justify-content-between w-100 mt-1 paginator">
      {/* <Pagination size="sm">{items}</Pagination > */}
      <ReactPaginate
        breakLabel="..."
        nextLabel={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-chevron-right"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
            />
          </svg>
        }
        forcePage={active ? active - 1 : 1}
        onPageChange={(o) => onQueryChanged("page", o.selected + 1)}
        pageRangeDisplayed={5}
        pageCount={total}
        previousLabel={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-chevron-left"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
            />
          </svg>
        }
        renderOnZeroPageCount={null}
      />
      <div className="table-footer-select">
        <Form.Select
          id="searchBy"
          placeholder="تعداد نمایش"
          onChange={(e) => onQueryChanged("limit", e.target.value)}
        >
          <option selected={limit == 25} value={25}>
            25
          </option>
          <option selected={limit == 50} value={50}>
            50
          </option>
          <option selected={limit == 100} value={100}>
            100
          </option>
          <option selected={limit == 150} value={150}>
            150
          </option>
        </Form.Select>
      </div>
    </div>
  );
};

export default Paginate;
