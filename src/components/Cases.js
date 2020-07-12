import React from "react";

import { ReactComponent as CasesNext } from "../assets/arrow-right.svg";
import { ReactComponent as CasesPrev } from "../assets/arrow-left.svg";
import Case from "./Case";

const Cases = ({cases, imageLoaded}) => (
  <section className='cases'>
    <div className='container-fluid'>
      <div className='cases-navigation'>
        <div className='cases-arrow prev disabled'>
          <CasesPrev />
        </div>
        <div className='cases-arrow next'>
          <CasesNext />
        </div>
      </div>
      <div className='row'>
        {cases.map(item => (
          <Case item={item} key={item.id} imageLoaded={imageLoaded} />
        ))}
      </div>
    </div>
  </section>
);

export default Cases;
