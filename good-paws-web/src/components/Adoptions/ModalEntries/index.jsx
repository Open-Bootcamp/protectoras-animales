import { ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader } from '@chakra-ui/react'

import { ButtonCancel, ButtonSend, FormEntry, GridEntry, GridEntryItem1, GridEntryItem2, GridEntryItem3, InputContainer, InputEntry, LabelEntry, SubTitleModal, TextAreaEntry, TitleModal } from './styles'

import { useForm } from '../../../hooks/useForm';


export const ModalEntries = ({ onClose, enterMedicalEntries }) => {



    const [values, handleInputChange, reset] = useForm({
        title: '',
        clinic: '',
        observations: '',
        dateEntry: new Date(),
    });

    const { title, clinic, observations } = values;


    return (
        <ModalContent
            boxSizing=''
            p='1.5rem'
            borderRadius='0.75rem'
        >
            <ModalHeader p='0'>
                <TitleModal>Nueva entrada médica</TitleModal>
                <SubTitleModal>Esta información ayuda a la protectora a llevar un seguimiento de los animales.</SubTitleModal>
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody p='0'>
                <FormEntry>
                    <GridEntry>
                        <GridEntryItem1>
                            <InputContainer>
                                <LabelEntry>Título</LabelEntry>
                                <InputEntry
                                    name='title'
                                    placeholder="Ej: Castración"
                                    type="text"
                                    onChange={handleInputChange}
                                    value={title}
                                />
                            </InputContainer>
                            <InputContainer>
                                <LabelEntry>Clínica veterinaria</LabelEntry>
                                <InputEntry
                                    name='clinic'
                                    type="text"
                                    placeholder="Ej: Clínica Gómez"
                                    onChange={handleInputChange}
                                    value={clinic}
                                />
                            </InputContainer>
                        </GridEntryItem1>
                        <GridEntryItem2>
                            <LabelEntry>Observaciones</LabelEntry>
                            <TextAreaEntry
                                name='observations'
                                placeholder="¿Algo que la protectora deba saber?"
                                onChange={handleInputChange}
                                value={observations}
                            />
                        </GridEntryItem2>
                        <GridEntryItem3>
                            <ButtonCancel onClick={(e) => {
                                e.preventDefault();
                                onClose();
                            }}
                            >
                                Cancelar</ButtonCancel>
                            <ButtonSend onClick={(e) => {
                                e.preventDefault();
                                enterMedicalEntries(values);
                                reset();
                                onClose();
                                }}
                            >
                                Enviar</ButtonSend>
                        </GridEntryItem3>

                    </GridEntry>

                </FormEntry>

            </ModalBody>

            <ModalFooter p='0'>

            </ModalFooter>
        </ModalContent>
    )
}
