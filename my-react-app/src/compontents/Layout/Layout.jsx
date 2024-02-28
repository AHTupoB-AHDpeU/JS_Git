import React, { useEffect, useState, useCallback, useMemo, userRef, useRef } from "react";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import {useCustomHook} from '../../hooks/myCustomHook';
import './Layout.css'
import classes from './Layout.module.css'


export const Layout = ({children}) => {
    const [number, setNumber] = useState(0)

    // hook
    const value = useCustomHook('change value to custom hook')
    console.log("# ~ Layout ~ value:", value)

    /*useEffect(() => {
        alert('Component mount')
    }, [number]) */
 
    const increment = () => {
        //let _number = number
        setNumber(number + 1)
    }

    const textareaRef = useRef()

    return (
        <div className={classes.layout_container}>
          <Header />
          <div className={classes.child_container}>
            {children}
          </div>
          <Footer />
        </div>
      )
    }

/*
export default class Layout extends Component {
    constructor(props) {
        super(props)
        this.state 
    }
}
*/