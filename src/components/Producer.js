
import './Producer.css';
import b from './barbie.jpg';
import o from './oh1.jpg';
import React from 'react';
import { Typography,Button } from '@mui/material';
import  { useState } from 'react';
import SpeedIcon from '@mui/icons-material/Speed';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import HexagonTwoToneIcon from '@mui/icons-material/HexagonTwoTone';


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

     const radioOptions = {
        Option1: 'Option 1 Description: Lorem ipsum',
        Option2: 'Option 2 Description: Dolor sit amet',
        Option3: 'Option 3 Description: Consectetur adipiscing elit',
        Option4: 'Option 4 Description: Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
        Option5: 'Option 5 Description: Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',
        Option6: 'Option 6 Description: Duis aute irure dolor in reprehenderit in voluptate velit',
        Option7: 'Option 7 Description: Excepteur sint occaecat cupidatat non proident, sunt in culpa',
        Option8: 'Option 8 Description: Qui officia deserunt mollit anim id est laborum',
        Option9: 'Option 9 Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        Option10: 'Option 10 Description: Duis aute irure dolor in reprehenderit in voluptate velit',
        Option11: 'Option 11 Description: Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
        Option12: 'Option 12 Description: Excepteur sint occaecat cupidatat non proident, sunt in culpa',
        // Add more options as needed
      };
   
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
                <Typography variant='body1' align='center' className='sider-tile' > <HexagonTwoToneIcon></HexagonTwoToneIcon>  FILMY PRO</Typography>
                <hr />
                <div className='but1'>
                    <SpeedIcon></SpeedIcon>
                    <Typography variant='body1' align='center' >Productions</Typography>                </div>
                <div className='but2'>
                    <HelpOutlineIcon></HelpOutlineIcon>
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
                                        {Object.keys(radioOptions).map((option) => (
                                            <label key={option}>
                                            <input
                                                type="radio"
                                                value={option}
                                                checked={inputValue2 === option}
                                                onChange={handleRadioChange}
                                            />
                                            {option}
                                            </label>
                                        ))}
                                        </div>
                                        
                                    </div>
                                    )}
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