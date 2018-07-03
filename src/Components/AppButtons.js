import React from 'react';

const AppButton = () => {
    return (
        <div className="centered-container">
            <div className="inline-element">
                <button type="button">Init diagram</button>
            </div>
            <div className="inline-element">
                <button type="button">Update node color</button>
            </div>
            <div className="inline-element">
                <button type="button">Add node with selected node(s) as parent(s)</button>
            </div>
        </div>
    );
};

export default AppButton;
