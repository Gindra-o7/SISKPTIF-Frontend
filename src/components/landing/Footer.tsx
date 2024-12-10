import React from "react";
import {
  Footer,
  FooterBrand,
  FooterLink,
  FooterLinkGroup,
  FooterCopyright,
} from "flowbite-react";
import { Twitter, Instagram, Facebook } from "lucide-react";
import Logo from "../../assets/logoimage.png";

const SITRACKFooter: React.FC = () => {
  return (
    <Footer container className="bg-primary-dark rounded-none">
      <div className="w-full text-neutral-light">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <FooterBrand
              href="#"
              src={Logo}
              alt="UIN Suska Logo"
              name="SITRACK"
            />
            <p className="text-sm text-neutral-lighter mt-4">
              Sistem Informasi Seminar Kerja Praktik Teknik Informatika
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="Links" className="text-neutral-light" />
              <FooterLinkGroup col>
                <FooterLink
                  href="#"
                  className="text-neutral-lighter hover:text-white"
                >
                  Beranda
                </FooterLink>
                <FooterLink
                  href="#"
                  className="text-neutral-lighter hover:text-white"
                >
                  Tentang
                </FooterLink>
                <FooterLink
                  href="#"
                  className="text-neutral-lighter hover:text-white"
                >
                  Kontak
                </FooterLink>
              </FooterLinkGroup>
            </div>
            <div>
              <Footer.Title title="Kontak" className="text-neutral-light" />
              <div className="text-sm text-neutral-lighter space-y-2">
                <p>Email: ppid@uin-suska.ac.id</p>
                <p>Phone: 0761-562223</p>
                <p>
                  Kampus Panam Jl. H.R. Soebrantas No. 155 Km 15, Simpang Baru,
                  Tampan, Pekanbaru
                </p>
              </div>
            </div>
            <div>
              <Footer.Title
                title="Social Media"
                className="text-neutral-light"
              />
              <div className="flex">
                <FooterLink
                  href="#"
                  className="text-neutral-lighter hover:text-white"
                >
                  <Facebook className="h-5 w-5" />
                </FooterLink>
                <FooterLink
                  href="#"
                  className="text-neutral-lighter hover:text-white"
                >
                  <Instagram className="h-5 w-5" />
                </FooterLink>
                <FooterLink
                  href="#"
                  className="text-neutral-lighter hover:text-white"
                >
                  <Twitter className="h-5 w-5" />
                </FooterLink>
              </div>
            </div>
          </div>
        </div>
        <Footer.Divider className="border-neutral-light" />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <FooterCopyright
            href="#"
            by="SITRACK™"
            year={2024}
            className="text-neutral-lighter"
          />
        </div>
      </div>
    </Footer>
  );
};

export default SITRACKFooter;
