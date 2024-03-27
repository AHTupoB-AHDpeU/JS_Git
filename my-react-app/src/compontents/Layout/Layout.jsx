import { Outlet, useNavigate } from 'react-router-dom'
import { Layout } from 'antd'
import classes from './Layout.module.scss'
import { IoGrid, IoPerson, IoReader, IoSettings } from 'react-icons/io5';
import { GrTask } from 'react-icons/gr';
import { GiHamburgerMenu } from 'react-icons/gi';
import RightSidebar from '../RightSidebar/RightSidebar';
import NavigationSidebar from '../NavigationSidebar/NavigationSidebar';

export const PageLayout = ({ children }) => {

  const { Header, Content, Footer, Sider } = Layout;

  return (

    <Layout>
      {/* <Content> */}
      <Layout className={classes.layout_container} style={{ height: '100vh' }} >
        {/* <Sider theme='light' style={{ background: 'var(--primary-color)' }}> */}
        <NavigationSidebar />
        {/* </Sider> */}
        <Content className={classes.container} style={{ background: '#fff', borderRadius: '20px 0px 0px 20px', overflowY: 'auto', margin: '5px 0px' }}>
          <Outlet />
        </Content>

        <RightSidebar />
      </Layout>

    </Layout>
  )
}

/*
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
// import { Header } from '../Header/Header'
// import { Footer } from '../Footer/Footer'
import { useCustomHook } from '../../hooks/myCustomHook'

import './Layout.css'
import { Outlet, useNavigate } from 'react-router-dom'

import { Layout, Menu } from 'antd'


import classes from './Layout.module.css'

export const PageLayout = ({ children }) => {


  const navigate = useNavigate()
  const [number, setNumber] = useState(0)
  const { Header, Content, Footer, Sider } = Layout;
  // custom hook
  // const value = useCustomHook('change value to custom hook')


  // console.log("🚀 ~ Layout ~ value:", value)

  // useEffect(() => {
  //   alert('Component mount')
  // }, [number])


  const increment = () => {
    // let _number = number
    setNumber(number + 1)
  }


  // useMemo 
  // useCallback 

  // const memoMethod = useMemo(() => {
  //   return 'any value'
  // })

  // const callbackMethod = useCallback(() => {
  //   return 'any value'
  // })

  const textareaRef = useRef()

  const menuItems = [
    { id: 1, label: 'Главная', key: 1, link: '/' },
    { id: 2, label: 'Инфо', key: 2, link: '/info' },
    { id: 3, label: 'Пользователь', key: 3, link: '/user' },
    { id: 4, label: 'Вход/Регистрация', key: 4, link: '/auth' },
  ]

  const handleNavigate = (key) => {
    let link = menuItems.find((item) => item.key == key)

    if (link) {
      navigate(link.link)
    }
  }

  return (

    <Layout>
      <Header style={{ display: 'flex', alignItems: 'center' }}>

        <Menu
          items={menuItems}
          theme='dark'
          mode='horizontal'
          defaultSelectedKeys={['1']}
          onClick={({ key }) => handleNavigate(key)}
        />
      </Header>
      <Content>

        <Layout>
          <Sider theme='light'><Menu items={menuItems}/></Sider>
          <Content style={{ height: '100vh', overflowY: 'auto', margin: '0 auto'}}>
            <Outlet />
          </Content>
        </Layout>
      </Content>
      <Footer></Footer>
    </Layout>
  )
}
*/

/*import React, { useEffect, useState, useCallback, useMemo, userRef, useRef } from "react";
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

    //useEffect(() => {
    //    alert('Component mount')
    //}, [number]) 
 
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

    */

/*
export default class Layout extends Component {
    constructor(props) {
        super(props)
        this.state 
    }
}
*/