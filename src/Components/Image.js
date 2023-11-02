import React from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { Card, Col } from 'react-bootstrap';

const Image = (props) => {
    const { index, image, moveImage, handleCheckboxChange, isFeatured, isSelected } = props;

    //Used useDrag hook to drag image
    const [, drag] = useDrag({
        type: 'IMAGE',
        item: { index }
    });

    //Used useDrop hook to drop image
    const [, drop] = useDrop({
        accept: 'IMAGE',
        hover: (draggedItem) => {
            if (draggedItem.index !== index) {
                moveImage(draggedItem.index, index);
                draggedItem.index = index;
            }
        }
    });

    return (
        <Col xs={6} sm={4} md={3} lg={2} className="mb-4" ref={(node) => drag(drop(node))}>
            <Card className={`image-card ${isFeatured ? 'featured-image' : ''} ${isSelected ? 'selected' : ''}`}>
                <input type="checkbox" checked={isSelected} className="checkbox-top-right" onChange={() => handleCheckboxChange(index)} />
                <Card.Img variant="top" src={image} alt={`Image ${index}`} />
            </Card>
        </Col>
    )
}

export default Image
