import Link from "next/link"

interface NavLinkProps  {
    href: string
    name: string
    separator?: boolean
}
const NavLink =({ href, name, separator = true }: NavLinkProps) => {
    return (
        <div className="flex flex-row space-x-3">
            <Link href={href} passHref legacyBehavior className="hover:text-primary">
                <a className="text-sm hover:text-primary">{name}</a>
            </Link>
            <div>
                {separator && ' | '}
            </div>
        </div>


    )
}

export default NavLink