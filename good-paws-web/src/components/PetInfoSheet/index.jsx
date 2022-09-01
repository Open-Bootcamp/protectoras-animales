import { getData } from "../../utils/getData";
import { Container, InfoLi, Title } from "./styles"

export const PetInfoSheet = ({ data, sizeName }) => {

    const { name, sexId, typeId, centerId } = data;

    const { name: nameType } = getData('type', typeId);
    const { location } = getData('center', centerId);
    const { name: nameSex } = getData('sexes', sexId);

    return (
        <Container>
            <Title size={sizeName}>{`Sobre ${name}`}</Title>
            <ul>
                <InfoLi>
                    <img src="/bxs-cat.svg" alt="" />
                    <p><b> Especie:</b> {nameType}</p>
                </InfoLi>
                <InfoLi>
                    <img src="/bxs-percentage.svg" alt="" />
                    <p><b> Tamaño:</b> Grande</p>
                </InfoLi>
                <InfoLi>
                    <img src="/bxs-bone.svg" alt="" />
                    <p><b> Sexo:</b> {nameSex}</p>
                </InfoLi>
                <InfoLi>
                    <img src="/bxs-message.svg" alt="" />
                    <p><b> Edad:</b> 1 años</p>
                </InfoLi>
                <InfoLi>
                    <img src="/bxs-pin.svg" alt="" />
                    <p><b> Localización:</b> {location}</p>
                </InfoLi>
                <InfoLi>
                    <img src="/bxs-train.svg" alt="" />
                    <p><b>Puede viajar</b></p>
                </InfoLi>
            </ul>
        </Container>
    )
}



