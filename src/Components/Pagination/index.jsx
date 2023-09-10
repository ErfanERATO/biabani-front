import { useEffect } from "react";
import { Form } from "react-bootstrap";
// import Pagination from "react-bootstrap/Pagination";
import ReactPaginate from "react-paginate";
import { useSearchParams } from "react-router-dom";
import { useUrl } from "../../hooks/useUrl";
import "./style.scss"

const Paginate = ({ active, total, onQueryChanged, limit }) => {
  useEffect(() => {}, [limit, active]);
  const {addToQuery} = useUrl();
  return (
    <div className="d-flex justify-content-between w-100 mt-1 paginator">
      {/* <Pagination size="sm">{items}</Pagination > */}
      <ReactPaginate
        breakLabel="..."
        nextLabel={"←"}
        // →
        forcePage={active ? active - 1 : 1}
        onPageChange={(o) => addToQuery("page", o.selected + 1)}
        pageRangeDisplayed={5}
        pageCount={total}
        previousLabel={"→"}
        renderOnZeroPageCount={null}
      />
      <div className="table-footer-select">
        <Form.Select
          id="searchBy"
          placeholder="تعداد نمایش"
          onChange={(e) => addToQuery("limit", e.target.value)}
        >
          <option selected={limit == 5} value={5}>
            5
          </option>
          <option selected={limit == 10} value={10}>
            10
          </option>
          <option selected={limit == 15} value={15}>
            15
          </option>
        </Form.Select>
      </div>
    </div>
  );
};

export default Paginate;
