import StyledPostTime from "./StyledPostTime";

type PostTimeProps = {
    palleteDate: string;
}

const PostTime = ({palleteDate}:PostTimeProps) => {
    
    const handleTime = (date:string) => {
        const currentDate = new Date();
        const convertedPalleteDate = new Date(date);
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

    return(
        <StyledPostTime>{handleTime(palleteDate)}</StyledPostTime>
    )
}

export default PostTime;