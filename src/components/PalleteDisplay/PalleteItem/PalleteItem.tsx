// Style
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { HeartEmpty, HeartFull } from "../../../assets/Icons";
import { PalleteContext, PalleteType } from "../../../context/PalletesContext";
import ColorBox from "../../ColorBox/ColorBox";
import LikeButton from "../../LikeButton/LikeButton";
import PostTime from "../../PostTime/PostTime";
import ColorStripe from "./ColorStripe/ColorStripe";
import StyledPalleteItem from "./StyledPalleteItem";

type PalleteItemProps = {
    pallete: PalleteType;
}

const PalleteItem = ({ pallete }: PalleteItemProps) => {
    const { color1, color2, color3, color4, id, date, likes } = pallete;
    // Context
    const palleteContext = useContext(PalleteContext);
    
    const navigator = useNavigate();

    const handleTime = (palleteDate: string) => {
        const currentDate = new Date();
        const convertedPalleteDate = new Date(palleteDate);
        const timeBetween = Math.floor(currentDate.getTime() - convertedPalleteDate.getTime());

        // Years
        if (timeBetween >= 31536000000) {
            const years = Math.floor(timeBetween / 31536000000);
            return `${years} ${years === 1 ? 'year' : 'years'}`
        }

        // Months
        if (timeBetween >= 2592000000) {
            const months = Math.floor(timeBetween / 2592000000);
            return `${months} ${months === 1 ? 'month' : 'months'}`
        }

        // Week
        if (timeBetween >= 604800000) {
            const weeks = Math.floor(timeBetween / 604800000);
            return `${weeks} ${weeks === 1 ? 'week' : 'weeks'}`
        }

        // Days
        if (timeBetween >= 86400000) {
            const days = Math.floor(timeBetween / 86400000);
            return `${days} ${days === 1 ? 'day' : 'days'}`;
        }

        // Hours
        if (timeBetween >= 3600000) {
            const hours = Math.floor(timeBetween / 3600000);
            return `${hours} ${hours === 1 ? 'hour' : 'hours'}`;
        }

        // Minutes
        if (timeBetween >= 60000) {
            const minutes = Math.floor(timeBetween / 60000);
            return `${minutes} ${minutes === 1 ? 'minute' : 'minutes'}`
        }

        return '1 minute'
    }

    return (
        <StyledPalleteItem
            isLiked={palleteContext.isInCollection(id)}
        >
            <ColorBox pallete={pallete} mode='small'/>
            <section className='pallete-info'>
                <LikeButton mode='number' pallete={pallete}/>
                <PostTime palleteDate={pallete.date}/>
            </section>
        </StyledPalleteItem>
    )
}

export default PalleteItem;