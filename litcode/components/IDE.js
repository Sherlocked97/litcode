import Link from 'next/link'
import QuestionArea from './questionArea'
import SolutionArea from './SolutionArea'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function IDE() {
  return (
	<div className="columns-2">
		<QuestionArea/>
		<SolutionArea/>
	</div>
  )
}