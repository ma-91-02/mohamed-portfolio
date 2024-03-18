import Link from "next/link";

interface ItemNavProps {
  href: string;
  title: string;
  key: number
}

export default function ItemNav({ href, title, key }: ItemNavProps) {
  return (
    <div key={key} className="hover:bg-red-900 px-5 py-3 w-full text-center">
      <Link href={href} >
        {title}
      </Link>
    </div>
  )
}