export function SelfTogglePanel({panelClasses, initial, children}){
	const [selfToggleState, selfToggle] = useState(initial)
	function toggle(){
		selfToggle(selfToggleState === 'closed' ? 'open': 'closed')
	}
	return(
		<li className={`${panelClasses} ${selfToggleState}`} onClick={toggle}>
			{children}
		</li>
	)
}