import React from 'react';

const SelectionDetails = ({ selectedNodes }) => {
    const message = selectedNodes.reduce((result, current) => result + ' ' + current, '');
    return <div>{selectedNodes.length === 0 ? 'No selection' : 'Selection: ' + message}</div>;
};

export default SelectionDetails;
