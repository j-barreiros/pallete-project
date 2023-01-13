// Style
import { useContext, useState } from "react";
import { HeartEmpty, HeartFull } from "../../../assets/Icons";
import { PalleteContext, PalleteType } from "../../../context/PalletesContext";
import ColorStripe from "./ColorStripe/ColorStripe";
import StyledPalleteItem from "./StyledPalleteItem";

type PalleteItemProps = {
    pallete: PalleteType;
}

const PalleteItem = ({pallete} : PalleteItemProps) => {
    const {color1, color2, color3, color4, id, date, likes} = pallete;
    // Context
    const palleteContext = useContext(PalleteContext);
    //Change this
    
    const handleTime = (palleteDate:Date) => {
        const currentDate = new Date();
        const timeBetween = Math.floor(currentDate.getTime() - palleteDate.getTime());
        
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

        return 'sei la'
    }

    const handleLikeBtn = () => {
        if(palleteContext.isInCollection(id)) {
            console.log('remove')
            palleteContext.removeFromCollection(id);
        } else {
            console.log('add')
            palleteContext.addToCollection(pallete);
        }
    }

    return (
        <StyledPalleteItem isLiked={palleteContext.isInCollection(id)}>
            <section className='color-box'>
                <ColorStripe colorValue={color1} />
                <ColorStripe colorValue={color2} />
                <ColorStripe colorValue={color3} />
                <ColorStripe colorValue={color4} />
            </section>
            <section className='pallete-info'>
                <button className='like-btn' onClick={handleLikeBtn}>
                    {palleteContext.isInCollection(id) ? <HeartFull /> : <HeartEmpty />}
                    {likes}
                </button>

                <p className='pallete-date'>{handleTime(date)}</p>
            </section>
        </StyledPalleteItem>
    )
}

export default PalleteItem;