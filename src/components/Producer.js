
import './Producer.css';
import b from './barbie.jpg';
import o from './oh1.jpg';
import React from 'react';
import { Typography,Button } from '@mui/material';
import  { useState } from 'react';


function Producer(){
    const [image, setImage] = useState(null);

    const handleImageChange = (e) => {
      const file = e.target.files[0];
  
      if (file) {
        // Check if the selected file is an image
        if (file.type.match(/^image\//)) {
          const reader = new FileReader();
  
          reader.onload = (e) => {
            // Set the image data URL as the source for rendering
            setImage(e.target.result);
          };
  
          // Read the selected file as a data URL
          reader.readAsDataURL(file);
        } else {
          alert('Please select a valid image file.');
        }
      } else {
        alert('Please select an image to upload.');
      }
    };
     // Define state variables to store the input values
     const [inputValue1, setInputValue1] = useState('');
     const [inputValue2, setInputValue2] = useState('');
     const [showRadioButtons, setShowRadioButtons] = useState(false);
   
     // Function to handle changes in the first input
     const handleInputChange1 = (e) => {
       setInputValue1(e.target.value);
     };
   
     // Function to handle focus on the second input
     const handleInput2Focus = () => {
       setShowRadioButtons(true);
     };
   
     // Function to handle changes in the radio button
     const handleRadioChange = (e) => {
       setInputValue2(e.target.value);
     };
    return(
        <div className='producer'>
            <div className='sider'>
                <Typography variant='body1' align='center' className='sider-tile' >FILMY PRO</Typography>
                <hr />
                <div className='but1'>
                    <Typography variant='body1' align='center' >Production</Typography>                </div>
                <div className='but2'>
                    <Typography variant='body1' align='center' >About Us</Typography>                </div>
            </div>
            <div className="pro">
                <div className='add-production'>
                    <Typography variant='body1' align='center'>Add Productions</Typography>
                </div>
                <div className='Tile'>
                    <div className='tile'>
                        <input type="file" accept="image/*" onChange={handleImageChange}/>
                        {image && (
                        <div>
                        <img
                            src={image}
                            alt="Uploaded"
                            style={{ maxWidth: '100%', height: '100%' }}
                        />
                        </div>)}
                    </div>
                    <div className='production-details'>
                        <div className='prduction-name'>
                            <Typography variant='body1' align='center'>Production Name</Typography>
                            <input
                                type="text"
                                placeholder=""
                                value={inputValue1}
                                onChange={handleInputChange1}
                            />
                        </div>
                        <div className='production-type'>
                            <Typography variant='body1' align='center'>Type of Production</Typography>
                            <input
                                type="text"
                                placeholder=""
                                onFocus={handleInput2Focus}
                                value={inputValue2}
                                onChange={(e) => setInputValue2(e.target.value)}
                            />
                            {showRadioButtons && (
                                <div className="radio-popup">
                                    
                                    <div className="radio-button-row">
                                    <label>
                                        <input
                                        type="radio"
                                        value="Feature Film"
                                        checked={inputValue2 === 'Option 1'}
                                        onChange={handleRadioChange}
                                        />
                                        Feature Film
                                    </label>
                                    <label>
                                        <input
                                        type="radio"
                                        value="Short Film"
                                        checked={inputValue2 === 'Option 2'}
                                        onChange={handleRadioChange}
                                        />
                                        Short Film
                                    </label>
                                    <label>
                                        <input
                                        type="radio"
                                        value="Comerscial"
                                        checked={inputValue2 === 'Option 3'}
                                        onChange={handleRadioChange}
                                        />
                                        Comerscial
                                    </label>
                                    <label>
                                        <input
                                        type="radio"
                                        value="TV Shows"
                                        checked={inputValue2 === 'Option 4'}
                                        onChange={handleRadioChange}
                                        />
                                        TV Shows
                                    </label>
                                    <label>
                                        <input
                                        type="radio"
                                        value="Documentary"
                                        checked={inputValue2 === 'Option 5'}
                                        onChange={handleRadioChange}
                                        />
                                        Documentary
                                    </label>
                                    <label>
                                        <input
                                        type="radio"
                                        value="Corporate Film"
                                        checked={inputValue2 === 'Option 6'}
                                        onChange={handleRadioChange}
                                        />
                                        Corporate Film
                                    </label>
                                    <label>
                                        <input
                                        type="radio"
                                        value="Web Series"
                                        checked={inputValue2 === 'Option 7'}
                                        onChange={handleRadioChange}
                                        />
                                        Web Series
                                    </label>
                                    <label>
                                        <input
                                        type="radio"
                                        value="Episode"
                                        checked={inputValue2 === 'Option 8'}
                                        onChange={handleRadioChange}
                                        />
                                        Episode
                                    </label>
                                    <label>
                                        <input
                                        type="radio"
                                        value="News cast"
                                        checked={inputValue2 === 'Option 9'}
                                        onChange={handleRadioChange}
                                        />
                                        News cast
                                    </label>
                                    <label>
                                        <input
                                        type="radio"
                                        value="Stage Production"
                                        checked={inputValue2 === 'Option 10'}
                                        onChange={handleRadioChange}
                                        />
                                        Stage Production
                                    </label>
                                    <label>
                                        <input
                                        type="radio"
                                        value="Mini Series"
                                        checked={inputValue2 === 'Option 11'}
                                        onChange={handleRadioChange}
                                        />
                                        Mini Series
                                    </label>
                                    <label>
                                        <input
                                        type="radio"
                                        value="clip"
                                        checked={inputValue2 === 'Option 12'}
                                        onChange={handleRadioChange}
                                        />
                                        clip
                                    </label>
                                    </div>
                                </div>)}
                                
                        </div>
                        
                    </div>
                    <div className='but'>
                        <Button variant='outlined' color='primary'>Submit</Button>
                    </div>
                </div>
            </div>    
            
        </div>
    )
}


export default Producer;