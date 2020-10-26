import React from 'react'

interface IconProps {
    src: string;
    alt?: string;
}

function Icon({ src, alt = "" }: IconProps) {
    return <img src={src} alt={alt} role="presentation"/>
}

export default Icon
