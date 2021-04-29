import React from 'react'

export default function add(props:any) {
    console.log(props)
    return (
        <div>
                添加{props.match.params.id}
        </div>
    )
}
