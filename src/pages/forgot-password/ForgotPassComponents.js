import styled from 'styled-components';

export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 700px;
    overflow: hidden;

    @media screen and (max-width: 786px) {
        height: 1300px;
    }
`

export const ImageBg = styled.img`
    width: 100%;
    height: 1200px;
    -o-object-fit: cover;
    object-fit: cover;

    @media screen and (max-width: 786px) {
        height: 2000px;
    }
`
