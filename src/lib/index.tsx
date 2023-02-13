import React from 'react'
import solid from './variation/solid'
import duo from './variation/duo'
import dark from './variation/dark'
import light from './variation/light'

interface VariationIconProps {
	variant: string
	name: string
}

const VariationIcon = ({ variant, name }: VariationIconProps) => {
	if (variant === 'solid') {
		return <>{solid[name]}</>
	} else if (variant === 'duo') {
		return <>{duo[name]}</>
	} else if (variant === 'dark') {
		return <>{dark[name]}</>
	} else if (variant === 'light') {
		return <>{light[name]}</>
	} else {
		return <span>Variante não encontrada</span>
	}
}

interface BvIconProps {
	variant?: string
	name: string
	title?: string
	label?: string
	hidden?: boolean
	size?: number
	className?: string
}

const BvIcon = ({ variant, name, title, label, hidden, size, className }: BvIconProps) => {
	return (
		<svg
			width={size ? size * 16 : 32}
			height={size ? size * 16 : 32}
			viewBox={`0 0 32 32`}
			aria-hidden={hidden ? 'true' : 'false'}
			aria-label={label}
			data-icon={`bv-${name}`}
			className={`bv-icon bv-${name} ${className ? className : ''}`}
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			>
			{title ? <title>{title}</title> : ''}
			<VariationIcon variant={variant ? variant : 'solid'} name={name} />
		</svg>
	)
}

export default BvIcon
