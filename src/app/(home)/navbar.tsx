import Image from "next/image";
import Link from "next/link";
import { SearchInput } from "./search-input";
import { UserButton, OrganizationSwitcher } from "@clerk/nextjs";

export const Navbar = () => {
    return (
        <nav className="flex items-center justify-between h-full w-full">
            <div>
                <Link href="/" className="flex gap-3 items-center shrink-0 pr-6">
                    <Image src="/logo.svg" alt="Logo" width={36} height={36} />
                    <h3 className="text-xl">Kasump Docs</h3>
                </Link>
            </div>
            <SearchInput />
            <div className="flex gap-3 items-center pl-6">
                <OrganizationSwitcher
                    afterCreateOrganizationUrl="/"
                    afterLeaveOrganizationUrl="/"
                    afterSelectOrganizationUrl="/"
                    afterSelectPersonalUrl="/"
                />
                <UserButton />
            </div>
        </nav>
    );
};
