import { Fragment, useRef, useState } from 'react';

import HeaderCartButton from './HeaderCartButton';
import classes from './Header.module.css';
import Dropdown from 'react-bootstrap/Dropdown';


const Header = (props) => {
  const inputRef = useRef()
  const [selectedOption, setSelectedOption] = useState('All');

  const handleSelect = (eventKey) => {
    console.log(eventKey)
    props.changeCategory(eventKey)
    setSelectedOption(eventKey);
  };

  const searchProducts = () => {
    props.onSearch(inputRef.current.value)
  }

  return (
    <Fragment>
      <div className={classes['main-image']}>
        <header className={classes.header}>
          <h1>Eflyer</h1>
          <Dropdown className={classes.dropdown} onSelect={handleSelect}>
            <Dropdown.Toggle className={classes.toggle} variant="success" id="dropdown-basic">
              {selectedOption}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item eventKey="fashion">fashion</Dropdown.Item>
              <Dropdown.Item eventKey="electronic">electronic</Dropdown.Item>
              <Dropdown.Item eventKey="jwelery">jwelery</Dropdown.Item>
              <Dropdown.Item eventKey="All">All</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <div className={classes.main}>
            <div className="input-group">
              <input ref={inputRef} onChange={searchProducts} type="text" className="form-control" placeholder="Search this blog" />
              <div className="input-group-append">
                  <button className="btn btn-secondary" type="button" style={{"backgroundColor": "#f26522", "borderColor": "#f26522" }} onClick={searchProducts}>
                    <i className="fa fa-search"></i>
                  </button>
              </div>
            </div>
          </div>
          <HeaderCartButton onClick={props.onShowCart} />
        </header>
      </div>
    </Fragment>
  );
};

export default Header;
