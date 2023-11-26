"use client";

import { Switcher, Notification, UserAvatar } from "@carbon/react/icons";

import {
    Header,
    HeaderContainer,
    HeaderGlobalAction,
    HeaderGlobalBar,
    HeaderMenuButton,
    HeaderMenuItem,
    HeaderName,
    HeaderNavigation,
    HeaderSideNavItems,
    SideNav,
    SideNavItems,
    SkipToContent,
    Theme
} from "@carbon/react";

import Link from "next/link";
import { useRouter } from "next/navigation";
import CartIcon from "./CartIcon";
import { ShowContainer } from "./ShowContainer";
import { Spacer } from "./Spacer"

/*
 adapted to typescript and next.js from

https://github.com/carbon-design-system/carbon-tutorial/blob/v11-react-step-2/src/components/TutorialHeader/TutorialHeader.js

*/

export function Navbar() {
    const router = useRouter();

    return (
    <Theme theme="g100">
        <HeaderContainer
            render={({ isSideNavExpanded, onClickSideNavExpand }) => (
                <Header aria-label="Menü öffnen">
                    <SkipToContent />
                    <HeaderMenuButton
                        aria-label="Open menu"
                        onClick={onClickSideNavExpand}
                        isActive={isSideNavExpanded}
                    />
                    <HeaderName as={Link} href="/" prefix="A NICE PLACE">
                        A nice place
                    </HeaderName>
                    <HeaderNavigation aria-label="Startseite">
                        <HeaderMenuItem
                            onClick={() => {
                                if (isSideNavExpanded) {
                                    onClickSideNavExpand()
                                }
                                router.push("/")
                            }}
                        >
                            Startseite
                        </HeaderMenuItem>
                        <HeaderMenuItem
                            onClick={() => {
                                if (isSideNavExpanded) {
                                    onClickSideNavExpand()
                                }
                                router.push("/menu")
                            }}
                        >
                            Menü
                        </HeaderMenuItem>
                        <HeaderMenuItem
                            onClick={() => {
                                if (isSideNavExpanded) {
                                    onClickSideNavExpand()
                                }
                                router.push("/imprint")
                            }}
                        >
                            Impressum
                        </HeaderMenuItem>
                    </HeaderNavigation>
                    <SideNav
                        aria-label="Side navigation"
                        expanded={isSideNavExpanded}
                        isPersistent={false}
                    >
                        <SideNavItems>
                            <HeaderSideNavItems>
                                <HeaderMenuItem
                                    onClick={() => {
                                        if (isSideNavExpanded) {
                                            onClickSideNavExpand()
                                        }
                                        router.push("/menu")
                                    }}
                                >
                                    Menü
                                </HeaderMenuItem>
                                <HeaderMenuItem
                                    onClick={() => {
                                        if (isSideNavExpanded) {
                                            onClickSideNavExpand()
                                        }
                                        router.push("/imprint")
                                    }}
                                >
                                    Impressum
                                </HeaderMenuItem>
                            </HeaderSideNavItems>
                        </SideNavItems>
                    </SideNav>
                    <HeaderGlobalBar>
                        <HeaderGlobalAction aria-label="Warenkorb" onClick={() => {
                                if (isSideNavExpanded) {
                                    onClickSideNavExpand()
                                }
                                router.push("/cart")
                            }}>
                            <CartIcon></CartIcon>
                        </HeaderGlobalAction>
                        <Spacer width={16}/>

                        <ShowContainer shown={false}>
                            <HeaderGlobalAction
                                aria-label="Notifications"
                                tooltipAlignment="center"
                            >
                                <Notification size={20} />
                            </HeaderGlobalAction>
                            <HeaderGlobalAction
                                aria-label="User Avatar"
                                tooltipAlignment="center"
                            >
                                <UserAvatar size={20} />
                            </HeaderGlobalAction>
                            <HeaderGlobalAction
                                aria-label="App Switcher"
                                tooltipAlignment="end"
                            >
                                <Switcher size={20} />
                            </HeaderGlobalAction>
                        </ShowContainer>
                    </HeaderGlobalBar>
                </Header>
            )}
        /></Theme>
    );
}
