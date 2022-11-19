import Link from 'next/link'
import QuestionArea from './QuestionArea'
import SolutionArea from './SolutionArea'
import Matrix from './Matrix'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function IDE() {
  return (
	<div className="flex flex-wrap space-x-28">
		<Matrix/>
		<QuestionArea/>
		<SolutionArea/>
		<Matrix/>
	</div>
  )
}