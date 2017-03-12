import React from 'react';
import revalidator from 'revalidator';

const TextArea = (props) => (
<div className="form-group">
    <label className="form-label">{props.title}</label>
    <textarea className="form-input" style={props.resize ? null : {resize: 'none'}} name={props.name} rows={props.rows} value={props.content}
              onChange={props.controlFunc} placeholder={props.placeholder} />
</div>
);

TextArea.propTypes = {
    title: React.PropTypes.string.isRequired,
    placeholder: React.PropTypes.string,
};

export default TextArea;