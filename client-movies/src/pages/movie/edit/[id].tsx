import React from 'react'

export default function Detail(props:any) {
    return (
        <div>
            详情页添加{props.match.params.id}
        </div>
    )
}
