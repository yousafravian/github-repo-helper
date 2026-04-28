import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "../components/DropDownMenu";
import {Avatar, AvatarFallback, AvatarImage} from "../components/Avatar";
import {User} from "../services/UserContext";
import {GitHubHelper} from "../services/GitHubHelper";

export default function ProfileDropDown({user}: { user: User }) {
  const logout = () => {
    console.log('logout');
    GitHubHelper.logout(true);
  }
  return <DropdownMenu>
    <DropdownMenuTrigger className='outline-none'>
      <Avatar className="border-2 border-black dark:border-white">
        <AvatarImage src={user?.data?.avatar_url} alt="@shadcn"/>
        <AvatarFallback>YR</AvatarFallback>
      </Avatar></DropdownMenuTrigger>
    <DropdownMenuContent className="mt-5">
      <DropdownMenuLabel>My Account</DropdownMenuLabel>
      <DropdownMenuSeparator/>
      <DropdownMenuItem>Github Profile</DropdownMenuItem>
      <DropdownMenuItem onClick={logout}>Logout</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
}