import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	align-items: center;
	gap: 68px;
	padding: 68px 48px;

	@media (max-width: 600px) {
		flex-direction: column;
		padding: 68px 12px;
		gap: 28px;
	} ;
`;

export const ContainerMap = styled.div`
	width: 100%;
	max-width: 39.875rem;
	min-width: 21.938rem;
	height: 25rem;
`;

export const WrapperContent = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 54.4px;
	@media (max-width: 600px) {
		gap: 16px;
	} ;
`;

export const WrapperText = styled.div``;

export const Button = styled.button`
	background-color: #144353;
	border-radius: 8px;
	border: none;
	color: white;
	cursor: pointer;
	padding: 10px 18px;
`;
