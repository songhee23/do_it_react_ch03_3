import type {FC, DetailedHTMLProps, HTMLAttributes, PropsWithChildren} from 'react'
import type {WidthHeight} from './WidthHeight'

export type ReactDivProps = DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>, 
    HTMLDivElement
>

export type DivProps = ReactDivProps & 
PropsWithChildren<WidthHeight> & {
    src?: string
}

// prettier-ignore
export const Div: FC<DivProps> = ({
    width, height, style: _style, src, className: _className, ...props
}) => {
    const style = {..._style, width, height, backgroundImage: src && `url(${src})`}
    const className = ['box-border', src && 'bg-gray-300', _className].join(' ')
    // bg-gray-300 is a default background color
    // 네트워크 장애나 아바타 제공 서버가 다운되어 이미지를 얻을 수 없을 떄 화면에 아무것도 없는것보다 바탕색이 보이도록 하여 장애 남 알림역할
    return <div {...props} className={className} style={style} />
}