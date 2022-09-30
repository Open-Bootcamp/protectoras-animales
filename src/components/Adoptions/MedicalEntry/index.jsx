import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box
} from '@chakra-ui/react';
import { Tag } from '../../Tag';
import { DateEntry, InfoEntry } from './styles';

export const MedicalEntry = ({ entry }) => {

    const { title, clinic, observations, dateEntry } = entry;
    const options = { year: 'numeric', month: 'numeric', day: 'numeric' };

    return (
        <Accordion
            border='1px'
            borderColor="#EAECF0"
            borderRadius="8px"
            allowMultiple
        >
            <AccordionItem>
                <h2>
                    <AccordionButton>
                        <Box
                            display={{"2xl": "flex", sm: "block"}}
                            flex={1} 
                            justifyContent="space-between" 
                            alignItems="center"
                        >
                            <InfoEntry>{title} - {clinic}</InfoEntry>
                            <Box
                                display="flex"
                                gap="8px" 
                                alignItems="center"
                                justifyContent="space-between" 
                                marginRight="13px"
                            >
                                <DateEntry>{dateEntry.toLocaleDateString("es-ES", options)}</DateEntry>
                                <Box>
                                    <Tag
                                        text="Realizada" color="success"
                                    />
                                    <AccordionIcon />

                                </Box>
                            </Box>
                        </Box>
                        
                    </AccordionButton>
                </h2>
                <AccordionPanel
                    borderTop="1px"
                    borderColor="#EAECF0"
                    pb={4}
                >
                    {observations}
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
    )
}
