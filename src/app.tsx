import {useState} from 'preact/hooks';
import preactLogo from './assets/preact.svg';
import parcelLogo from './assets/parcel.svg';
import './app.css';

export function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<div>
				<a href='https://parceljs.org' target='_blank'>
					<img src={parcelLogo} class='logo' alt='Parcel logo' />
				</a>
				<a href='https://preactjs.com' target='_blank'>
					<img src={preactLogo} class='logo preact' alt='Preact logo' />
				</a>
			</div>
			<h1>Pacel + Preact</h1>
			<div class='card'>
				<button onClick={() => {
					setCount(count => count + 1);
				}}>
          count is {count}
				</button>
				<p>
          Edit <code>src/app.tsx</code> and save to test HMR
				</p>
			</div>
			<p class='read-the-docs'>
        Click on the Parcel and Preact logos to learn more
			</p>
		</>
	);
}
