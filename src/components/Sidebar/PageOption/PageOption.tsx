// Style
import React from "react";
import StyledPageOption from "./StyledPageOption";

// Props
type PageOptionProps = {
    pageInfo: {
        page: string;
        activeIcon: React.ReactNode;
        inactiveIcon: React.ReactNode;
    }
    goTo(): void;
    isActive: boolean;
}

const PageOption = (props: PageOptionProps) => {
    const { pageInfo,isActive, goTo} = props;
    const { page, activeIcon, inactiveIcon } = pageInfo;

    const PageIcon = (active: boolean) => {
        return active ? activeIcon : inactiveIcon;
    }

    return (
        <StyledPageOption
            className={`${isActive && 'active'}`}
            onClick={goTo}
        >
            {PageIcon(isActive)}
            {page}
        </StyledPageOption>
    )
}

export default PageOption;