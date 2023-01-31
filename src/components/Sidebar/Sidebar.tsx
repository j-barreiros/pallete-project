import React from 'react'
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { AddEmpty, AddFull, HeartEmpty, HeartFull, NewEmpty, NewFull, PopularEmpty, PopularFull } from "../../assets/Icons";
import PageOption from "./PageOption/PageOption";
import StyledSidebar from "./StyledSidebar";

const pages = [
    {
        page: 'New',
        route: '/',
        activeIcon: <NewFull />,
        inactiveIcon: <NewEmpty />
    },
    {
        page: 'Popular',
        route: '/popular/month',
        activeIcon: <PopularFull />,
        inactiveIcon: <PopularEmpty />
    },
    {
        page: 'Collection',
        route: '/collection',
        activeIcon: <HeartFull />,
        inactiveIcon: <HeartEmpty />
    },
    {
        page: 'Add',
        route: '/add',
        activeIcon: <AddFull />,
        inactiveIcon: <AddEmpty />
    }
];

const subpages = [
    {
        page: 'Month',
        route: '/popular/month',
    },
    {
        page: 'Year',
        route: '/popular/year',
    },
    {
        page: 'All Time',
        route: '/popular/alltime',
    }
]

type SidebarProps = {
    activePage: string;
    activeSubpage: string;
    setActiveSubpage(newValue: string): void;
}


const Sidebar = () => {

    const navigator = useNavigate();

    const handlePageRoute = (route: string) => {
        switch (route) {
            case '/popular':
            case '/popular/month':
            case '/popular/year':
            case '/popular/alltime':
                return '/popular'
            default:
                return route;
        }
    }

    const currentPage = handlePageRoute(useLocation().pathname);

    return (
        <StyledSidebar>
            <section className='pages'>
                {pages.map((p, index) => {
                    return (
                        <React.Fragment key={index}>
                            <PageOption
                                key={index}
                                pageInfo={p}
                                goTo={() => navigator(p.route)}
                                isActive={currentPage === handlePageRoute(p.route)}
                            />
                            {currentPage.includes('/popular') && p.page === 'Popular' ?
                                <div className='sub-options'>
                                    {subpages.map((s, index) =>
                                        <button
                                            key={index}
                                            className={`subpage ${useLocation().pathname === s.route && 'active'}`}
                                            onClick={() => navigator(s.route)}>
                                            {s.page}
                                        </button>
                                    )}
                                </div>
                                :
                                <></>
                            }
                        </React.Fragment>
                    )
                })}
            </section>
        </StyledSidebar>
    )
}

export default Sidebar;