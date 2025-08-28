'use client';
import React from 'react'
import { useState } from 'react';
import { Navbar, NavbarLogo, NavBody, NavItems, MobileNav, MobileNavHeader, MobileNavMenu, MobileNavToggle, NavbarButton } from "@/components/ui/resizable-navbar";

const CustomNavbar = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const navItems = [
    { name: "projects", link: "#projects" },
    { name: "archive", link: "" },
    { name: "about", link: "" },
  ];

  return (
    <>
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <NavbarButton variant="primary">contact</NavbarButton>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={menuOpen}
              onClick={() => setMenuOpen(!menuOpen)}
            />
          </MobileNavHeader>
          <MobileNavMenu
            isOpen={menuOpen}
            onClose={() => setMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setMenuOpen(false)}
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <NavbarButton
              onClick={() => setMenuOpen(false)}
              variant="dark"
              className="w-full"
            >
              contact
            </NavbarButton>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </>
  );
};

export default CustomNavbar
