import {useContext} from "react";
import {UserContext} from "../services/UserContext";
import LayoutContainer from "../shared/Layout";
import HeaderIcon from '../../assets/github-mark-white.svg'
import ThemedSwitch from "../components/ThemeSwitch";
import {HeaderNavigationMenu} from "./HeaderNavItems";
import {Avatar, AvatarFallback, AvatarImage} from "../components/Avatar";

function Header() {
    const {user} = useContext(UserContext);
    return (
        <div className='sticky top-0 z-[100] backdrop-blur-sm shadow-sm shadow-amber-50/10'>
            <LayoutContainer>
                <nav className='py-2'>
                    <div className="relative flex items-center justify-between">
                        <div className="flex flex-1 items-center gap-10">
                            <div className="flex flex-shrink-0 items-center">
                                <img className="h-12 drop-shadow-2xl invert dark:invert-[0]"
                                     src={HeaderIcon}
                                     alt="GitHub logo"/>
                            </div>
                            <HeaderNavigationMenu/>
                        </div>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                            <ThemedSwitch/>
                            <div className="relative ml-3">
                                <Avatar>
                                    <AvatarImage src={user?.data?.avatar_url} alt="@shadcn" />
                                    <AvatarFallback>YR</AvatarFallback>
                                </Avatar>
                            </div>
                        </div>
                    </div>
                </nav>
            </LayoutContainer>
        </div>
    );
}

export default Header;
