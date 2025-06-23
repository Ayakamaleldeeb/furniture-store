"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import LoginForm from "./login/loginForm";
import RegisterForm from "./register/RegisterForm";
import Cookies from "js-cookie";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import SearchNav from "./searchNav";
import { CartSheet } from "./cart/cart-sheet";
// import { CircleCheckIcon, CircleHelpIcon, CircleIcon } from "lucide-react"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  // navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import useGetCategories from "@/use-apis/category/useGetCategory";
// import AdminDashboard from "./admin/AdminDashboard";

const Navbar = () => {
  // const [isOpen, setIsOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  // const toggleMenu = () => {
  //   setIsOpen(!isOpen);
  // };
  const [activeLink, setActiveLink] = useState("/");
  // console.log("🚀 ~ Navbar ~ activeLink:", activeLink);
  const handleLinkClick = (path: string) => {
    setActiveLink(path);
  };
  const userName = Cookies.get("userName");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = Cookies.get("token");
    setIsAuthenticated(!!token);
  }, []);

  const handleLogout = () => {
    Cookies.remove("token");
    Cookies.remove("userName");
    setIsAuthenticated(false);
    window.location.href = "/";
  };
  const { data } = useGetCategories({
    onSuccess(data) {
      console.log(data);
    },
    refetchOnMount: false,
    // enabled:open,
    refetchOnWindowFocus: false,
  });

  return (
    <nav className="bg-white p-4 shadow-md flex flex-col items-center justify-center z-50">
      <div className="flex justify-between items-center w-full max-w-7xl">
        <div className="flex items-center space-x-4 w-2/5">
          <Link onClick={() => handleLinkClick("/")} href="/">
            <svg
              width="90"
              height="40"
              viewBox="0 0 118 61"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.79261 38.0909H3.52273V19.0852C3.52273 17.0019 4.01515 15.1695 5 13.5881C5.97538 12.0066 7.34848 10.7708 9.11932 9.88068C10.8902 9 12.9593 8.55966 15.3267 8.55966C17.7036 8.55966 19.7775 9 21.5483 9.88068C23.3191 10.7708 24.6922 12.0066 25.6676 13.5881C26.643 15.1695 27.1307 17.0019 27.1307 19.0852V38.0909H21.8608V19.5256C21.8608 18.3134 21.5956 17.2339 21.0653 16.2869C20.5256 15.34 19.768 14.5966 18.7926 14.0568C17.8172 13.5265 16.6619 13.2614 15.3267 13.2614C13.9915 13.2614 12.8362 13.5265 11.8608 14.0568C10.8759 14.5966 10.1184 15.34 9.58807 16.2869C9.05776 17.2339 8.79261 18.3134 8.79261 19.5256V38.0909Z"
                fill="black"
              />
              <ellipse
                cx="15.0192"
                cy="24.0227"
                rx="4.98927"
                ry="4.98647"
                transform="rotate(0.417774 15.0192 24.0227)"
                fill="black"
              />
              <path
                d="M55.2074 9.90909H60.4773V28.9148C60.4773 30.9981 59.9848 32.8305 59 34.4119C58.0246 35.9934 56.6515 37.2292 54.8807 38.1193C53.1098 39 51.0407 39.4403 48.6733 39.4403C46.2964 39.4403 44.2225 39 42.4517 38.1193C40.6809 37.2292 39.3078 35.9934 38.3324 34.4119C37.357 32.8305 36.8693 30.9981 36.8693 28.9148V9.90909H42.1392V28.4744C42.1392 29.6866 42.4044 30.7661 42.9347 31.7131C43.4744 32.66 44.232 33.4034 45.2074 33.9432C46.1828 34.4735 47.3381 34.7386 48.6733 34.7386C50.0085 34.7386 51.1638 34.4735 52.1392 33.9432C53.1241 33.4034 53.8816 32.66 54.4119 31.7131C54.9422 30.7661 55.2074 29.6866 55.2074 28.4744V9.90909Z"
                fill="black"
              />
              <ellipse
                cx="78.0255"
                cy="14.5227"
                rx="4.98927"
                ry="4.98647"
                transform="rotate(0.417774 78.0255 14.5227)"
                fill="black"
              />
              <path
                d="M68 9.5V38.5H71.5556V32.3162H80.4444V38.5H84V26.9C84 26.1309 83.6254 25.3932 82.9586 24.8494C82.2918 24.3055 81.3874 24 80.4444 24H71.5556V9.5H68Z"
                fill="black"
              />
              <path
                d="M96.7926 38.0909H91.5227V19.0852C91.5227 17.0019 92.0152 15.1695 93 13.5881C93.9754 12.0066 95.3485 10.7708 97.1193 9.88068C98.8902 9 100.959 8.55966 103.327 8.55966C105.704 8.55966 107.777 9 109.548 9.88068C111.319 10.7708 112.692 12.0066 113.668 13.5881C114.643 15.1695 115.131 17.0019 115.131 19.0852V38.0909H109.861V19.5256C109.861 18.3134 109.596 17.2339 109.065 16.2869C108.526 15.34 107.768 14.5966 106.793 14.0568C105.817 13.5265 104.662 13.2614 103.327 13.2614C101.991 13.2614 100.836 13.5265 99.8608 14.0568C98.8759 14.5966 98.1184 15.34 97.5881 16.2869C97.0578 17.2339 96.7926 18.3134 96.7926 19.5256V38.0909Z"
                fill="black"
              />
              <ellipse
                cx="103.019"
                cy="24.0227"
                rx="4.98927"
                ry="4.98647"
                transform="rotate(0.417774 103.019 24.0227)"
                fill="black"
              />
              <path
                d="M6.4375 59H3.96875V51H6.54688C7.32292 51 7.98698 51.1602 8.53906 51.4805C9.09115 51.7982 9.51432 52.2552 9.80859 52.8516C10.1029 53.4453 10.25 54.1562 10.25 54.9844C10.25 55.8177 10.1016 56.5352 9.80469 57.1367C9.50781 57.7357 9.07552 58.1966 8.50781 58.5195C7.9401 58.8398 7.25 59 6.4375 59ZM4.9375 58.1406H6.375C7.03646 58.1406 7.58464 58.013 8.01953 57.7578C8.45443 57.5026 8.77865 57.1393 8.99219 56.668C9.20573 56.1966 9.3125 55.6354 9.3125 54.9844C9.3125 54.3385 9.20703 53.7826 8.99609 53.3164C8.78516 52.8477 8.47005 52.4883 8.05078 52.2383C7.63151 51.9857 7.10938 51.8594 6.48438 51.8594H4.9375V58.1406ZM39.7188 59V51H44.5469V51.8594H40.6875V54.5625H44.2969V55.4219H40.6875V58.1406H44.6094V59H39.7188ZM58.918 53.5H57.9492C57.8919 53.2214 57.7917 52.9766 57.6484 52.7656C57.5078 52.5547 57.3359 52.3776 57.1328 52.2344C56.9323 52.0885 56.7096 51.9792 56.4648 51.9062C56.2201 51.8333 55.9648 51.7969 55.6992 51.7969C55.2148 51.7969 54.776 51.9193 54.3828 52.1641C53.9922 52.4089 53.681 52.7695 53.4492 53.2461C53.2201 53.7227 53.1055 54.3073 53.1055 55C53.1055 55.6927 53.2201 56.2773 53.4492 56.7539C53.681 57.2305 53.9922 57.5911 54.3828 57.8359C54.776 58.0807 55.2148 58.2031 55.6992 58.2031C55.9648 58.2031 56.2201 58.1667 56.4648 58.0937C56.7096 58.0208 56.9323 57.9128 57.1328 57.7695C57.3359 57.6237 57.5078 57.4453 57.6484 57.2344C57.7917 57.0208 57.8919 56.776 57.9492 56.5H58.918C58.8451 56.9089 58.7122 57.2747 58.5195 57.5977C58.3268 57.9206 58.0872 58.1953 57.8008 58.4219C57.5143 58.6458 57.1927 58.8164 56.8359 58.9336C56.4818 59.0508 56.1029 59.1094 55.6992 59.1094C55.0169 59.1094 54.4102 58.9427 53.8789 58.6094C53.3477 58.276 52.9297 57.8021 52.625 57.1875C52.3203 56.5729 52.168 55.8437 52.168 55C52.168 54.1562 52.3203 53.4271 52.625 52.8125C52.9297 52.1979 53.3477 51.724 53.8789 51.3906C54.4102 51.0573 55.0169 50.8906 55.6992 50.8906C56.1029 50.8906 56.4818 50.9492 56.8359 51.0664C57.1927 51.1836 57.5143 51.3555 57.8008 51.582C58.0872 51.806 58.3268 52.0794 58.5195 52.4023C58.7122 52.7227 58.8451 53.0885 58.918 53.5ZM79.6084 55C79.6084 55.8437 79.4561 56.5729 79.1514 57.1875C78.8467 57.8021 78.4287 58.276 77.8975 58.6094C77.3662 58.9427 76.7594 59.1094 76.0771 59.1094C75.3949 59.1094 74.7881 58.9427 74.2568 58.6094C73.7256 58.276 73.3076 57.8021 73.0029 57.1875C72.6982 56.5729 72.5459 55.8437 72.5459 55C72.5459 54.1562 72.6982 53.4271 73.0029 52.8125C73.3076 52.1979 73.7256 51.724 74.2568 51.3906C74.7881 51.0573 75.3949 50.8906 76.0771 50.8906C76.7594 50.8906 77.3662 51.0573 77.8975 51.3906C78.4287 51.724 78.8467 52.1979 79.1514 52.8125C79.4561 53.4271 79.6084 54.1562 79.6084 55ZM78.6709 55C78.6709 54.3073 78.555 53.7227 78.3232 53.2461C78.0941 52.7695 77.7829 52.4089 77.3896 52.1641C76.999 51.9193 76.5615 51.7969 76.0771 51.7969C75.5928 51.7969 75.154 51.9193 74.7607 52.1641C74.3701 52.4089 74.0589 52.7695 73.8271 53.2461C73.598 53.7227 73.4834 54.3073 73.4834 55C73.4834 55.6927 73.598 56.2773 73.8271 56.7539C74.0589 57.2305 74.3701 57.5911 74.7607 57.8359C75.154 58.0807 75.5928 58.2031 76.0771 58.2031C76.5615 58.2031 76.999 58.0807 77.3896 57.8359C77.7829 57.5911 78.0941 57.2305 78.3232 56.7539C78.555 56.2773 78.6709 55.6927 78.6709 55ZM109.081 59V51H111.784C112.409 51 112.922 51.1068 113.323 51.3203C113.724 51.5312 114.021 51.8216 114.214 52.1914C114.407 52.5612 114.503 52.9818 114.503 53.4531C114.503 53.9245 114.407 54.3424 114.214 54.707C114.021 55.0716 113.726 55.3581 113.327 55.5664C112.929 55.7721 112.42 55.875 111.8 55.875H109.612V55H111.769C112.196 55 112.539 54.9375 112.8 54.8125C113.063 54.6875 113.253 54.5104 113.37 54.2812C113.49 54.0495 113.55 53.7734 113.55 53.4531C113.55 53.1328 113.49 52.8529 113.37 52.6133C113.25 52.3737 113.059 52.1888 112.796 52.0586C112.533 51.9258 112.185 51.8594 111.753 51.8594H110.05V59H109.081ZM112.847 55.4062L114.815 59H113.69L111.753 55.4062H112.847Z"
                fill="black"
              />
            </svg>
          </Link>
          <div className="hidden md:block flex-1 max-w-md">
            <SearchNav />
          </div>
        </div>
        {!userName && !isAuthenticated ? (
          <div className="hidden md:flex items-center space-x-4">
            <LoginForm />
            <div className="w-[3px] h-8 bg-black"></div>
            <RegisterForm />
          </div>
        ) : (
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center space-x-2">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
              </Avatar>
              <span>{userName}</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="bg-white shadow-lg rounded-md w-[220px]"
            >
              <DropdownMenuLabel className="px-4 py-2 text-gray-700">
                My Account
              </DropdownMenuLabel>
              <DropdownMenuSeparator className="bg-gray-200" />
              <DropdownMenuItem
                onClick={() => setIsCartOpen(true)}
                className="px-4 py-2 hover:bg-gray-100"
              >
                Cart
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => window.location.href = "/admin"}
                className="px-4 py-2 hover:bg-gray-100"
              >
                Dashboard
              </DropdownMenuItem>
              <DropdownMenuItem
                disabled
                className="px-4 py-2 hover:bg-gray-100"
              >
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem
                disabled
                className="px-4 py-2 hover:bg-gray-100"
              >
                Billing
              </DropdownMenuItem>
              <DropdownMenuSeparator className="bg-gray-200" />
              <DropdownMenuItem
                onClick={handleLogout}
                className="px-4 py-2 hover:bg-gray-100"
              >
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>

    

      {/* =============================================================================================== */}

      <NavigationMenu>
        <NavigationMenuList className="flex space-x-24">
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={`text-black  ${
                activeLink === "/" ? "font-bold opacity-100" : ""
              }`}
            >
              <Link href="/" onClick={() => handleLinkClick("/")}>
                HOME
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={`text-black  ${
                activeLink === "/about" ? "font-bold opacity-100" : ""
              }`}
            >
              <Link href="/about" onClick={() => handleLinkClick("/about")}>
                ABOUT
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-black hover:text-black">
              <NavigationMenuLink
                asChild
                className={`text-black  ${
                  activeLink === "/categories" ? "font-bold opacity-100" : ""
                }`}
              >
                <Link
                  href="/categories"
                  onClick={() => handleLinkClick("/categories")}
                >
                  CATEGORIES
                </Link>
              </NavigationMenuLink>
            </NavigationMenuTrigger>
            <NavigationMenuContent className="bg-slate-50 p-4 z-[100] rounded-xl shadow-xl border">
              <ul className="grid w-[400px] gap-4 md:w-[500px] md:grid-cols-4 lg:w-[600px]">
                <li className="">
                  <Link href={`/categories`}>
                    <NavigationMenuLink
                      className={`block text-center text-base font-semibold hover:text-black text-gray-700 rounded-2xl bg-white p-4 hover:bg-gray-100 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 ring-1 ring-slate-200 ${
                        activeLink === "/categories" ? "text-black" : ""
                      }`}
                      onClick={() => handleLinkClick("/categories")}
                    >
                      <p className="text-muted-foreground line-clamp-2 text-sm leading-snug text-gray-500  transition-colors">
                        All Products
                      </p>
                    </NavigationMenuLink>
                  </Link>
                </li>
                {data?.map((category: any) => (
                  <li key={category.id} className="">
                    <Link href={`/categories/${category.id}`}>
                      <NavigationMenuLink
                        className={`block text-center text-base font-semibold hover:text-black text-gray-700 rounded-2xl bg-white p-4 hover:bg-gray-100 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 ring-1 ring-slate-200 ${
                          activeLink === "/categories" ? "text-black" : ""
                        }`}
                        onClick={() => handleLinkClick("/categories")}
                      >
                        <p className="text-muted-foreground line-clamp-2 text-sm leading-snug text-gray-500  transition-colors">
                          {category.name}
                        </p>
                      </NavigationMenuLink>
                    </Link>
                  </li>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={`text-black  ${
                activeLink === "/offers" ? "font-bold opacity-100" : ""
              }`}
            >
              <Link href={"/offers"} onClick={() => handleLinkClick("/offers")}>
                OFFERS
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={`text-black  ${
                activeLink === "/contact" ? "font-bold opacity-100" : ""
              }`}
            >
              <Link href="/contact" onClick={() => handleLinkClick("/contact")}>
                CONTACT
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      {/* ===================================================================================================== */}
      {/* Hidden Mobile Cart */}
      <CartSheet open={isCartOpen} onOpenChange={setIsCartOpen} />
    </nav>
  );
};

export default Navbar;
