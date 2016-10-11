import React from 'react';

const data = [
  {
    header: 'Section 1',
    body: <div>Content of <strong>Section 1</strong></div>
  }, {
    header: 'Section 2',
    body: <div>Content of <strong>Section 2</strong></div>
  }, {
    header: 'Section 3',
    body: <div>Content of <strong>Section 3</strong></div>
  }, {
    header: 'Section 4',
    body: <div>Content of <strong>Section 4</strong></div>
  }
];

class Accordion extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      selected: null,
      previousSelected: null
    };

    this.selectSection = this.selectSection.bind(this);
  }

  selectSection(event) {
    const el = event.currentTarget;
    let selected = el.dataset.ident;
    const previousSelected = this.state.selected;

    if (this.props.collapsible) {
      // Reset selected when collapsing a selected section
      if (selected === previousSelected) {
        selected = null;
      }
      this.setState({selected, previousSelected});
    } else {
      if (selected !== previousSelected) {
        this.setState({
          selected,
          previousSelected
        });
      }
    }

  }

  render() {
    const prefix = 'row-';
    let ident, selected;
    const sections = this.props.sections.map((section, index) => {
      ident = prefix + index;
      selected = ident === this.state.selected && ident !== this.state.previousSelected;
      return <AccordionSection
               ident={ident}
               key={index}
               selected={selected}
               onClick={this.selectSection}
               section={section} />;
    })
    return (
      <ul className="accordion">
        {sections}
      </ul>
    );
  }
}

Accordion.defaultProps = {
  collapsible: false
};

const AccordionSection = ({selected, ident, section, onClick}) => {
  const liClass = selected ? 'selected' : '';
  const faClass = selected ? 'fa fa-angle-down' : 'fa fa-angle-right';
  return (
    <li className={liClass}>
      <div className="accordion-header" onClick={onClick} data-ident={ident}>
        <span className="accordion-arrow">
          <i className={faClass} aria-hidden="true"></i>
        </span>
        <span>{section.header}</span>
      </div>
      <div className="accordion-body">
        <div>{section.body}</div>
      </div>
    </li>
  );
};
