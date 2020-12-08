import styled from 'styled-components/macro'
//import { Link } from 'react-router-dom'
import { ReactComponent as home } from '../images/home.svg'
import { ReactComponent as about } from '../images/about.svg'

export default function Footer() {
  return (
    <div>
      <div>
        <img src={home} alt="" />
      </div>
      <div>
        <img src={about} alt="" />
      </div>
    </div>
  )
}
