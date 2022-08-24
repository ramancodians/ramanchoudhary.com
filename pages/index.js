import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components'
import styles from '../styles/Home.module.css'
import { useEffect, useState } from 'react';

const Wrap = styled.div`
  padding: 20px;
  max-width: 900px;
  margin: 0px auto;
`

const HelloWrap = styled.div`
  font-size: 30px;
  font-weight: bold;

  h6 {
    margin: 0px;
    padding: 0px;
    
  }
`

export default function Home() {
  const [ step, setStep ] = useState(0)
  useEffect(() => {
    setTimeout(() => {
      setStep(1)
    }, 2500)
  }, [])
  console.log({ step });
  return (
    <Wrap>
      <HelloWrap>
       <h1>Hello World.</h1>
       <h3>🚧My site is under contruction🚧</h3>
       <p>
        I&apos;m building one of the kind, super awesome, performant, reactive, semantic, responsive, mobile-friendly, SEO optimised, scalable, modular, with CI/CD pipelines, and low build times and fast deployments for a few lines of code.
       </p>
       <p>Peace!</p>
       <h6>Raman Choudhary</h6>
      </HelloWrap>
      
    </Wrap>
  )
}
