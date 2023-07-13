import React from "react";
import { Link } from "react-router-dom";
import Accordion from "./Accordion";
const Sidebar = () => {
  return (
    <>
      <div class="sidebar">
        <Accordion
          title="Publisher"
          content={
            <>
              <Link to="/addpublisher">Add Publisher</Link>
              <hr></hr> <Link to="/viewpublisher">Add Publisher</Link>
            </>
          }
        />
        <Accordion
          title="Author"
          content={
            <>
              <Link to="/addpublisher">Add Publisher</Link>
              <hr></hr> <Link to="/viewpublisher">Add Publisher</Link>
            </>
          }
        />
        <Accordion
          title="Book Codes"
          content={
            <>
              <Link to="/addpublisher">Add Publisher</Link>
              <hr></hr> <Link to="/viewpublisher">Add Publisher</Link>
            </>
          }
        />
        <Accordion
          title="Print a Book"
          content={
            <>
              <Link to="/addpublisher">Add Publisher</Link>
              <hr></hr> <Link to="/viewpublisher">Add Publisher</Link>
            </>
          }
        />
        <Accordion
          title="Books"
          content={
            <>
              <Link to="/addpublisher">Add Publisher</Link>
              <hr></hr> <Link to="/viewpublisher">Add Publisher</Link>
            </>
          }
        />
        <Accordion
          title="Orders"
          content={
            <>
              <Link to="/addpublisher">Add Publisher</Link>
              <hr></hr> <Link to="/viewpublisher">Add Publisher</Link>
            </>
          }
        />
        <Accordion
          title="Subscription Service"
          content={
            <>
              <Link to="/addpublisher">Add Publisher</Link>
              <hr></hr> <Link to="/viewpublisher">Add Publisher</Link>
            </>
          }
        />
        <Accordion
          title="Organizing Exhibition"
          content={
            <>
              <Link to="/addpublisher">Add Publisher</Link>
              <hr></hr> <Link to="/viewpublisher">Add Publisher</Link>
            </>
          }
        />
        <Accordion
          title="Publisher Subscription"
          content={
            <>
              <Link to="/addpublisher">Add Publisher</Link>
              <hr></hr> <Link to="/viewpublisher">Add Publisher</Link>
            </>
          }
        />
        <Accordion
          title="Website Request Management"
          content={
            <>
              <Link to="/addpublisher">Add Publisher</Link>
              <hr></hr> <Link to="/viewpublisher">Add Publisher</Link>
            </>
          }
        />
        <Accordion
          title="Meta Services"
          content={
            <>
              <Link to="/addpublisher">Add Publisher</Link>
              <hr></hr> <Link to="/viewpublisher">Add Publisher</Link>
            </>
          }
        />
        <Accordion
          title="Advertising"
          content={
            <>
              <Link to="/addpublisher">Add Publisher</Link>
              <hr></hr> <Link to="/viewpublisher">Add Publisher</Link>
            </>
          }
        />
        <Accordion
          title="Jobs"
          content={
            <>
              <Link to="/addpublisher">Add Publisher</Link>
              <hr></hr> <Link to="/viewpublisher">Add Publisher</Link>
            </>
          }
        />
        <Accordion
          title="Gift Cards"
          content={
            <>
              <Link to="/addpublisher">Add Publisher</Link>
              <hr></hr> <Link to="/viewpublisher">Add Publisher</Link>
            </>
          }
        />
        <h6>Settings</h6>
        <hr></hr>
        <h6>Reports</h6>
        <hr></hr>
      </div>
    </>
  );
};

export default Sidebar;
