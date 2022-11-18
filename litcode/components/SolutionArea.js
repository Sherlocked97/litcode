export default function SolutionArea() {
	return (
		<div class="code-area">
			{/* <textarea rows="20" class="input" id="code" autofocus></textarea> */}
			{/* <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label> */}
			<div>
				<textarea id="message" rows="25" class="block p-2.5 w-96 text-sm text-gray-900 bg-green-50 rounded-lg border border-green-300 focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:border-green-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="Your Solution..."></textarea>
			</div>
		</div>
	)
}