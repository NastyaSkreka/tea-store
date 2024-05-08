"use client"
import { StaticImageData } from "next/image";
import { BannerWrapper, BannerText, BannerContainer, BannerImage } from "./styles";

interface IBanner {
    title: string;
    image: StaticImageData;
    position: 'textFirst' | 'imageFirst';
}

export default function Banner({ title, image, position }: IBanner) {
    return (
       <BannerWrapper>
        <BannerContainer position={position}>
            <BannerText>
                {title}
            </BannerText>
            <BannerImage src={image} alt="banner" />
        </BannerContainer>
       </BannerWrapper>
    );
  }