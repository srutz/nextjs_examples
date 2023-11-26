"use client";

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
    Switcher,
} from "@carbon/react";
import Link from "next/link";

/*
 adapted to typescript and next.js from

https://github.com/carbon-design-system/carbon-tutorial/blob/v11-react-step-2/src/components/TutorialHeader/TutorialHeader.js

*/

export function Navbar() {
    return (
        <HeaderContainer
            render={({ isSideNavExpanded, onClickSideNavExpand }) => (
                <Header aria-label="Header">
                    <SkipToContent />
                    <HeaderMenuButton
                        aria-label="Expand menu"
                        onClick={onClickSideNavExpand}
                        isActive={isSideNavExpanded}
                    />
                    <HeaderName as={Link} href="/" prefix="IBM">
                        Restaurant
                    </HeaderName>
                    <HeaderNavigation aria-label="Navigation">
                        <HeaderMenuItem as={Link} href="/menu">
                            Menü
                        </HeaderMenuItem>
                    </HeaderNavigation>
                    <SideNav
          aria-label="Side navigation"
          expanded={isSideNavExpanded}
          isPersistent={false}>
          <SideNavItems>
            <HeaderSideNavItems>
              <HeaderMenuItem as={Link} href="/repos">
                Repositories
              </HeaderMenuItem>
            </HeaderSideNavItems>
          </SideNavItems>
        </SideNav>
        <HeaderGlobalBar>
          <HeaderGlobalAction aria-label="App Switcher" tooltipAlignment="end">
            <Switcher size={20} >aa</Switcher>
          </HeaderGlobalAction>
        </HeaderGlobalBar>                </Header>
            )}
        ></HeaderContainer>
    );
}
