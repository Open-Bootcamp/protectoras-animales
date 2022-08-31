import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box
} from '@chakra-ui/react'
import { Tag } from '../../Tag'
import { DateEntry, NameClinic } from './styles'

export const MedicalEntry = () => {
    return (
        <Accordion 
            border='1px'
            borderColor="#EAECF0"
            borderRadius="8px" 
            defaultIndex={[0]} 
            allowMultiple
        >
            <AccordionItem>
                <h2>
                    <AccordionButton>
                        <Box 
                            display="flex" 
                            flex={1} justifyContent="space-between" alignItems="center"
                        >
                            <NameClinic>Castración - Clínica Duff</NameClinic>
                            <Box 
                                display="flex" 
                                gap="8px" alignItems="center" marginRight="13px"
                            >
                                <DateEntry>15/08/2022</DateEntry>
                                <Tag 
                                    text="Realizada" color="success" 
                                />
                            </Box>
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                </h2>
                <AccordionPanel 
                    borderTop="1px"
                    borderColor="#EAECF0"
                    pb={4}
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat.
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
    )
}
