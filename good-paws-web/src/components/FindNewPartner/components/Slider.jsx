import { useState } from 'react';
import { Box, Slider, SliderMark, SliderTrack, SliderThumb, SliderFilledTrack } from '@chakra-ui/react';

function SliderInp() {
    const [sliderValue, setSliderValue] = useState(0);
  
    return (
        <Box p={2} mb={3}>
            <Slider defaultValue={0} onChange={ val => setSliderValue(val) }>
                <SliderMark fontSize={13} fontWeight={'600'} value={sliderValue} textAlign='center' color={'black'} mt='3' ml='-4' w='12'>{sliderValue}KM</SliderMark>
                <SliderTrack>
                    <SliderFilledTrack background={'primarylight'}/>
                </SliderTrack>
                <SliderThumb outlineColor={'primarylight'} />
            </Slider>
        </Box>
    )
}

export default SliderInp;