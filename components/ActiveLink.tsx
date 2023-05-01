import { useRouter } from 'next/router'

import Link from 'next/link'
import React, { CSSProperties } from 'react'

const style: CSSProperties = {
  color: '#0070f3',
  textDecoration: 'underline',
}

interface Props {
  text: string
  href: string
}

const ActiveLink = ({ text, href }: Props) => {

  const { asPath } = useRouter()

  return (
    <Link href={href} legacyBehavior>
      <a style={asPath === href ? style : {}}>{text}</a>
    </Link>
  )
}

export default ActiveLink