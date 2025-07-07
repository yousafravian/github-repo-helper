import {useContext} from "react";
import {UserContext} from "../../services/UserContext";
import LayoutContainer from "../../shared/Layout";
import HeaderIcon from '../../../assets/github-mark-white.svg'
import ThemedSwitch from "../../components/ThemeSwitcher";
import {HeaderNavigationMenu} from "./HeaderNavItems";
import ProfileDropDown from "../../shared/ProfileDropDown";

function Header() {
    const {user} = useContext(UserContext);
    return (
        <div className='sticky top-0 z-[100] glass-card border-b border-white/5'>
            <LayoutContainer>
                <nav className='py-4'>
                    <div className="relative flex items-center justify-between">
                        <div className="flex flex-1 items-center gap-12">
                            <div className="flex flex-shrink-0 items-center gap-3 group">
                                <div className="relative">
                                    <img 
                                        className="h-10 w-10 drop-shadow-2xl invert dark:invert-0 transition-transform duration-300 group-hover:scale-110" 
                                        src={HeaderIcon}
                                        alt="GitHub logo"
                                    />
                                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                                </div>
                                <div className="flex flex-col">
                                    <h1 className="text-xl font-bold gradient-text">GitHub Helper</h1>
                                    <p className="text-xs text-muted-foreground">Repository Management</p>
                                </div>
                            </div>
                            <HeaderNavigationMenu/>
                        </div>
                        <div className="flex items-center gap-4">
                            <ThemedSwitch/>
                            <div className="relative">
                                <ProfileDropDown user={user}/>
                            </div>
                        </div>
                    </div>
                </nav>
            </LayoutContainer>
        </div>
    );
}

export default Header;
