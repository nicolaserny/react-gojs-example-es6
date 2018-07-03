import React from 'react';
import './DiagramButtons.css';

const DiagramButton = ({ onInit, onUpdateColor, onAddNode }) => {
    return (
        <div className="centered-container">
            <div className="inline-element">
                <button type="button" onClick={onInit}>
                    Init diagram
                </button>
            </div>
            <div className="inline-element">
                <button type="button" onClick={onUpdateColor}>
                    Update node color
                </button>
            </div>
            <div className="inline-element" onClick={onAddNode}>
                <button type="button">Add node with selected node(s) as parent(s)</button>
            </div>
        </div>
    );
};

export default DiagramButton;
