import React from 'react';
import PropTypes from 'prop-types';
import AceEditorWrapper from './AceEditorWrapper';


const propTypes = {
  defaultHeight: PropTypes.number.isRequired,
  minHeight: PropTypes.number.isRequired,
};

class ResizableAceEditor extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      editorHeight: props.defaultHeight,
      dragging: false,
    };
  }
  render() {
    return (
      <div ref="resizableAceEditor" className="ResizableAceEditor">
        <AceEditorWrapper
          {...this.props}
          height={this.state.editorHeight + 'px'}
        />
      </div>
    );
  }
}
ResizableAceEditor.propTypes = propTypes;

export default ResizableAceEditor;
