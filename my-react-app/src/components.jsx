import React from "react";

// function Components2() {
//    return (
//        <></>
//    )
//}

export const Components = ({name, children}) => {

    return (
        <>
        <div>Components function {name}</div>
        {children}
        </>
    )
}


export class ComponentsClass extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log('this', this.props)
        return (
            <div>Components class</div>
        )
    }
}
