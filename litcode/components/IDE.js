import Link from 'next/link'
import QuestionArea from './QuestionArea'
import SolutionArea from './SolutionArea'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function IDE() {
  return (
	<div className="grid grid-cols-2 gap-4 place-content-evenly">
		<QuestionArea/>
		<SolutionArea/>
	</div>
  )
}