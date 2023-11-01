import React, { useState } from 'react';
import { Card, Col, Row, Button } from 'react-bootstrap';
import Image from './Image';

//Import all images from Images folder
import img1 from './Images/image-1.webp'
import img2 from './Images/image-2.webp'
import img3 from './Images/image-3.webp'
import img4 from './Images/image-4.webp'
import img5 from './Images/image-5.webp'
import img6 from './Images/image-6.webp'
import img7 from './Images/image-7.webp'
import img8 from './Images/image-8.webp'
import img9 from './Images/image-9.webp'
import img10 from './Images/image-10.jpeg'
import img11 from './Images/image-11.jpeg'

const Gallery = () => {
  //Include all images in images
  const [images, setImages] = useState([
    img1, img2, img3,
    img4, img5, img6,
    img7, img8, img9,
    img10, img11,
  ])

  //To include the selected images
  const [selectedImages, setSelectedImages] = useState([])

  //Set the first image as the default featured image
  const [featuredIndex, setFeaturedIndex] = useState(0)

  //To set images during drag and drop
  const moveImage = (fromIndex, toIndex) => {
    const newImages = [...images];
    const [movedImage] = newImages.splice(fromIndex, 1);
    newImages.splice(toIndex, 0, movedImage);
    setImages(newImages);
  }

  //To handle checkbox changes
  const handleCheckboxChange = (index) => {
    setSelectedImages((prevSelectedImages) => {
      if (prevSelectedImages.includes(index)) {
        return prevSelectedImages.filter((i) => i !== index);
      } else {
        return [...prevSelectedImages, index];
      }
    })
  }

  //To delete selected images
  const deleteSelectedImages = () => {
    const newImages = images.filter((image, index) => { return !selectedImages.includes(index) });
    setImages(newImages);
    setSelectedImages([]);
  }

  //Add image card
  const addImageCard = (
    <Col xs={6} sm={4} md={3} lg={2} className="mb-4">
      <Card className="image-card add-image-card">
        <Card.Body>
          <p data-content='Add Image'></p>
        </Card.Body>
      </Card>
    </Col>
  )

  return (
    <div className="gallery-container">
      <Row>
        {/*If the length of selectedImages is greater than 0 
      then the selected info and the delete button will be shown
      otherwise the heading will be shown*/
          selectedImages.length > 0 ?
            (<div className="selection-info">
              {selectedImages.length === 1 ?
                <p>{selectedImages.length} image selected</p> :
                <p>{selectedImages.length} images selected</p>}
              <div className="delete-button-container">
                <Button variant="danger" onClick={deleteSelectedImages}>
                  Delete Selected
                </Button>
              </div>
            </div>) :
            <h3 className='heading'>Awesome Gallery 2023</h3>}
      </Row>
      <Row>
        {//Here map function is used
          images.map((image, index) => (
            <Image
              key={index}
              index={index}
              image={image}
              moveImage={moveImage}
              handleCheckboxChange={handleCheckboxChange}
              isFeatured={index === featuredIndex}
              isSelected={selectedImages.includes(index)}
            />
          ))}
        {//It will be shown at the last position of all images
          addImageCard}
      </Row>
    </div>
  )
}

export default Gallery
